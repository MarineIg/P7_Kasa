import { useContext } from "react";
import { HousingContext } from "../contexts/HousingContext";
import Card from "./Card";

/**
 * This component displays a list of cards with information about different housing. The data for the cards is
 * imported from a JSON file.
 * @returns {JSX.Element} The Cards component.
 */

const Cards = () => {
  const data = useContext(HousingContext);
  return (
    <div className="gallery">
      {data.map((housing) => (
        <Card
          key={housing.id}
          id={housing.id}
          src={housing.cover}
          title={housing.title}
        />
      ))}
    </div>
  );
};

export default Cards;
