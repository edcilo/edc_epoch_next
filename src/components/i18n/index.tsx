import { useRouter } from "next/router";
import { FC } from "react";
import { i18n } from "@/helpers";

interface I18nProps {
  t: string;
  capitalize?: boolean;
}

export const I18n: FC<I18nProps> = ({ t, capitalize = false }) => {
  const router = useRouter();

  const text = i18n(t, router.locale || "en", capitalize);

  return <>{text}</>;
};
