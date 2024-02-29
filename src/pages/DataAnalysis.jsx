import Image from 'react-bootstrap/Image';

const DataAnalysis = () => {
  return (
    <>
      <div marginBottom='20px' >
        <h3>MS Excel</h3>
        <p>
          This embedded workbook demonstrates some basic data analysis and presents a dashboard I created. THe data was acquired <a href='https://github.com/AlexTheAnalyst/Excel-Tutorial/blob/main/Excel%20Project%20Dataset.xlsx'>here</a>. The raw data is in bike_buyers, my cleaned version of the data is in working data, some pivot tables are in graphs, and the final dashboard is in dashboard. 
        </p>
        <iframe
          src="https://onedrive.live.com/embed?resid=59E4C5BE477FA7D6%211784&authkey=!AJeZmIKi6DvyDWw&em=2"
          width="100%"
          height="600"
          frameborder="0"
        />
      </div>
      <div marginBottom='20px' >
        <h3>Power BI</h3>
        <p>
          The below shows a screenshot of a dashboard I created from data taken from <a href='https://github.com/AlexTheAnalyst/Power-BI/blob/main/Power%20BI%20-%20Final%20Project.xlsx'>here</a>. I cleaned the data in Power BI, wrote Python scripts for efficiency, and created this dashboard. It works much better on Power BI, but due to the fact that I do not have a business I had to export it to PDF to share it. It was very interesting data to me, personally, and I drew many unexpected conclusions whilst creating this dashboard.
        </p>
        <Image
          src={ require('../content/data-professionals-survey-dashboard.jpg') }
          width="100%"
          min-height="600"
        />
      </div>
      <div marginBottom='20px' >
        <h3>Tableau</h3>
        <p>
          The pdf below displays a dashboard I created with Tableau Public from data taken from <a href='http://insideairbnb.com/get-the-data/'>here</a>. I imported and related data, performed calculations on it, and created a few graphs and put them together to inform a view of the Airbnb market in Tasmania. 
        </p>
        <Image
          src={ require('../content/tasmania-airbnb-dashboard.jpg') }
          width="100%"
          min-height="600"
        />
      </div>
    </>
  );
}

export default DataAnalysis;