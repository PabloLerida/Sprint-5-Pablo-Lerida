// Reseñas.jsx
import "./reseñas.css";
import data from "../data/testimonials.json";

export default function Reseñas() {
  return (
    <div className="reseñas__container">
      <div className="reseñas__image">
        <img src="images/bg-quotes.png" alt="" />
      </div>

      {data.map((testimonial, index) => (
        <div className="reseñas__content" key={index}>
          <p className="quote">{testimonial.quote}</p>
          <p className="author">{testimonial.name}</p>

          <p className="title">{testimonial.title}</p>
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="profile-image"
          />
        </div>
      ))}
    </div>
  );
}
