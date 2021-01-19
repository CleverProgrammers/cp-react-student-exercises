import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import TransitionsModal from "./components/transitionModal";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import { Box, Button, Grid } from "@material-ui/core";
import { sum } from "./exercises/1-sum";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const { width, height } = useWindowSize();

  const handleClick = () => {
    if (sum(1, 2) === 3) {
      toast.success("Your code passed!");
      setModalOpen(true);
    } else {
      toast.error("Your code failed");
    }
  };

  const handleCloseModalClick = () => {
    setModalOpen(false);
  };

  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/1-exercise">Exercise 1</Link>
        </li>
        <li>
          <Link to="/2-exercise">Exercise 2</Link>
        </li>
      </ul>
      <hr />

      <Switch>
        <Route path="/1-exercise">
          <Grid
            container
            spacing={24}
            direction="row"
            alignItems="center"
            justify="center"
            style={{ minHeight: "100vh", backgroundColor: "#1a1f36" }}
          >
            <Button variant="contained" color="primary" onClick={handleClick}>
              TEST MY CODE
            </Button>
            <Box m={1} />
            <Button
              variant="contained"
              color="default"
              onClick={handleCloseModalClick}
            >
              Clear
            </Button>

            <Toaster />
            {modalOpen && (
              <>
                <TransitionsModal isModalOpen={modalOpen} />
                <Confetti width={width} height={height} />
              </>
            )}
          </Grid>
        </Route>

        <Route path="/sum"></Route>
      </Switch>
    </Router>
  );
};

export default App;
