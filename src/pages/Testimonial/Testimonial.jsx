import "./Testimonial.css";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <section className="container-fluid section-pt testimonial">
      <div className="text-center">
        <h2 className="fw-bold mb-3">Testimonial</h2>
        <p className="fw-bold mb-5">Berbagai review positif dari pelanggan kami</p>
      </div>
      {/* Smaller than XL */}
      <div id="carouselExampleControls" className="carousel carousel-dark slide" data-bs-ride="false">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="col-sm-4 col-xs-12">
              <TestimonialCard />
            </div>
          </div>
          <div className="carousel-item">
            <div className="col-sm-4 col-xs-12">
              <TestimonialCard />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center gap-3 mt-5">
          <button
            className="carousel-control-prev rounded-circle position-relative p-3"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon rounded-circle" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next rounded-circle position-relative p-3"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon rounded-circle" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* Larger than XL */}
      {/* <div className="slider-container">
        <div
          className="slider"
          style={{ transform: currentSlide === -1 ? `translateX(25vw)` : `translateX(-${currentSlide * 25}vw)` }}
        >
          {testimonials.map((item) => {
            const { id, avatar, body, info } = item;
            return (
              <div className="card-container d-none d-xl-block" key={id}>
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
      <div className="d-none d-xl-flex flex-col gap-3">
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
      </div> */}
    </section>
  );
};
export default Testimonial;
