import React from 'react';
import TabPage from '../components/TabPage';
import TabButton from '../components/TabButton';
import TabLine from '../components/TabLine';


function Services() {

  const [panel, setPanel] = React.useState(1);

  const tabEmpty = <TabPage />

  const tab1 =  <TabPage 
  p1="I will work with you to develop a website that you love!"
  p2="The process begins with designing. Whether you already know exactly what you want or aren't quite sure yet, I'll work with you to develop the perfect design. Depending on the platform, there will be a mockup, so that you can say yay or nay before I get started. Then you get to sit back and relax whilst I develop your site." 
  p3="For any site I build for you, my service includes showing you how to edit the content of your site yourself so that you don't need to get someone in to add a comma! "
  p4="The process will be slightly different depending on how you want your website built. No matter what, your customisations will include a colour scheme and font family perfect for your site! Checkout the Website Types page to learn more!" />

  const tab2 = <TabPage 
  p1="The first thing I'll do is take a look at your current website to ensure I have everything I need to edit it. That way, if we need to contact a previous developer for information, we won't be held up, since step 2 is designing! We'll work together to clarify what changes need to be made, and then I'll make them!" 
  p2="Again, this process will be slightly different depending on your website's platform. If your website has been developed in a way that isn't listed in Website Types, contact me so that we can discuss your website's needs!" />

  const tab3 = <TabPage 
  p1="If you have a wonderful website, but it was built a year ago and now you need to update the content and you don't know how, this is your service! For a flat fee of $50, following an initial consultation, I'll show you how to edit your site so that you don't have to pay someone everytime you want to update your content." />

  const tab4 = <TabPage p1="Want something that's not here?" p2="Let me know what you need, and I'll let you know if I can do it." />

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

        <h2>Services</h2>
        <div className="tabs-container">
          <TabButton text="Website building" onClick={ () => setPanel(1) } />
          <TabButton text="Website editing" onClick={ () => setPanel(2) } />
          <TabButton text="Do your own updating!" onClick={ () => setPanel(3) } />
          <TabButton text="Other?" onClick={ () => setPanel(4) } />
        </div>

        <div className="tabs-container">
          <TabLine thisPanelNum={1} panelNum={panel} />
          <TabLine thisPanelNum={2} panelNum={panel} />
          <TabLine thisPanelNum={3} panelNum={panel} />
          <TabLine thisPanelNum={4} panelNum={panel} />
        </div>

        { tabPage[panel] }

        

        <div className="gap"></div>
        <h4> To get an idea of pricing, checkout my Portfolio page. It has approximate costs for each of the example websites. </h4>

      </div>
      
      
    </div>
        
  );
}

export default Services;