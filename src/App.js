import toast, { Toaster } from "react-hot-toast";
import TransitionsModal from "./components/transitionModal";

export const App = () => {
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
      <button onClick={handleClick}>Test my code</button>
      <Toaster />
      <TransitionsModal text="wassupBoyyy" isModalOpen={true} />
    </div>
  );
};
