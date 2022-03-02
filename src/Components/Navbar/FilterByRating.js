import { Rating, Typography } from "@mui/material";
import React from "react";
import "./FilterByRating.css";

const FilterByRating = ({ byRating, setByRating }) => {
  return (
    <div className="rating">
      <Typography component="legend">Filtrer par note</Typography>
      <Rating
        name="simple-controlled"
        value={byRating}
        onChange={(event, newValue) => {
          setByRating(newValue);
        }}
      />
    </div>
  );
};

export default FilterByRating;
