import React from 'react';
import TabPage from '../components/TabPage';
import TabButton from '../components/TabButton';
import TabLine from '../components/TabLine';


function Skills() {

  const [panel, setPanel] = React.useState(1);

  const tabEmpty = <TabPage />

  const tab1 =  <TabPage 
  p1="Java, C, Python, ExpressJS and NodeJS, I can even code a bit of MIPS assembly, and I'm always learning new languages."
  p2="Through my degree and industry experience I have learnt a solid foundation in backend engineering - though I am constantly learning more! I love the satisfaction of a well designed system and well-written code. Intelligent data structures and algorithms are my favourites. " 
  p3="I am skilled in problem solving, working in teams or individually to find and design solutions, and efficient debugging."
  p4="" />

  const tab2 = <TabPage 
  p1="HTML, CSS, JavaScript, Typescript, React, various component libraries, and continuing to learn more." 
  p2="In industry experience has taught me to learn and develop quickly in frontend. I love creating my own components, and this website has been developed with no component libraries as a result."
  p3="Frontend is super fun, because I can see the results of my efforts immediately and in colour. I always get to combine with my design skills. " />

  const tab3 = <TabPage 
  p1="I am currently working towards getting my AWS cloud practioner qualification. This website has been developed using AWS, and I have experimented with databases, simple backends, and authentication using their services." />

  const tab4 = <TabPage p1="This is where I get to be creative! With a basic (and developing) understanding of simple UI/UX principles I love putting together unique and creative designs." />

  const tabPage = [
    tabEmpty,
    tab1,
    tab2,
    tab3,
    tab4
  ];

  return ( 
      <div className="home-container">

      <div className="services">

        <h2>Skills</h2>
        <div className="tabs-container">
          <TabButton text="Backend" onClick={ () => setPanel(1) } />
          <TabButton text="Frontend" onClick={ () => setPanel(2) } />
          <TabButton text="AWS" onClick={ () => setPanel(3) } />
          <TabButton text="Design" onClick={ () => setPanel(4) } />
        </div>

        <div className="tabs-container">
          <TabLine thisPanelNum={1} panelNum={panel} />
          <TabLine thisPanelNum={2} panelNum={panel} />
          <TabLine thisPanelNum={3} panelNum={panel} />
          <TabLine thisPanelNum={4} panelNum={panel} />
        </div>

        { tabPage[panel] }

        

        <div className="gap"></div>

      </div>
      
      
    </div>
        
  );
}

export default Skills;