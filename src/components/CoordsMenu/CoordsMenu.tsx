import { useEffect, useState } from "react";
import "./CoordsMenu.scss";

const CoordsMenu = () => {
  const [coords, setCoords] = useState(getRandomCoordinates());
  const [headingCoords, setHeadingCoords] = useState(getRandomCoordinates());

  function getRandomCoordinates() {
    const x = (Math.random() * 2000 - 1000).toFixed(3);
    const y = (Math.random() * 500 - 250).toFixed(2);
    const z = (Math.random() * 100 - 50).toFixed(3);

    return `X: ${x}, Y: ${y}, Z: ${z}`;
  }
  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCoords(getRandomCoordinates());
      setHeadingCoords(getRandomCoordinates());
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="drop">
      <div className="coordinates">
        <h2>Coordinates </h2>
        <div className="container">
          <span>{coords}</span>
          <img
            className="coordinates__copy"
            onClick={() => copy(coords)}
            src="icons/copy.svg"
            alt=""
          />
        </div>
      </div>
      <div className="heading">
        <h2>Heading</h2>
        <div className="container">
          <span>{headingCoords}</span>
          <img
            className="coordinates__copy"
            onClick={() => copy(headingCoords)}
            src="icons/copy.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CoordsMenu;
