import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  icon: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.yellow[5]
        : theme.colors.violet[2],
    borderRadius: theme.radius.xs,
    background:
      theme.colorScheme === "dark" ? theme.colors.red[8] : theme.colors.pink[8],
    "&:active": {
      background:
        theme.colorScheme === "dark"
          ? theme.colors.red[9]
          : theme.colors.pink[7],
    },
  },
}));
