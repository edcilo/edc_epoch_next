import { createStyles } from "@mantine/core";
import { getColors } from "@/helpers";

export const useStyles = createStyles((theme) => ({
  background: {
    position: "absolute",
    height: "70vh",
    width: "100%",
  },
  backgroundImage: {
    position: "absolute",
    height: "70vh",
    width: "100%",
    background:
      "url(https://storage.edcilo.com/images/mountain.webp) no-repeat center center",
  },
  backgroundColor: {
    position: "absolute",
    height: "70vh",
    width: "100%",
    background: getColors(theme).primary,
    opacity: 0.8,
  },
  wave: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  wavePath: {
    fill: getColors(theme).background,
  },
}));
