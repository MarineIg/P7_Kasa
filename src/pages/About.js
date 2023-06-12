import bannerImg from "../assets/about_banner_min.png";
import collapseData from "../data/collapseData";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";

/**
 * About page of site.
 * This page displays a banner image and list of collapse sections with information.
 * @returns {JSX.Element} The about page.
 */

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
