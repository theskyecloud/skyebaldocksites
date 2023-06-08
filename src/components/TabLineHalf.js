const TabLineHalf = ( { thisPanelNum, panelNum }  ) => {

  return (
    <>{ panelNum===thisPanelNum ? <div className="tab-line-half" /> : <div className="empty-tab-line-half" /> }</>
  );
}


export default TabLineHalf