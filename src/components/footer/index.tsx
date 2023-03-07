import { FC } from "react";
import { Container, Flex, Footer as FooterMantine } from "@mantine/core";
import Link from "next/link";
import { useStyles } from "./style";

export const Footer: FC = () => {
  const { classes } = useStyles();

  return (
    <FooterMantine className={classes.footer} height={60} withBorder={false}>
      <Container size={400}>
        <Flex h={60} py="md" justify="space-between">
          <Link className={classes.link} href="https://edcilo.com">
            edcilo.com
          </Link>
          <Link className={classes.link} href="/about">
            About
          </Link>
        </Flex>
      </Container>
    </FooterMantine>
  );
};
