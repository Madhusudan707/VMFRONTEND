import React, { useEffect, useLayoutEffect } from 'react';
import Loader from '../../components/BasicComponents/Loader/Loader';
import { TypoGraphy } from '../../components/BasicComponents';
import { setItem, getItem } from '../../storage/cookie';
import { useParams, useHistory } from 'react-router-dom';
import { GET_VM_CANDIDATE } from '../../services/graphql/queries/fetchQueries';
import { axiosInstance } from '../../helper/axiosInstance';
import { useAppContext } from '../../contexts';
import './landingPageVerification.scss';
interface ParamTypes {
  token: string;
  id: string;
}

export const LandingPageVerification = (props: any) => {
  // using global state
  const { user, setUser } = useAppContext();
  const history = useHistory();
  const params = useParams<ParamTypes>();
  // to update the id in gloabl state
  // useLayoutEffect(() => {
  //   if (user.id.toString() === '')
  //     setUser((prevState: any) => ({
  //       ...prevState,
  //       id: params.id,
  //     }));
  // }, []);
  useEffect(() => {
    const token = getItem('TOKEN');
    if (token === null) {
      setItem('TOKEN', params.token);
    }
  }, []);
  // get vm api call
  useEffect(() => {
    const getvmvariables = {
      // pass the candidate id.
      id: '13',
      size: 10,
      from: 0,
    };
    axiosInstance()
      .post(
        '',
        {
          query: GET_VM_CANDIDATE,
          variables: getvmvariables,
        },
        {
          headers: {
            Authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxOCIsInJvbGUiOiJ2bSIsImlhdCI6MTYzNDcxNjAxMCwiZXhwIjoxNjM1MzIwODEwfQ.ovZkapOIcNorzM5w6AYrGs5rWi-5v4UCOm0ZjlIOvf8',
          },
        },
      )
      .then((response) => {
        setTimeout(() => {
          if (response.data.data.getCandidateDetails.length === 0) {
            history.push('/');
          } else {
            // setting candidates list in global state
            setUser((prevState: any) => ({
              ...prevState,
              candidateList: response.data.data.getCandidateDetails,
            }));
            history.push('/candidates');
          }
        }, 3000);
      });
  }, []);

  return (
    <div className="h-100 d-flex flex-column loader-text-container">
      <div className=" d-flex justify-content-center align-items-center">
        <Loader />
      </div>
      <div>
        <TypoGraphy
          variant="body2"
          classname="text-center txt-fade txt-primary fw-600"
        >
          <span className="txt-primary">GoodWorker</span>
          <br />
          mein aapka swagat hai
        </TypoGraphy>
      </div>
    </div>
  );
};
