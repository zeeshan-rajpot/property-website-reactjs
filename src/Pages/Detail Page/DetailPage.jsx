import React from 'react'
import CrouselSection from './CrouselSection';
import Navbars from '../../Common/NavBar';
import ResidenceSection from './ResidenceSection';
import Amenties from './Amenties';
import FeaturSection from './FeaturSection';
import AgentMap from './AgentMap';
import Footer from '../../Common/Footer';

const DetailPage = () => {
  return (
    <>
    <Navbars/>
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
