import { MantineTheme } from "@mantine/core";

export function getCurrentEpoch(ms = false): number {
  const now = Date.now();
  if (ms) return now;
  return Math.floor(now);
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
    background: isDark ? theme.colors.dark[7] : theme.colors.gray[1],
  };
}
