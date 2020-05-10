import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  choice: {
    color: "white",
    zIndex: "100",
  },
  button: {
    borderRadius: "20px",
    padding: "10px",
    backgroundColor: "rgba(76, 76, 76, 0.5)",
    backdropFilter: "blur(10px)",
    color: "white",
    border: "none",
    "&:focus": {
      outline: "0",
    },
    fontSize: "24px",
    fontWeight: "700",
  },
  dropdown: {
    appearance: "none",
    "-webkit-appearance": "none",
    "-moz-appearance": "none",
    border: "none",
    textAlignLast: "center",
    backgroundColor: "transparent",
    color: "white",
    padding: "10px",
    "&:focus": {
      outline: "0",
    },
    fontSize: "34px",
    fontWeight: "700",
  },
  breath: {
    fontSize: "24px",
    fontWeight: "700",
  },
});

const TimeInput = ({ started, timeSelected, setStarted, setTimeSelected }) => {
  const classes = useStyles();

  return (
    <div className={classes.choice}>
      <p className={classes.breath}>{timeSelected * 7} Breaths</p>
      <select
        className={classes.dropdown}
        value={timeSelected}
        id="time-select"
        onChange={(time) => {
          setTimeSelected(parseInt(time.target.value, 10));
          setStarted(false);
        }}
      >
        <option value={1}>1 MIN</option>
        <option value={2}>2 MIN</option>
        <option value={3}>3 MIN</option>
        <option value={4}>4 MIN</option>
        <option value={5}>5 MIN</option>
      </select>
      <button
        className={classes.button}
        onClick={() => setStarted((oldValue) => !oldValue)}
      >
        {started ? "Stop" : "Start"}
      </button>
    </div>
  );
};

TimeInput.propTypes = {
  started: PropTypes.bool.isRequired,
  timeSelected: PropTypes.number.isRequired,
  setStarted: PropTypes.func.isRequired,
  setTimeSelected: PropTypes.func.isRequired,
};

export default TimeInput;
