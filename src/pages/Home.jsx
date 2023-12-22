import ScrollMenu from '../components/ScrollMenu';

const Home = () => {
  return (
    <>
      <h2 style={{marginBottom: '10%'}}>Hola</h2>
      <ScrollMenu
        title='Recent Projects'
        cardContents={ [
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