import { useLocation } from 'react-router-dom';

export const usePathName = () => {
  const location = useLocation();
  const pathURL = location.pathname;
  const params = new URLSearchParams(useLocation().search);

  return { pathURL, params };
};
