import GalleryCarousel from "../components/GalleryCarousel";
import GalleryCarouselPortrait from "../components/GalleryCarouselPortrait";


const Overland = () => {
  const filmPhotos = []
  for (let i = 1; i < 17; i++) {
    filmPhotos.push({index: i, image: require(`../images/overland/${i}.jpg`)});
  }
  const filmPhotosPortrait = []
  for (let i = 1; i < 9; i++) {
    filmPhotosPortrait.push({index: i, image: require(`../images/overland-portrait/${i}.jpg`)});
  }
  const photos = []
  for (let i = 1; i < 10; i++) {
    photos.push({index: i, image: require(`../images/overland-non-film/${i}.jpg`)});
  }
  const photosPortrait = []
  for (let i = 1; i < 12; i++) {
    photosPortrait.push({index: i, image: require(`../images/overland-n-portrait/${i}.jpg`)});
  }
  return (
    <>
      <h5>Film Photos</h5>
      <div className='flex'>
        <GalleryCarousel slides={ filmPhotos } />
        <GalleryCarouselPortrait slides={ filmPhotosPortrait } />
      </div>
      <h5>Other Photos</h5>
      <div className='flex'>
        <GalleryCarouselPortrait slides={ photosPortrait }  />
        <GalleryCarousel slides={ photos } />
      </div>
    </>
  );
}

export default Overland;