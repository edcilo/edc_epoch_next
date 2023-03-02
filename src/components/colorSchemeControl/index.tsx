import { ActionIcon, useMantineColorScheme, Tooltip } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";
import { FC } from "react";
import { useOs } from "@mantine/hooks";

export const ColorSchemeControl: FC = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const cmd = useOs() === "macos" ? "⌘" : "Ctrl";

  return (
    <Tooltip label={`${cmd} + J`}>
      <ActionIcon
        variant="light"
        radius="xs"
        color={dark ? "yellow" : "indigo"}
        onClick={() => toggleColorScheme()}
        title="Toggle color scheme"
      >
        {dark ? <IconSun /> : <IconMoonStars />}
      </ActionIcon>
    </Tooltip>
  );
};
