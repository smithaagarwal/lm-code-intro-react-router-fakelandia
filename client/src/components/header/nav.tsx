import { NavLink } from "react-router-dom";
const Nav = () => (
  <nav
    className="is-flex is-flex-grow-1 is-align-items-center"
    style={{ width: "100%" }}
  >
    <ul
      style={{ width: "100%" }}
      className="is-flex is-flex-direction-row is-justify-content-space-evenly is-justify-content-space-evenly"
    >
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/Misdemeanours">Misdemeanours</NavLink>
      </li>
      <li>
        <NavLink to="/ConfessToUs">Confess To Us</NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
