import { createContext } from "react";
import data from "../data/HousingData.json";

// The HousingContext provides access to the housing data.
export const HousingContext = createContext(data);

/**
 * The HousingProvider component provides the housing data to its children components.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The children components.
 * @returns {JSX.Element} The HousingProvider component.
 */
const HousingProvider = ({ children }) => {
  return (
    <HousingContext.Provider value={data}>{children}</HousingContext.Provider>
  );
};

export default HousingProvider;
