import { FC, ReactNode } from "react";
import { AppShell } from "@mantine/core";
import { Header, Footer } from "@/components";
import { useStyles } from "./styles";

interface DefaultLayoutProps {
  children: ReactNode;
}

export const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  const { classes } = useStyles();

  return (
    <AppShell
      className={classes.main}
      padding={0}
      header={<Header />}
      footer={<Footer />}
    >
      {children}
    </AppShell>
  );
};
