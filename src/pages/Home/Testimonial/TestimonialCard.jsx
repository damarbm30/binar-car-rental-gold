import "./Testimonial.css";

const TestimonialCard = ({ avatar, body, info, isActive }) => {
  return (
    <div className={`carousel-item ${isActive === "active" ? `active` : ""}`}>
      <div className="col-md-6 col-xs-12 mx-auto">
        <div className="card">
          <div className="card-body d-flex align-items-center gap-3">
            <img src={avatar} alt="avatar" className="rounded-circle" />
            <div className="d-flex flex-column gap-2">
              <p>&#x2B50;&#x2B50;&#x2B50;&#x2B50;&#x2B50;</p>
              <p className="fw-bold">{body}</p>
              <p>{info}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TestimonialCard;
