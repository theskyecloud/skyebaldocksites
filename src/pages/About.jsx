import {
  Card
} from 'react-bootstrap';
import AboutText from '../content/AboutText';

const About = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <div className='flex'>
            <Card.Text>
              <AboutText />
            </Card.Text>
            <Card.Img className='profile-img' src={require("../images/skye.jpg")} />
          </div>
        </Card.Body>
      </Card>
      <br />
      
    </>
  );
}

export default About;