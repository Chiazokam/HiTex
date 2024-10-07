import { Resend } from "resend";
import Invite from "@/app/emails/Invite";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
    try {
      const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['delivered@resend.dev'],
        subject: 'Hello world',
        react:  Invite({ 
            docTitle: 'Final Year Project',
            username: 'Dummy',
            userImage: 'https://bit.ly/kent-c-dodds',
            invitedByUsername: 'Mirror',
            invitedByEmail: 'dylan@mirror.com',
            inviteRole: 'review',
            teamImage: '',
            inviteLink: '',
            inviteFromIp: '',
            inviteFromLocation: '',
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
