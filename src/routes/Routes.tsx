import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "../screens/Home/Home";
import LandingPage from "../screens/LandingPage/LandingPage";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route  exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
