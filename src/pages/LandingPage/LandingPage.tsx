import { TypoGraphy, Screen, Button } from '../../components/BasicComponents';
import Logo from '../../assets/icons/mitra.svg';
import Pointing from '../../assets/icons/pointing.svg';
import AddIcon from '../../assets/icons/Add2.svg';
import './LandingPage.scss';
import { Link, useLocation } from 'react-router-dom';
import { useAppContext } from '../../contexts';

export const LandingPage = (): JSX.Element => {
  const location = useLocation();
  const { user, setUser } = useAppContext();

  return (
    <>
      <Screen>
        <div className="d-flex flex-column">
          <TypoGraphy variant="body1" classname="txt-primary fw-400 ">
            hello, <span id="username">{user.name}</span>
          </TypoGraphy>
          <div className="logo-container">
            <img className="logo" src={Logo} alt="" />
          </div>
          <TypoGraphy variant="body2" classname="txt-primary fw-300">
            we have structured &quot;Mitra&quot; program by which you can spread
            the news of job openings in your network and pass on the interested
            candidates to us
          </TypoGraphy>
          <TypoGraphy
            variant="body2"
            classname="txt-primary fw-600 refer-container"
          >
            Refer and earn incentives !
          </TypoGraphy>
          <div className="how-it-works-container">
            <Link
              to={{
                pathname: '/onboarding',
                state: { prevPath: location.pathname },
              }}
              className="text-decoration-none"
            >
              <TypoGraphy variant="body2" classname="txt-primary fw-400">
                🤔 how GoodWorker mitra works?
              </TypoGraphy>
            </Link>
          </div>
        </div>
        {user.isVerfied && (
          <div className="d-flex flex-column justify-content-center align-items-center landing-modal">
            <TypoGraphy variant="h3" classname="txt-primary fw-600 ">
              no candidates
            </TypoGraphy>
            <TypoGraphy variant="body2" classname="txt-fade fw-400 my-15">
              Click here to add your first candidate
            </TypoGraphy>
            <div className="my-15">👇🏻</div>
            <Link to="/addcandidate" className="w-100">
              <Button
                variant="button-primary"
                classes="btn my-15"
                icon={AddIcon}
                iconPosition="right"
              >
                Add a candidate
              </Button>
            </Link>
          </div>
        )}
      </Screen>
    </>
  );
};
