import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  circle: {
    width: "2.5rem",
    height: "2.5rem",
    "border-radius": "50%",
    background: "#F8F8F0",
    "text-align": "center",
    "line-height": "2.5rem",
    "font-size": "54%",
    color: theme.palette.text.primary,
    border: `0.5px solid ${theme.palette.text.primary}`,
  },
}));

export default function NewBadge(props) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.circle}>New!</div>
    </>
  );
}
