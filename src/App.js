import { useState, forwardRef, useRef  } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import {TransitionsModal} from "./components/transitionModal";

export const App = () => {
  // const [modalOpen, setModalOpen] = useStatete(false)
  const sum = (a, b) => a + b;

  const childRef = useRef();

  const handleClick = () => {
    if (sum(1, 2) === 3) {
      toast.success("Your code passed!")
      childRef.current.openThatModal()
    } else {
      toast.error("Your code failed");
    }
  };

  return (
    <Router>
      <Switch>

        <Route path='/exercise-one'>
          <h1>Exercise 1</h1>

          <Link to='/exercise-two'>
            <p>Go to exercise 2</p>
          </Link>

          <Link to='/'>
            <p>Go home!!!!!</p>
          </Link>
        </Route>

        <Route path='/exercise-two'>
          <h1>Exercise 2</h1>

          <Link to='/exercise-one'>
            <p>Go to exercise 1</p>
          </Link>

          <Link to='/'>
            <p>Go home!!!!!</p>
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
              <TransitionsModal text="wassupBoyyy" isModalOpen={true} ref={childRef} />
            ) : (
                ""
              )}
          </div>

          <div className="exercises">
            <Link to='/exercise-one'>
              <p>Home 👉 Exercise 1</p>
            </Link>
            <Link to='/exercise-two'>
              <p>Home 👉 Exercise 2</p>
            </Link>
          </div>
        </Route>

      </Switch>
    </Router>
  );
};
