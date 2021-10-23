import React from 'react';
import { Screen, TypoGraphy, Button } from '../../BasicComponents';
import { Link } from 'react-router-dom';
const Policy = () => {
  return (
    <Screen>
      <TypoGraphy variant="body2" classname="txt-primary fw-400 mb-20">
        We at GoodWorker respect the privacy of your personal information and,
        as such, make every effort to ensure your information is protected and
        remains private. As the owner and operator of loremipsum.io (the
        "Website") hereafter referred to in this Privacy Policy as "Lorem
        Ipsum", "us", "our" or "we", we have provided this Privacy Policy to
        explain how we collect, use, share and protect information about the
        users of our Website (hereafter referred to as “user”, “you” or "your").
        For the purposes of this Agreement, any use of the terms "Lorem Ipsum",
        "us", "our" or "we" includes Wasai LLC, without limitation. We will not
        use or share your personal information with anyone except as described
        in this Privacy Policy.
      </TypoGraphy>
      <TypoGraphy variant="body2" classname="txt-primary fw-400 mb-20">
        This Privacy Policy will inform you about the types of personal data we
        collect, the purposes for which we use the data, the ways in which the
        data is handled and your rights with regard to your personal data.
        Furthermore, this Privacy Policy is intended to satisfy the obligation
        of transparency under the EU General Data Protection Regulation 2016/679
        ("GDPR") and the laws implementing GDPR.
      </TypoGraphy>
      <Link to="/registration/abc/abc">
        <Button variant="button-primary" classes="btn">
          Okay
        </Button>
      </Link>
    </Screen>
  );
};

export default Policy;
