import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Details from "./Components/MovieCard/Details";
import Series from "./Components/Series";
import { moviesData } from "./Constants/Data";

const Routing = () => {
  const [movies, setMovies] = useState(moviesData);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/Series" element={<Series />} />
        <Route path="/Details/:id" element={<Details movies={movies} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById("root")
);
