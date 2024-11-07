import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { useEffect, useState } from "react";
import HomeBody from "./HomeBody";
import Date from "./Date";
import ArrayPart from "./ArrayPart";
export default function Header() {
  const [controller, setController] = useState(0);
  const [show, setShow] = useState(false);
  const handleOver = () => {
    setShow((prev) => !prev);
  };
  const Carousel = [
    {
      image: "images/luxry.png",
      content: "Welcome to Hotel De Bently",
      content2: "HOTELS & BARS",
    },
    {
      image: "images/luxry2.png",
      content: "Enjoy a Luxury Experience",
      content2: "HOTEL DE BENTLEY",
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setController((prevController) => {
        if (prevController < Carousel.length - 1) {
          return prevController + 1;
        } else {
          return 0; // Reset to 0
        }
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setController((prevController) => {
      if (prevController < Carousel.length - 1) {
        return prevController + 1;
      } else {
        return 0;
      }
    });
  };
  const handleDecrease = () => {
    setController((prevController) => {
      if (prevController > 0) {
        return prevController - 1;
      } else {
        return 0;
      }
    });
  };
  return (
    <>
      <div className="heading">
        <div className="top-image" onMouseOver={handleOver}>
          <img src={Carousel[controller].image} alt="top-image" />
        </div>
        <div className="heading-content">
          <div className="address">
            <CiLocationOn /> 892, Ngozi Okonjo-Iweala Way, Utako, 900108, Abuja.
            <FaPhoneAlt style={{ marginLeft: "20px" }} /> +2348052131203
            +2348067595321
          </div>
          {/* <hr className="line" /> */}
          <div className="logo-part">
            <div className="logo">
              <img src="/images/logo.png" alt="logo" />
            </div>
            <div className="navbar">
              <ul>
                <li>
                  <a href=""> Home</a>
                </li>
                <li>
                  <a href="">Rooms & Rate</a>
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
          <div className="carousel">
            <h2>{Carousel[controller].content}</h2>
            <div className="flexo">
              <div></div> <p>{Carousel[controller].content2}</p> <div></div>
            </div>
          </div>
          <div
            className="icon"
            style={{ visibility: show ? "visible" : "hidden" }}
          >
            <FaArrowCircleLeft className="ikon" onClick={handleDecrease} />
            <FaArrowCircleRight className="ikon" onClick={handleNext} />
          </div>
          <div className="date">
            <Date />
          </div>
        </div>
        <div className="roomss">
          <HomeBody />
        </div>
        <div className="image-apartment">
          {" "}
          <ArrayPart />
        </div>
      </div>
    </>
  );
}
