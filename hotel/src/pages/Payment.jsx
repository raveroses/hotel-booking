import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { PaystackButton } from "react-paystack";
// import PaymentButton from "./PaymentBtton";
export default function Payment({ newArry }) {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date(newArry.departure));
  const [dater, setDater] = useState(new Date(newArry.arrival));

  const location = useLocation();
  const { room, newbookingDetails } = location.state || {};
  console.log(newbookingDetails);
  // console.log(newbookingDetails?.nightPrice);
  // console.log(newbookingDetails?.receive?.room);
  // console.log(newbookingDetails?.receive.adult);
  // console.log(newbookingDetails?.totalPrices);
  const [stubborn, setStubborn] = useState({
    one: newbookingDetails?.receive.room,
    two: newbookingDetails?.receive.adult,
  });

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
  console.log(newbookingDetails?.totalPrices);
  const realTotalPrice = totalPrice * newArry?.numbers;

  const formattedPrice = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(realTotalPrice || newbookingDetails?.totalPrices);

  const [detail, setDetail] = useState({
    firstname: "",
    lastname: "",
    phoneNumber: "",
    address: "",
    email: "",
    text: "",
    checked: false,
  });

  const preventDefault = (e) => {
    e.preventDefault();
    if (
      !detail.firstname ||
      !detail.lastname ||
      !detail.email ||
      !detail.checked
    ) {
      alert("Please fill out all required fields!");
      return;
    }
    setDetail("");
  };

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setDetail((prev) => ({ ...prev, [name]: value }));
  };
  const newprice = newbookingDetails?.roomAmount * 100;
  const newprice2 = newbookingDetails?.nightPrice * 100;
  console.log(newprice2);
  console.log(newprice);
  console.log(newbookingDetails?.roomAmount);
  console.log(realTotalPrice);
  const publicKey = "pk_test_f008b74aed3b3e38328034093253b85eaa8628a6";
  const componentProps = {
    email: detail.email,
    amount: realTotalPrice * 100 || newbookingDetails?.totalPrices * 100,
    metadata: {
      firstname: detail.firstname,
      lastname: detail.lastname,
      phoneNumber: detail.phoneNumber,
    },
    publicKey,
    text: "PLACE ORDER",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () =>
      alert("Wait! Don't leave , Your Transaction is on processing :("),
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
                <Link to="/room">Halls</Link>
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
              <h5>{newArry?.arrival || newbookingDetails?.input?.arrival}</h5>
            </div>
            <div className="check-out">
              <p>Check-out</p>
              <h5>
                {newArry?.departure || newbookingDetails?.input?.departure}
              </h5>
            </div>
            <div className="total-night">
              <p>Total Night</p>
              <h5> {totalNights || newbookingDetails?.totalNight}</h5>
            </div>
            <div className="total-guest">
              <p>Total-Guest</p>
              <h5> {newArry?.number || stubborn?.one || "yyyyy"}</h5>
            </div>
            <div className="childrens">
              <p>Children</p>
              <h5>
                {newArry?.numberss || newbookingDetails?.receive?.children}
              </h5>
            </div>
          </div>
          <div className="flexxing-two">
            <h4>Selected Room</h4>
            <h3>{room?.hkn || newbookingDetails?.roomName}</h3>
            <div className="check-in">
              <p>Rooms</p>
              <h5>{newArry?.numbers || stubborn.two || "ggg"}</h5>
            </div>
            <div className="check-in">
              <p>Amounts</p>
              <h5>₦{room?.price || newbookingDetails?.roomAmount}</h5>
            </div>
            <div className="check-in">
              <p>Number of Days:</p>
              <h5>{numberOfDays || newbookingDetails?.totalNight + 1}</h5>
            </div>
          </div>
          <div className="total-booking">
            <div className="tot">TOTAL</div>
            <div className="priccce">{formattedPrice}</div>
          </div>
        </div>
        <div className="flex-payment">
          <h3>BILLING DETAILS</h3>

          <form onSubmit={preventDefault}>
            <div className="names">
              <div className="first-name">
                <div>
                  <label htmlFor="firstName">First Name *</label>
                </div>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  value={detail.firstname}
                  onChange={handleOnchange}
                />
              </div>
              <div className="last-name">
                <div>
                  <label htmlFor="lastName">Last Name *</label>
                </div>
                <input
                  type="text"
                  id="lastName"
                  name="lastname"
                  value={detail.lastname}
                  onChange={handleOnchange}
                />
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
                value={detail.address}
                onChange={handleOnchange}
              />
            </div>

            <div className="contact">
              <div className="email">
                <div>
                  <label htmlFor="">Email*</label>
                </div>
                <input
                  type="email"
                  name="email"
                  id=""
                  value={detail.email}
                  onChange={handleOnchange}
                />
              </div>
              <div className="phone">
                <div>
                  <label htmlFor="">Phone Number *</label>
                </div>
                <input
                  type="text"
                  name="phoneNumber"
                  value={detail.phoneNumber}
                  onChange={handleOnchange}
                />
              </div>
            </div>
            <div className="order-note">
              <div>
                <label htmlFor="">ORDER NOTE *</label>
              </div>

              <textarea
                name="text"
                id=""
                placeholder="Notes about your order, eg. special notes"
                value={detail.text}
                onChange={handleOnchange}
              ></textarea>
            </div>
            <div className="payment">
              <div>
                <input
                  type="radio"
                  name="checked"
                  checked={detail.checked}
                  onChange={handleOnchange}
                />
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
              <PaystackButton {...componentProps} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
