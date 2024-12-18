import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Date({
  show,
  shows,
  showss,
  number,
  numbers,
  numberss,
  handleOnchange,
  handleShow,
  handleShows,
  handleShowss,
  dateChecker,
  numberArray,
  handleDropDownEffect,
  handleDropDownEffects,
  handleDropDownEffectss,
}) {
  const navigate = useNavigate();
  const handleValidation = () => {
    if (
      !number ||
      !numbers ||
      !numberss ||
      !dateChecker.arrival ||
      !dateChecker.departure
    ) {
      alert("Please fill all required fields");
      return false; // Validation failed
    }
    return true; // Validation passed
  };

  const handleSubmission = (event) => {
    event.preventDefault();

    if (!handleValidation()) {
      return; // Stop submission if validation fails
    }

    // Navigate to the reservation page if validation passes
    navigate("/reservation");
  };

  return (
    <>
      <div className="date-flex">
        <div className="arrival-input">
          <div className="arrival-content">Arrival Date</div>
          <div className="arrival-flex">
            <div className="input-date">
              <input
                type="date"
                name="arrival"
                value={dateChecker.arrival}
                onChange={handleOnchange}
              />
            </div>
          </div>
        </div>

        <div className="arrival-input">
          <div className="arrival-content">Departure Date</div>
          <div className="arrival-flex">
            <div className="input-date">
              <input
                type="date"
                name="departure"
                value={dateChecker.departure}
                onChange={handleOnchange}
              />
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
            style={{ display: show ? "block" : "none" }}
          >
            {numberArray?.map((item, index) => (
              <div
                className="number"
                key={index}
                onClick={() => handleDropDownEffect(item.number)}
              >
                {item.number}
              </div>
            ))}
          </div>
        </div>

        <div className="rooms">
          <div className="showing-adult" onClick={handleShows}>
            <h2>ROOMS</h2>
            <h5>{numbers}</h5>
          </div>
          <div
            className="dropdown"
            style={{ display: shows ? "block" : "none" }}
          >
            {numberArray?.map((item, index) => (
              <div
                className="number"
                key={index}
                onClick={() => handleDropDownEffects(item.number)}
              >
                {item.number}
              </div>
            ))}
          </div>
        </div>

        <div className="children">
          <div className="showing-adult" onClick={handleShowss}>
            <h2>CHILDREN</h2>
            <h5>{numberss}</h5>
          </div>
          <div
            className="dropdown"
            style={{ display: showss ? "block" : "none" }}
          >
            {numberArray?.map((item, index) => (
              <div
                className="number"
                key={index}
                onClick={() => handleDropDownEffectss(item.number)}
              >
                {item.number}
              </div>
            ))}
          </div>
        </div>

        <div className="availabibilty" onClick={handleSubmission}>
          Check Availability
        </div>
      </div>
    </>
  );
}
