import { useLocation } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
export default function ProductDisplay() {
  const location = useLocation();
  const check = location.state || {};
  console.log(check);
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

  const number = check?.placeholder.headingSix.split(" ")[0];
  const dropdownNumber = [1, 2, 3, 4];
  const num = dropdownNumber.map((item, index) => {
    return (
      <div className="rolldown-numbers" key={index}>
        {item}
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
          <h1>{check?.placeholder.heading}</h1>
          <p>{check?.placeholder.headingSix}</p>
        </div>
      </div>
      <div className="display-flex">
        <div className="image">
          <div className="prevv">
            <FaRegArrowAltCircleLeft />
          </div>

          <div>
            {" "}
            <img src="/images/standardone.jpg" alt="" />
          </div>

          <div className="nexts">
            <FaRegArrowAltCircleRight />
          </div>
        </div>
        <div className="paying">
          <img src="/images/logo.png" alt="logo" />
          <div className="text-center">
            <p>STARTING FROM</p>
            <h1>{number}</h1>
            <p className="nighty">/night</p>
          </div>
          <hr />
          <form action="">
            <label htmlFor="arrival">Arrival</label>
            <input type="date" name="" id="arrival" />
            <label htmlFor="arrival">Departure</label>
            <input type="date" name="" id="Departure" />
          </form>
          <div className="client-detail">
            <div className="label-alike">Adult</div>
            <div className="arrival-number">
              <div className="reall-number">1</div>
              <div className="number-icon">
                <FaCaretDown />
              </div>
            </div>
            <div className="rolldown-number">{num}</div>
          </div>

          <div className="client-detail">
            <div className="label-alike">children</div>
            <div className="arrival-number">
              <div className="reall-number">1</div>
              <div className="number-icon">
                <FaCaretDown />
              </div>
            </div>
            <div className="rolldown-number">{num}</div>
          </div>
          <div className="client-detail">
            <div className="label-alike">Rooms</div>
            <div className="arrival-number">
              <div className="reall-number">1</div>
              <div className="number-icon">
                <FaCaretDown />
              </div>
            </div>
            <div className="rolldown-number">{num}</div>
          </div>
          <button type="submit" className="bookie">
            BOOK NOW
          </button>
        </div>
      </div>
    </>
  );
}
