import { FC } from "react";
import { Container, Footer as FooterMantine, Flex } from "@mantine/core";
import Link from "next/link";

export const Footer: FC = () => {
  return (
    <FooterMantine height={60} withBorder={false}>
      <Container size={400}>
        <Flex justify="center" align="center">
          <Link href="https://edcilo.com">edcilo.com</Link>
        </Flex>
      </Container>
    </FooterMantine>
  );
};
