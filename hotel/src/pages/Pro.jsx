import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

export default function Pro() {
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
  const { idCollection } = location?.state || {};
  const price = idCollection?.para.split(" ")[0];

  const [input, setInput] = useState({
    arrival: "",
    departure: "",
    fullname: "",
    email: "",
    telephone: "",
    roomNumber: "",
  });
  console.log(input);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.prevenDefault();
  };

  const navigate = useNavigate();
  const handlePassObject = () => {
    navigate("/payment2", {
      state: { inputs: input, idCollection: idCollection },
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
                <Link to="/hall">Halls</Link>
              </li>
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="heading-choose">
          <p>{price}</p>
        </div>
      </div>

      <div className="display-flexs">
        <div className="image">
          <img src="images/car.jpg" alt="car-image" />
        </div>
        <div className="paying">
          <img src="/images/logo.png" alt="logo" />
          <div className="text-center">
            <p className="pa">STARTING FROM</p>
            <h1>{price}</h1>
            <p className="nighty">/day</p>
          </div>
          <hr />
          <form onSubmit={handleSubmit}>
            <label htmlFor="arrival">From</label>
            <input
              type="date"
              value={input.arrival}
              name="arrival"
              onChange={handleOnChange}
              id="arrival"
              required
            />
            <label htmlFor="departure">To</label>
            <input
              type="date"
              name="departure"
              value={input.departure}
              onChange={handleOnChange}
              id="departure"
              required
            />
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              name="fullname"
              value={input.fullname}
              onChange={handleOnChange}
              id="fullname"
              required
            />
            <label htmlFor="email"> Email</label>
            <input
              type="email"
              name="email"
              value={input.email}
              onChange={handleOnChange}
              id="email"
              required
            />
            <label htmlFor="telephone"> Telephone</label>
            <input
              type="text"
              name="telephone"
              value={input.telephone}
              onChange={handleOnChange}
              id="telephone"
              required
            />
            <label htmlFor="roomNumber"> Room Number</label>
            <input
              type="text"
              name="roomNumber"
              value={input.roomNumber}
              onChange={handleOnChange}
              id="roomNumber"
              required
            />
            <button type="submit" className="bookie" onClick={handlePassObject}>
              BOOK NOW
            </button>
          </form>
          <div />
        </div>
      </div>
      <div className="car-hire">
        <div className="descrip"> Description</div>

        <div className="carname">
          <h2>Toyota Land Cruiser 2023</h2>
          <p>This is a perfect car for today and tomorow guest</p>
        </div>
      </div>
      <div className="sep">These might also interest you!</div>
    </>
  );
}
