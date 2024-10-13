import { useState } from "react";
import "./Pew.scss";
import DropPew from "../DropPew/DropPew";

const Pew = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="pew">
      <div className="pew__heading">
        <img src="/icons/pew-active.svg" alt="" />
        <h1 className="pew__title">Pew spawner</h1>
      </div>
      <div className="pew__item">
        <div className="pew__item-heading">
          <img src="/icons/pew.svg" alt="" />
          <h2 className="pew__item-title">Chichuahua hot dogs ped</h2>
          <div className="pew__item-icons">
            <img src="/icons/trash-can-gray.svg" alt="" />
            <img
              onClick={() => setOpen(!open)}
              style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
              src="/icons/arrow-up.svg"
              alt=""
            />
          </div>
        </div>
        {open ? <DropPew /> : ""}
      </div>
      <button className="pew__new">
        <img src="/icons/plus.svg" alt="" />
        <span>Create new one</span>
      </button>
    </div>
  );
};

export default Pew;
