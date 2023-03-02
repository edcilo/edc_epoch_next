import { createStyles, MantineTheme } from "@mantine/core";
import { getColors } from "@/helpers";

export const useStyles = createStyles((theme: MantineTheme) => ({
  button: {
    backgroundColor: getColors(theme).primary,
    borderRadius: theme.radius.xs,
    "&:hover": {
      backgroundColor: getColors(theme).primaryHover,
    },
  },
}));

export const inputStyles = (theme: MantineTheme) => ({
  input: {
    borderRadius: theme.radius.xs,
    backgroundColor: theme.colors.gray[0],
    color: theme.black,
    "&:focus": {
      borderColor: getColors(theme).primary,
    },
  },
});

export const checkboxStyles = (theme: MantineTheme) => ({
  input: {
    borderRadius: theme.radius.xs,
    backgroundColor: theme.colors.gray[0],
    color: theme.black,
    "&:focus": {
      borderColor: getColors(theme).primary,
    },
    "&:checked": {
      backgroundColor: getColors(theme).primary,
    },
  },
});