import './components.css'

const PortfolioPageReverse = ({ image, desc, title, price, link }) => {

    return (
        <div className="book-page-container">
            
            <div className='book-text'>
                <h2>{ title }</h2>
                <p>{ desc }</p>
                <a href={ link }>Visit this site</a>
                <p>Approximate cost for this kind of website: { price }</p>
            </div>
            <img src={ image } className="portfolio-image"/>
        </div>
    )
  }
  
  export default PortfolioPageReverse