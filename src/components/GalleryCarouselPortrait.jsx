import { useState } from 'react';
import {
  Carousel,
  Image
} from 'react-bootstrap/';

const GalleryCarouselPortrait = ({ slides }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel variant='dark' activeIndex={index} onSelect={handleSelect} style={{ marginBottom: '15%', maxWidth: '450px', marginLeft: '10px' }}>
      {
        slides.map((slide) => {
          return <Carousel.Item id={`overland-portrait-${slide.index}`}>
            <Image src={ slide.image } fluid style={{ maxheight: '600px' }} />    
          </Carousel.Item>
        })
      }
    </Carousel>
  );
}

export default GalleryCarouselPortrait;