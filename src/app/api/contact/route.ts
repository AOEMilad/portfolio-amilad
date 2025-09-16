import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";        // ensure Node runtime
export const dynamic = "force-dynamic"; // avoid caching

type ContactBody = { name: string; email: string; message: string };

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = (await req.json()) as Partial<ContactBody>;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }
    if (!process.env.CONTACT_FROM || !process.env.CONTACT_TO) {
      return NextResponse.json({ ok: false, error: "Server email not configured" }, { status: 500 });
    }

    const { error } = await resend.emails.send({
      from: `Contact Form <${process.env.CONTACT_FROM}>`,
      to: [process.env.CONTACT_TO],
      subject: `New inquiry from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      replyTo: email,
    });

    if (error) {
      // Make it throw to hit the catch block below
      throw new Error(error.message);
    }

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("contact route error:", err);
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
