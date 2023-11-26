import "./descripcion.css";

export default function Descripcion() {
  return (
    <>
      <div className="descripcion-container">
        <div className="image-container">
          <img
            className="descripcion__image"
            src="images/illustration-stay-productive.png"
            alt=""
          />
        </div>
        <div className="text-container">
          <h1 className="descripcion__title">
            {" "}
            Stay productive, <br /> wherever you are{" "}
          </h1>
          <p className="descripcion__text">
            {" "}
            Never let location be an issue when accessing your files. Fylo has
            you <br /> covered for all of your file storage needs. <br />
            <br />
            Securely share files and folders with friends, family and colleagues
            for live <br /> collaboration. No email attachments required.
          </p>
          <div className="link-container">
            <a className="descripcion__link" href="">
              See how Fylo works
            </a>
            <img className="link__image" src="icons/icon-arrow.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
