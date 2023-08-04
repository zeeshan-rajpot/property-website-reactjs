// import React, { useState } from 'react';
// import CoolTabs from 'react-cool-tabs';
// import Uploadproperties from './Uploadproperties';

// const Content1 = () => {
//   return (
//     <div>
//       This is Content1
//     </div>
//   );
// };

// const Example = () => {
//   const [activeTab, setActiveTab] = useState('1');



 
//   return (
//     <div>
//       <CoolTabs
//         tabKey={activeTab}
//         style={{ width: '100%', background: 'white'  }}
//         activeTabStyle={{ background: '#ec6337', color: 'white' }}
//         unActiveTabStyle={{ background: 'white', color: 'black' }}
//         activeLeftTabBorderBottomStyle={{ height: 4 }}
//         activeRightTabBorderBottomStyle={{ height: 4 }}
//         leftTabTitle={<span style={{ fontSize: '16px' }}>Left title</span>}
//         rightTabTitle={<span style={{ fontSize: '16px' }}>Add Property</span>}
//         onTabClick={(tabKey) => setActiveTab(tabKey)}
//         contentTransitionStyle={'transform 0.6s ease-in'}
//         borderTransitionStyle={'all 0.6s ease-in'}
//         leftContent={<Content1 />}
//         rightContent={
    
//             <Uploadproperties />

//         }
//       />
//     </div>
//   );
// };

// export default Example;







import React from 'react'
import { Tabs, TabList, TabPanel, Tab } from 'react-re-super-tabs'
import Uploadproperties from './Uploadproperties';
import CustomTab from './CustomTab';
import investorAnswer from './investorAnswer';

const Example = () => (
  <div>
    <Tabs activeTab='investorAnswer'>
      <TabList>
        {/* <Tab component={CustomTab} label='Info' id='info' /> */}
       <Tab component={CustomTab} label='investorAnswer' id='investorAnswer' />
        <Tab component={CustomTab} label='Uploadproperties' id='Uploadproperties' />
      </TabList>
      <TabList>
        {/* <TabPanel component={Info} id='info' /> */}
        <TabPanel component={investorAnswer} id='investorAnswer' />
        <TabPanel component={Uploadproperties} id='Uploadproperties' />
        {/* <TabPanel component={Uploadproperties} id='Uploadproperties' /> */}
      </TabList>
    </Tabs>
  </div>
)

export default Example