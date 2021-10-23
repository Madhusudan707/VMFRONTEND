import { useState, useCallback, useLayoutEffect, useEffect } from 'react';
import ArrowRight from '../../assets/icons/arrow-right.svg';
import { getItem } from '../../storage/cookie';
import { GET_ALL_INDUSTERIES } from '../../services/graphql/queries/fetchQueries';
import { axiosInstance } from '../../helper/axiosInstance';
import {
  Camera,
  Input,
  DropDown,
  Button,
  Screen,
  TypoGraphy,
} from '../../components/BasicComponents';
import InputMobile from '../../assets/icons/mobile.svg';
import Sector from '../../assets/icons/sector.svg';
import { Link, useLocation } from 'react-router-dom';
import './addcandidate.scss';
import WorkerProfile from '../../components/WorkerProfile';
import useUserDetails from '../../contexts/UserDetails/useUserDetails';
import { useModalClose } from '../../contexts';
import SavedModal from '../../components/DerviedCompoents/SavedModal/SavedModal';

export const AddCandidate = (): JSX.Element => {
  const { setModalClose } = useModalClose();
  const [addCandidateInputs, setAddCandidateInputs] = useState({
    mobileNumber: '',
    industries: '',
  });
  const [getAllIndusteries, setGetAllIndusteries] = useState([]);
  const [sectorInterest, setSectorInterest] = useState<string>(
    'Sector Interested in',
  );
  const [sectorIcon, setSectorIcon] = useState<string>('');
  const token = getItem('TOKEN');
  useLayoutEffect(() => {
    axiosInstance()
      .post(
        '',
        {
          query: GET_ALL_INDUSTERIES,
          variable: {},
        },
        {
          headers: {
            Authorization: token,
          },
        },
      )
      .then((response) => {
        console.log(response);
        if (response.data.data) {
          console.log(response.data);
          setGetAllIndusteries(response.data.data.allIndustries);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [visible, setVisible] = useState<boolean>(false);
  const onModalToggle = useCallback((val) => setVisible(val), [visible]);

  const { setCandidateId, workerProfileReady, isComplete } = useUserDetails();

  const onSave = () => {
    setCandidateId(447);
  };

  const SectorInterest = [
    {
      id: 3,
      name: 'Healthcare',
      icon: 'https://skillexchange-bucket-development.s3-ap-southeast-1.amazonaws.com/public/Industry/Healthcare.svg',
    },
    {
      id: 11,
      name: 'Delivery & Pickup / Driving',
      icon: 'https://skillexchange-bucket-development.s3-ap-southeast-1.amazonaws.com/public/Industry/Delivery+%26+Pickup+or+Driving.svg',
    },
    {
      id: 12,
      name: 'Engineering / Machine Operator',
      icon: 'https://skillexchange-bucket-development.s3-ap-southeast-1.amazonaws.com/public/Industry/Engineering+or+Machine+Operator.svg',
    },
    {
      id: 10,
      name: 'Beauty & Wellness',
      icon: 'https://skillexchange-bucket-development.s3-ap-southeast-1.amazonaws.com/public/Industry/Beauty+%26+Wellness.svg',
    },
    {
      id: 2,
      name: 'Sales / Call Center / BPO',
      icon: 'https://skillexchange-bucket-development.s3-ap-southeast-1.amazonaws.com/public/Industry/Sales+or+Call+Center+or+BPO.svg',
    },
    {
      id: 15,
      name: 'Safety and Security',
      icon: 'https://skillexchange-bucket-development.s3-ap-southeast-1.amazonaws.com/public/Industry/Safety+and+Security.svg',
    },
    {
      id: 13,
      name: 'Home Services',
      icon: 'https://skillexchange-bucket-development.s3-ap-southeast-1.amazonaws.com/public/Industry/Home+services.svg',
    },
    {
      id: 5,
      name: 'Technician / ITI / Mechanic',
      icon: 'https://skillexchange-bucket-development.s3-ap-southeast-1.amazonaws.com/public/Industry/Technician+or+ITI+or+Mechanic.svg',
    },
    {
      id: 8,
      name: 'Hotel / Restaurant',
      icon: 'https://skillexchange-bucket-development.s3-ap-southeast-1.amazonaws.com/public/Industry/Hotel+or+Restaurant.svg',
    },
    {
      id: 6,
      name: 'Construction / Manual work / Labor',
      icon: 'https://skillexchange-bucket-development.s3-ap-southeast-1.amazonaws.com/public/Industry/Construction+or+Manual+Work.svg',
    },
    {
      id: 16,
      name: 'Warehouse / Logistics',
      icon: 'https://skillexchange-bucket-development.s3-ap-southeast-1.amazonaws.com/public/Industry/Warehouse+or+Logistics.svg',
    },
    {
      id: 4,
      name: 'IT / ITES',
      icon: 'https://skillexchange-bucket-development.s3-ap-southeast-1.amazonaws.com/public/Industry/IT+or+ITES.svg',
    },
    {
      id: 1,
      name: 'Apparel / Textile / Leather',
      icon: 'https://skillexchange-bucket-development.s3-ap-southeast-1.amazonaws.com/public/Industry/Apparel+or+Textile+or+Leather.svg',
    },
    {
      id: 14,
      name: 'Office Jobs / Administrative Work',
      icon: 'https://skillexchange-bucket-development.s3-ap-southeast-1.amazonaws.com/public/Industry/Office+Administrative+Work.svg',
    },
    {
      id: 9,
      name: 'Agriculture',
      icon: 'https://skillexchange-bucket-development.s3-ap-southeast-1.amazonaws.com/public/Industry/Agriculture.svg',
    },
    {
      id: 7,
      name: 'Financial Services',
      icon: 'https://skillexchange-bucket-development.s3-ap-southeast-1.amazonaws.com/public/Industry/Financial+Services.svg',
    },
  ];

  useEffect(() => {
    if (workerProfileReady) {
      onModalToggle(true);
    }
  }, [workerProfileReady]);

  const handleOptionChange = (event: any) => {
    // const sector: any = getAllIndusteries.filter(
    //   (item: any) => item.id === parseInt(event.target.value),
    // );SectorInterest

    const sector: any = SectorInterest.filter(
      (item: any) => item.id === parseInt(event.target.value),
    );
    // console.log(getAllIndusteries);
    setSectorInterest(sector[0].name);
    setSectorIcon(sector[0].icon);
    setModalClose(false);
    setAddCandidateInputs((prevstate) => ({
      ...prevstate,
      industries: sector[0].name,
    }));
  };

  const handleMobileNo = (e: any) => {
    setAddCandidateInputs((prevstate) => ({
      ...prevstate,
      mobileNumber: e.target.value,
    }));
  };

  return (
    <Screen classes="d-flex flex-column justify-content-between">
      <div>
        <div className=" d-flex align-items-center">
          <Link to="/">
            <img src={ArrowRight} alt="arrow right" />
          </Link>
          <TypoGraphy variant="body1" classname="txt-primary fw-700 pl-10">
            add a candidate
          </TypoGraphy>
        </div>
        <div className="candidate-container d-flex flex-column justify-content-between">
          <div className="camera-container">
            <Camera />
          </div>

          <div className="inputs">
            <Input
              className="mb-20"
              icon={InputMobile}
              type="text"
              placeHolderName="enter mobile number"
              required={false}
              onChange={(e: any) => {
                handleMobileNo(e);
              }}
            />
            <DropDown
              dropdownIcon={sectorIcon ? sectorIcon : Sector}
              // data={getAllIndusteries}
              data={SectorInterest}
              modalHeader="Select Sector"
              name="sector"
              handleOptionChange={(e: any) => handleOptionChange(e)}
            >
              &nbsp;&nbsp;&nbsp;{sectorInterest}
            </DropDown>
          </div>
        </div>
      </div>
      {/* To be called based on a response to show worker profile or not  */}

      <div>
        {visible && <WorkerProfile onModalToggle={onModalToggle} />}
        {isComplete && <SavedModal />}
        {addCandidateInputs.mobileNumber && addCandidateInputs.industries ? (
          <Button variant="button-primary" classes="btn" onClick={onSave}>
            SAVE & NEXT
          </Button>
        ) : (
          <Button
            variant="button-primary"
            classes="btn"
            buttonState="disabled"
            onClick={onSave}
          >
            SAVE & NEXT
          </Button>
        )}
      </div>
    </Screen>
  );
};
