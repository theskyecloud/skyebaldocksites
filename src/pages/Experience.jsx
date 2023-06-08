import React from 'react';
import TabPage from '../components/TabPage';
import TabLineHalf from '../components/TabLineHalf';
import TabButtonHalf from '../components/TabButtonHalf';


function Experience() {

  const [panel, setPanel] = React.useState(1);

  const tabEmpty = <TabPage />

  const tab1 =  <TabPage 
  p1="I spent a fantastic summer interning at Canva as a Software Engineer, from November 2022 to February 2023."
  p2="With the support of my team, I completed a full stack project for the Canva website builder that allowed users to choose their link share image. They could upload their own or use a default, a rendering of the first page of their website." 
  p3="As well as learning a lot about software engineering, I also enjoyed getting to know and work with my team, and experience everything that Canva has to offer." />

  const tab2 = <TabPage 
  p1="I've worked in multiple hosspitality jobs and always had a wonderful time with customer service." 
  p2="Through these roles I have been able to develop my communication and teamwork skills - as well as learn to make great cocktails. " />

  

  const tabPage = [
    tabEmpty,
    tab1,
    tab2,
  ];

  return ( 
      <div className="home-container">

      <div className="services">

        <h2>Experience</h2>
        <div className="tabs-container">
          <TabButtonHalf text="Canva" onClick={ () => setPanel(1) } />
          <TabButtonHalf text="Hospitality" onClick={ () => setPanel(2) } />
        </div>

        <div className="tabs-container">
          <TabLineHalf thisPanelNum={1} panelNum={panel} />
          <TabLineHalf thisPanelNum={2} panelNum={panel} />
        </div>

        { tabPage[panel] }

        

        <div className="gap"></div>
        <h4> Most importantly, I'm always looking for new experiences! </h4>

      </div>
      
      
    </div>
        
  );
}

export default Experience;