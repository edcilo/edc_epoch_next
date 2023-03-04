import { createStyles, MantineTheme } from "@mantine/core";
import { getColors } from "@/helpers";

export const styles = (theme: MantineTheme) => ({
  input: {
    borderRadius: theme.radius.xs,
    backgroundColor: theme.colors.gray[0],
    color: theme.black,
    "&:focus": {
      borderColor: getColors(theme).primary,
    },
  },
});
