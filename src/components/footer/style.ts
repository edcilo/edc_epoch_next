import { createStyles } from "@mantine/core";
import { getColors } from "@/helpers";

export const useStyles = createStyles((theme) => ({
  footer: {
    background: getColors(theme).background,
  },
  link: {
    textDecoration: "none",
    fontWeight: 500,
    color: getColors(theme).primary,
  },
}));
