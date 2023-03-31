import '../App.css';
import PortfolioPage from '../components/PortfolioPage';
import PortfolioPageReverse from '../components/PortfolioPageReverse';

function Portfolio() {
  return (
    
      <div className="home-container">
        <h2> Example websites </h2>
        <PortfolioPage 
          image={require('../images/wordpress-site.png')}
          desc="This site is a very basic wordpress blog site using the free version of Wordpress. Customisation goes much further with a paid subscription to Wordpress. I designed it with the idea that the owner is an author, and wants to show off their published books, as well as share their thoughts and ideas.  This site includes some classic wordpress features, like a blog that the owner can add to. This kind of site could easily be adapted for photography, art, or any similar pursuit. This site features 2 single purpose pages and a blog. Suggested pricing assumes a subscription and therefore further customisation." 
          title="A wordpress author's site" 
          link='https://authorpage5.wordpress.com/'
          price="$80"
        />
        <PortfolioPageReverse 
          image={require('../images/wix-site.png')}
          desc="This is a wix business template that I've been customising for an imaginary restaurant. It includes a menu, the idea of ordering online, and a map of where the business is located. This kind of site could easily be adapted for any small business. There are 3 multi-purposed customised pages, with styling applied across." 
          title="A wix small business site" 
          link="https://skyebaldock1.wixsite.com/super-cool-restauran"
          price="$100"
        />
        <PortfolioPage
        image={require('../images/skye-site.png')}
          desc="This site is completely customised and built entirely by me. None of those pesky website builder susbcriptions. Have a look around! This site is 6 singular purpose pages with completely customised styling." 
          title="A custom site - this site!" 
          price="$200"
          link='http://localhost:3000/'
        />
    </div>
  );
}

export default Portfolio;