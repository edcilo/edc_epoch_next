import { createStyles } from "@mantine/core";
import { getColors } from "@/helpers";

export const useStyles = createStyles((theme) => ({
  header: {
    background: getColors(theme).primary,
  },
}));
