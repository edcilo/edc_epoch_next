import { FC } from "react";
import { useStyles } from "./styles";

export const Background: FC = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.background}>
      <svg
        className={classes.wave}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          className={classes.wavePath}
          fill="#fff"
          fillOpacity="1"
          d="M0,64L120,90.7C240,117,480,171,720,160C960,149,1200,75,1320,37.3L1440,0L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};
