import Header from "../components/Header";
import Buttom from "../components/Buttom";
export default function Home({
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
  newArry,
}) {
  return (
    <>
      <Header
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
      <Buttom />
    </>
  );
}
