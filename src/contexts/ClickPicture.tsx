import React, { useContext, createContext, useState } from 'react';

type ClickPictureContextType = {
  candidateImage: boolean;
  image: string;
  setCandidateImage: React.Dispatch<React.SetStateAction<boolean>>;
  setImage: React.Dispatch<React.SetStateAction<string>>;
};
type ClickPictureProviderProp = {
  children: JSX.Element;
};
export const ClickPictureContext = createContext<ClickPictureContextType>(
  {} as ClickPictureContextType,
);

export const ClickPictureProvider = ({
  children,
}: ClickPictureProviderProp): JSX.Element => {
  const [candidateImage, setCandidateImage] = useState<boolean>(false);
  const [image, setImage] = useState<string>('');

  return (
    <ClickPictureContext.Provider
      value={{ candidateImage, setCandidateImage, image, setImage }}
    >
      {children}
    </ClickPictureContext.Provider>
  );
};

export const useCandidateImage = () => useContext(ClickPictureContext);
