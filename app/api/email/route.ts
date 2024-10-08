import { Resend } from "resend";
import Invite from "@/app/emails/Invite";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { docTitle, ownerUsername, ownerEmail, guestEmails, invitedByEmail, inviteLink } = await request.json()
    try {
      const { data, error } = await resend.emails.send({
        // from: 'Acme <onboarding@resend.dev>',
        from: invitedByEmail,
        to: ['delivered@resend.dev', ...guestEmails], // delivered@resend.dev is used for testing. Will be removed when going live
        subject: `Invitation to ${docTitle}`,
        react: Invite({ 
            docTitle,
            ownerUsername,
            ownerEmail,
            guestEmails,
            inviteLink
            }),
      });
  
      if (error) {
        return Response.json({ error }, { status: 500 });
      }
  
      return Response.json(data);
    } catch (error) {
      return Response.json({ error }, { status: 500 });
    }
  }
