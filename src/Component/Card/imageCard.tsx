import React from 'react'
import { makeStyles, createStyles } from '@mui/styles';
import { Button, Typography } from '@mui/material';
import Shoes from '../../Images/shoes.svg';

import { createTheme } from "@mui/material/styles";
import { Theme } from "@mui/material";
import { ThemeProvider } from "@mui/material";

const theme = createTheme({
   
});

const useStyles=makeStyles(() =>
  createStyles({
          mainDiv:{
display:'flex',
flexDirection:'column',
justifyContent:'space-around',
marginTop:'100px',
width:'376px',
[theme.breakpoints.down("sm")]: {
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-around',
    marginTop:'50px',
    width:'316px',
    marginLeft:'20px'
}

    },
imgStyle:{
    height:'495px',
    width:'376px',
    [theme.breakpoints.down("sm")]: {
        height:'445px',
    width:'316px'
    }
},
mainHeading:{
    "&.css-ahj2mt-MuiTypography-root":{
        fontSize:'28px',
        lineHeight:'38.5px',
        fontFamily:'Manrope',
        fontStyle: 'normal',
        fontWeight:'700',
        [theme.breakpoints.down("sm")]: {
            fontSize:'21px',
        lineHeight:'38.5px',
        fontFamily:'Manrope',
        fontStyle: 'normal',
        fontWeight:'700',
        }
    }
},
subHeading:{
    "&.css-ahj2mt-MuiTypography-root":{
        fontSize:'16px',
        lineHeight:'21.86px',
        fontFamily:'Manrope',
        fontStyle: 'normal',
        fontWeight:'400',
        color:'#5F5F5F'
    }
},
priceHeading:{
    "&.css-ahj2mt-MuiTypography-root":{
        fontSize:'28px',
        lineHeight:'38.25px',
        fontFamily:'Manrope',
        fontStyle: 'normal',
        fontWeight:'300',
        color:'#000000',
        [theme.breakpoints.down("sm")]: {
            fontSize:'21px',
        lineHeight:'38.25px',
        fontFamily:'Manrope',
        fontStyle: 'normal',
        fontWeight:'300',
        color:'#000000',
        }
    }
},
details:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    [theme.breakpoints.down("sm")]: {
        display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginLeft:'0px',
    width:'316px'
    }
}
})
);
 const Stats = () => {
    const classes = useStyles();

    return (
        <>
              <ThemeProvider theme={theme} >        
        <div className={classes.mainDiv}>
          <img className={classes.imgStyle} src={Shoes}/>

          <div className={classes.details}>
              <div>
          <Typography className={classes.mainHeading}>Nike Metcon 7</Typography>
          <Typography className={classes.subHeading} >Training Shoes</Typography>
          </div>
          <Typography className={classes.priceHeading} >$120</Typography>
          </div>
        </div>
        </ThemeProvider>
        </>
    )
}

export default Stats;