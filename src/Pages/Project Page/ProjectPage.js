import React, { useEffect, useState } from "react";
import NavBar from "../../Common/NavBar";
import Footer from "../../Common/Footer";
import ProjectHero from "../Project Page/ProjectHero";
import NewProject from "../Project Page/NewProject";
import ProjectCard from "../Project Page/ProjectCard";
import axios from "axios"; // Import Axios
import { baseurl } from "../Const";
import MobileFooter from "../../Common/MobileFooter";

// import houseimg from "../../images/jarek-ceborski-jn7uVeCdf6U-unsplash.png";
import BottomBar from "../../Common/BottomNavBar";

const ProjectPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);
 
  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${baseurl}/getAllProject`);
      setProjects(response.data);
      console.log(response.data)
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  return (
    <>

      <ProjectHero />
      <NewProject />
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          img={project.profilePicture}
          delivrydate={project.deliveryYear}
          projectname={project.projectName}
          devlporename={project.developerName}
          bedroom={project.bedroom}
          bathroom={project.bathroom}
          area={project.area}
          location={project.address}
        />
      ))}
      <Footer />
      <MobileFooter/>
    </>
  );
};

export default ProjectPage;
