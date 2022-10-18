import React from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { Box, Button, Typography } from "@mui/material";
import Card from "../Card/imageCard";
import { createTheme } from "@mui/material/styles";
import { Theme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
// import {useStyles} from './newLauchCSS' 

const theme = createTheme({
   
});

const useStyles=makeStyles(() =>
  createStyles({
          mainDiv: {
      display: "flex",
      justifyContent: "space-around",
      marginTop: "20px",
      flexDirection:'row',
    },
    heading: {
      "&.css-ahj2mt-MuiTypography-root": {
        color: "#000000",
        fontFamily: "Manrope",
        fontStyle: "normal",
        fontWeight: "300",
        fontSize: "64px",
        lineHeight: "76.8px",
        [theme.breakpoints.down("sm")]: {
            color: "#000000",
            fontFamily: "Manrope",
            fontStyle: "normal",
            fontWeight: "300",
            fontSize: "28px",
            lineHeight: "76.8px",
        }
      },
    },
    underLine: {
      backgroundColor: "#2E90EA",
      width: "144px",
      height: "8px",
      [theme.breakpoints.down("sm")]: {
        backgroundColor: "#2E90EA",
        width: "84px",
        height: "5px",
      }
    },
    btnView: {
      "&.css-1e6y48t-MuiButtonBase-root-MuiButton-root": {
        width: "140px",
        height: "51px",
        border: "1px solid #000000",
        borderRadius: "34px",
        color: "black",
        marginTop: "20px",
        [theme.breakpoints.down("sm")]: {
            width: "70px",
            height: "31px",
            border: "1px solid #000000",
            borderRadius: "20px",
            color: "black",
            marginTop: "20px",
            fontSize:'10px'
        }
      },
    },
    imgAlign: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      paddingLeft: "40px",
      width: "1350px",
      marginLeft: "205px",
      flexDirection:'row',
      [theme.breakpoints.down("md")]: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        paddingLeft: "5px",
        width: "800px",
        marginLeft: "5px",
        flexDirection:'row',
      },
      [theme.breakpoints.down("sm")]: {
        display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      paddingLeft: "10px",
      width: "250px",
      marginLeft: "5px",
      flexDirection:'column'
      },
    },
  })
);
const Stats = () => {
  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={theme} >        
      <div className={classes.mainDiv}>
        <div>
          <Typography className={classes.heading}>
            Nike New Launches !
          </Typography>
          <div className={classes.underLine}></div>
        </div>
        <Button className={classes.btnView}>View All</Button>
      </div>
      <div className={classes.imgAlign}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      </ThemeProvider>
</>
  );
};

export default Stats;
