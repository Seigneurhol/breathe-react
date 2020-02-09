import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  "@keyframes bounceCircle1": {
    from: {
      transform: "rotate(0deg) translate(0px, 0px) scale(0.2)"
    },
    to: {
      transform: "rotate(90deg) translate(-35px, -50px) scale(1)"
    }
  },
  "@keyframes bounceCircle2": {
    from: {
      transform: "rotate(0deg) translate(0px, 0px) scale(0.2)"
    },
    to: {
      transform: "rotate(90deg) translate(35px, -50px) scale(1)"
    }
  },
  "@keyframes bounceCircle3": {
    from: {
      transform: "rotate(0deg) translate(0px, 0px) scale(0.2)"
    },
    to: {
      transform: "rotate(90deg) translate(-60px, 0) scale(1)"
    }
  },
  "@keyframes bounceCircle4": {
    from: {
      transform: "rotate(0deg) translate(0px, 0px) scale(0.2)"
    },
    to: {
      transform: "rotate(90deg) translate(60px, 0) scale(1)"
    }
  },
  "@keyframes bounceCircle5": {
    from: {
      transform: "rotate(0deg) translate(0px, 0px) scale(0.2)"
    },
    to: {
      transform: "rotate(90deg) translate(-35px, 50px) scale(1)"
    }
  },
  "@keyframes bounceCircle6": {
    from: {
      transform: "rotate(0deg) translate(0px, 0px) scale(0.2)"
    },
    to: {
      transform: "rotate(90deg) translate(35px, 50px) scale(1)"
    }
  },
  app: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    transform: "rotate(90deg)"
  },
  circle: {
    width: "125px",
    height: "125px",
    borderRadius: "50%",
    position: "absolute",
    mixBlendMode: "screen",
    "&:nth-child(1)": {
      animation:
        "4.2857s cubic-bezier(0.455, 0.030, 0.515, 0.955) $bounceCircle1 infinite alternate"
    },
    "&:nth-child(2)": {
      animation:
        "4.2857s cubic-bezier(0.455, 0.030, 0.515, 0.955) $bounceCircle2 infinite alternate"
    },
    "&:nth-child(3)": {
      animation:
        "4.2857s cubic-bezier(0.455, 0.030, 0.515, 0.955) $bounceCircle3 infinite alternate"
    },
    "&:nth-child(4)": {
      animation:
        "4.2857s cubic-bezier(0.455, 0.030, 0.515, 0.955) $bounceCircle4 infinite alternate"
    },
    "&:nth-child(5)": {
      animation:
        "4.2857s cubic-bezier(0.455, 0.030, 0.515, 0.955) $bounceCircle5 infinite alternate"
    },
    "&:nth-child(6)": {
      animation:
        "4.2857s cubic-bezier(0.455, 0.030, 0.515, 0.955) $bounceCircle6 infinite alternate"
    },
    "&:nth-child(odd)": {
      background: "#61bea2"
    },
    "&:nth-child(even)": {
      background: "#529ca0"
    }
  }
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
        <div className={classes.circle}></div>
        <div className={classes.circle}></div>
        <div className={classes.circle}></div>
        <div className={classes.circle}></div>
        <div className={classes.circle}></div>
        <div className={classes.circle}></div>
    </div>
  );
}

export default App;
