import React from 'react'
import CrouselSection from './CrouselSection';
import Navbars from '../../Common/NavBar';
import ResidenceSection from './ResidenceSection';
// import { useParams } from "react-router-dom";
import Amenties from './Amenties';
// import FeaturSection from './FeaturSection';
import AgentMap from './AgentMap';
import Footer from '../../Common/Footer';
import BottomBar from "../../Common/BottomNavBar";
import Crouseldet from './Crouseldet';
import MobileFooter from '../../Common/MobileFooter'

const DetailPage = () => {
  // const { id } = useParams();
  return (
    <>

    {/* <CrouselSection/> */}
    <Crouseldet/>
    <ResidenceSection />
    <Amenties/>
    {/* <FeaturSection/> */}
    <AgentMap/>
    
    <Footer/>
    <MobileFooter/>
    </>
  )
}

export default DetailPage
