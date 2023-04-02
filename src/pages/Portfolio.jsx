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
  desc="This site was designed for an imaginary author, who wants to show off their published books, as well as share their thoughts and ideas through a blog.  This kind of site could easily be adapted for photography, art, or any similar pursuit. This site uses the free version of Wordpress, customisation can go much further with a paid subscription. " 
  title="A wordpress author's site" 
  link='https://authorpage5.wordpress.com/'
  price="$100"
  />

  const page1 = <PortfolioPageReverse 
  image={require('../images/wix-site.png')}
  desc="This is a wix business template that I've been customising for an imaginary restaurant. It includes a menu, online booking, and a map to show where the business is located. This kind of site could be adapted for any small business." 
  title="A wix small business site" 
  link="https://skyebaldock1.wixsite.com/super-cool-restauran"
  price="$150"
  />

  const page2 = <PortfolioPage
  image={require('../images/skye-site.png')}
    desc="This site is completely customised and built entirely by me. None of those pesky website builder susbcriptions. Have a look around! " 
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
        <div className='left-arrow'><ArrowButtonLeft onClick={onClickLeft} className="left-arrow" /></div>
        { pages[pageNum] }
        <div className='right-arrow'><ArrowButtonRight onClick={onClickRight}/></div>
      </div>

    </div>
  );
}

export default Portfolio;