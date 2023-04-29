import React from 'react'
// import { Container ,Row , Col } from "react-bootstrap/Container";

import AssociateHero from './AssociateHero'
import OurAssociateImg from './OurAssociateImg'
// import PropCard from '../PropertyCard/PropCard'
// import ProjectCard from '../ProjectCard/ProjectCard'
import Associatefootertext from './Associatefootertext'
import Navbars from '../../Common/NavBar'
import Footer from '../../Common/Footer'


const Acosites = () => {
  return (
    <>
    <Navbars/>
<AssociateHero/>
<OurAssociateImg/>
{/* <PropCard/>
<ProjectCard/> */}
<Associatefootertext/>
<Footer/>
    </>
  )
}

export default Acosites
