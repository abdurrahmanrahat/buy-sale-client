import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? "border-b-2 border-[#EE9322]" : ""
        }
      >
        {children}
      </NavLink>
    </div>
  );
};

export default ActiveLink;
