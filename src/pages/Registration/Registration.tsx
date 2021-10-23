import React, { useState, useEffect, useRef } from 'react';
import './Registration.scss';
import User from '../../assets/icons/Username.svg';
import UserTick from '../../assets/icons/user-tick.svg';
import Email from '../../assets/icons/Message.svg';
import location from '../../assets/icons/location.svg';
import { setItem, getItem } from '../../storage/cookie';
import { Link, useParams, useHistory } from 'react-router-dom';
import { UPDATE_VM_PROFILE } from '../../services/graphql/mutations/postQueries';
import { axiosInstance } from '../../helper/axiosInstance';
import { hasKey } from '../../helper/object';
import ValidationConstants from '../../constants/validation';
import { useModalClose, useAppContext } from '../../contexts';
import { SearchDropDown } from '../../components/BasicComponents';

import {
  TypoGraphy,
  Input,
  Button,
  DropDown,
  Screen,
  Form,
} from '../../components/BasicComponents';
interface ParamTypes {
  token: string;
  mobile: string;
}
export const Registration: React.FC = (props: any) => {
  const history = useHistory();
  // set cookie
  const params = useParams<ParamTypes>();
  const token = getItem('TOKEN');
  const { setModalClose, selectedLocation } = useModalClose();
  const { user, setUser } = useAppContext();
  const userDetailsInitial = {
    name: '',
    mobile: '',
    email: '',
    gender: 'select your gender',
    locationAreaId: '',
    refcode: '',
  };

  const [userDetails, setUserDetails] = useState(userDetailsInitial);

  const userDetailsValidStateInitial = {
    name: true,
    mobile: true,
    email: true,
    gender: true,
    locationAreaId: true,
    refcode: true,
  };

  const [userDetailsValidState, setUserDetailsValidState] = useState(
    userDetailsValidStateInitial,
  );

  const userDetailsHelpTextInitial = {
    name: '',
    mobile: '',
    email: '',
    gender: '',
    locationAreaId: '',
    refcode: '',
  };

  const genderItems = [
    { id: 1, name: 'Male' },
    { id: 2, name: 'Female' },
    { id: 3, name: 'Others' },
  ];
  const [userDetailsHelpText, setUserDetailsHelpText] = useState(
    userDetailsHelpTextInitial,
  );

  const validateName = (): void => {
    let nameValidState = true;
    let nameHelpText = '';

    if (!userDetails.name.trim()) {
      nameValidState = false;
      nameHelpText = ValidationConstants.nameRequiredHelpText;
    }

    setUserDetailsValidState(
      (prevState: typeof userDetailsValidStateInitial) => {
        return {
          ...prevState,
          name: nameValidState,
        };
      },
    );
    setUserDetailsHelpText((prevState: typeof userDetailsHelpTextInitial) => {
      return {
        ...prevState,
        name: nameHelpText,
      };
    });
  };

  const validateEmail = (): void => {
    let emailValidState = true;
    let emailHelpText = '';

    const emailRegex = ValidationConstants.emailRegex;
    if (!userDetails.email.trim()) {
      emailValidState = false;
      emailHelpText = ValidationConstants.emailRequiredHelpText;
    } else if (
      !emailRegex.test(String(userDetails.email.trim()).toLowerCase())
    ) {
      emailValidState = false;
      emailHelpText = ValidationConstants.emailInvalidHelpText;
    }

    setUserDetailsValidState(
      (prevState: typeof userDetailsValidStateInitial) => {
        return {
          ...prevState,
          email: emailValidState,
        };
      },
    );
    setUserDetailsHelpText((prevState: typeof userDetailsHelpTextInitial) => {
      return {
        ...prevState,
        email: emailHelpText,
      };
    });
  };

  const validateGender = (): void => {
    let genderValidState = true;
    let genderHelpText = '';

    if (userDetails.gender.trim() === 'select your gender') {
      genderValidState = false;
      genderHelpText = ValidationConstants.genderRequiredHelpText;
    }

    setUserDetailsValidState(
      (prevState: typeof userDetailsValidStateInitial) => {
        return {
          ...prevState,
          gender: genderValidState,
        };
      },
    );
    setUserDetailsHelpText((prevState: typeof userDetailsHelpTextInitial) => {
      return {
        ...prevState,
        gender: genderHelpText,
      };
    });
  };

  const validateRefcode = (): void => {
    let refcodeValidState = true;
    let refcodeHelpText = '';

    const refcodeRegex = ValidationConstants.refcodeRegex;
    if (
      userDetails.refcode.trim() &&
      !refcodeRegex.test(String(userDetails.refcode.trim()).toLowerCase())
    ) {
      refcodeValidState = false;
      refcodeHelpText = ValidationConstants.refcodeInvalidHelpText;
    }

    setUserDetailsValidState(
      (prevState: typeof userDetailsValidStateInitial) => {
        return {
          ...prevState,
          refcode: refcodeValidState,
        };
      },
    );
    setUserDetailsHelpText((prevState: typeof userDetailsHelpTextInitial) => {
      return {
        ...prevState,
        refcode: refcodeHelpText,
      };
    });
  };

  const nameInitialRender: any = useRef(true);
  useEffect(() => {
    if (nameInitialRender.current) {
      nameInitialRender.current = false;
    } else {
      validateName();
    }
  }, [userDetails.name]);

  const emailInitialRender: any = useRef(true);
  useEffect(() => {
    if (emailInitialRender.current) {
      emailInitialRender.current = false;
    } else {
      validateEmail();
    }
  }, [userDetails.email]);

  const genderInitialRender: any = useRef(true);
  useEffect(() => {
    if (genderInitialRender.current) {
      genderInitialRender.current = false;
    } else {
      validateGender();
    }
  }, [userDetails.gender]);

  const refcodeInitialRender: any = useRef(true);
  useEffect(() => {
    if (refcodeInitialRender.current) {
      refcodeInitialRender.current = false;
    } else {
      validateRefcode();
    }
  }, [userDetails.refcode]);

  const validate = (): void => {
    validateName();
    validateEmail();
    // TODO: state validation
    validateGender();
    validateRefcode();
  };

  const areAllFieldsValid = (): boolean => {
    let allFieldsValid = true;

    return (allFieldsValid = Object.keys(userDetailsValidState).reduce(
      (acc: boolean, fieldState: string): boolean => {
        if (hasKey(userDetailsValidState, fieldState)) {
          return acc && userDetailsValidState[fieldState];
        }

        return acc;
      },
      allFieldsValid,
    ));
  };

  // update VM API
  const submitHandleChange = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('hello');

    validate();
    if (!areAllFieldsValid()) {
      return;
    }

    const updatevmvariables = {
      // sample
      data: {
        mobile: userDetails.mobile,
        name: userDetails.name,
        gender: 'Female',
        updatedBy: userDetails.name,
        email: userDetails.email,
        locationAreaId: 1,
      },
    };
    const response = await axiosInstance().post(
      '',
      {
        query: UPDATE_VM_PROFILE,
        variables: updatevmvariables,
      },
      {
        headers: {
          Authorization: token,
        },
      },
    );
    if (response.data.data) {
      const results = response.data.data.updateVmProfile;
      console.log('DATA', response.data.data);
      // update state and store vm data
      setUser((prevstate: any) => ({
        ...prevstate,
        name: results.name,
        mobile: results.mobile,
        id: results.id,
        isVerified: results.isVerified,
      }));
      console.log(user.id, 'user id is not printing ------------------------');
      // history push to verification page
      history.push(`/verification/${results.id}/${token}`);
    }
  };
  const handleOptionChange = (event: any) => {
    const gen: any = genderItems.filter(
      (item) => item.id === parseInt(event.target.value),
    );
    setUserDetails((prevstate) => ({ ...prevstate, gender: gen[0].name }));
    setModalClose(false);
  };
  const handleUserDetails = (data: any) => {
    setUserDetails((prevstate) => ({ ...prevstate, ...data }));
  };
  useEffect(() => {
    setUserDetails((prevstate) => ({ ...prevstate, mobile: params.mobile }));
    setItem('TOKEN', params.token);
  }, []);

  return (
    <>
      <Screen>
        <div className="d-flex flex-column justify-content-between h-100">
          <Form onSubmitHandler={(e) => submitHandleChange(e)} className="">
            <div className="d-flex flex-column">
              <TypoGraphy variant="body1" classname="txt-primary mb-20">
                Hello,
                <br />
                <span className="text-bold">
                  Sign-up to become a GoodWorker mitra
                </span>
              </TypoGraphy>

              <Input
                className="mb-20"
                icon={User}
                type="text"
                placeHolderName="enter your full name"
                required={false}
                value={userDetails.name}
                invalid={!userDetailsValidState.name}
                helpText={userDetailsHelpText.name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleUserDetails({ name: e.target.value })
                }
              />
              <Input
                className="mb-20"
                icon={Email}
                type="text"
                value={userDetails.email}
                invalid={!userDetailsValidState.email}
                helpText={userDetailsHelpText.email}
                placeHolderName="enter your email"
                required={false}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleUserDetails({ email: e.target.value })
                }
              />

              <SearchDropDown dropdownIcon={location}>
                {selectedLocation}
              </SearchDropDown>
              <DropDown
                dropdownIcon={User}
                data={genderItems}
                invalid={!userDetailsValidState.gender}
                helpText={userDetailsHelpText.gender}
                modalHeader="select your gender"
                name="gender"
                handleOptionChange={(e: any) => handleOptionChange(e)}
              >
                {userDetails.gender}
              </DropDown>
              <Input
                className="mb-20"
                icon={UserTick}
                type="text"
                value={userDetails.refcode}
                invalid={!userDetailsValidState.refcode}
                helpText={userDetailsHelpText.refcode}
                placeHolderName="mitra code ( if any )"
                required={false}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleUserDetails({ refcode: e.target.value })
                }
              />
            </div>
            <div>
              <Button
                variant="button-primary"
                type="submit"
                classes="btn mb-20"
              >
                Submit
              </Button>
              <TypoGraphy variant="body2" classname="txt-primary ">
                By clicking &apos;Submit&apos;, you acknowledge that you have
                read and accept the{' '}
                <Link to="/termsandconditions">
                  <span className="text-bold">Terms of Service</span> and{' '}
                  <span className="text-bold">Privacy Policy</span>.
                </Link>
              </TypoGraphy>
            </div>
          </Form>
        </div>
      </Screen>
    </>
  );
};
