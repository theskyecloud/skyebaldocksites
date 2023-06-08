import '../App.css';
import React from 'react';
import PortfolioPageSimple from '../components/PortfolioPageSimple';
import ArrowButtonLeft from '../components/ArrowButtonLeft';
import ArrowButtonRight from '../components/ArrowButtonRight';

function Portfolio() {

  const [pageNum, setPageNum] = React.useState(0);

  const maxPageNum = 1; // gotta change if add more pages

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

  const page0 = <PortfolioPageSimple 
  title="More coming soon"
  desc="I'm working on lots of things!"
  />

  const page1 = <PortfolioPageSimple
    title="This website!"
    desc="This site was designed and implemented by me.  Have a look around! " 
  />

  const pages = [
    page0,
    page1,
  ]

  return (
    
    <div className="home-container">

      
      <h2> Portfolio </h2>

      <div className="port-container">
        <div className='left-arrow'><ArrowButtonLeft onClick={onClickLeft} className="left-arrow" /></div>
        { pages[pageNum] }
        <div className='right-arrow'><ArrowButtonRight onClick={onClickRight}/></div>
      </div>

    </div>
  );
}

export default Portfolio;