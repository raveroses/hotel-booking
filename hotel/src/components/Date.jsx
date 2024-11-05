import { FaCalendarAlt } from "react-icons/fa";
import { useState } from "react";
export default function Date() {
  const numberArray = [
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 4 },
    { number: 5 },
  ];

  const [show, setShow] = useState(false);
  const [shows, setShows] = useState(false);
  const [showss, setShowss] = useState(false);
  const [number, setNumber] = useState(0);
  const [numbers, setNumbers] = useState(0);
  const [numberss, setNumberss] = useState(0);
  const handleShow = () => {
    setShow((prev) => !prev);
  };
  const handleShows = () => {
    setShows((prev) => !prev);
  };

  const handleShowss = () => {
    setShowss((prev) => !prev);
  };

  const handleDropDownEffect = (id) => {
    const num = numberArray.map((element) => {
      if (element.number === id) {
        setNumber(element.number);
      }
    });
  };
  const handleDropDownEffects = (id) => {
    const num = numberArray.map((element) => {
      if (element.number === id) {
        setNumbers(element.number);
      }
    });
  };
  const handleDropDownEffectss = (id) => {
    const num = numberArray.map((element) => {
      if (element.number === id) {
        setNumberss(element.number);
      }
    });
  };
  return (
    <>
      <div className="date-flex">
        <div className="arrival-input">
          <div className="arrival-content">Arrival Date</div>
          <div className="arrival-flex">
            {" "}
            <div className="input-date">
              <input type="date" />
            </div>
          </div>
        </div>

        <div className="arrival-input">
          <div className="arrival-content">Departure Date</div>
          <div className="arrival-flex">
            {" "}
            <div className="input-date">
              <input type="date" />
            </div>
          </div>
        </div>
        <div className="adult">
          <div className="showing-adult" onClick={handleShow}>
            <h2>ADULTS</h2>
            <h5>{number}</h5>
          </div>
          <div
            className="dropdown"
            style={{ visibility: show ? "visible" : "hidden" }}
          >
            {numberArray?.map((item, index) => {
              return (
                <div
                  className="number"
                  key={index}
                  onClick={() => handleDropDownEffect(item.number)}
                >
                  {item.number}
                </div>
              );
            })}
          </div>
        </div>
        <div className="rooms">
          <div className="showing-adult" onClick={handleShows}>
            <h2>ROOMS</h2>
            <h5>{numbers}</h5>
          </div>
          <div
            className="dropdown"
            style={{ visibility: shows ? "visible" : "hidden" }}
          >
            {numberArray?.map((item, index) => {
              return (
                <div
                  className="number"
                  key={index}
                  onClick={() => handleDropDownEffects(item.number)}
                >
                  {item.number}
                </div>
              );
            })}
          </div>
        </div>
        <div className="children">
          <div className="showing-adult" onClick={handleShowss}>
            <h2>CHILDREN</h2>
            <h5>{numberss}</h5>
          </div>
          <div
            className="dropdown"
            style={{ visibility: showss ? "visible" : "hidden" }}
          >
            {numberArray?.map((item, index) => {
              return (
                <div
                  className="number"
                  key={index}
                  onClick={() => handleDropDownEffectss(item.number)}
                >
                  {item.number}
                </div>
              );
            })}
          </div>
        </div>
        <div className="availabibilty">Check Availability</div>
      </div>
    </>
  );
}
