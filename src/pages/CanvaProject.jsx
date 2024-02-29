import Image from 'react-bootstrap/Image';

const CanvaProject = () => {
  return (
    <>
      <p>
        During my internship at Canva, I completed a full stack project to add custom thumbnail images to the Canva website builder. You can view this yourself on the <a href="https://www.canva.com">Canva website</a>. The backend of this project was in Java, and the frontend in ReactJS with MobX.
      </p>
      <Image
          src={ require('../content/canva project.png') }
          width="100%"
          min-height="600"
        />
    </>
  );
}

export default CanvaProject;