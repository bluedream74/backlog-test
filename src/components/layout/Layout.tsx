import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="relative min-h-full">
      <Navbar />
      <div className="w-full pb-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
 
export default Layout;