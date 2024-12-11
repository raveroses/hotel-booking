import { useLocation } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
export default function Payment2() {
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

  const location = useLocation();
  const { idCollection, inputs } = location?.state || {};
  console.log(idCollection, inputs);

  const [input, setInput] = useState({
    arrival: "",
    depart: "",
    email: "",
    number: "",
  });
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmission = (e) => {
    e.preventDefault();
  };
  console.log(input);
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
            <ul className="ul">
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

        <div className="heading-choose">
          <h1>Review Order</h1>
        </div>
      </div>

      <div className="bodyy">
        <div className="numbers">
          <p>confirmation</p>
        </div>
        <hr className="margin-line" />
      </div>

      <div className="flex">
        <div className="flexxing">
          <div className="flexxing-one">
            <h3> DATES</h3>
            <hr />
            <div className="check-in">
              <p>From</p>
              <h5>{inputs.arrival || input.arrival}</h5>
            </div>
            <div className="check-out">
              <p>To</p>
              <h5>{inputs.departure || input.depart}</h5>
            </div>
            <div className="total-night">
              <p>Total Days</p>
              <h5> 11</h5>
            </div>
            <div className="total-guest">
              <p>Name</p>
              <h5>
                {" "}
                {inputs.fullname.toLowerCase() || input.fullname.toLowerCase()}
              </h5>
            </div>
            <div className="childrens">
              <p>Room Number</p>
              <h5>{inputs.roomNumber || inputs.room}</h5>
            </div>
          </div>
          {/*  */}
          <div className="second-board">
            <h3>HIRE FEE</h3>
            <hr />
            <div className="car-title">{idCollection.heading}</div>
            <hr />
            <div className="total-guest">
              <p>Amount:</p>
              <h5> #100001</h5>
            </div>
            <div className="childrens">
              <p>Number of Days:</p>
              <h5>312</h5>
            </div>
          </div>
          <div className="total-booking">
            <div className="tot">TOTAL</div>
            <div className="priccce">11000</div>
          </div>
        </div>
        <div className="flex-payment">
          <h3>BILLING DETAILS</h3>

          <form onSubmit={handleSubmission}>
            <div className="names">
              <div className="first-name">
                <div>
                  <label htmlFor="fullname">Full name *</label>
                </div>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  value={input.fullname || inputs.fullname}
                  onChange={handleOnchange}
                />
              </div>
              <div className="last-name">
                <div>
                  <label htmlFor="room">room number *</label>
                </div>
                <input
                  type="text"
                  id="room"
                  name="room"
                  value={input.room || inputs.roomNumber}
                  onChange={handleOnchange}
                />
              </div>
            </div>

            <div className="contact">
              <div className="email">
                <div>
                  <label htmlFor="email">Email*</label>
                </div>
                <input
                  type="email"
                  name="email"
                  id=""
                  value={input.email || inputs.email}
                  onChange={handleOnchange}
                />
              </div>
              <div className="phone">
                <div>
                  <label htmlFor="number">Phone Number *</label>
                </div>
                <input
                  type="text"
                  name="number"
                  value={input.number || inputs.telephone}
                  onChange={handleOnchange}
                />
              </div>
            </div>

            <div className="payment">
              <div>
                <input type="radio" name="checked" checked="" onChange="" />
                <label htmlFor="">CREDIT CARD</label>
              </div>
              <div className="pament-image">
                <img
                  src="images/paystack.png"
                  alt="paystack"
                  className="paystacks"
                />
                <img src="images/visa.jpg" alt="visa" />
                <img src="images/2co.jpg" alt="o" />
                <img src="images/o.jpg" alt="o" />
                <img src="images/american.jpg" alt="paypal" />
                <img src="images/mastercard.jpg" alt="mastercard" />
              </div>
            </div>
            <div className="place-order">
              <button>pay now</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
