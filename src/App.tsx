import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from './routing/routes';
import ExitInBetween from './components/DerviedCompoents/ExitInBetween/ExitInBetween';
import './App.scss';
const App: React.FC = () => {
  const routeComponents = routes.map((Routes) => (
    <Route
      key={Routes.path}
      exact={Routes.exact || true}
      path={Routes.path}
      render={() => <Routes.Component />}
    />
  ));

  return (
    <>
      <Router>
        <Switch>{routeComponents}</Switch>
      </Router>
    </>
  );
};

export default App;
