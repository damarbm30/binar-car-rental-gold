import { CTA, FAQ, Header, Services, Testimonial, WhyUs } from "../../container";

const Home = () => {
  return (
    <main>
      <Header isHome />
      <Services />
      <WhyUs />
      <Testimonial />
      <CTA />
      <FAQ />
    </main>
  );
};
export default Home;
