import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/HousingData.json";
import Collapse from "../components/Collapse";

const Locations = () => {
  const { id } = useParams();
  const selectedLocation = data.find((location) => location.id === id);
  const equipments = selectedLocation.equipments.map((i, index) => (
    <li key={index}>{i}</li>
  ));

  return (
    <div className="location__collapse">
      <Collapse
        title="Description"
        borderRadius="10px"
        fontSize="18px"
        height="52px"
      >
        <p>{selectedLocation.description}</p>
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
  );
};

export default Locations;
