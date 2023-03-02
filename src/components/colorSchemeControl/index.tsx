import { ActionIcon, useMantineColorScheme, Tooltip } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";
import { FC } from "react";

export const ColorSchemeControl: FC = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Tooltip label="Ctrl/⌘ + J">
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
