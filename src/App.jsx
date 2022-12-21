import { Footer, Navbar } from "./components";
import { FAQ, Header, Services, Testimonial, WhyUs } from "./pages";

function App() {
  return (
    <>
      <Navbar />
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
