import { BrowserRouter as Routes, Route } from "react-router-dom";

import { Footer, Navbar } from "./components";
import { CTA, FAQ, Header, Services, Testimonial, WhyUs } from "./pages";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <WhyUs />
      <Testimonial />
      <CTA />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
