import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Threads from "../components/background/Threads";

export default function Home({ setOpen }) {

  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  return (
 <div className="relative w-full h-screen overflow-hidden bg-[#020418]">

  {/* Background */}
  <div className="absolute inset-0">
    <Threads
      amplitude={1}
      distance={0}
      enableMouseInteraction
    />
  </div>

  {/* Content */}
  <div className="relative z-10 flex justify-center items-center h-full flex-col">
    {/* your UI */}
    <h1 className="text-white font-semibold text-4xl">Not to be confused with wallpaper</h1>

    <button className="bg-white p-2 px-6 rounded-full mt-5" onClick={() => setOpen(true)} >
      Get Started
    </button>
  </div>

</div>
  );
}