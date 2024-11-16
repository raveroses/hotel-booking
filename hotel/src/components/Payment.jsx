import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Stripe } from "stripe";

export default function Payment({ newArry }) {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date(newArry.departure));
  const [dater, setDater] = useState(new Date(newArry.arrival));

  const location = useLocation();
  const { room, bookingDetails } = location.state || {};

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

  const totalNights = Math.ceil(
    (date.getTime() - dater.getTime()) / (1000 * 3600 * 24)
  );
  const numberOfDays = totalNights + 1;

  const price = Number(room?.price.replace(/,/g, "")); // Remove commas
  const totalPrice = price * totalNights;

  const formattedPrice = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(totalPrice);

  const payment = async () => {
    // const stripe=
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
          <h1>REVIEW ORDER</h1>
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
              <p>Check-in</p>
              <h5>{newArry.arrival}</h5>
            </div>
            <div className="check-out">
              <p>Check-out</p>
              <h5>{newArry.departure}</h5>
            </div>
            <div className="total-night">
              <p>Total Night</p>
              <h5> {totalNights}</h5>
            </div>
            <div className="total-guest">
              <p>Total-Guest</p>
              <h5> {newArry.number}</h5>
            </div>
            <div className="childrens">
              <p>Children</p>
              <h5>{newArry.numberss}</h5>
            </div>
          </div>
          <div className="flexxing-two">
            <h4>Selected Room</h4>
            <h3>Standard</h3>
            <div className="check-in">
              <p>Rooms</p>
              <h5>{newArry.numbers}</h5>
            </div>
            <div className="check-in">
              <p>Amounts</p>
              <h5>₦{room?.price}</h5>
            </div>
            <div className="check-in">
              <p>Number of Days:</p>
              <h5>{numberOfDays}</h5>
            </div>
          </div>
          <div className="total-booking">
            <div className="tot">TOTAL</div>
            <div className="priccce">{formattedPrice}</div>
          </div>
        </div>
        <div className="flex-payment">
          <h3>BILLING DETAILS</h3>

          <form action="">
            <div className="names">
              <div className="first-name">
                <div>
                  <label htmlFor="firstName">First Name *</label>
                </div>
                <input type="text" id="firstName" name="first-name" />
              </div>
              <div className="last-name">
                <div>
                  <label htmlFor="lastName">Last Name *</label>
                </div>
                <input type="text" id="lastName" name="last-name" />
              </div>
            </div>

            <div className="addresso">
              <div>
                <label htmlFor="address">Address*</label>
              </div>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Street Address"
              />
            </div>

            <div className="contact">
              <div className="email">
                <div>
                  <label htmlFor="">Email*</label>
                </div>
                <input type="email" name="email" id="" />
              </div>
              <div className="phone">
                <div>
                  <label htmlFor="">Phone Number *</label>
                </div>
                <input type="text" />
              </div>
            </div>
            <div className="order-note">
              <div>
                <label htmlFor="">ORDER NOTE *</label>
              </div>

              <textarea
                name=""
                id=""
                placeholder="Notes about your order, eg. special notes"
              ></textarea>
            </div>
            <div className="payment">
              <div>
                <input type="radio" name="" id="" />
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
              <button>PLACE ORDER</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
