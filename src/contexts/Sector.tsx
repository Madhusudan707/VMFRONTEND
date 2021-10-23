import React, { useContext, createContext, useState } from 'react';

type SectorContextType = {
  sector: string;
  setSector: React.Dispatch<React.SetStateAction<string>>;
};
type SectorProviderProp = {
  children: JSX.Element;
};
export const SectorContext = createContext<SectorContextType>(
  {} as SectorContextType,
);

export const SectorProvider = ({
  children,
}: SectorProviderProp): JSX.Element => {
  const [sector, setSector] = useState<string>('Sector Interested in');

  return (
    <SectorContext.Provider value={{ sector, setSector }}>
      {children}
    </SectorContext.Provider>
  );
};

export const useSector = () => useContext(SectorContext);
