import React from 'react';
import TabPage from '../components/TabPage';
import TabButton from '../components/TabButton';
import TabLine from '../components/TabLine';


function WebsiteTypes() {

  const [panel, setPanel] = React.useState(1);

  const tabEmpty = <TabPage />

  const tab1 =  <TabPage 
  p1="Wix is a great option to develop your website! It has lots of templates to make the development process quicker and easier. It also includes lots of features, like adding a shop to your site, allowing people to make bookings, or including your location on google. I'd recommend a wix website if you're a business, as having all of these features in-built makes the development process quicker, easier, and cheaper. Wix is also great if you might be editing your site regularly, as it has a simple user interface so that you don't need to know anything about coding and can update your content easily." />

  const tab2 = <TabPage 
  p1="Wordpress is a popular platform for website development. It also has lots of templates to make the development process quicker, and has in-built features that make it easy do things such as blogging and marketing. Wordpress is a little bit more painful to develop with, but would also be easy to edit without knowing anything about coding. You would most likely have to pay for a Wordpress subscription before I could customise your website, as most customisation options are no accessible through the free version :(" />

  const tab3 = <TabPage 
  p1="Shopify is the best choice if you are looking to sell things, as that is exactly what it is for! 
  You can do this through other platforms, but if your shop is your main element, Shopify is probably the way to go. And if you just want to add a shop onto a website on another platform, Shopify is easy to link in." />

  const tab4 = <TabPage 
  p1="I can build you a fully customised website without any of the above platforms. If you want a website that doesn't look anything like anybody else's and that you can say was custom made for you, this is the way to go! I'd highly recommend it if you want a simple website just to get your info on the internet. " />

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

            <h2>Website types</h2>

            <div className="tabs-container">
              <TabButton text="Wix" onClick={ () => setPanel(1) } />
              <TabButton text="Wordpress" onClick={ () => setPanel(2) } />
              <TabButton text="Shopify" onClick={ () => setPanel(3) } />
              <TabButton text="Custom!" onClick={ () => setPanel(4) } />
            </div>

            <div className="tabs-container">
              <TabLine thisPanelNum={1} panelNum={panel} />
              <TabLine thisPanelNum={2} panelNum={panel} />
              <TabLine thisPanelNum={3} panelNum={panel} />
              <TabLine thisPanelNum={4} panelNum={panel} />
            </div>

            { tabPage[panel] }


            <div className="gap"></div>
            <h4> If you're interested in a site built on a different platform, let me know! </h4>

          </div>
         
          
        </div>
    );
}

export default WebsiteTypes;