import React, { useState, useEffect } from "react";
import { Preguntas } from "../Helpers/db";
import { makeStyles } from "@material-ui/core";
import natureImg from "../assets/nature.png";
import artImg from "../assets/art.png";
import historyImg from "../assets/history.png";
import sportsImg from "../assets/sports.png";
import viajesImg from "../assets/viajes.png";
import musicImg from "../assets/music.png";

const useStyle = makeStyles((theme) => ({
  countContainer: {
    display: "block",
  },
  buttonContainer: {
    display: "block",
  },
  h2: {
    color: "black",
  },
  h3: {
    color: "black",
  },
  boton: {
    width: "100%",
    height: "50px",
    backgroundColor: "orange",
    color: "white",
    fontSize: "18px",
  },
  nature: {
    backgroundImage: `url(${natureImg})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "200px",
    width: "99%",
  },
  history: {
    backgroundImage: `url(${historyImg})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "200px",
    width: "99%",
  },
  art: {
    backgroundImage: `url(${artImg})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "200px",
    width: "99%",
  },
  sports: {
    backgroundImage: `url(${sportsImg})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "200px",
    width: "99%",
  },
  viajes: {
    backgroundImage: `url(${viajesImg})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "200px",
    width: "99%",
  },
  music: {
    backgroundImage: `url(${musicImg})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "200px",
    width: "99%",
  },
}));

const Playing = () => {
  const classes = useStyle();

  const [time, setTime] = useState(20);
  const [aleatorio, setAleatorio] = useState(Math.round(Math.random() * 6));
  const [clase, setClase] = useState([
    classes.history,
    classes.viajes,
    classes.music,
    classes.sports,
    classes.nature,
    classes.art,
  ]);
  const [vidas, setVidas] = useState(3);
  const [puntuacion, setPuntuacion] = useState(0);
  const [gameOver, setGameOver] = useState(null);

  useEffect(() => {
    let cuentaAtras = setInterval(() => {
      time > 0
        ? setTime(time - 1)
        : setGameOver((window.location.href = "/gameover"));
    }, 2000);

    return () => clearInterval(cuentaAtras);
  }, [time, puntuacion]);

  const bien = () => {
    speechSynthesis.speak(
      new SpeechSynthesisUtterance("¡¡¡RESPUESTA CORRECTA!!!")
    );
    setAleatorio(Math.round(Math.random() * 6));
    setPuntuacion(puntuacion + 1);
    setTime(20);
  };

  const mal = () => {
    speechSynthesis.speak(
      new SpeechSynthesisUtterance("¡¡¡RESPUESTA INCORRECTA!!!")
    );
    setAleatorio(Math.round(Math.random() * 6));
    setVidas(
      vidas > 0 ? vidas - 1 : setGameOver((window.location.href = "/gameover"))
    );
    setTime(20);
  };

  return (
    <>
      {Preguntas.map((preguntando) =>
        preguntando.id === aleatorio ? (
          <>
            <div className={classes.countContainer}>
              <h2 className={classes.h2}>Time:{time}</h2>
              <h2 className={classes.h2}>Points:{puntuacion}</h2>
              <h2 className={classes.h2}>Life:{vidas}</h2>
            </div>

            <div className={classes.imgContainer}>
              <div
                className={
                  preguntando.estilos === "history"
                    ? clase[0]
                    : preguntando.estilos === "viajes"
                    ? clase[1]
                    : preguntando.estilos === "music"
                    ? clase[2]
                    : preguntando.estilos === "sports"
                    ? clase[3]
                    : preguntando.estilos === "nature"
                    ? clase[4]
                    : preguntando.estilos === "art"
                    ? clase[5]
                    : clase[1]
                }
              ></div>
            </div>

            <div className={classes.preguntaContainer}>
              <h3 className={classes.h3}>{preguntando.pregunta}</h3>
            </div>

            <div className={classes.buttonContainer}>
              <button
                className={classes.boton}
                onClick={() =>
                  preguntando.respuesta1 === preguntando.solucion
                    ? bien()
                    : mal()
                }
              >
                {[preguntando.respuesta1]}
              </button>
              <button
                className={classes.boton}
                onClick={() =>
                  preguntando.respuesta2 === preguntando.solucion
                    ? bien()
                    : mal()
                }
              >
                {[preguntando.respuesta2]}
              </button>
            </div>
          </>
        ) : null
      )}
    </>
  );
};

export default Playing;
