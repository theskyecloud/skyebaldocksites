import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PortfolioPage from './PortfolioPage';
import TabPanel from './TabPanel';
import { borderLeft } from '@mui/system';


function IntroTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const tabStyle = {
        textColor:'black',
        textWeight:'bold',
        fontFamily:'Lucida Grande',
        width:'50%',
    }

    return (
        <div >
            <Tabs value={value} onChange={handleChange}>
                <Tab label="Wix Small Business"  sx={ tabStyle } /> 
                <Tab label="Wordpress Author's Site" sx={ tabStyle }  />
            </Tabs>
            <TabPanel value={value} index={0}>
            <PortfolioPage 
                image={require('../images/wix-site.png')}
                desc="This is a wix business template I've been customising. Wix is a great option if you're a business and is much more customisable for a much lower cost than wordpress." 
                title="A wix small business site" 
                link="https://skyebaldock1.wixsite.com/super-cool-restauran"
                price="$100"
            />
            </TabPanel>
            <TabPanel value={value} index={1}>
            <PortfolioPage 
                image={require('../images/wordpress-site.png')}
                desc="This site is a very basic wordpress blog site using the free version of wordpress. To get much value out of your site, a paid subscription will probably be needed, which would allow for much more customisiation and a domain without 'wordpress' in it. This site gives an idea of how some of the basic features might be used." 
                title="A wordpress author site" 
                link='https://authorpage5.wordpress.com/'
                price="$50"
            />
            </TabPanel>
        </div>
    );
}

export default IntroTabs;