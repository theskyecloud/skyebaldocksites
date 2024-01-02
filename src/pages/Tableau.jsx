

const Tableau = () => {
  return (
    <>
      <p>
        The embedded Tableau Public view displays a dashboard I created from data taken from <a href='http://insideairbnb.com/get-the-data/'>here</a>. I imported and related data, performed calculations on it, and created a few graphs and put them together to inform a view of the Airbnb market in Tasmania. 
      </p>
      <iframe
      src="https://public.tableau.com/shared/Y8TYSJY52?:display_count=n&:origin=viz_share_link"
      width="100%"
      height="600"
      frameborder="0"
      />
    </>
  );
}

export default Tableau;