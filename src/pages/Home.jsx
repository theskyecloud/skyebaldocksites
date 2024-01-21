import ScrollMenu from '../components/ScrollMenu';
import About from './About';

const Home = () => {
  return (
    <>
      <About style={{marginBottom: '10%'}} />
      <ScrollMenu
        title='Recent Projects'
        cardContents={ [
          {
            title: 'Data Analysis with Power BI',
            text: 'I built a simple dashboard in Power BI, using Python to help clean the data. Click to read more.',
            image: require('../images/powerbi.png'),
            nav: '/powerbi'
          },
          {
            title: 'Data Analysis with Tableau',
            text: 'I created a small dashboard in Tableau Public. Click here to see more.',
            image: require('../images/tableau.png'),
            nav: '/tableau'
          },
          {
            title:'Data Analysis with Excel',
            text: 'I completed a small project in Microsoft Excel. Check it out here.',
            image: require('../images/excel.png'),
            nav: '/excel'
          }
        ] }
      />
      <ScrollMenu
        title='Recent Adventures'
        cardContents={[
          {
            title: 'Overland Track',
            text: 'I walked the Overland Track! Check it out!',
            image: require('../images/overland.jpg'),
            nav: '/overland'
          }
        ]}
      />
    </>
  );
}

export default Home;