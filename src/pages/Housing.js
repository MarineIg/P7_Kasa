import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { SelectedHousingIdContext } from "../contexts/SelectedHousingContext";
import { HousingContext } from "../contexts/HousingContext";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";
import Tag from "../components/Tag";
import Host from "../components/Host";

/**
 * The Housing page.
 * This page displays the details of a selected housing as well as a slideshow and collapse.
 * If the housing is not found, it redirects to the 404 Not Found page.
 * @returns {JSX.Element} The Housing page.
 */

const Housing = () => {
  const data = useContext(HousingContext);
  const { selectedHousingId } = useContext(SelectedHousingIdContext);

  // Find the selected housing in the data
  const selectedHousing = data.find(
    (housing) => housing.id === selectedHousingId
  );

  // If the selected housing is not found, redirect to the 404 Not Found page
  if (!selectedHousing) {
    return <Navigate to="/404" replace />;
  }

  // Map the equipment of the selected housing to JSX element
  const equipments = selectedHousing.equipments.map((equipement, index) => (
    <li key={`${equipement}-${index}`}>{equipement}</li>
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
        <Host
          rating={Number(selectedHousing.rating)}
          host={selectedHousing.host}
        />
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

export default Housing;
