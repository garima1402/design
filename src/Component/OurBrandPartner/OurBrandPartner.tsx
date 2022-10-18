import React from 'react'
import { makeStyles,createStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import Nike from '../../Images/nike.svg'
import Addidas from '../../Images/addidas.svg'
import Puma from '../../Images/puma.svg'
import Hubberhome from '../../Images/hubberhome.svg'
import { createTheme } from "@mui/material/styles";
import { Theme } from "@mui/material";
import { ThemeProvider } from "@mui/material";

const theme = createTheme({
   
});

const useStyles=makeStyles(() =>
  createStyles({
    mainDiv:{
display:'flex',
justifyContent:'space-around',
marginTop:'100px',
[theme.breakpoints.down("sm")]: {
  display:'flex',
  justifyContent:'center',
  marginTop:'100px',
  flexDirection:'column',
  alignItems:'center',
  // width:'300px'
}
    },
  tagline:{
      color:'rgba(15, 15, 15, 0.7)',
      fontFamily:'Manrope',
      fontStyle: 'normal',
      fontWeight:'700',
      fontSize:'20px',
      lineHeight:'120%',
      letterSpacing:'5px',
      [theme.breakpoints.down("sm")]: {
        color:'rgba(15, 15, 15, 0.7)',
        fontFamily:'Manrope',
        fontStyle: 'normal',
        fontWeight:'700',
        fontSize:'20px',
        lineHeight:'120%',
        letterSpacing:'5px',
        marginBottom:'25px'
      }
  },
  imgCategory:{
display:'flex',
[theme.breakpoints.down("sm")]: {
  display:'flex',
marginLeft:'15px'
}
  },
  pumaImg:{
      width:"107.8px",
      height:'38.88px',
      [theme.breakpoints.down("sm")]: {
        width:"87.8px",
        height:'32.88px',
      }
    //   marginRight:"50px"
  }
})
);
 const OurBrandPartner = () => {
    const classes = useStyles();

    return (
      <div>
      <ThemeProvider theme={theme} >        
        <div className={classes.mainDiv}>
           <h1 className={classes.tagline}> OUR BRAND PARTNER</h1> 
           <div className={classes.imgCategory}>
           <img className={classes.pumaImg} src={Nike}/>
           <img className={classes.pumaImg} src={Addidas}/>
           <img className={classes.pumaImg} src={Puma}/>
           <img className={classes.pumaImg} src={Hubberhome}/>
           </div>
        </div>
        </ThemeProvider>
</div>
    )
}

export default OurBrandPartner;