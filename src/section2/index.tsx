import React from "react";
import { Button, Theme, Typography } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import bgImage from "../assets/images/production.jpg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bgDiv: {
      backgroundImage: `url(${bgImage})`,
      backgroundRepeat:'no-repeat !important',
      width: "100%",
      height: "760px",
    },
    heading: {
      fontFamily: "Manrope, sans-serif",
      fontSize: "96px !important",
      color: "white",
      paddingTop:'18% !important'
    },
    btn1: {
      width:'11vw',
      backgroundColor: "#FFFFFF !important",
      borderRadius: " 28px !important",
      fontFamily: "Arial !important",
      color: "black !important",
      fontSize: "18px !important",
      padding: "10px 20px 10px 20px !important",
      textDecoration: "none !important",
      marginRight:'50px',
      "&:hover": {
        background: "#dfe3e6 !important",
      },
    },
    btn2: {
      marginLeft:'50px !important',
      borderRadius:'28px !important',
      fontFamily: 'Arial !important',
      color: 'black !important',
      fontSize: '18px !important',
      padding: '10px 20px 10px 20px !important',
      border: 'solid white 2px !important',
      textDecoration: 'none !important',
      '&:hover':{
        background: '#f0f0f0 !important',
      }
    }    
  })
);
function Section2() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.bgDiv}>
        <Typography className={classes.heading}>Dare to be great.</Typography>
        <Button className={classes.btn1}>Get Started</Button>
        <Button className={classes.btn2}>Watch Demo</Button>
      </div>
    </React.Fragment>
  );
}

export default Section2;
