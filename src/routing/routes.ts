import { ROUTES } from './constants';

import {
  LandingPage,
  OnBoarding,
  Registration,
  AddCandidate,
  TermsAndCondition,
  LandingPageVerification,
  LandingPageN,
} from '../pages';

export const routes = [
  {
    path: ROUTES.HOME,
    Component: LandingPage,
    exact: true,
  },
  {
    path: ROUTES.ONBOARDING,
    Component: OnBoarding,
    exact: true,
  },
  {
    path: ROUTES.REGISTRATION,
    Component: Registration,
    exact: true,
  },
  {
    path: ROUTES.TERMSANDCONDITIONS,
    Component: TermsAndCondition,
  },
  {
    path: ROUTES.ADD_CANDIDATE,
    Component: AddCandidate,
    exact: true,
  },
  {
    path: ROUTES.LANDINGPAGEVERIFICATION,
    Component: LandingPageVerification,
    exact: true,
  },
  {
    path: ROUTES.LANDINGPAGEN,
    Component: LandingPageN,
    exact: true,
  },
];
