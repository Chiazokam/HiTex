import {
    Body,
    Button,
    Container,
    Column,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Text,
    Tailwind,
  } from "@react-email/components";
  import * as React from "react";
  import logo from '../../app/public/images/logo-light.png'
  
  interface InviteUserEmailProps {
    docTitle: string
    ownerUsername?: string;
    ownerEmail?: string;
    guestEmails?: string;
    inviteLink?: string;
  }
  
  export const InviteUserEmail = ({
    docTitle,
    ownerUsername,
    guestEmails,
    inviteLink,
    ownerEmail
  }: InviteUserEmailProps) => {
    const previewText = `Invitation to ${docTitle}`;
  
    return (
      <Html>
        <Head />
        <Preview>{previewText}</Preview>
        <Tailwind>
          <Body className="bg-white my-auto mx-auto font-sans px-2">
            <Container className="flex border border-solid border-gray-100 rounded my-10 mx-auto p-5 max-w-[465px]">

            <Img
              src='https://res.cloudinary.com/zokky/image/upload/v1728415175/Your_paragraph_text.gif'
              width="42"
              height="42"
              alt="hitexAI"
            />

              <Text className="text-zinc-800 text-sm leading-6">
                <strong>{ownerUsername}</strong> (
                <Link
                  href={`mailto:${guestEmails}`}
                  className="text-blue-600 no-underline"
                >
                  {ownerEmail}
                </Link>
                ) has invited you to <strong>{docTitle}</strong>.
              </Text>
              <Section className="w-full text-center my-6">
                <Button
                  className="w-full bg-zinc-800 rounded text-white text-sm font-semibold no-underline text-center py-3"
                  href={inviteLink}
                >
                  Accept Invitation
                </Button>
              </Section>
             
              <Hr className="border border-solid border-gray-100 my-6 mx-0 w-full" />
              <Text className="text-zinc-500 text-xs leading-6">
                This message is intended for {guestEmails}. If you are not the owner of this email, please kindly ignore the request
              </Text>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    );
  };

  InviteUserEmail.PreviewProps = {
    docTitle: 'Final Year Project',
    ownerUsername: 'Mirror',
    ownerEmail: 'dylan@mirror.com',
    guestEmails: 'matt@invited.com',
    guestRole: 'review',
    inviteLink: '',
  } as InviteUserEmailProps;
  
  export default InviteUserEmail;
  