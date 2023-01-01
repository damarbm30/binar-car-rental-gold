import "./Testimonial.css";

const TestimonialCard = ({ id, avatar, body, info }) => {
  return (
    <div className="carousel-item active" key={id}>
      <div className="col-sm-4 col-xs-12">
        <div className="card">
          <div className="card-body d-flex align-items-center gap-3">
            <img src={avatar} alt="avatar" className="rounded-circle" />
            <div className="d-flex flex-column gap-2">
              <p>&#x2B50;&#x2B50;&#x2B50;&#x2B50;&#x2B50;</p>
              <p className="fw-bold fs-7">{body}</p>
              <p>{info}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TestimonialCard;
