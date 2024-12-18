import "./index.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { useState } from "react";
import Reservation from "./pages/Reservation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Payment from "./pages/Payment";
import View from "./pages/View";
import RoomRate from "./pages/RoomRate";
import ProductDisplay from "./pages/ProductDisplay";
import Car from "./pages/Car";
import Pro from "./pages/Pro";
import Payment2 from "./pages/Payment2";
import Hall from "./pages/Hall";
import Contact from "./pages/Contact";

function App() {
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
  const [number, setNumber] = useState(1);
  const [numbers, setNumbers] = useState(1);
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
    numberArray.forEach((element) => {
      if (element.number === id) {
        setNumber(element.number);
      }
    });
  };
  const handleDropDownEffects = (id) => {
    numberArray.forEach((element) => {
      if (element.number === id) {
        setNumbers(element.number);
      }
    });
  };
  const handleDropDownEffectss = (id) => {
    numberArray.forEach((element) => {
      if (element.number === id) {
        setNumberss(element.number);
      }
    });
  };

  const [dateChecker, setDateChecker] = useState({
    arrival: "",
    departure: "",
  });

  const handleOnchange = (event) => {
    const { value, name } = event.target;
    setDateChecker((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const newArry = { ...dateChecker, number, numberss, numbers };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                show={show}
                shows={shows}
                showss={showss}
                number={number}
                numbers={numbers}
                numberss={numberss}
                handleOnchange={handleOnchange}
                handleShow={handleShow}
                handleShows={handleShows}
                handleShowss={handleShowss}
                dateChecker={dateChecker}
                newArry={newArry}
                handleDropDownEffect={handleDropDownEffect}
                handleDropDownEffects={handleDropDownEffects}
                handleDropDownEffectss={handleDropDownEffectss}
                numberArray={numberArray}
              />
            }
          />

          <Route
            path="/reservation"
            element={<Reservation newArry={newArry} />}
          />
          <Route path="/payment" element={<Payment newArry={newArry} />} />
          <Route path="/view" element={<View />} />
          <Route path="/room" element={<RoomRate />} />
          <Route path="/product" element={<ProductDisplay />} />
          <Route path="/car" element={<Car />} />
          <Route path="/product2" element={<Pro />} />
          <Route path="/payment2" element={<Payment2 />} />
          <Route path="/hall" element={<Hall />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
