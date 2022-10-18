import React from "react";
import { Theme, Typography, Button } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import { ClassNames } from "@emotion/react";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    maincontainer: {
      boxSizing: "border-box",
      width: "40vw !important",
      height:'400px !important',
      backgroundColor:'black'
    },
    heading: {
      fontFamily: "Manrope, sans-serif",
      fontSize: "50px !important",
      color: "white",
      marginTop: "2rem !important",
      textAlign:'left',
      width:'100px'
    },
    btnText: {
      borderRadius: "28px !important",
      fontFamily: "Arial !important",
      color: "black !important",
      fontSize: "18px !important",
      padding: "10px 20px 10px 20px !important",
      border: "solid white 2px !important",
      textDecoration: "none !important",
      "&:hover": {
        background: "#f0f0f0 !important",
      },
    },
  })
);
function Card({ heading, btnText }: any) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.maincontainer}>
        <Typography className={classes.heading}>{heading}</Typography>
        <Button className={classes.btnText}>{btnText}</Button>
      </div>
    </React.Fragment>
  );
}

export default Card;
