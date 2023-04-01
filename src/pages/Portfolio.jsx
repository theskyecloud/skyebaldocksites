import '../App.css';
import React from 'react';
import PortfolioPage from '../components/PortfolioPage';
import PortfolioPageReverse from '../components/PortfolioPageReverse';
import ArrowButtonLeft from '../components/ArrowButtonLeft';
import ArrowButtonRight from '../components/ArrowButtonRight';

function Portfolio() {

  const [pageNum, setPageNum] = React.useState(0);

  const maxPageNum = 2;

  const onClickRight = () => {
    var newPageNum;
    if (pageNum === maxPageNum) {
      newPageNum = 0;
    } else {
      newPageNum = pageNum + 1;
    }
    
    setPageNum(newPageNum);
  }

  const onClickLeft = () => {
    var newPageNum;
    if (pageNum === 0) {
      newPageNum = maxPageNum;
    } else {
      newPageNum = pageNum - 1;
    }
    
    setPageNum(newPageNum);
  }

  const page0 = <PortfolioPage 
  image={require('../images/wordpress-site.png')}
  desc="This site is a very basic wordpress blog site using the free version of Wordpress. Customisation goes much further with a paid subscription to Wordpress. I designed it with the idea that the owner is an author, and wants to show off their published books, as well as share their thoughts and ideas.  This site includes some classic wordpress features, like a blog that the owner can add to. This kind of site could easily be adapted for photography, art, or any similar pursuit. This site features 2 single purpose pages and a blog. Suggested pricing assumes a subscription and therefore further customisation." 
  title="A wordpress author's site" 
  link='https://authorpage5.wordpress.com/'
  price="$80"
  />

  const page1 = <PortfolioPageReverse 
  image={require('../images/wix-site.png')}
  desc="This is a wix business template that I've been customising for an imaginary restaurant. It includes a menu, the idea of ordering online, and a map of where the business is located. This kind of site could easily be adapted for any small business. There are 3 multi-purposed customised pages, with styling applied across." 
  title="A wix small business site" 
  link="https://skyebaldock1.wixsite.com/super-cool-restauran"
  price="$100"
  />

  const page2 = <PortfolioPage
  image={require('../images/skye-site.png')}
    desc="This site is completely customised and built entirely by me. None of those pesky website builder susbcriptions. Have a look around! This site is 6 singular purpose pages with completely customised styling." 
    title="A custom site - this site!" 
    price="$200"
    link='http://www.skyebaldock.au'
  />

  const pages = [
    page0,
    page1,
    page2,
  ]

  return (
    
    <div className="home-container">

      
    <h2> Example websites </h2>

      <div className="port-container">
        <ArrowButtonLeft onClick={onClickLeft}/>
        { pages[pageNum] }
        <ArrowButtonRight onClick={onClickRight}/>
      </div>

    </div>
  );
}

export default Portfolio;