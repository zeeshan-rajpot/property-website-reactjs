

import React from 'react'
import { Tabs, TabList, TabPanel, Tab } from 'react-re-super-tabs'
import RequestedProperty from './RequestedProperty'
import TabBar from './Tab'
// import Uploadproperties from '../UploadProperty/Uploadproperties'
// import Acounnt from './Acounnt'
import Notifcation from './Notifcation'
import Account from '../Account/Acounnt'


const Tabbtn = () => (
  <div  style={{marginTop:'20px' }}>
    <Tabs   activeTab='RequestedProperty'>
      <TabList className=" TabborderRadius"   >
       <Tab component={TabBar} label='Requested Properties' id='RequestedProperty' />
        <Tab component={TabBar} label='Account' id='Account' />
        <Tab component={TabBar} label='Notifcation' id='Notifcation' />
      </TabList>
      <TabList>
        <TabPanel component={Notifcation} id='Notifcation' />
        <TabPanel component={RequestedProperty} id='RequestedProperty' />
        <TabPanel component={Account} id='Account' />
        {/* <TabPanel component={Uploadproperties} id='Uploadproperties' /> */}
      </TabList>
      
    </Tabs>
  </div>
)

export default Tabbtn