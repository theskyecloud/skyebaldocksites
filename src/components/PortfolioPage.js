import './components.css'

const PortfolioPage = ({ image, desc, title, price, link }) => {

    return (
        <div className="book-page-container">
            
            <img src={ image } className="portfolio-image"/>
            <div className='book-text'>
                <h2>{ title }</h2>
                <p>{ desc }</p>
                <a href={ link }>Visit this site</a>
            </div>
        </div>
    )
  }
  
  export default PortfolioPage