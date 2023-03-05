import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  trigger: {
    color: theme.colors.white,
    borderRadius: theme.radius.xs,
    background:
      theme.colorScheme === "dark" ? theme.colors.red[8] : theme.colors.pink[8],
    "&:active": {
      background:
        theme.colorScheme === "dark"
          ? theme.colors.red[9]
          : theme.colors.pink[7],
    },
    "&:hover": {
      background: theme.colors.dark[8],
    },
  },
}));
