import data from "../data/HousingData.json";
import Card from "./Card";

/**
 * This component displays a list of cards with information about different housing. The data for the cards is
 * imported from a JSON file.
 * @returns {JSX.Element} The Cards component.
 */

const Cards = () => {
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
