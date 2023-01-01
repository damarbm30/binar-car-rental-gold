import { useState } from "react";
import "./Testimonial.css";
import { testimonials } from "../../utils/data";

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleCarousel = (direction) => {
    direction === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 2 : testimonials.length + 1)
      : setCurrentSlide(currentSlide < testimonials.length ? currentSlide + 2 : -1);
  };

  return (
    <section className="container-fluid section-pt testimonial">
      <div className="text-center">
        <h2 className="fw-bold mb-3">Testimonial</h2>
        <p className="fw-bold mb-5">Berbagai review positif dari pelanggan kami</p>
      </div>
      <div className="slider-container">
        <div
          className="slider"
          style={{ transform: currentSlide === -1 ? `translateX(25vw)` : `translateX(-${currentSlide * 25}vw)` }}
        >
          {testimonials.map((item) => {
            const { id, avatar, body, info } = item;
            return (
              <div className="card-container" key={id}>
                <div className="card card-slider-wrapper">
                  <div className="card-body card-slider">
                    <div>
                      <img src={avatar} alt="avatar" className="rounded-circle" />
                    </div>
                    <div className="card-content">
                      <p className="card-content__rating">&#x2B50;&#x2B50;&#x2B50;&#x2B50;&#x2B50;</p>
                      <p className="card-content__body fw-bold fs-7">{body}</p>
                      <p className="card-content__info">{info}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="d-flex flex-col gap-3">
        <button
          className="d-flex justify-content-center items-center rounded-circle arrow"
          onClick={() => handleCarousel("left")}
          role="button"
        >
          <i className="bi bi-chevron-left" />
        </button>
        <button
          className="d-flex justify-content-center items-center rounded-circle arrow"
          onClick={() => handleCarousel("right")}
          role="button"
        >
          <i className="bi bi-chevron-right" />
        </button>
      </div>
    </section>
  );
};
export default Testimonial;
