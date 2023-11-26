import "./input.css";
import { useState } from "react";

export default function Input() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email) == true) {
      setError(null);
    } else {
      setError("Please enter a valid email");
    }
  };
  return (
    <form onSubmit={handlesubmit} className="input__container">
      <h2 className="input__title">Get early access today</h2>
      <p className="input__text">
        {" "}
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.{" "}
      </p>
      <div className="input__email-container">
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="input__email"
          type="text"
          placeholder="email@gmail.com"
        />
        <span className="input__error" style={{ color: "red" }}>
          {error}
        </span>
        <button className="input__button">Get started for free</button>
      </div>
    </form>
  );
}
