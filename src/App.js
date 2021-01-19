import { useState } from "react";
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
  );
};
