import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";

import Login from "./pages/Login";

import Viewer from "./pages/Viewer";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { useState } from "react";

function AppContent() {
  const { user, loading } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  if (loading) return <div>Loading...</div>;

  return (
    <>
     
       {user && <Navbar open={menuOpen} setOpen={setMenuOpen} />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home setOpen={setMenuOpen}/>} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/viewer/:category" element={<Viewer />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;