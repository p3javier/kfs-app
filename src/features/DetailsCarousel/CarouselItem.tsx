import React from "react";
import { Paper, Button } from "@mui/material";

const CarouselItem = (props: { item: string }) => {
  const { item } = props;
  return (
    <Paper>
      <img src={item} alt="carousel-image" />
    </Paper>
  );
};

export default CarouselItem;
