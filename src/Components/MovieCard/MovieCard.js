import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import "./MovieCard.css";
import { Link } from "react-router-dom";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";

const MovieCard = ({ moviecard }) => {
  return (
    <Card className="display-car" sx={{ maxWidth: 400, marginBottom: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {moviecard.rating}
          </Avatar>
        }
        action={<IconButton aria-label="settings">{moviecard.date}</IconButton>}
        title={moviecard.name}
        subheader={moviecard.type}
      />
      <CardMedia
        component="img"
        height="194"
        image={moviecard.image}
        alt={moviecard.name}
      />
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ WebkitMaxInlineSize: 2 }}
        >
          {moviecard.description}
        </Typography>
      </CardContent>

      <Typography textAlign="center">
        <Link to={`/Details/${moviecard.id}`}>
          <LocalMoviesIcon sx={{ color: "black" }} />
        </Link>
      </Typography>
    </Card>
  );
};
export default MovieCard;
