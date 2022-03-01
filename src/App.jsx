import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import { ThemeProvider } from "@material-ui/styles";
import Instrucciones from "./components/Instrucciones/Instrucciones";
import Playing from "./components/Playing";
import GameOver from "./components/GameOver/GameOver";

function App() {
  return (
    <>
      <Router>
        <ThemeProvider>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/playing" exact element={<Playing />} />
            <Route path="/instrucciones" exact element={<Instrucciones />} />
            <Route path="/gameover" exact element={<GameOver />} />
          </Routes>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
