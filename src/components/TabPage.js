import "./components.css"

const TabPage = ( { p1, p2, p3, p4}  ) => {

    return (
        <div className="tab-page">
            <div className="gap"></div>
            <p>{ p1 }</p>
            <p>{ p2 }</p>
            <p>{ p3 }</p>
            <p>{ p4 }</p>
        </div>
    )
  }
  
  export default TabPage