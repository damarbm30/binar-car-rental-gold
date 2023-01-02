import "./FAQ.css";

import { useState } from "react";

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);

  return (
    <section className="container section-pt">
      <div className="row">
        <div className="d-flex flex-column col-md-4 col-12 fs-2">
          <h1 className="fs-3 fw-bold text-center text-md-start">Frequently Asked Questions</h1>
          <p className="mt-3 fw-bold text-center text-md-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <div className="col-md-8 col-12 mt-3 mt-md-0">
          <div className="accordion d-flex flex-column gap-3" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button collapsed fw-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  Apa saja syarat yang dibutuhkan?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit necessitatibus ratione illo voluptates
                  cupiditate. Explicabo repellendus aliquam voluptatem architecto dignissimos.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Berapa hari minimal sewa mobil lepas kunci?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quis optio eveniet libero sunt nam modi
                  harum similique a nulla?
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Berapa hari sebelumnya sebaiknya booking sewa mobil?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit recusandae debitis quasi qui
                  natus, labore ad dolorem hic nihil harum.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FAQ;
