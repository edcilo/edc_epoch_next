import { FC } from "react";
import { Center, Container, Footer as FooterMantine } from "@mantine/core";
import Link from "next/link";
import { useStyles } from "./style";

export const Footer: FC = () => {
  const { classes } = useStyles();

  return (
    <FooterMantine className={classes.footer} height={60} withBorder={false}>
      <Container size={400}>
        <Center h={60}>
          <Link className={classes.link} href="https://edcilo.com">
            edcilo.com
          </Link>
        </Center>
      </Container>
    </FooterMantine>
  );
};
