import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieCards.css";

const MovieCards = ({ name, movies, byRating }) => {
  return (
    <div
      className="cards-global"
      style={
        {
          // backgroundImage: `url("https://wallpapercave.com/wp/yLYlYH5.jpg")`,
          // backgroundColor: "black",
        }
      }
    >
      <div>
        <h1 className="title" style={{ color: "yellow" }}>
          {" "}
          Tous vos films préférés en streaming
        </h1>
      </div>
      <div className="display-cards">
        {movies
          .filter(
            (moviecard) =>
              moviecard.name
                .toUpperCase()
                .includes(name.toUpperCase().trim()) &&
              moviecard.rating >= byRating
          )
          // .filter((moviecard) => moviecard.rating >= byRating)

          .map((moviecard) => (
            <MovieCard
              moviecard={moviecard}
              key={moviecard.id}
              byRating={moviecard.rating}
            />
          ))}
      </div>
    </div>
  );
};

export default MovieCards;
