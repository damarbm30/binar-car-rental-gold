import { Footer } from "./components";
import { FAQ, Header, Services, Testimonial, WhyUs } from "./pages";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <>
      <Header />
      <Services />
      <WhyUs />
      <Testimonial />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
