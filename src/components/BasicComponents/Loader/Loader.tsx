import React from 'react';
import LoaderIcon from '../../../assets/icons/loader.gif';
import './loader.scss';
const Loader = () => {
  return <img className="loader" src={LoaderIcon} alt="Loader" />;
};

export default Loader;
