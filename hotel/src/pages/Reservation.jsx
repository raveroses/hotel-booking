import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
export default function Reservation({ newArry }) {
  const arr = [newArry];

  const map = arr.map((item) => {
    console.log(item.arrival);
  });

  return (
    <>
      <div className="heading-hero">
        <div className="addresss">
          <CiLocationOn /> 892, Ngozi Okonjo-Iweala Way, Utako, 900108, Abuja.
          <FaPhoneAlt style={{ marginLeft: "20px" }} /> +2348052131203
          +2348067595321
        </div>
        <div className="logo-partss">
          <div className="logos">
            <img src="/images/logo.png" alt="logo" />
          </div>
          <div className="navbars">
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
        <div className="heading">
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
                <h5>YOU ARE BOOKING</h5>
                <p> 1 Adult, 0 Child, 1 Rooms</p>
              </div>
              <div className="booking2">
                <h5> YOUR STAY DATES</h5>
                <p>
                  Arrival: <span>12-11-2024</span>{" "}
                </p>
                <p>
                  {" "}
                  Departure: <span>13-11-2024</span>
                </p>
              </div>
            </div>
          </div>
          <div className="hotel-image"></div>
        </div>
      </div>
    </>
  );
}
