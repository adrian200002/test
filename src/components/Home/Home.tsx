import Coords from "../Coords/Coords";
import Weather from "../Weather/Weather";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Coords />
      <Weather />
    </div>
  );
};

export default Home;
