import { ActionIcon, useMantineColorScheme, Tooltip } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";
import { FC } from "react";
import { useOs } from "@mantine/hooks";
import { useStyles } from "./styles";
import { i18n } from "@/helpers";
import { useRouter } from "next/router";

export const ColorSchemeControl: FC = () => {
  const { classes } = useStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const router = useRouter();
  const dark = colorScheme === "dark";
  const cmd = useOs() === "macos" ? "⌘" : "Ctrl";

  return (
    <Tooltip label={`${cmd} + J`}>
      <ActionIcon
        className={classes.icon}
        variant="filled"
        onClick={() => toggleColorScheme()}
        title={i18n("colorSchemeControl.toggle", router.locale || "en")}
        aria-label={i18n("colorSchemeControl.toggle", router.locale || "en")}
      >
        {dark ? <IconSun /> : <IconMoonStars />}
      </ActionIcon>
    </Tooltip>
  );
};
