import React from "react";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import data from "../data/HousingData.json";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";
import Tag from "../components/Tag";
import Host from "../components/Host";

const Location = () => {
  const { id } = useParams();
  const selectedHousing = data.find((location) => location.id === id);
  if (!selectedHousing) {
    return <Navigate to="/404" replace />;
  }

  const equipments = selectedHousing.equipments.map((i, index) => (
    <li key={index}>{i}</li>
  ));

  return (
    <>
      <Slideshow pictures={selectedHousing.pictures} />
      <div className="housing">
        <div className="housing__location">
          <h2>{selectedHousing.title}</h2>
          <p>{selectedHousing.location}</p>
          <Tag tags={selectedHousing.tags} />
        </div>
        <Host rating={selectedHousing.rating} host={selectedHousing.host} />
      </div>

      <div className="housing__collapse">
        <Collapse
          title="Description"
          borderRadius="10px"
          fontSize="18px"
          height="52px"
        >
          <p>{selectedHousing.description}</p>
        </Collapse>
        <Collapse
          title="Équipements"
          borderRadius="10px"
          fontSize="18px"
          height="52px"
        >
          <ul>{equipments}</ul>
        </Collapse>
      </div>
    </>
  );
};

export default Location;
