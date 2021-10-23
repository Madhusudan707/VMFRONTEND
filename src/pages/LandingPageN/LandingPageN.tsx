import { MyCandidateCard, Button } from '../../components/BasicComponents';
import Hiw from '../../assets/icons/hiw.svg';
import Add from '../../assets/icons/add.svg';
import { Link, useLocation } from 'react-router-dom';
import { useAppContext } from '../../contexts';
import './landingpage.scss';

export const LandingPageN = (): JSX.Element => {
  const location = useLocation();
  const { user, setUser } = useAppContext();

  return (
    <div>
      <div className="landing-fixed position-fixed">
        <div className="landing d-flex justify-content-between align-items-center bg-white">
          <span className="landing-heading">my candidates</span>
          <a
            href="#!"
            className="anchor d-flex justify-content-around align-items-center"
          >
            <img src={Hiw} alt='how it works className="anchor-img" ?' />

            <Link
              to={{
                pathname: '/onboarding',
                state: { prevPath: location.pathname },
              }}
              className="text-decoration-none"
            >
              <span className="anchor-text">how it works?</span>
            </Link>
          </a>
        </div>
      </div>

      <div className="my-candidate-block">
        {user.candidateList &&
          user.candidateList.map((item: any) => <MyCandidateCard />)}
      </div>
      <div className="add-btn">
        <Link
          to={{
            pathname: '/addcandidate',
            state: { prevPath: location.pathname },
          }}
        >
          <Button variant="button-primary" classes="btn">
            <span className="btn-icon">
              ADD A CANDIDATE <img src={Add} alt="add" />
            </span>
          </Button>
        </Link>
      </div>
    </div>
  );
};
