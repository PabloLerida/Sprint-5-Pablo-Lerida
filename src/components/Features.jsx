import features from "../data/features.json";
import "./features.css";

export default function Features() {
  return (
    <div className="features-container">
      {features.map((data, index) => (
        <div className="feat" key={index}>
          <img className="feat__image" src={data.image} alt={data.title} />
          <h1 className="feat__title">{data.title}</h1>
          <p className="feat__text">{data.description}</p>
        </div>
      ))}
    </div>
  );
}

