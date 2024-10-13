import "./Interior.scss";

const Interior = () => {
  return (
    <div className="interior">
      <div className="interior__heading">
        <img src="/icons/interior-active.svg" alt="" />
        <h1 className="interior__title">Interior debugger</h1>
      </div>
      <h2 className="interior__subtitle">Interior information</h2>
      <div className="interior__container">
        <span className="interior__property">Current interior ID</span>
        <div className="interior__value">
          <span>v_garagem</span>
          <img className="interior__copy" src="/icons/copy.svg" alt="" />
        </div>
      </div>
      <div className="interior__container">
        <span className="interior__property">Current room ID</span>
        <div className="interior__value">
          <span>v_michael_g_lounge</span>
          <img src="/icons/copy.svg" alt="" />
        </div>
      </div>
      <div className="interior__container">
        <span className="interior__property">Portals Debugging</span>
        <label className="switch">
          <input name="portal-debug" type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
      <button className="interior__save">
        <img src="/icons/save.svg" alt="" />
        <span>Save changes</span>
      </button>
    </div>
  );
};

export default Interior;
