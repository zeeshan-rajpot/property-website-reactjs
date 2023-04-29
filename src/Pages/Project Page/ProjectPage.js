import React from "react";
import NavBar from "../../Common/NavBar";
import Footer from "../../Common/Footer";
import ProjectHero from "../Project Page/ProjectHero";
import NewProject from "../Project Page/NewProject";
import ProjectCard from "../Project Page/ProjectCard";

import houseimg from "../../images/jarek-ceborski-jn7uVeCdf6U-unsplash.png";

const ProjectPage = () => {
  return (
    <>
      <NavBar />
      <ProjectHero />
     
      <NewProject />
      <ProjectCard
        img={houseimg}
        delivrydate="2026"
        projectname="Sharjah Water City"
        devlporename="Ali Raza"
        bedroom="2 bedroom"
        bathroom="2 bathroom"
        area="6.617 sqft"
        location="Made Residences by ARTAR, Downtown Dubai"
      />
      <ProjectCard
        img={houseimg}
        delivrydate="2026"
        projectname="Sharjah Water City"
        devlporename="Ali Raza"
        bedroom="2 bedroom"
        bathroom="2 bathroom"
        area="6.617 sqft"
        location="Made Residences by ARTAR, Downtown Dubai"
      />
      <ProjectCard
        img={houseimg}
        delivrydate="2026"
        projectname="Sharjah Water City"
        devlporename="Ali Raza"
        bedroom="2 bedroom"
        bathroom="2 bathroom"
        area="6.617 sqft"
        location="Made Residences by ARTAR, Downtown Dubai"
      />
      <ProjectCard
        img={houseimg}
        delivrydate="2026"
        projectname="Sharjah Water City"
        devlporename="Ali Raza"
        bedroom="2 bedroom"
        bathroom="2 bathroom"
        area="6.617 sqft"
        location="Made Residences by ARTAR, Downtown Dubai"
      />
      <ProjectCard
        img={houseimg}
        delivrydate="2026"
        projectname="Sharjah Water City"
        devlporename="Ali Raza"
        bedroom="2 bedroom"
        bathroom="2 bathroom"
        area="6.617 sqft"
        location="Made Residences by ARTAR, Downtown Dubai"
      />
      <Footer />
    </>
  );
};

export default ProjectPage;
