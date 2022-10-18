import React from "react";
import { Button, Theme, Typography } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import bgImage from "../assets/images/production.jpg";
import youtube from "../assets/images/vector.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bgDiv: {
      backgroundImage: `url(${bgImage})`,
      backgroundRepeat: "no-repeat !important",
      width: "100%",
      height: "760px",
      backgroundSize: "cover",  
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    heading: {
      fontFamily: "Manrope, sans-serif",
      fontSize: "96px !important",
      color: "white",
      marginTop:'7rem !important'
    },
    btn1: {
      width: "11vw",
      fontWeight: '600',
      backgroundColor: "#FFFFFF !important",
      borderRadius: " 28px !important",
      fontFamily: "Arial !important",
      color: "black !important",
      fontSize: "18px !important",
      padding: "10px 20px 10px 20px !important",
      textDecoration: "none !important",
      "&:hover": {
        background: "#dfe3e6 !important",
      },
    },
    btn2: {
      borderRadius: "28px !important",
      fontFamily: "Arial !important",
      fontSize: "18px !important",
      padding: "10px 20px 10px 20px !important",
      border: "solid white 2px !important",
      textDecoration: "none !important",
      color:'white !important',
      "&:hover": {
        background: "#f0f0f0 !important",
      },
    },
    btnContainer: {
      display: "flex",
      justifyContent: "space-between",
      width:'25%',
    },
  })
);
function Section2() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.bgDiv}>
        <Typography className={classes.heading}>Dare to be great.</Typography>
        <div className={classes.btnContainer}>
          <Button className={classes.btn1}>Get Started</Button>
          <Button  className={classes.btn2}>Watch Demo</Button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Section2;
