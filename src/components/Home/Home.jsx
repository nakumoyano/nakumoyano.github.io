import { makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import img from "./tof2.png";

const useStyle = makeStyles((theme) => ({
  container: {
    textAlign: "center",
    height: "100vh",
    paddingTop: "130px",
    background: `linear-gradient(to right, rgba(191, 54, 54, 0.8), rgba(173, 214, 85, 0.8))`,
    padding: 0,
    margin: 0,
  },
  imagen: {
    // animation: `$giro 6000ms linear infinite`,
    width: "20%",
    [theme.breakpoints.down("md")]: {
      width: "50%",
    },
  },
  tituloT: {
    textAlign: "center",
    fontSize: "50px",
    color: "rgb(140,140,250)",
  },
  tituloO: {
    textAlign: "center",
    fontSize: "20px",
    color: "rgb(140,140,250)",
  },
  tituloF: {
    textAlign: "center",
    fontSize: "50px",
    color: "rgb(140,140,250)",
  },
  enlaces: {
    marginTop: "45px",
  },
  containerEnlace: {
    paddingTop: "10px",
  },
  a: {
    // boxShadow: "20px 20px 50px red",
    color: "black",
    textDecoration: "none",
    fontSize: "40px",
    fontFamily: "Caveat, cursive",
    "&:hover": { color: "white" },
    [theme.breakpoints.down("md")]: {
      fontSize: "30px",
    },
  },
  "@keyframes giro": {
    "0%": {
      transform: "rotateZ(0deg)",
    },
    "100%": {
      transform: " rotateZ(362deg)",
    },
  },
}));

const Home = () => {
  const classes = useStyle();

  return (
    <>
      <div className={classes.container}>
        <img src={img} alt="imagen" className={classes.imagen} />
        <div className={classes.enlaces}>
          <div className={classes.containerEnlace}>
            <Link to="/instrucciones" className={classes.a}>
              INSTRUCCIONES
            </Link>
          </div>
          <div className={classes.containerEnlace}>
            <Link to="/playing" className={classes.a}>
              JUGAR
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
