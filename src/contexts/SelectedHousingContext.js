import { createContext, useState } from "react";

// The SelectedHousingIdContext provides access to the selected housing ID
export const SelectedHousingIdContext = createContext();

/**
 * The SelectedHousingIdProvider component provides the selected housing ID
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The children components.
 * @returns {JSX.Element} The SelectedHousingIdProvider component.
 */

const SelectedHousingIdProvider = ({ children }) => {
  const [selectedHousingId, setSelectedHousingId] = useState(null);

  return (
    <SelectedHousingIdContext.Provider
      value={{ selectedHousingId, setSelectedHousingId }}
    >
      {children}
    </SelectedHousingIdContext.Provider>
  );
};

export default SelectedHousingIdProvider;
