import { createStyles } from "@mantine/core";
import { getColors } from "@/helpers";

export const useStyles = createStyles((theme) => ({
  background: {
    position: "absolute",
    height: "34vh",
    width: "100vw",
    background: getColors(theme).primary,
  },
  wave: {
    position: "absolute",
    top: "100%",
    left: 0,
  },
  wavePath: {
    fill: getColors(theme).primary,
  },
}));
