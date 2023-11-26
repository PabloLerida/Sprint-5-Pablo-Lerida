import "./footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer__logo-container">
          <img className="footer__logo" src="icons/logo.svg" alt="" />
        </div>
        <div className="footer__enlaces-container">
          <div className="footer__location">
            <img
              className="footer__icons"
              src="icons/icon-location.svg"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do eiusmod tempor <br /> incididunt ut labore et dolore magna
              aliqua
            </p>
          </div>
          <div className="footer__contact">
            <div className="footer__phone margen-footer">
              <img className="footer__icons " src="icons/icon-phone.svg" alt="" />
              <p>+1-543-123-4567</p>
            </div>
            <div className="footer__email margen-footer">
              <img className="footer__icons" src="icons/icon-email.svg" alt="" />
              <p>example@example.com</p>
            </div>
          </div>
          <div className="footer__about margen-footer">
            <p>About Us</p>
            <p>Jobs</p>
            <p>Press</p>
            <p>Blog</p>
          </div>
          <div className="footer__terms margen-footer">
            <p>Contact Us</p>
            <p>Terms</p>
            <p>Privacy</p>
          </div>
          <div className="footer__socials">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
    </>
  );
}
