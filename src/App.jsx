import { Routes, Route } from "react-router-dom";

import { Footer, Navbar } from "./components";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Cars, Home } from "./pages";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/cars" element={<Cars />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
