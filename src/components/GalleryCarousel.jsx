import { useState } from 'react';
import {
  Carousel,
  Image
} from 'react-bootstrap/';

const GalleryCarousel = ({ slides }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel variant='dark' activeIndex={index} onSelect={handleSelect} style={{ marginBottom: '15%', maxWidth: '700px', marginLeft: '10px' }}>
      {
        slides.map((slide) => {
          return <Carousel.Item id={`overland-${slide.index}`}>
            <Image src={slide.image} fluid />    
          </Carousel.Item>
        })
      }
    </Carousel>
  );
}

export default GalleryCarousel;