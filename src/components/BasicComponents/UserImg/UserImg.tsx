import React from 'react';
import userImg from '../../../assets/icons/userimg.svg';
interface ImageType {
  icon: string;
}
export const UserImg: React.FC<ImageType> = ({ icon }: ImageType) => {
  return (
    <>
      <img src={userImg} className="rounded-circle" alt="user" />
    </>
  );
};
