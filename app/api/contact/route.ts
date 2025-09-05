
import { Resend } from "resend";
import { z } from "zod";
import ContactEmail from "@/Components/emails/ContactEmail"; 
export const runtime = "nodejs"; 

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email required"),
  message: z.string().min(1, "Message is too short").max(2000), 
  company: z.string().optional().default(""),
});

const resend = new Resend(process.env.RESEND_API_KEY!);

export async  function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success || parsed.data.company) {
      return Response.json({ ok: false, error: "Invalid form" }, { status: 400 });
    }

    const { name, email, message } = parsed.data;
    const from = process.env.RESEND_FROM!;
    const to = process.env.CONTACT_TO || process.env.RESEND_FROM!;

    const { error } = await resend.emails.send({
      from,               
      to,                  
      replyTo: email,      
      subject: `New message from ${name}`,    
      
      react: ContactEmail({ name, email, message }), 
    });

    if (error) return Response.json({ ok: false, error: "Send failed" }, { status: 500 });
    return Response.json({ ok: true }, { status: 200 });
  } catch (err) {

    return Response.json({ ok: false, error: "Unexpected error",err }, { status: 500 });
  }
}
