import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import TransitionsModal from "./components/transitionModal";

export const App = () => {
  // const [modalOpen, setModalOpen] = useStatete(false)
  const sum = (a, b) => a + b;

  const handleClick = () => {
    sum(1, 2) === 3
      ? toast.success("Your code passed!")
      : toast.error("Your code failed");
  };

  return (
    <Router>
      <Switch>

        <Route path='/somePage'>
          <h1>test</h1>
        </Route>

        <Route path='/'>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              onClick={() => {
                handleClick();
                console.log("fefe");
              }}
            >
              Test my code
      </button>
            <Toaster />
            {sum(1, 2) === 3 ? (
              <TransitionsModal text="wassupBoyyy" isModalOpen={true} />
            ) : (
                ""
              )}
          </div>
        </Route>

      </Switch>
    </Router>
  );
};
