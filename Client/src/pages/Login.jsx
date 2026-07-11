import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import { useAuth } from "../context/AuthContext";
import Aurora from "../components/background/Aurora";
import BlurText from "../components/HeadText/BlurText";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await API.post("/auth/user/login", {
        email,
        password,
      });

      console.log(res.data);
      login({ email });
      // redirect to dashboard
      navigate("/home");
    } catch (error) {
      console.log(error.response?.data);
      alert(error.response?.data?.message);
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
        <div className="flex justify-center items-center mx-auto w-[35%] bg-gray-950">
          <div className="relative z-10 bg-gray-950 rounded-sm backdrop-blur-lg b  p-10 flex flex-col gap-4 w-[400px] shadow-xl">
            <h2 className="text-2xl text-gray-200 text-center font-semibold mb-2">
              Login
            </h2>

            <input
              className="p-3 rounded-md bg-white/80 text-gray-800 placeholder-gray-500 outline-none focus:ring-2 "
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className="p-3 rounded-md bg-white/80 text-gray-800 placeholder-gray-500 outline-none focus:ring-2 "
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              onClick={handleLogin}
              className="mt-2 bg-gradient-to-r from-purple-500 via-violet-600 to-indigo-600 text-white p-3 rounded-md font-medium transition hover:scale-105 hover:shadow-[0_0_20px_rgba(132,0,255,0.6)]"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/register")}
              className="mt-2 bg-gradient-to-r from-purple-500 via-violet-600 to-indigo-600 text-white p-3 rounded-md font-medium transition hover:scale-105 hover:shadow-[0_0_20px_rgba(132,0,255,0.6)]"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
