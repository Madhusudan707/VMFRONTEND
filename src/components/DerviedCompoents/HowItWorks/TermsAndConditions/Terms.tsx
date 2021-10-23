import React from 'react';
import { Screen, TypoGraphy, Button } from '../../../BasicComponents';
import { Link } from 'react-router-dom';
const Terms = () => {
  return (
    <Screen>
      <TypoGraphy variant="body2" classname="txt-primary fw-400 mb-20">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </TypoGraphy>
      <TypoGraphy variant="body2" classname="txt-primary fw-400 mb-20">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </TypoGraphy>
      <TypoGraphy variant="body2" classname="txt-primary fw-400 mb-20">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem.
      </TypoGraphy>
      <Link to="/registration/abc/abc">
        <Button variant="button-primary" classes="btn">
          Okay
        </Button>
      </Link>
    </Screen>
  );
};

export default Terms;
