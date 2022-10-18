import React from 'react'
import { makeStyles ,createStyles} from '@mui/styles';
import { Typography } from '@mui/material';
import { createTheme } from "@mui/material/styles";
import { Theme } from "@mui/material";
import { ThemeProvider } from "@mui/material";

const theme = createTheme({
   
});

const useStyles=makeStyles(() =>
  createStyles({
    mainDiv:{
display:'flex',
justifyContent:'center',
marginTop:'100px',
// width:'1700px'
[theme.breakpoints.down("sm")]: {
    display:'flex',
justifyContent:'center',
marginTop:'100px',
flexDirection:'column',
alignItems:'center'
}
    },
box:{
    width:'283px',
    height:'283px',
    backgroundColor:'white',
    textAlign:'center',
    alignContent:'center',
    alignItems:'center',
    [theme.breakpoints.down("sm")]: {
        width:'283px',
        height:'283px',
        backgroundColor:'white',
        textAlign:'center',
        alignContent:'center',
        alignItems:'center',
    }
},
boxColor:{
    width:'283px',
    height:'283px',
    backgroundColor:'white',
    textAlign:'center',
    alignContent:'center',
    alignItems:'center',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
},
fifty:{
    "&.css-ahj2mt-MuiTypography-root":{ 
    color:'#000000',
    fontFamily:'Manrope',
    fontStyle: 'normal',
    fontWeight:'700',
    fontSize:'64px',
    lineHeight:'89.6px',
    letterSpacing:'5px',
    textAlign:'center',
    marginTop:'70px'
},
},
subHeading:{
    "&.css-ahj2mt-MuiTypography-root":{
        color:'#5F5F5F',
        fontFamily:'Manrope',
        fontStyle: 'normal',
        fontWeight:'400',
        fontSize:'24px',
        lineHeight:'33.6px',
        textAlign:'center',
        marginLeft:'-15px'
    }
},
hundredColor:{
    "&.css-ahj2mt-MuiTypography-root":{
        color:'#2E90EA',
        fontFamily:'Manrope',
        fontStyle: 'normal',
        fontWeight:'700',
        fontSize:'64px',
        lineHeight:'89.6px',
        letterSpacing:'5px',
        textAlign:'center',
        marginTop:'70px'
    }
},
division:{
    backgroundColor:'#DFDFDF',
    height:'283px',
    width:'1px',
    [theme.breakpoints.down("sm")]: {
    display:'none'
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
<div className={classes.box}>
    <Typography className={classes.fifty}>50+</Typography>
    <Typography className={classes.subHeading}>Outlets</Typography>
    </div>   
    <div className={classes.boxColor}>
    <Typography className={classes.hundredColor}>100k+</Typography>
    <Typography className={classes.subHeading}>Students</Typography>
    </div>   
    <div className={classes.box}>
    <Typography className={classes.fifty}>200+</Typography>
    <Typography className={classes.subHeading}>Trainers</Typography>
    </div>   
    <div className={classes.division}></div>
    <div className={classes.box}>
    <Typography className={classes.fifty}>50k+</Typography>
    <Typography className={classes.subHeading}>Members</Typography>
    </div>          
        </div>
        </ThemeProvider>
</>
    )
}

export default Stats;