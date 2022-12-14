import React from "react";
import { Button, Theme, Typography } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainDiv: {
      width: "100%px !important",
      // height: "400px !important",
      background: "black",
      display: "flex",
      flexWrap: "wrap",
      padding: "5% 10% 5% 10% !important",
    },
    heading: {
      fontFamily: "Manrope, sans-serif",
      color: "white",
      fontSize: "72px !important",
      fontWeight: "900 !important",
      width: "700px",
      textAlign: "left",
    },
    btn: {
      borderRadius: "28px !important",
      fontFamily: "Arial !important",
      fontWeight: "500 !important",
      color: "#ffffff !important",
      fontSize: "20px !important",
      background: "#3498db !important",
      padding: "10px 20px 10px 20px !important",
      textDecoration: "none !important",
      height: "60px",
      marginTop: "90px",
      marginLeft: "150px",

      "&:hover": {
        background: "#3cb0fd !important",
        textDecoration: "none !important",
      },
    },
  })
);
function Newsletter() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.mainDiv}>
        <Typography className={classes.heading}>
          Subscribe to our newsletter.
        </Typography>
        <Button className={classes.btn}>Subscribe</Button>
      </div>
    </React.Fragment>
  );
}

export default Newsletter;
