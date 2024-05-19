import { NavLink } from "react-router-dom";
import { ModeToggle } from "./ui/ModeToggle";

const Navbar = () => {
  return (
    <nav className="header">
      <NavLink
        to="/"
        className={`w-10 h-10 rounded-lg items-center justify-center flex font-bold shadow-md bg-white dark:bg-slate-900 dark:shadow-white/50`}
      >
        <p className={`blue-gradient_text`}>MU</p>
      </NavLink>
      <div className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/explore"
          className={({ isActive }) => (isActive ? "text-blue-500" : "")}
        >
          Explore
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "text-blue-500" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="/social"
          className={({ isActive }) => (isActive ? "text-blue-500" : "")}
        >
          Social
        </NavLink>
      </div>
      <ModeToggle />
    </nav>
  );
};

export default Navbar;
