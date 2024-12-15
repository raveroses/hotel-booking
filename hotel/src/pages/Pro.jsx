import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import HallArray from "../components/HallArray";
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
  const { idCollection, idholder } = location?.state || {};
  console.log(idholder);
  const price = idCollection?.para.split(" ")[0];

  console.log(idholder?.image);
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
    e.preventDefault();
  };

  const navigate = useNavigate();
  const handlePassObject = () => {
    if (
      input.arrival &&
      input.departure &&
      input.fullname &&
      input.email &&
      input.telephone
    ) {
      navigate("/payment2", {
        state: {
          inputs: input,
          idCollection: idCollection,
          idholder: idholder,
        },
      });
    } else {
      alert("Please fill out all required fields before proceeding.");
    }
  };
  const [number, setNumber] = useState(0);
  const bigImage = idholder?.image[number];

  const smalImagesEffect = (id) => {
    setNumber(id);
  };

  const handleNext = () => {
    if (number < idholder?.image.length - 1) {
      setNumber((prev) => prev + 1);
    } else {
      setNumber(0);
    }
  };

  const handPrev = () => {
    if (number > 0) {
      setNumber((prev) => prev - 1);
    } else {
      setNumber(idholder?.image.length - 1);
    }
  };

  const smalImages = idholder?.image?.map((item, index) => {
    return (
      <div
        className="small-images another-one"
        key={index}
        onClick={() => smalImagesEffect(index)}
      >
        <img src={idCollection?.image || item} alt="small-image" />
      </div>
    );
  });
  const price2 = idholder?.price?.split(" ")[0];
  const handleNavigate = (id) => {
    navigate("/product2", { state: { idholder: id } });
  };
  const filtering = HallArray?.filter((item) => item?.name !== idholder?.name);

  const filterMap = filtering?.map((item, index) => {
    return (
      <div className="filter-container" key={index}>
        <div className="filter-image">
          <img src={item?.image[0]} alt="" />
        </div>
        <div className="filter-name">{item?.name}</div>
        <div className="capacity"> {item?.fouth}</div>
        <button onClick={() => handleNavigate(item)}>View All</button>
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
          <p>{price}</p>
        </div>
      </div>

      <div className="display-flexs">
        <div>
          <div className="image">
            <div className="prevv" onClick={handPrev}>
              <FaRegArrowAltCircleLeft />
            </div>
            <div className="big-image">
              {" "}
              <img src={idCollection?.image || bigImage} alt="car-image" />
            </div>
            <div className="nexts" onClick={handleNext}>
              <FaRegArrowAltCircleRight />
            </div>
          </div>

          {smalImages}
        </div>
        <div className="paying">
          <img src="/images/logo.png" alt="logo" />
          <div className="text-center">
            <p className="pa">
              {(idholder?.name || "STARTING FROM").toUpperCase()}
            </p>
            <h1>{price || price2}</h1>
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
            {idCollection && (
              <>
                <label htmlFor="roomNumber">Room Number</label>
                <input
                  type="text"
                  name="roomNumber"
                  value={input.roomNumber}
                  onChange={handleOnChange}
                  id="roomNumber"
                  required
                />
              </>
            )}
            <button type="submit" className="bookie" onClick={handlePassObject}>
              BOOK NOW
            </button>
          </form>
          <div />
        </div>
      </div>
      <div className="car-hire">
        <div className="descrip"> Description</div>

        {idCollection && (
          <div className="carname">
            <h2>{"Toyota Land Cruiser 2023"}</h2>
            <p>This is a perfect car for today and tomorow guest</p>
          </div>
        )}
        {idholder && (
          <div className="carname">
            <h2>{idholder?.name}</h2>
            <ul>
              <li>{idholder?.firstLi}</li>
              <li>{idholder?.secondLi}</li>
            </ul>
          </div>
        )}
      </div>
      {idCollection && (
        <div className="sep">These might also interest you!</div>
      )}

      {idholder && (
        <div className="hotels-heading">
          <h5>Another Halls</h5>
          <div className="mother">{filterMap}</div>
        </div>
      )}
    </>
  );
}
