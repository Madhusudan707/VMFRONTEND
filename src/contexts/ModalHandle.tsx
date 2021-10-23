import React, { useContext, createContext, useState } from 'react';

type ModalContextType = {
  modalClose: boolean;
  setModalClose: React.Dispatch<React.SetStateAction<boolean>>;
  searchModalClose: boolean;
  setSearchModalClose: React.Dispatch<React.SetStateAction<boolean>>;
  selectedLocation: string;
  setSelectedLocation: React.Dispatch<React.SetStateAction<string>>;
};
type ModalProviderProp = {
  children: JSX.Element;
};
export const ModalContext = createContext<ModalContextType>(
  {} as ModalContextType,
);

export const ModalCloseProvider = ({
  children,
}: ModalProviderProp): JSX.Element => {
  const [modalClose, setModalClose] = useState<boolean>(false);
  const [searchModalClose, setSearchModalClose] = useState<boolean>(false);
  const [selectedLocation, setSelectedLocation] =
    useState<string>('select your state');

  return (
    <ModalContext.Provider
      value={{
        modalClose,
        setModalClose,
        searchModalClose,
        setSearchModalClose,
        selectedLocation,
        setSelectedLocation,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalClose = () => useContext(ModalContext);
