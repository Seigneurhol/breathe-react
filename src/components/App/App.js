import React, { useState } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  "@keyframes bounceCircle1": {
    "0%": {
      transform: "rotate(0deg) translate(0px, 0px) scale(0.2)",
    },
    "37.5%, 42.5%": {
      transform: "rotate(90deg) translate(-35px, -50px) scale(1)",
    },
    "95%, 100%": {
      transform: "rotate(0deg) translate(0px, 0px) scale(0.2)",
    },
  },
  "@keyframes bounceCircle2": {
    "0%": {
      transform: "rotate(0deg) translate(0px, 0px) scale(0.2)",
    },
    "37.5%, 42.5%": {
      transform: "rotate(90deg) translate(35px, -50px) scale(1)",
    },
    "95%, 100%": {
      transform: "rotate(0deg) translate(0px, 0px) scale(0.2)",
    },
  },
  "@keyframes bounceCircle3": {
    "0%": {
      transform: "rotate(0deg) translate(0px, 0px) scale(0.2)",
    },
    "37.5%, 42.5%": {
      transform: "rotate(90deg) translate(-60px, 0) scale(1)",
    },
    "95%, 100%": {
      transform: "rotate(0deg) translate(0px, 0px) scale(0.2)",
    },
  },
  "@keyframes bounceCircle4": {
    "0%": {
      transform: "rotate(0deg) translate(0px, 0px) scale(0.2)",
    },
    "37.5%, 42.5%": {
      transform: "rotate(90deg) translate(60px, 0) scale(1)",
    },
    "95%, 100%": {
      transform: "rotate(0deg) translate(0px, 0px) scale(0.2)",
    },
  },
  "@keyframes bounceCircle5": {
    "0%": {
      transform: "rotate(0deg) translate(0px, 0px) scale(0.2)",
    },
    "37.5%, 42.5%": {
      transform: "rotate(90deg) translate(-35px, 50px) scale(1)",
    },
    "95%, 100%": {
      transform: "rotate(0deg) translate(0px, 0px) scale(0.2)",
    },
  },
  "@keyframes bounceCircle6": {
    "0%": {
      transform: "rotate(0deg) translate(0px, 0px) scale(0.2)",
    },
    "37.5%, 42.5%": {
      transform: "rotate(90deg) translate(35px, 50px) scale(1)",
    },
    "95%, 100%": {
      transform: "rotate(0deg) translate(0px, 0px) scale(0.2)",
    },
  },
  app: {
    display: "flex",
    padding: "100px 200px",
    minHeight: "100vh",
  },
  flower: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transform: "rotate(90deg)",
    height: "250px",
  },
  circle: {
    width: "125px",
    height: "125px",
    borderRadius: "50%",
    position: "absolute",
    mixBlendMode: "screen",
    "&:nth-child(1)": {
      animation:
        "8.5714285714s cubic-bezier(0.420, 0.000, 0.580, 1.000) $bounceCircle1 infinite",
    },
    "&:nth-child(2)": {
      animation:
        "8.5714285714s cubic-bezier(0.420, 0.000, 0.580, 1.000) $bounceCircle2 infinite",
    },
    "&:nth-child(3)": {
      animation:
        "8.5714285714s cubic-bezier(0.420, 0.000, 0.580, 1.000) $bounceCircle3 infinite",
    },
    "&:nth-child(4)": {
      animation:
        "8.5714285714s cubic-bezier(0.420, 0.000, 0.580, 1.000) $bounceCircle4 infinite",
    },
    "&:nth-child(5)": {
      animation:
        "8.5714285714s cubic-bezier(0.420, 0.000, 0.580, 1.000) $bounceCircle5 infinite",
    },
    "&:nth-child(6)": {
      animation:
        "8.5714285714s cubic-bezier(0.420, 0.000, 0.580, 1.000) $bounceCircle6 infinite",
    },
    "&:nth-child(odd)": {
      background: "#61bea2",
    },
    "&:nth-child(even)": {
      background: "#529ca0",
    },
  },
  choice: {
    color: "white",
    zIndex: "100",
  },
});

function App() {
  const classes = useStyles();

  const [timeSelected, setTimeSelected] = useState(1);
  const [started, setStarted] = useState(false);

  const initialStyle = !started
    ? { animation: "none", transform: "scale(0.2)" }
    : { animationIterationCount: timeSelected * 7, transform: "scale(0.2)" };

  return (
    <div className={classes.app}>
      <div className={classes.flower}>
        <div className={classes.circle} style={initialStyle}></div>
        <div className={classes.circle} style={initialStyle}></div>
        <div className={classes.circle} style={initialStyle}></div>
        <div className={classes.circle} style={initialStyle}></div>
        <div className={classes.circle} style={initialStyle}></div>
        <div className={classes.circle} style={initialStyle}></div>
      </div>
      <div className={classes.choice}>
        <p>{timeSelected * 7} breath</p>
        <select
          value={timeSelected}
          id="time-select"
          onChange={(time) => {
            setTimeSelected(parseInt(time.target.value, 10));
            setStarted(false);
          }}
        >
          <option value={1}>1 min</option>
          <option value={2}>2 min</option>
          <option value={3}>3 min</option>
          <option value={4}>4 min</option>
          <option value={5}>5 min</option>
        </select>
        <button onClick={() => setStarted((oldValue) => !oldValue)}>
          {started ? 'Stop' : 'Start'}
        </button>
      </div>
    </div>
  );
}

export default App;
