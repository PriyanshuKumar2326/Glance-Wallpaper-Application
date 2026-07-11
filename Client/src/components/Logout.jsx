import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"


export default function Logout(){
  const {user,logout}=useAuth();
  const navigate=useNavigate();
  const handleLogout=async ()=>{
    await logout();
    navigate("/");
  }
  return (
    <button className="bg-gray-500 px-6 py-2 mt-4 text-white rounded-full  hover:bg-gray-600 transition" onClick={handleLogout}>
            Logout
          </button>
  )
}