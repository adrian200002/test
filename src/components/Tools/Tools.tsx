import { useState } from "react";
import "./Tools.scss";
import ToolsDrop from "../ToolsDrop/ToolsDrop";

const Tools = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="tools">
      <div className="tools__heading">
        <div className="tools__title">
          <img src="/icons/prop.svg" alt="" />
          <h1>Prop tool</h1>
        </div>
        <img
          className="tools__toggle"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          onClick={() => setOpen(!open)}
          src="/icons/arrow-up.svg"
          alt=""
        />
      </div>
      {open ? <ToolsDrop /> : ""}
    </div>
  );
};

export default Tools;
