import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";        // ensure Node runtime
export const dynamic = "force-dynamic"; // avoid caching

type ContactBody = {
  name: string;
  email: string;
  message: string
  company?: string
};

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message, company } = (await req.json()) as Partial<ContactBody>;

    // 🐝 Honeypot check (must be before other validation)
    if (company && company.trim().length > 0) {
      await new Promise((r) => setTimeout(r, 300));
      return NextResponse.json({ ok: true });
    }
    
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM!,
      to: [process.env.CONTACT_TO!],
      subject: `New inquiry from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      replyTo: email,
    });

    if (error) throw new Error(error.message);
    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
