import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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

        <Route path='/exercise-one'>
          <h1>Exercise 1</h1>

          <Link to='/exercise-two'>
            <button>Go to exercise 2</button>
          </Link>

          <Link to='/'>
            <button>Go home!!!!!</button>
          </Link>
        </Route>

        <Route path='/exercise-two'>
          <h1>Exercise 2</h1>

          <Link to='/exercise-one'>
            <button>Go to exercise 1</button>
          </Link>
          
          <Link to='/'>
            <button>Go home!!!!!</button>
          </Link>
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

          <div className="exercises">
              <Link to='/exercise-one'>
                <button>Home 👉 Exercise 1</button>
              </Link>
              <Link to='/exercise-two'>
                <button>Home 👉 Exercise 2</button>
              </Link>
          </div>
        </Route>

      </Switch>
    </Router>
  );
};
