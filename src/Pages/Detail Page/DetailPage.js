import React from 'react'
import CrouselSection from './CrouselSection';
import Navbars from '../../Common/NavBar';
import ResidenceSection from './ResidenceSection';
import Amenties from './Amenties';
import FeaturSection from './FeaturSection';
import AgentMap from './AgentMap';
import Footer from '../../Common/Footer';
import BottomBar from "../../Common/BottomNavBar";

const DetailPage = () => {
  return (
    <>
    <Navbars/>
    <BottomBar/>
    <CrouselSection/>
    <ResidenceSection/>
    <Amenties/>
    <FeaturSection/>
    <AgentMap/>
    <Footer/>
    </>
  )
}

export default DetailPage
