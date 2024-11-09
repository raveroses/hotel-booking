import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="first-layer">
        <div className="firstlayer-flex">
          <img src="/images/logo.png" alt="" />
          <div className="anchor-grid">
            <a href=""> Gallery</a>
            <a href="">Term & Conditions</a>
            <a href="">Privacy Policy</a>
            <a href="">Our Location</a>
            <a href="">About Us</a>
            <a href="">Contact Us</a>
            <a href="">info@hoteldebently.com</a>
            <a href="">+2348052131203</a>
            <a href=""> +2348067595321</a>
          </div>
        </div>
      </div>
      <div className="secondLayer">
        <div className="second-layer-flex">
          <p>
            Copyright © 2024. All Rights Reserved by{" "}
            <span>Hotel De Bently</span>. Social Platforms:{" "}
            <span>
              <FaInstagram />
              <FaFacebook />
              <FaTwitter />
            </span>
          </p>
          <div className="payment">
            <img src="/images/paypal.png" alt="paypal" />
            <img src="/images/Master-card.png" alt="paypal" className="cl" />
            <img src="/images/Visa.png" alt="paypal" className="cl" />
            <img src="/images/Discover.png" alt="paypal" />
          </div>
        </div>
      </div>
    </footer>
  );
}
