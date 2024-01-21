import { Document, Page } from 'react-pdf';

const PowerBI = () => {
  const PDFViewer = () => {
    const pdfURL = '../content/Data Professionals Sruvey Dashboard.pdf';
    return (
      <div>
        <Document file={pdfURL} >
          <Page pageNumber={1} />
        </Document>
      </div>
    )
  }
  
  return (
    <>
      <p>
        The displayed pdf shows a dashboard I created from data taken from <a href='https://github.com/AlexTheAnalyst/Power-BI/blob/main/Power%20BI%20-%20Final%20Project.xlsx'>here</a>. I cleaned the data in Power BI, wrote Python scripts for efficiency, and created this dashboard. It works much better on Power BI, but due to the fact that I do not have a business I had to export it to PDF to share it. It was very interesting data to me, personally, and I drew many unexpected conclusions whilst creating this dashboard.
      </p>
      <PdfViewer />
    </>
  );
}

export default PowerBI;