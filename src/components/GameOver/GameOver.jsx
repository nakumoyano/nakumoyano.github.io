import React from "react";
import { Link } from "react-router-dom";
import music from "../assets/gameover.mp3";
import { makeStyles } from "@material-ui/core";
import gameover from "../assets/gameover.png";

const useStyle = makeStyles((theme) => ({
  container: {
    display: "block",
  },
  titulo: {
    textAlign: "center",
  },
  containerImg: {
    display: "flex",
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
  },
  img: {
    backgroundImage: `url(${gameover})`,
    backgroundSize: "cover",
    width: "300px",
    height: "280px",
  },
}));
const GameOver = () => {
  const classes = useStyle();
  return (
    <>
      <div className={classes.container}>
        {/* <h1 className={classes.titulo}>¡¡¡GAME OVER!!!</h1> */}
        <div className={classes.containerImg}>
          <div className={classes.img}></div>
        </div>
        <div className={classes.buttonContainer}>
          <Link to="/">VOLVER</Link>
        </div>
      </div>
      <audio src={music} autoPlay></audio>
    </>
  );
};

export default GameOver;
