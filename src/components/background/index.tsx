import { FC } from "react";
import { useStyles } from "./styles";

export const Background: FC = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.background}>
      <div className={classes.backgroundImage}></div>
      <div className={classes.backgroundColor}></div>
      <svg
        className={classes.wave}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          className={classes.wavePath}
          fill="#f1f3f5"
          fillOpacity="1"
          d="M0,160L34.3,176C68.6,192,137,224,206,213.3C274.3,203,343,149,411,122.7C480,96,549,96,617,101.3C685.7,107,754,117,823,133.3C891.4,149,960,171,1029,192C1097.1,213,1166,235,1234,224C1302.9,213,1371,171,1406,149.3L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};
