import * as React from "react";
import {
  Html,
  Body,
  Container,
  Heading,
  Text,
  Section,
  Hr,
} from "@react-email/components";

export default function ContactEmail(props: {
  name: string;
  email: string;
  message: string;
}) {
  const { name, email, message } = props;

  return (
    <Html lang="en">
      <Body className="bg-gray-100 font-sans p-6">
        <Container className="bg-white max-w-xl mx-auto rounded-2xl shadow-lg p-8">
          {/* Logo */}
          <Section className="text-center mb-6">
            <Text className="text-2xl font-bold text-[#ff4655]">Gyanpatra.dev</Text>
          </Section>

          <Hr className="border-gray-200 my-4" />

          {/* Header */}
          <Heading className="text-xl font-semibold text-gray-900 mb-4">
            📩 New Contact Message
          </Heading>

          {/* Details */}
          <Text className="text-sm text-gray-700 mb-4">
            <strong>From:</strong> {name} &lt;{email}&gt;
          </Text>

          {/* Message */}
          <Section className="bg-gray-50 rounded-lg p-4 mb-6">
            <Text className="text-base leading-relaxed text-gray-800">
              {message}
            </Text>
          </Section>

          <Hr className="border-gray-200 my-4" />

          {/* Footer */}
          <Text className="text-xs text-gray-500 text-center">
            This email was sent via your portfolio contact form.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
