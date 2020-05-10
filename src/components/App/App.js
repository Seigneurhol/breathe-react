import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import Flower from "../Flower";
import TimeInput from "../TimeInput";

const useStyles = createUseStyles({
  app: {
    display: "flex",
    padding: "100px 200px",
    minHeight: "100vh",
  },
});

function App() {
  const classes = useStyles();

  const [timeSelected, setTimeSelected] = useState(1);
  const [started, setStarted] = useState(false);

  return (
    <div className={classes.app}>
      <Flower started={started} timeSelected={timeSelected} />
      <TimeInput
        started={started}
        timeSelected={timeSelected}
        setStarted={setStarted}
        setTimeSelected={setTimeSelected}
      />
    </div>
  );
}

export default App;
