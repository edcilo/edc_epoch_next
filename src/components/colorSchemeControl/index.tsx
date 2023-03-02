import { ActionIcon, useMantineColorScheme, Tooltip } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";
import { FC } from "react";
import { useOs } from "@mantine/hooks";
import { useStyles } from "./styles";

export const ColorSchemeControl: FC = () => {
  const { classes } = useStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const cmd = useOs() === "macos" ? "⌘" : "Ctrl";

  return (
    <Tooltip label={`${cmd} + J`}>
      <ActionIcon
        className={classes.icon}
        variant="filled"
        onClick={() => toggleColorScheme()}
        title="Toggle color scheme"
      >
        {dark ? <IconSun /> : <IconMoonStars />}
      </ActionIcon>
    </Tooltip>
  );
};
