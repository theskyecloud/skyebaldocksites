import { Document, Page } from 'react-pdf';

const PdfViewer = ({ path }) => {
  return (
    <div>
      <Document file={path} >
        <Page pageNumber={1} />
      </Document>
    </div>
  )
}

export default PdfViewer;