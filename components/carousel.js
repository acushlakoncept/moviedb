import Image from "next/image";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import Movie from "../pages/movies/[id]";

/* eslint-disable @next/next/no-img-element */
export default function CarouselSlide({images}) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      { images.map(image => (
        <Carousel.Item key={image.id}>
          <img
            className="d-block w-100"
            src={image.url}
            alt={image.id}
          />
          <Carousel.Caption>
            <h3>{image.title}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}

    </Carousel>
  );
}
