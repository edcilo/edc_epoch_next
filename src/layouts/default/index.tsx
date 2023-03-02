import { FC, ReactNode } from "react";
import { AppShell } from "@mantine/core";
import { Header } from "@/components";

interface DefaultLayoutProps {
  children: ReactNode;
}

export const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return <AppShell header={<Header />}>{children}</AppShell>;
};
