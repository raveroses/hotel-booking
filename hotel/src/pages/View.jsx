import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import GridImage from "../components/GridImage";
import { FaRegTimesCircle } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
// import RoomRate from "./RoomRate";

export default function View() {
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

  const column = [
    { image: "images/passage.jpg", id: 13 },
    { image: "images/big.jpg", id: 14 },

    { image: "images/luxry.png", id: 15 },
  ];

  const [container, setContainer] = useState([...GridImage, ...column]);

  const [number, setNumber] = useState(column[1].image);

  const handleClick = (id) => {
    const item = container.find((item) => id === item.id);
    if (item) {
      setNumber(item.image);
      setCancel((c) => !c);
    }
  };

  const images = GridImage.map((item, index) => {
    return (
      <div
        className="grid-image"
        key={index}
        onClick={() => handleClick(item.id)}
      >
        <img src={item.image} alt={item.id} />
      </div>
    );
  });

  const [cancel, setCancel] = useState(false);
  const handleCancell = () => {
    setCancel((c) => !c);
  };
  const [count, setCount] = useState(0);
  // const handleNext = () => {
  //   if (count < container.length - 1) {
  //     // setCount((c) => c + 1);
  //     setNumber(column[setCount((c) => c + 1)].image);
  //   }
  // };

  const handleNext = () => {
    if (count < container.length - 1) {
      const nextCount = count + 1; // Calculate the next value
      setCount(nextCount); // Update the count state
      setNumber(container[nextCount].image); // Use the new count to access the image
    }
  };

  const handleprev = () => {
    if (count > 0) {
      const nextCount = count - 1; // Calculate the next value
      setCount(nextCount); // Update the count state
      setNumber(container[nextCount].image); // Use the new count to access the image
    }
  };

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
          <h1>GALLERY</h1>
        </div>
      </div>

      <div className="images-containers">
        <div className="grid-column">
          {column?.map((item, index) => {
            return (
              <div
                key={index}
                className="col"
                onClick={() => handleClick(item.id)}
              >
                {" "}
                <img src={item.image} alt={item.id} />
              </div>
            );
          })}
        </div>
        {/* ENDING OF THE FIRST MAP */}
        <div className="two-grid">{images}</div>
      </div>

      <div
        className="grid-modal"
        style={{ display: cancel ? "block" : "none" }}
      >
        <div className="cancell" onClick={handleCancell}>
          <FaRegTimesCircle
            style={{ color: "white", fontWeight: "700px", fontSize: "20px" }}
          />
        </div>
        <img src={number} alt="" />
        <div className="moving-icon">
          <div className="prev" onClick={handleprev}>
            <FaChevronCircleLeft />
          </div>
          <div className="numbs">
            {count + 1}/{container.length}
          </div>
          <div className="nextt" onClick={handleNext}>
            <FaChevronCircleRight />
          </div>
        </div>
      </div>
      <div
        className="overlay"
        style={{ display: cancel ? "block" : "none" }}
      ></div>
    </>
  );
}
