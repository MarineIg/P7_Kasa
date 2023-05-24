import React from "react";
import Banner from "../components/Banner";
import bannerImg from "../assets/about_banner_min.png";
import Collapse from "../components/Collapse";
import collapseData from "../data/collapseData";

const About = () => {
  return (
    <>
      <Banner src={bannerImg} className="banner" />
      <div className="about">
        {collapseData.map((collapse) => (
          <Collapse key={collapse.id} title={collapse.title}>
            <p>{collapse.description}</p>
          </Collapse>
        ))}
      </div>
    </>
  );
};

export default About;
