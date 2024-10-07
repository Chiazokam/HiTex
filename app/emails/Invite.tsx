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
  
  interface InviteUserEmailProps {
    docTitle: string
    username?: string;
    userImage?: string;
    invitedByUsername?: string;
    inviteeEmail?: string;
    inviteRole?: string;
    teamImage?: string;
    inviteLink?: string;
    inviteFromIp?: string;
    inviteFromLocation?: string;
  }
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";
  
  export const InviteUserEmail = ({
    docTitle,
    username,
    userImage,
    invitedByUsername,
    inviteeEmail,
    inviteRole = 'view',
    teamImage,
    inviteLink,
    inviteFromIp,
    inviteFromLocation,
  }: InviteUserEmailProps) => {
    const previewText = `Join ${invitedByUsername} on Vercel`;
  
    return (
      <Html>
        <Head />
        <Preview>{previewText}</Preview>
        <Tailwind>
          <Body className="bg-white my-auto mx-auto font-sans px-2">
            <Container className="flex border border-solid border-gray-100 rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
              {/* <Section className="mt-[32px]">
                <Img
                  src={`${baseUrl}/static/vercel-logo.png`}
                  width="40"
                  height="37"
                  alt="Vercel"
                  className="my-0 mx-auto"
                />
              </Section> */}
              <Heading className="text-black text-lg font-normal text-center p-0 my-[30px] mx-0">
                Invitation to {inviteRole} <strong>{docTitle}</strong>
              </Heading>

              <Text className="text-black text-[14px] leading-[24px]">
                Hello {username},
              </Text>
              <Text className="text-black text-[14px] leading-[24px]">
                <strong>{invitedByUsername}</strong> (
                <Link
                  href={`mailto:${inviteeEmail}`}
                  className="text-blue-600 no-underline"
                >
                  {inviteeEmail}
                </Link>
                ) has invited you to <strong>{inviteRole}</strong> a documemt.
              </Text>
              <Section className="text-center my-6">
                <Button
                  className="w-full bg-[#000000] rounded text-white text-sm font-semibold no-underline text-center px-5 py-3"
                  href={inviteLink}
                >
                  Accept Invitation
                </Button>
              </Section>
              {/* <Text className="text-black text-sm leading-6">
                or copy and paste this URL into your browser:{" "}
                <Link href={inviteLink} className="text-blue-600 no-underline">
                  {inviteLink}
                </Link>
              </Text> */}
              <Hr className="border border-solid border-[#eaeaea] my-6 mx-0 w-full" />
              <Text className="text-[#666666] text-xs leading-6">
                This message is intended for {inviteeEmail}. If you are not the owner of this email, please kindly ignore the request
              </Text>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    );
  };


  InviteUserEmail.PreviewProps = {
    docTitle: 'Final Year Project',
    username: 'Dummy',
    userImage: 'https://bit.ly/kent-c-dodds',
    invitedByUsername: 'Mirror',
    inviteeEmail: 'dylan@mirror.com',
    inviteRole: 'review',
    teamImage: '',
    inviteLink: '',
    inviteFromIp: '',
    inviteFromLocation: '',
  } as InviteUserEmailProps;
  
  export default InviteUserEmail;
  