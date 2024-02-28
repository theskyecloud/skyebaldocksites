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
            nav: '/data-analysis'
          },
          {
            title: 'Data Analysis with Tableau',
            text: 'I created a small dashboard in Tableau Public. Click here to see more.',
            image: require('../images/tableau.png'),
            nav: '/data-analysis'
          },
          {
            title:'Data Analysis with Excel',
            text: 'I completed a small project in Microsoft Excel. Check it out here.',
            image: require('../images/excel.png'),
            nav: '/data-analysis'
          },
          {
            title:'Capstone Full Stack',
            text: 'My final university project was this full stack discounts web app, using ReactJS and NodeJS.',
            image: require('../content/uberdiscounts.png'),
            nav: '/uber-discounts'
          },
          {
            title:'Messaging Web App with React',
            text: 'A frontend project to create a Slack-like messaging app with React.',
            image: require('../content/slackr.png'),
            nav: '/slackr'
          },
          {
            title:'Property App with Vanilla JS',
            text: 'A frontend project to create an airbnb-like app with vanilla javascript.',
            image: require('../content/airbrb.png'),
            nav: '/airbrb'
          },
          {
            title:'Full Stack Project with Canva',
            text: 'I completed a full stack project with Canva during my internship in 2022-2023.',
            image: require('../content/canva project.png'),
            nav: '/canva-project'
          },
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