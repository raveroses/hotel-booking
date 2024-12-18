import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaCaretRight } from "react-icons/fa";
import BookingArray from "../components/BookingArray";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
export default function Reservation({ newArry }) {
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [reveal, setReveal] = useState(false);
  const handleMenu = () => {
    setReveal((prev) => !prev);
  };

  const handleCancel = () => {
    setReveal(false);
  };

  const navigate = useNavigate();

  const handleNav = (index) => {
    const selectedRoom = BookingArray[index];

    navigate("/payment", {
      state: {
        room: selectedRoom,
        bookingDetails: newArry,
      },
    });
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
                <Link to="/room">Halls</Link>
              </li>
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="heading-choose">
          <h1>CHOOSE ROOM</h1>
        </div>
      </div>
      <div className="bodyy">
        <div className="numbers">
          <p>
            <span>2.</span>choose Room
          </p>
        </div>
        <hr className="margin-line" />

        <div className="props-pass">
          <div className="select">
            <div className="selec-room">Select Rooms</div>
            <div className="second">
              <div className="booking">
                <h5>
                  <FaCaretRight />
                  YOU ARE BOOKING
                </h5>
                <p>
                  {" "}
                  {newArry.number}Adult, {newArry.numberss}Child,{" "}
                  {newArry.numbers} Rooms
                </p>
              </div>
              <div className="booking2">
                <h5>
                  <FaCaretRight />
                  YOUR STAY DATES
                </h5>
                <p>
                  Arrival: <span>{newArry.arrival}</span>{" "}
                </p>
                <p>
                  Departure: <span>{newArry.departure}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="hotel-image">
            {BookingArray?.map((item, index) => {
              return (
                <div className="liist" key={index}>
                  <h5>{item.hkn}</h5>
                  <div className="imaginary-display">
                    <div className="imaging">
                      <img src={item.image} alt={`${index}image`} />
                    </div>

                    <div className="imaginary-content">
                      <p>{item.content}</p>
                      <div className="prii">
                        <div className="priii">
                          {" "}
                          <h4>
                            ₦{item.price}
                            <span>/night</span>
                          </h4>
                        </div>
                        <button
                          className="bookingg"
                          onClick={() => handleNav(index)}
                        >
                          BOOK ROOM
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
