import "./DropPew.scss";

const DropPew = () => {
  return (
    <div className="drop-pew">
      <div className="drop-pew__container">
        <div className="drop-pew__property">Model ID</div>
        <div className="drop-pew__value drop-pew__value-model">
          mp_f_freemode_01
        </div>
      </div>
      <div className="drop-pew__container">
        <div className="drop-pew__property">Coordinates</div>
        <div className="drop-pew__value drop-pew__value-coords">
          <span>X: -803.717 Y: 176.49, Z: 72.841</span>
          <img src="/icons/copy.svg" alt="" />
        </div>
      </div>
      <div className="drop-pew__container">
        <div className="drop-pew__property">Rotation</div>
        <div className="drop-pew__value drop-pew__value-rot">
          <div className="drop-pew__icons-container">
            <span>X: 30°</span>
            <img src="/icons/copy.svg" alt="" />
          </div>
          <div className="drop-pew__icons-container">
            <span>X: 30°</span>
            <img src="/icons/copy.svg" alt="" />
          </div>
          <div className="drop-pew__icons-container">
            <span>X: 30°</span>
            <img src="/icons/copy.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="drop-pew__container">
        <div className="drop-pew__property">Animation</div>
        <div className="drop-pew__value drop-pew__value-anim">
          <div>Animation dict</div>
          <div>Animation clip</div>
        </div>
      </div>
    </div>
  );
};

export default DropPew;
