import DancingCarousell from "./components/Carousells/DancingCarousell";
import VerticalCarousell from "./components/Carousells/VerticalCarousell";

const App = () => {
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "black",
        }}
      >
        <VerticalCarousell />
        <DancingCarousell />
      </div>
    </>
  );
};

export default App;
