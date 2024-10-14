import "./ToolsDrop.scss";

const ToolsDrop = () => {
  return (
    <div className="drop">
      <div className="drop__container">
        <h2 className="drop__property">Prop model</h2>
        <div className="drop__value drop__model-value">
          vw_prop_casino_slot_06a
        </div>
      </div>
      <div className="drop__container">
        <h2 className="drop__property">Target entity</h2>
        <div className="drop__value drop__target-value">
          <span>Select</span>
          <img src="icons/arrow-up.svg" alt="" />
        </div>
      </div>
      <div className="drop__container">
        <h2 className="drop__property">Animation</h2>
        <div className="drop__value drop__animation-value">
          <div className="drop__animation-dict">Animation dict</div>
          <div className="drop__animation-clip">Animation clip</div>
        </div>
      </div>
      <div className="drop__container">
        <h2 className="drop__property">Bones</h2>
        <div className="drop__value drop__target-value">
          <span>Select</span>
          <img src="icons/arrow-up.svg" alt="" />
        </div>
      </div>
      <button className="drop__copy">Copy native</button>
      <button className="drop__edit">Edit offset</button>
    </div>
  );
};

export default ToolsDrop;
