import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HallArray from "../components/HallArray";
export default function Hall() {
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
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate("/product2", { state: { idholder: id } });
  };
  const hall = HallArray.map((item, index) => {
    return (
      <div className="hall-image" key={index}>
        <div
          className="first-image"
          style={{ backgroundImage: `url(${item.image[0]})` }}
        >
          <div className="first-image-content">
            <h1>{item.name} </h1>
            <p>{item.price}</p>
            <ul>
              <li>{item.firstLi}</li>
              <li>{item.secondLi}</li>
              <li>{item.thirdLi}</li>
              <li>{item.fouth} </li>
            </ul>
            <button
              className="view-detail"
              onClick={() => handleNavigate(item)}
            >
              VIEW DETAILS
            </button>
          </div>
        </div>
      </div>
    );
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <h1>HALLS</h1>
        </div>
      </div>
      {hall}
    </>
  );
}
