import React from "react";
import Carousel from "react-material-ui-carousel";
import CarouselItem from "./CarouselItem";

const DetailsCarousel = (props: { items?: string[] }) => {
  const { items } = props;
  return (
    <Carousel>
      {items ? items.map((item) => <CarouselItem item={item} />) : <div></div>}
    </Carousel>
  );
};

export default DetailsCarousel;
