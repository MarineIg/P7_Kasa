import React from "react";
import Banner from "../components/Banner";
import bannerImg from "../assets/home_banner_min.png";

const Home = () => {
  return (
    <>
      <Banner
        src={bannerImg}
        alt="Image de décoration représentant une falaise en bord de mer"
      >
        <h1>
          <span>Chez vous, </span>partout et ailleurs
        </h1>
      </Banner>
      <div>div2</div>
    </>
  );
};

export default Home;
