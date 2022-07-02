import classes from './Card2.module.css';
import React from "react";

function Card2(props) {
  return <div className={classes.card}>{props.children}</div>;
}

export default Card2;