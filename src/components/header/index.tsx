import {
  Header as HeaderMantine,
  Container,
  Flex,
  useMantineColorScheme,
} from "@mantine/core";
import { useStyles } from "./styles";
import { FC } from "react";
import Image from "next/image";
import { ColorSchemeControl } from "@/components";
import Link from "next/link";

export const Header: FC = () => {
  const { classes } = useStyles();
  const { colorScheme } = useMantineColorScheme();

  const linkUrl = "https://edcilo.com";
  const logoSrc =
    colorScheme === "dark"
      ? "https://storage.edcilo.com/edcilo-logo-clear.svg"
      : "https://storage.edcilo.com/edcilo-logo-dark.svg";

  return (
    <HeaderMantine
      height={60}
      p="xs"
      withBorder={false}
      className={classes.header}
    >
      <Container size={400}>
        <Flex align="center" justify="space-between">
          <Link href={linkUrl}>
            <Image src={logoSrc} alt="edcilo" width={100} height={32} />
          </Link>

          <span>
            <ColorSchemeControl />
          </span>
        </Flex>
      </Container>
    </HeaderMantine>
  );
};
