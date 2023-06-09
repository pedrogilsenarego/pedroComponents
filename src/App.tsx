import Swiper from "./components/Carousells/Swipper"
import DancingCarousell from "./components/Carousells/DancingCarousell";
import VerticalCarousell from "./components/Carousells/VerticalCarousell";
import HackerLettering from "./components/Lettering/HackerLettering";

const App = () => {
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
        }}
      >
        <Swiper />

      </div>
    </>
  );
};

export default App;
