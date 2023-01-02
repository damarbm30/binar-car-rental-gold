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
          <div className="accordion accordion-faq" id="accordionFlushExample">
            <div
              className={`accordion-item ${isOpen ? "accordion-button-idle" : ""}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className={`accordion-button collapsed ${!isOpen ? "accordion-button-idle" : ""}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Accordion Item #1
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body rounded">
                  Placeholder content for this accordion, which is intended to demonstrate the{" "}
                  <code>.accordion-flush</code> className. This is the first item's accordion body.
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
