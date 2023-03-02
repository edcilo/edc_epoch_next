import { FC, ReactNode } from "react";
import { AppShell } from "@mantine/core";
import { Header, Footer } from "@/components";

interface DefaultLayoutProps {
  children: ReactNode;
}

export const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <AppShell header={<Header />} footer={<Footer />}>
      {children}
    </AppShell>
  );
};
