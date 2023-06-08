import './components.css'

const PortfolioPageSimple = ({ desc, title }) => {

    return (
        <div className="book-page-container">
            
            <div className='book-text'>
                <h2>{ title }</h2>
                <p>{ desc }</p>
            </div>
        </div>
    )
  }
  
  export default PortfolioPageSimple