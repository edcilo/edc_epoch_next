import { MantineTheme } from "@mantine/core";

export function getCurrentEpoch(): number {
  return Math.floor(Date.now() / 1000);
}

export function getColors(theme: MantineTheme) {
  const isDark = theme.colorScheme === "dark";
  const primaryLight = theme.colors.pink[7];
  const primaryLightHover = theme.colors.pink[8];
  const primaryDark = theme.colors.red[9];
  const primaryDarkHover = theme.colors.red[8];

  return {
    primary: isDark ? primaryDark : primaryLight,
    primaryHover: isDark ? primaryDarkHover : primaryLightHover,
    background: isDark ? theme.colors.dark[7] : theme.colors.gray[0],
  };
}
