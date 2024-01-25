import Image from 'react-bootstrap/Image';

const Tableau = () => {
  return (
    <>
      <p>
        The pdf below displays a dashboard I created with Tableau Public from data taken from <a href='http://insideairbnb.com/get-the-data/'>here</a>. I imported and related data, performed calculations on it, and created a few graphs and put them together to inform a view of the Airbnb market in Tasmania. 
      </p>
      <Image src="../content/tasmania-airbnb-dashboard.jpg"  width='100%' />
    </>
  );
}

export default Tableau;