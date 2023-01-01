import "./Testimonial.css";

const TestimonialCard = () => {
  return (
    <div className="card">
      <div className="card-body d-flex items-center gap-3">
        <div className="d-flex items-center">
          <img src="https://i.pravatar.cc/80" alt="avatar" className="rounded-circle avatar-img" />
        </div>
        <div className="card-content">
          <p className="card-content__rating">&#x2B50;&#x2B50;&#x2B50;&#x2B50;&#x2B50;</p>
          <p className="card-content__body fw-bold fs-7">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem optio architecto minus recusandae similique
            expedita ex autem eveniet consequuntur ratione!
          </p>
          <p className="card-content__info">John Dee 32, Bromo</p>
        </div>
      </div>
    </div>
  );
};
export default TestimonialCard;
