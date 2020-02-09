import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  circle: {
    width: "125px",
    height: "125px",
    borderRadius: "50%",
    position: "absolute",
    mixBlendMode: "screen",
  }
});

const Circle = ({ backgroundColor }) => {
  const classes = useStyles();
  return <div className={classes.circle} style={{ backgroundColor }}></div>;
};

Circle.propTypes = {
  backgroundColor: PropTypes.string.isRequired
};

export default Circle;
