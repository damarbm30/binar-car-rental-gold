import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Footer, Navbar } from "./components";
import { CarDetail, Cars, Home } from "./pages";
import { userLogin } from "./services/auth";

function App() {
  useEffect(() => {
    userLogin();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/cars" element={<Cars />} />
        <Route index path="/car/:id" element={<CarDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
