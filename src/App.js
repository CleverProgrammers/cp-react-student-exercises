import OneSumExerciseComponent from "./components/OneSumExerciseComponent";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/1-exercise">
          <OneSumExerciseComponent />
        </Route>

        <Route path="/2-exercise"></Route>
      </Switch>
    </Router>
  );
};

export default App;
