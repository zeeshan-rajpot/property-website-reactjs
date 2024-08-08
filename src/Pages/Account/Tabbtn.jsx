

import React from 'react'
import { Tabs, TabList, TabPanel, Tab } from 'react-re-super-tabs'
import RequestedProperties from './RequestedProperties'
import CustomTab from './Tab'
// import Uploadproperties from '../UploadProperty/Uploadproperties'
import Acounnt from './Acounnt'


const Tabbtn = () => (
  <div>
    <Tabs activeTab='RequestedProperties'>
      <TabList>
        {/* <Tab component={CustomTab} label='Info' id='info' /> */}
       <Tab component={CustomTab} label='RequestedProperties' id='RequestedProperties' />
        <Tab component={CustomTab} label='Acounnt' id='Acounnt' />
      </TabList>
      <TabList>
        {/* <TabPanel component={Info} id='info' /> */}
        <TabPanel component={RequestedProperties} id='RequestedProperties' />
        <TabPanel component={Acounnt} id='Acounnt' />
        {/* <TabPanel component={Uploadproperties} id='Uploadproperties' /> */}
      </TabList>
      
    </Tabs>
  </div>
)

export default Tabbtn