import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Headerbar from "../../components/Headerbar";

const PublicLayout = () => {
  return (
    <>
      <Headerbar />
      <div className="relative">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default PublicLayout;
