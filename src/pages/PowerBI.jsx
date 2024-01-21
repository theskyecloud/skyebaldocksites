import { Document } from 'react-pdf';

const PowerBI = () => {
  return (
    <>
      <p>
        The displayed pdf shows a dashboard I created from data taken from <a href='https://github.com/AlexTheAnalyst/Power-BI/blob/main/Power%20BI%20-%20Final%20Project.xlsx'>here</a>. I cleaned the data in Power BI, wrote Python scripts for efficiency, and created this dashboard. It works much better on Power BI, but due to the fact that I do not have a business I had to export it to PDF to share it. It was very interesting data to me, personally, and I drew many unexpected conclusions whilst creating this dashboard.
      </p>
      <Document
        file="../content/Data Professionals Sruvey Dashboard.pdf"
        width="100%"
      />
    </>
  );
}

export default PowerBI;