import { createStyles, MantineTheme } from "@mantine/core";
import { getColors } from "@/helpers";

export const useStyles = createStyles((theme: MantineTheme) => ({
  button: {
    backgroundColor: getColors(theme).primary,
    borderRadius: theme.radius.xs,
    "&:hover": {
      backgroundColor: `${getColors(theme).primaryHover} !important`,
    },
  },
}));

export const inputStyles = (theme: MantineTheme) => ({
  input: {
    borderRadius: theme.radius.xs,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.gray[0] : theme.colors.white,
    color: theme.black,
    "&:focus": {
      borderColor: getColors(theme).primary,
    },
  },
});
