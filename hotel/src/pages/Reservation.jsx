import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaCaretRight } from "react-icons/fa";
import BookingArray from "../components/BookingArray";
export default function Reservation({ newArry }) {
  console.log(newArry);
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
                <h5>
                  <FaCaretRight />
                  YOU ARE BOOKING
                </h5>
                <p>
                  {" "}
                  {newArry.number}Adult, {newArry.numbers} Child,{" "}
                  {newArry.numberss} Rooms
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
                        <button className="bookingg">BOOK ROOM</button>
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
