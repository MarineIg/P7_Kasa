import bannerImg from "../assets/home_banner_min.png";
import Banner from "../components/Banner";
import Cards from "../components/Cards";

/**
 * Home page of site.
 * This page displays a banner with an image and a title as well as a list of cards with their titles of all
 * available rentals.
 * @returns {JSX.Element} The home page.
 */

const Home = () => {
  return (
    <>
      <Banner src={bannerImg} className="banner banner__home">
        <h1>
          <span>Chez vous, </span>partout et ailleurs
        </h1>
      </Banner>
      <Cards />
    </>
  );
};

export default Home;
