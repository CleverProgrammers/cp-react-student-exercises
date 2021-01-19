import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import TransitionsModal from "./components/transitionModal";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

const sum = (a, b) => a + b;

export const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const { width, height } = useWindowSize();

  const handleClick = () => {
    if (sum(1, 2) === 3) {
      toast.success("Your code passed!");
      setModalOpen(true);
    } else {
      toast.error("Your code failed");
    }

    // sum(1, 2) === 3
    //   ? toast.success("Your code passed!") &&
    //     setModalOpen(true) &&
    //     console.log("hello") &&
    //     console.log(modalOpen)
    //   : toast.error("Your code failed");
  };

  const handleCloseModalClick = () => {
    setModalOpen(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button onClick={handleClick}>Test my code</button>
      <button onClick={handleCloseModalClick}>Clear</button>
      {/* {modalCustom}
      {showModal} */}
      <Toaster />
      {modalOpen && (
        <>
          <TransitionsModal isModalOpen={modalOpen} />
          <Confetti width={width} height={height} />
        </>
      )}
    </div>
  );
};
