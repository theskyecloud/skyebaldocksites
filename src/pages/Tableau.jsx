

const Tableau = () => {
  return (
    <>
      <p>
        The embedded pdf displays a dashboard I created with Tableau Public from data taken from <a href='http://insideairbnb.com/get-the-data/'>here</a>. I imported and related data, performed calculations on it, and created a few graphs and put them together to inform a view of the Airbnb market in Tasmania. 
      </p>
      <iframe
      src="../content/Tasmania Airbnb Dashboard.pdf"
      width="100%"
      height="600"
      frameborder="0"
    />
    </>
  );
}

export default Tableau;