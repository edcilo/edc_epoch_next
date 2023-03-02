import { createStyles } from "@mantine/core";
import { getColors } from "@/helpers";

export const useStyles = createStyles((theme) => ({
  main: {
    background: getColors(theme).background,
  },
}));
