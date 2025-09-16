import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";          // ensure Node runtime
export const dynamic = "force-dynamic";   // avoid caching on Vercel

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

    await resend.emails.send({
      from: `Contact Form <${process.env.CONTACT_FROM}>`,
      to: [process.env.CONTACT_TO],
      subject: `New inquiry from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      replyTo: email, // Resend supports reply_to
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ ok: false, error: err?.message ?? "Unknown error" }, { status: 500 });
  }
}
