import React from "react";
import logo from "../../assets/image/logo-picture.png";
import footerData from "../../data/footer.json";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-wrapper">
        <div className="left-container">
          <div className="image-container">
            <img width={84} height={84} src={logo} alt="" objectFit="contain" />
            <p>Event-BIT</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="center-container">
          <div className="contact-us-container">
            <p className="title">CONTACT US</p>
            {footerData.map((item) => (
              <div className="contact-us-wrapper" key={item}>
                <img
                  width={18}
                  height={18}
                  src={item.image}
                  alt=""
                  objectFit="contain"
                />
                <p>{item.content}</p>
              </div>
            ))}
            <div />
          </div>
          <div className="quick-link-container">
            <p className="title">QUICK LINKS</p>
            <p className="links">Home</p>
            <p className="links">Terms & Conditions</p>
            <p className="links">FAQs</p>
            <p className="links">Newsletter</p>
          </div>
        </div>
        <div className="right-container">
          <p className="title">DON'T MISS ANY UPDATES</p>
          <div className="input-container">
            <input placeholder="Your Email" type="text" />
          </div>
          <button>Subscribe</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
