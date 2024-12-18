import { useLocation, Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import { PaystackButton } from "react-paystack";
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
  const { idCollection, inputs, idholder } = location?.state || {};
  console.log(idholder);
  console.log(idCollection);
  console.log(inputs);

  const [navigateInput, setNavigateInput] = useState({
    arrival: inputs?.arrival,
    departure: inputs?.departure,
    fullname: inputs?.fullname,
    email: inputs?.email,
    telephone: inputs?.telephone,
    roomNumber: inputs?.roomNumber,
  });

  const [idholders, setIdHolders] = useState({
    firstLi: idholder?.firstLi,
    fouth: idholder?.fouth,
    name: idholder?.name,
    price: idholder?.price,
    secondLi: idholder?.secondLi,
    thirdLi: idholder?.thirdLi,
  });

  const [idCollections, setIdCollection] = useState({
    heading: idCollection?.heading,
    para: idCollection?.para,
    content: idCollection?.content,
  });

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

  const handleFormValidation = () => {
    if (!input.arrival || !input.depart || !input.email || !input.number) {
      alert("Please fill out all required fields before proceeding");
      return false;
    }
    return true;
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    if (!handleFormValidation()) return;

    // Clear inputs after successful validation
    setInput({
      arrival: "",
      depart: "",
      email: "",
      number: "",
    });
    setNavigateInput({
      arrival: "",
      departure: "",
      fullname: "",
      email: "",
      telephone: "",
      roomNumber: "",
    });
    setIdCollection({
      heading: "",
      para: "",
      content: "",
    });
    setIdHolders({
      firstLi: "",
      fouth: "",
      name: "",
      price: "",
      secondLi: "",
      thirdLi: "",
    });

    console.log("Proceeding with payment...");
  };

  const FromDate = new Date(navigateInput?.arrival);
  const ToDate = new Date(navigateInput?.departure);
  const totalDate = Math.ceil((ToDate - FromDate) / (1000 * 60 * 60 * 24));

  const price = idCollections?.para?.split("₦")[1]?.split(" ")[0];
  const price2 = idholders?.price?.split("₦")[1]?.split(" ")[0];
  console.log(price2);
  const zerodate =
    totalDate === 0
      ? Number(price?.replace(",", "")) || Number(price2?.replace(",", "") || 0)
      : 0;

  const changePrice = Number(price?.replace(",", "") * totalDate);
  const changePrice2 = Number(price2?.replace(",", "") * totalDate);
  const formattedPrice = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(changePrice || changePrice2 || zerodate);

  const publicKey = "pk_test_f008b74aed3b3e38328034093253b85eaa8628a6";
  const componentProps = {
    email: navigateInput?.email || input?.email || "No email provided",
    amount: (changePrice || changePrice2 || zerodate || 0) * 100,
    metadata: {
      fullname:
        navigateInput?.fullname || input?.fullname || "No name provided",
      phoneNumber:
        navigateInput?.number || input?.number || "No phone provided",
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
              <h5>{navigateInput?.arrival || input?.arrival}</h5>
            </div>
            <div className="check-out">
              <p>To</p>
              <h5>{navigateInput?.departure || input?.depart}</h5>
            </div>
            <div className="total-night">
              <p>Total Days</p>
              <h5> {totalDate}</h5>
            </div>
            <div className="total-guest">
              <p>Name</p>
              <h5>
                {" "}
                {(
                  navigateInput?.fullname ||
                  input?.fullname ||
                  "Guest"
                ).toLowerCase()}
              </h5>
            </div>
            <div className="childrens">
              <p>Room Number</p>
              <h5>{navigateInput?.roomNumber || inputs?.room}</h5>
            </div>
          </div>
          {/*  */}
          <div className="second-board">
            <h3>{(idholder && "HALL RENTAL") || "HIRE FEE"}</h3>
            <hr />
            <div className="car-title">
              {idCollections?.heading || idholders?.name}
            </div>
            <hr />
            <div className="total-guest">
              <p>Amount:</p>
              <h5> {`₦ ${price || price2}`}</h5>
            </div>
            <div className="childrens">
              <p>Number of Days:</p>
              <h5>{totalDate}</h5>
            </div>
          </div>
          <div className="total-booking">
            <div className="tot">TOTAL</div>
            <div className="priccce">{formattedPrice}</div>
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
                  value={input?.fullname || navigateInput?.fullname}
                  onChange={handleOnchange}
                />
              </div>
              {idCollection && (
                <div className="last-name">
                  <div>
                    <label htmlFor="room">room number *</label>
                  </div>
                  <input
                    type="text"
                    id="room"
                    name="room"
                    value={input?.room || navigateInput?.roomNumber}
                    onChange={handleOnchange}
                  />
                </div>
              )}
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
                  value={input?.email || navigateInput?.email}
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
                  value={input?.number || navigateInput?.telephone}
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
              <PaystackButton {...componentProps} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
