import PdfViewer from "../components/PdfViewer";


const Tableau = () => {
  return (
    <>
      <p>
        The pdf below displays a dashboard I created with Tableau Public from data taken from <a href='http://insideairbnb.com/get-the-data/'>here</a>. I imported and related data, performed calculations on it, and created a few graphs and put them together to inform a view of the Airbnb market in Tasmania. 
      </p>
      <PdfViewer path="../content/tasmania-airbnb-dashboard.pdf" />
    </>
  );
}

export default Tableau;