import React from "react";
import Banner from "../components/Banner";
import bannerImg from "../assets/home_banner_min.png";
import Cards from "../components/Cards";

const Home = () => {
  return (
    <>
      <Banner
        src={bannerImg}
        alt="Image de décoration représentant une falaise en bord de mer"
        className="banner banner__home"
      >
        <h1>
          <span>Chez vous, </span>partout et ailleurs
        </h1>
      </Banner>
      <Cards />
    </>
  );
};

export default Home;
