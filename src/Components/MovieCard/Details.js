import React from "react";
import { useParams } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import { CardMedia } from "@mui/material";
import "./Details.css";
import { Player } from "video-react";
import Typography from "@mui/material/Typography";
import "../../../node_modules/video-react/dist/video-react.css";

function Details({ movies }) {
  let { id } = useParams();

  return (
    <div>
      <div className="banniere">
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
          LinkComponent={Link}
          to="/"
        >
          <HomeIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          KhaledFLIX
        </Typography>
      </div>
      <div className="display-details">
        {movies
          .filter((moviecard) => moviecard.id == id)

          .map((moviecard) => (
            <div>
              <div className="media">
                <CardMedia
                  sx={{ width: 400, height: 550 }}
                  component="img"
                  height="194"
                  image={moviecard.image}
                  alt={moviecard.name}
                />
                <div>
                  <h1>{moviecard.name}</h1>
                  <h3>Synopsis {moviecard.name} :</h3>
                  <p> {moviecard.description} </p>
                </div>
              </div>
              <div>
                <Player
                  sx={{ width: 400, height: 550 }}
                  playsInline
                  poster="/assets/poster.png"
                  src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Details;
