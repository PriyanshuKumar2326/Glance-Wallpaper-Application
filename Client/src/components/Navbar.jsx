
import { TfiLineDouble, TfiClose } from "react-icons/tfi";
import Logout from "./Logout";
import Dashboard from "../pages/Dashboard";
import { useAuth } from "../context/AuthContext";

export default function Navbar({ open, setOpen }) {
  const { user } = useAuth();
  

  return (
    <div className="fixed top-0 left-0 w-full z-50 group">

      {/* Hover trigger */}
      <div className=" w-full"></div>

      {/* Navbar */}
      <div className="px-6 py-4 bg-transparent transition-transform duration-500 ease-in-out -translate-y-full group-hover:translate-y-0">
        <nav className="flex justify-between items-center">

          <div className="bg-gray-700 px-5 py-2 text-white rounded-full">
            Wallpaper
          </div>

          <button
            className="bg-gray-700 p-3 text-white rounded-full"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <TfiClose size={22} /> : <TfiLineDouble size={22} />}
          </button>

        </nav>
      </div>

      {/* Overlay Dashboard */}
      <div
        className={`fixed inset-0 flex flex-col justify-center items-center gap-8 bg-black/40 backdrop-blur-md transition-all duration-500 ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <Dashboard closeMenu={() => setOpen(false)} />
        <Logout />
      </div>

    </div>
  );
}