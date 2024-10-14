import { useState } from "react";
import "./Coords.scss";
import CoordsMenu from "../CoordsMenu/CoordsMenu";

const Coords = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="coords">
        <div className="coords__title">
          <img src="icons/coords.svg" alt="" />
          <h1>Current coordinates</h1>
        </div>
        <img
          onClick={() => setOpen(!open)}
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          className="coords__drop-icon"
          src="icons/arrow-up.svg"
          alt=""
        />
      </div>
      {open ? <CoordsMenu /> : ""}
    </>
  );
};

export default Coords;
