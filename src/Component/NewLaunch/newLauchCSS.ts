import { createStyles, makeStyles } from '@mui/styles';
import { theme } from '../../theme';

const useStyles = makeStyles(() =>
  createStyles({
    mainDiv: {
        display: "flex",
        justifyContent: "space-around",
        marginTop: "100px",
        [theme.breakpoints.down("sm")]: {
          display: "flex",
          justifyContent: "space-around",
          marginTop: "100px",
        },
      },
      heading: {
        "&.css-ahj2mt-MuiTypography-root": {
          color: "#000000",
          fontFamily: "Manrope",
          fontStyle: "normal",
          fontWeight: "300",
          fontSize: "64px",
          lineHeight: "76.8px",
        },
      },
      underLine: {
        backgroundColor: "#2E90EA",
        width: "144px",
        height: "8px",
      },
      btnView: {
        "&.css-1e6y48t-MuiButtonBase-root-MuiButton-root": {
          width: "140px",
          height: "51px",
          border: "1px solid #000000",
          borderRadius: "34px",
          color: "black",
          marginTop: "20px",
        },
      },
      imgAlign: {
        display: "flex",
        // flexBasis: '33.333333%',
        flexWrap: "wrap",
        justifyContent: "space-around",
        paddingLeft: "40px",
        width: "1350px",
        marginLeft: "205px",
      },
  })
);

export { useStyles };