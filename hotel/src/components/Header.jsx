import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
export default function Header() {
  const Carousel = [
    {
      image: "images/luxry.png",
      content: "Welcome to Hotel De Bently",
      content2: "HOTELS & BARS",
    },
    {
      image: "images/luxry2.png",
      content: "Enjoy a Luxury Experience",
      content2: "HOTEL DE BENTLEY",
    },
  ];
  return (
    <>
      <div className="heading">
        <div className="top-image">
          <img src="/images/luxry.png" alt="top-image" />
        </div>
        <div className="heading-content">
          <div className="address">
            <CiLocationOn /> 892, Ngozi Okonjo-Iweala Way, Utako, 900108, Abuja.
            <FaPhoneAlt style={{ marginLeft: "20px" }} /> +2348052131203
            +2348067595321
          </div>
          {/* <hr className="line" /> */}
          <div className="logo-part">
            <div className="logo">
              <img src="/images/logo.png" alt="logo" />
            </div>
            <div className="navbar">
              <ul>
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
          <div className="carousel">
            <h2>WELCOME TO HOTEL DE BENTLY</h2>
            <div className="flexo">
              <div></div> <p>HOTELS & BARS</p> <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
