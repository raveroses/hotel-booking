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
import ImageArray from "../components/ImageArray";
import { FaBed } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";

// import RoomRateArray from "../components/RoomRateArray";
import { useNavigate } from "react-router-dom";
export default function ProductDisplay() {
  const location = useLocation();
  const check = location.state || {};

  const navigate = useNavigate();
  const handleOnclick = (id) => {
    navigate("/product", { state: { placeholder: id } });
    window.scrollTo(0, 0);
  };

  // const [saveme, setSaveme] = useState({});

  // useEffect(() => {
  //   const imagechecker = ImageArray.find((item, index) => {
  //     if (item.name === check?.placeholder.heading) {
  //       setSaveme(item);
  //     }
  //   });
  // }, []);
  // console.log(saveme);
  // //   const [second, setSecond]= useState(null)
  //   useEffect(() => {
  // const secondOption= ImageArray.find(item,index=>{

  // })
  // }, []);
  const [access, setAccess] = useState(0);

  const bigImage = check.placeholder.image?.[access];
  // // console.log(bigImage);
  const handleImageChanger = (id) => {
    setAccess(id);
  };
  // // console.log(saveme.image?.length - 1);
  const handleNext = () => {
    if (access < check.placeholder.image?.length - 1) {
      setAccess((prev) => prev + 1);
    } else {
      setAccess(0);
    }
  };

  const handlePrev = () => {
    if (access > 0) {
      setAccess((prev) => prev - 1);
    } else {
      setAccess(check.placeholder.image?.length - 1);
    }
  };

  const chec = check.placeholder.image?.map((item, index) => {
    return (
      <img
        src={item}
        alt="not showing"
        key={index}
        onClick={() => handleImageChanger(index)}
      />
    );
  });

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
  const changeNumber = number.split("₦")[1].replace(",", "");

  const dropdownNumber = [1, 2, 3, 4];
  const [receive, setReceive] = useState({
    adult: "",
    children: "",
    room: "",
  });

  const handleNumber = (id) => {
    const find = dropdownNumber.find((item) => {
      if (item === id) {
        setReceive((prev) => ({
          ...prev,
          adult: item,
        }));
      }
    });
  };
  const handleNumber2 = (id) => {
    const find = dropdownNumber.find((item) => {
      if (item === id) {
        setReceive((prev) => ({
          ...prev,
          children: item,
        }));
      }
    });
  };

  const handleNumber3 = (id) => {
    const find = dropdownNumber.find((item) => {
      if (item === id) {
        setReceive((prev) => ({
          ...prev,
          room: item,
        }));
      }
    });
  };
  const num = dropdownNumber.map((item, index) => {
    return (
      <div
        className="rolldown-numbers"
        key={index}
        onClick={() => {
          handleNumber(item);
        }}
      >
        {item}
      </div>
    );
  });
  const nums = dropdownNumber.map((item, index) => {
    return (
      <div
        className="rolldown-numbers"
        key={index}
        onClick={() => handleNumber2(item)}
      >
        {item}
      </div>
    );
  });
  const numss = dropdownNumber.map((item, index) => {
    return (
      <div
        className="rolldown-numbers"
        key={index}
        onClick={() => handleNumber3(item)}
      >
        {item}
      </div>
    );
  });

  const [showup, setShowUp] = useState({
    sh: false,
    sho: false,
    showp: false,
  });

  const handleShowUp = () => {
    setShowUp((prev) => ({
      ...prev,
      sh: !prev.sh,
    }));
  };
  const handleShowUp2 = () => {
    setShowUp((prev) => ({
      ...prev,
      sho: !prev.sho,
    }));
  };
  const handleShowUp3 = () => {
    setShowUp((prev) => ({
      ...prev,
      showp: !prev.showp,
    }));
  };

  const [input, setInput] = useState({
    arrival: "",
    departure: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.prevenDefault();
  };

  const departureDate = new Date(input.departure);
  const arrivalDate = new Date(input.arrival);

  const totalNights = Math.ceil(
    (departureDate.getTime() - arrivalDate.getTime()) / (1000 * 3600 * 24)
  );

  const night = Number(changeNumber * totalNights);

  const amount = night * Number(receive.room);

  const save = {
    input: input,
    receive: receive,
    roomAmount: night,
    totalNight: totalNights,
    totalPrices: amount,
    roomName: check?.placeholder?.heading,
  };

  const [newObj, setNewObj] = useState();

  useEffect(() => {
    const roomFactcheck = ImageArray.filter((item, index) => {
      return item.name !== check?.placeholder.heading;
    });

    setNewObj(roomFactcheck);
  }, []);

  const handleleAnotherNavigate = () => {
    navigate("/payment", { state: { newbookingDetails: save } });
  };
  console.log(save);
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
          <h1>{check?.placeholder.heading || check?.placeholder.name}</h1>
          <p>{check?.placeholder.headingSix}</p>
        </div>
      </div>
      <div className="display-flex">
        <div>
          <div className="image">
            <div className="prevv" onClick={handlePrev}>
              <FaRegArrowAltCircleLeft />
            </div>

            <div>
              {" "}
              <img src={`${bigImage || "images/studio.jpg"}`} alt="imsg" />
              <div className="half-content">{`${
                check.placeholder.para || "hhshshshshshshshshhshshsh"
              }`}</div>
            </div>

            <div className="nexts" onClick={handleNext}>
              <FaRegArrowAltCircleRight />
            </div>
          </div>
          <div className="small-images">{chec}</div>
        </div>
        <div className="paying">
          <img src="/images/logo.png" alt="logo" />
          <div className="text-center">
            <p className="pa">STARTING FROM</p>
            <h1>{number}</h1>
            <p className="nighty">/night</p>
          </div>
          <hr />
          <form onSubmit={handleSubmit}>
            <label htmlFor="arrival">Arrival</label>
            <input
              type="date"
              value={input.arrival}
              name="arrival"
              onChange={handleOnChange}
              id="arrival"
            />
            <label htmlFor="departure">Departure</label>
            <input
              type="date"
              name="departure"
              value={input.departure}
              onChange={handleOnChange}
              id="departure"
            />
          </form>
          <div className="client-detail">
            <div className="label-alike">Adult</div>
            <div className="arrival-number" onClick={handleShowUp}>
              <div className="reall-number">{receive.adult}</div>
              <div className="number-icon">
                <FaCaretDown />
              </div>
            </div>
            <div
              className="rolldown-number"
              style={{ display: showup.sh ? "block" : "none" }}
            >
              {num}
            </div>
          </div>

          <div className="client-detail">
            <div className="label-alike">children</div>
            <div className="arrival-number" onClick={handleShowUp2}>
              <div className="reall-number">{receive.children}</div>
              <div className="number-icon">
                <FaCaretDown />
              </div>
            </div>
            <div
              className="rolldown-number"
              style={{ display: showup.sho ? "block" : "none" }}
            >
              {nums}
            </div>
          </div>
          <div className="client-detail">
            <div className="label-alike">Rooms</div>
            <div className="arrival-number" onClick={handleShowUp3}>
              <div className="reall-number">{receive.room}</div>
              <div className="number-icon">
                <FaCaretDown />
              </div>
            </div>
            <div
              className="rolldown-number"
              style={{ display: showup.showp ? "block" : "none" }}
            >
              {numss}
            </div>
          </div>
          <button
            type="submit"
            className="bookie"
            onClick={handleleAnotherNavigate}
          >
            BOOK NOW
          </button>
        </div>
      </div>

      <hr className="hr" />
      <div className="description-flex">
        <div className="description">
          <h4>DESCRIPTION</h4>
          <div>
            <div className="separate"></div>
          </div>
        </div>
        <div className="second-description">
          <div className="headline">
            {check.placeholder?.name || check.placeholder?.heading}
          </div>
          <div className="complete">{check.placeholder?.complete}</div>
          <div className="sec">
            <h5>FEATURES</h5>

            <div className="icon-with-name">
              <div className="icon-flex">
                <div className="icons">
                  <img src="/images/breakfast.svg" alt="break-fast" />
                </div>
                <div className="icon-feautures-name">Breakfast</div>
              </div>
              <div className="icon-flex">
                <div className="icons">
                  <img src="/images/modern.svg" alt="" />
                </div>
                <div className="icon-feautures-name">Flatscreen TV</div>
              </div>
              <div className="icon-flex">
                <div className="icons">
                  <img src="/images/bathroom.svg" alt="" />
                </div>
                <div className="icon-feautures-name"> Hair Dryer</div>
              </div>
              <div className="icon-flex">
                <div className="icons">
                  <img src="/images/laund.svg" alt="" />
                </div>
                <div className="icon-feautures-name"> Iron Board</div>
              </div>
              <div className="icon-flex">
                <div className="icons">
                  <img src="/images/modern.svg" alt="" />
                </div>
                <div className="icon-feautures-name">Telephone</div>
              </div>
              <div className="icon-flex">
                <div className="icons">
                  <img src="/images/bathroom.svg" alt="" />
                </div>
                <div className="icon-feautures-name"> Bathhub</div>
              </div>
              <div className="icon-flex">
                <div className="icons">
                  <img src="/images/wifi-check.svg" alt="" />
                </div>
                <div className="icon-feautures-name">WiFi</div>
              </div>
              <div className="icon-flex">
                <div className="icons">
                  <img src="/images/office.svg" alt="break-fast" />
                </div>
                <div className="icon-feautures-name">Writing Table</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="another-section">
        {newObj?.map((item, index) => {
          return (
            <div className="sections" key={index}>
              <img
                src={item.image[0]}
                alt="image"
                onClick={() => handleOnclick(item)}
              />
              <h1>{item.name}</h1>
              <div className="icons-flex">
                <div className="iconss">
                  <FaBed />
                </div>
                <p>Kingsize</p>
              </div>
              <div className="icons-flex">
                <div className="iconss">
                  <FaWifi />
                </div>
                <p>Wifi</p>
              </div>
              <div className="icons-flex">
                <div className="iconss">
                  <ImSpoonKnife />
                </div>
                <p>Breakfast</p>
              </div>

              <button onClick={() => handleOnclick(item)}>View Details</button>
            </div>
          );
        })}
      </div>
    </>
  );
}
