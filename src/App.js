import "./App.css";
import React, { useState } from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import Navbar from "./Components/Navbar/Navbar";
import MovieCards from "./Components/MovieCards/MovieCards";

import MovieAdd from "./Components/MovieAdd/MovieAdd";
// import BasicForm from "./Components/MovieAdd/BasicForm";
import { moviesData } from "./Constants/Data";


function App() {
  const [name, setName] = useState("");
  const [movies, setMovies] = useState(moviesData);
  // console.log("movies", movies);
  const handleMovie = (movie) => {
    return setMovies([...movies, movie]);
  };
  const [byRating, setByRating] = React.useState(0);

  return (
    <div
      className="App"
      style={{
        // backgroundImage: `url("https://wallpapercave.com/wp/yLYlYH5.jpg")`,
        backgroundColor: "#333",
      }}
    >
      <div>
        <StyledEngineProvider injectFirst>
          <Navbar
            setName={setName}
            byRating={byRating}
            setByRating={setByRating}
          />
        </StyledEngineProvider>
        {/* , document.querySelector("#root") */}
      </div>

      <div>
        <StyledEngineProvider injectFirst>
          <MovieAdd handleMovie={handleMovie} />
          <MovieCards name={name} movies={movies} byRating={byRating} />
        </StyledEngineProvider>

        {/* , document.querySelector("#root") */}
      </div>
      
    </div>
  );
}

export default App;
