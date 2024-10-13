import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="nav">
      <NavLink to={`/home`} className={`nav__link`}>
        {({ isActive }) => (
          <img
            src={isActive ? "/icons/home-active.svg" : "/icons/home.svg"}
            alt=""
          />
        )}
      </NavLink>
      <NavLink to={`/tools`} className={`nav__link`}>
        {({ isActive }) => (
          <img
            src={isActive ? "/icons/tools-active.svg" : "/icons/tools.svg"}
            alt=""
          />
        )}
      </NavLink>
      <NavLink to={`/world-editor`} className={`nav__link`}>
        {({ isActive }) => (
          <img
            src={
              isActive ? "/icons/world-active-small.svg" : "/icons/world.svg"
            }
            alt=""
          />
        )}
      </NavLink>
      <NavLink to={`/interior`} className={`nav__link`}>
        {({ isActive }) => (
          <img
            src={
              isActive ? "/icons/interior-active.svg" : "/icons/interior.svg"
            }
            alt=""
          />
        )}
      </NavLink>
      <NavLink to={`/pew`} className={`nav__link`}>
        {({ isActive }) => (
          <img
            src={isActive ? "/icons/pew-active.svg" : "/icons/pew.svg"}
            alt=""
          />
        )}
      </NavLink>
    </div>
  );
};

export default Navbar;
