import {
  Card,
  Button
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

// cardContents is a list of js objects containing title, text, image and nav
const ScrollMenu = ({ title, cardContents }) => {
  const navigate = useNavigate();
  return (
    <>
      <h4> {title} </h4>
      <div className='scroll-menu'>
      {
        cardContents.map((card) => {
          return <Button id={card.title} onClick={() => navigate(card.nav)} variant='outline-secondary' className='scroll-menu-button' style={{ marginRight: '20px'}}>
            <Card className='scroll-menu-card' style={{ width: '18rem', border: 'none', backgroundColor: 'none' }}>
              <Card.Img variant='top' src={card.image} />
              <Card.Body>
                <Card.Title>{ card.title }</Card.Title>
                <Card.Text>
                  { card.text }
                </Card.Text>
              </Card.Body>
            </Card>
          </Button>
        })
      }
      </div>
    </>
  );
}

export default ScrollMenu;