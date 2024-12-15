import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [show, setShow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 30) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [reveal, setReveal] = useState(false);
  const handleMenu = () => {
    setReveal((prev) => !prev);
  };

  const handleCancel = () => {
    setReveal(false);
  };
  const [state, handleSubmit] = useForm("xjkvdqjb");
  if (state.succeeded) {
    return alert("Thanks for Contacting");
  }
  return (
    <>
      <div className="heading-hero">
        <div className="addresss">
          <CiLocationOn /> 892, Ngozi Okonjo-Iweala Way, Utako, 900108, Abuja.
          <FaPhoneAlt style={{ marginLeft: "20px" }} /> +2348052131203
          +2348067595321
        </div>
        <div className={show ? "sticky" : "logo-partss"}>
          <div className="logos">
            <img src="/images/logo.png" alt="logo" />
          </div>
          <div className="navbars">
            <div className="ike">
              <GiHamburgerMenu
                className="ikon"
                onClick={handleMenu}
                style={{ display: reveal ? "none" : "block" }}
              />
              <FaTimes
                className="ikon"
                style={{ display: reveal ? "block" : "none" }}
                onClick={handleCancel}
              />
            </div>
            <ul style={{ display: reveal ? "block" : "none" }}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/room">Rooms & Rate</Link>
              </li>
              <li>
                <Link to="/car">Car Hire</Link>
              </li>
              <li>
                <Link to="/hall">Halls</Link>
              </li>
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
            </ul>
            <ul className="ul">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/room">Rooms & Rate</Link>
              </li>
              <li>
                <Link to="/car">Car Hire</Link>
              </li>
              <li>
                <Link to="/hall">Halls</Link>
              </li>
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="heading-choose">
          <h1>Contact us</h1>
          <p>
            Need help with your online booking, have a question or need more
            information? Just drop us a line!
          </p>
        </div>
      </div>

      <div className="contact-flex">
        <div className="first-contact">
          <h5> Contact</h5>
          <p> Reservations please call or email</p>

          <div className="ico">
            <IoLocationSharp className="iconn" />
            <address>
              892, Ngozi Okonjo-Iweala Way, Utako, 900108, Abuja, Nigeria.
            </address>
          </div>
          <div className="ico">
            <FaPhoneAlt className="iconn" />
            <p>+2349024986450 +2348163700384</p>
          </div>
          <div className="ico">
            <CiMail className="iconn" />
            <address>odekunlewaris@gmail.com</address>
          </div>
          <div className="ico">
            <FaFacebookF className="iconn" />
            <Link>https://web.facebook.com/profile.php?id=100062592943567</Link>
          </div>
          <div className="ico">
            <FaTwitter className="iconn" />
            <Link>https://x.com/TitilopeNode</Link>
          </div>
        </div>
        <div className="second-contact">
          <h5>Get in touch</h5>
          <form onSubmit={handleSubmit}>
            <div>
              <input type="text" placeholder="Name" id="name" name="name" />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
              <input type="email" placeholder="Email" />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="subject">
              <input
                type="text"
                placeholder="Subject"
                id="subject"
                name="subject"
              />
              <ValidationError
                prefix="Subject"
                field="subject"
                errors={state.errors}
              />
            </div>
            <div className="text">
              {" "}
              <textarea
                placeholder="Write what you want"
                id="message"
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button
              className="lastButton"
              type="submit"
              disabled={state.submitting}
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
