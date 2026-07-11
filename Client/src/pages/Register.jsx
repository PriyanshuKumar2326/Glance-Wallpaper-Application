import { useState } from "react";
import API from "../services/api";
import Aurora from "../components/background/Aurora";
import { useNavigate } from "react-router-dom";
import BlurText from "../components/HeadText/BlurText";
function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
   const navigate = useNavigate();
  const handleRegister = async () => {
    try {
      const res = await API.post("/auth/user/register", {
        fullName,
        email,
        phoneNo,
        password,
      });
      setEmail("");
      setFullName("");
      setPassword("");
      setPhoneNo("");
      console.log(res.data);
      alert("User registered successfully");
      navigate("/");
    } catch (error) {
      console.log(error.response?.data);
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <>
      <div className="flex">
        <div className="relative min-h-screen flex justify-center items-center overflow-hidden w-[65%]">
          <div className="absolute inset-0">
            <Aurora
              colorStops={["#7cff67", "#B19EEF", "#5227FF"]}
              blend={0.5}
              amplitude={1.0}
              speed={1}
            />
          </div>
           <div style={{ position: "relative", height: "300px" }}>
            <BlurText
              text="Discover Wallpapers That Match Your Vibe."
              delay={200}
              animateBy="words"
              direction="top"
              // onAnimationComplete={handleAnimationComplete}
              className="text-8xl mb-8"
            />
          </div>
        </div>
        <div className="flex w-[35%] justify-center items-center bg-gray-950">
        <div className="relative z-10 bg-gray-950 rounded-sm backdrop-blur-lg  p-10 flex flex-col gap-4 w-[400px] shadow-xl">
          <h2 className="text-2xl text-gray-200 text-center font-semibold mb-2">
            Register
          </h2>

          <input
            className="p-3 rounded-md bg-white/80 text-gray-800 placeholder-gray-500 outline-none focus:ring-2"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <input
            className="p-3 rounded-md bg-white/80 text-gray-800 placeholder-gray-500 outline-none focus:ring-2"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="p-3 rounded-md bg-white/80 text-gray-800 placeholder-gray-500 outline-none focus:ring-2"
            placeholder="Phone Number"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
          />

          <input
            className="p-3 rounded-md bg-white/80 text-gray-800 placeholder-gray-500 outline-none focus:ring-2"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleRegister}
            className="mt-2 bg-gradient-to-r from-purple-500 via-violet-600 to-indigo-600 text-white p-3 rounded-md font-medium transition hover:scale-105 hover:shadow-[0_0_20px_rgba(132,0,255,0.6)]"
          >
            Register
          </button>
          <button
            onClick={()=>navigate("/")}
            className="mt-2 bg-gradient-to-r from-purple-500 via-violet-600 to-indigo-600 text-white p-3 rounded-md font-medium transition hover:scale-105 hover:shadow-[0_0_20px_rgba(132,0,255,0.6)]"
          >
            Login
          </button>
        </div>
        </div>
      </div>
    </>
  );
}

export default Register;
