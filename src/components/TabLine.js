const TabLine = ( { thisPanelNum, panelNum }  ) => {

  return (
    <>{ panelNum===thisPanelNum ? <div className="tab-line" /> : <div className="empty-tab-line" /> }</>
  );
}


export default TabLine