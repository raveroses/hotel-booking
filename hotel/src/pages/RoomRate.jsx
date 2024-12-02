import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import RoomRateArray from "../components/RoomRateArray";
import { Link } from "react-router-dom";

export default function RoomRate() {
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

  const roomy = RoomRateArray.map((item, index) => {
    return (
      <div className="roomie-flex" key={index}>
        <div
          className={`write-up-images${
            index % 2 === 0 ? "order-1" : "order-2"
          }`}
        >
          <img src={item.Image} alt={`imaage${index}`} />
        </div>
        <div className={`writeup ${index % 2 === 0 ? "order-1" : "order-2"}`}>
          <h1>{item.heading}</h1>
          <p>{item.headingSix}</p>
          <div className="real-writeup">{item.paragraph}</div>
          <button>{item.view}</button>
        </div>
      </div>
    );
  });
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
                <Link to="/"> Home</Link>
              </li>
              <li>
                <Link to="/room">Rooms & Rate</Link>
              </li>
              <li>
                <a href="">Car Hire</a>
              </li>
              <li>
                <a href="">Halls</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
            <ul className="ul">
              <li>
                <Link to="/">Hotel</Link>
              </li>
              <li>
                <Link to="/room">Rooms & Rate</Link>
              </li>
              <li>
                <a href="">Car Hire</a>
              </li>
              <li>
                <a href="">Halls</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="heading-choose">
          <h1>Room Rates</h1>
        </div>
      </div>

      <div>{roomy}</div>
    </>
  );
}
