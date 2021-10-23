import { useContext } from 'react';

// context
import { UserDetailsContext } from '.';
import { UserContext } from './interface';

const useUserDetails = (): UserContext => {
  const context = useContext(UserDetailsContext);
  if (!context) {
    throw Error(
      'The parent component must be wrap around with UserDetailsProvider',
    );
  }

  return context;
};

export default useUserDetails;
