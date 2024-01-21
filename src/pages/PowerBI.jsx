

const PowerBI = () => {
  return (
    <>
      <p>
        The embedded pdf shows a dashboard I created from data taken from <a href='https://github.com/AlexTheAnalyst/Power-BI/blob/main/Power%20BI%20-%20Final%20Project.xlsx'>here</a>. I cleaned the data in Power BI, wrote Python scripts for efficiency, and created this dashboard. It works much better on Power BI, but due to the fact that I do not have I business I had to export it to PDF to share it. It was very interesting data to me, personally, and I drew many unexpected conclusions whilst creating this dashboard.
      </p>
      <iframe
      src="../content/Data Professionals Sruvey Dashboard.pdf"
      width="100%"
      height="600"
      frameborder="0"
    />
    </>
  );
}

export default PowerBI;