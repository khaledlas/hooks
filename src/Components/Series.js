import React from "react";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

function Series() {
  return (
    <div>
      <div style={{ background: "gray" }}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2, background: "gray" }}
          LinkComponent={Link}
          to="/"
        >
          <HomeIcon />
        </IconButton>
      </div>
      <h1 style={{ marginTop: "10vh" }}>
        Vos séries préférées en streaming gratuit
      </h1>
    </div>
  );
}

export default Series;
