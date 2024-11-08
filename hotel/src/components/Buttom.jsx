import { useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { MdCancel } from "react-icons/md";

export default function Buttom() {
  const arrayImage = [
    { image: "images/bently.jpg", id: 0 },
    { image: "images/songle.jpg", id: 1 },
    { image: "images/white-pillow.jpg", id: 2 },
    { image: "images/tele.jpg", id: 3 },
  ];

  const disImage = [
    { image: "images/cool1.jpg", id: 3 },
    { image: "images/cool2.jpg", id: 1 },
    { image: "images/cool3.jpg", id: 2 },
    { image: "images/cool4.jpg", id: 0 },
  ];

  const [over, setOver] = useState(null);
  const [display, setDisplay] = useState(disImage[0].image); // Initial image set
  const [show, setShow] = useState(false);
  const [controller, setController] = useState(0);

  const handleMouseOver = (id) => {
    setOver(id);
  };

  const handleNext = () => {
    if (controller < disImage.length - 1) {
      setController(controller + 1);
      setDisplay(disImage[controller + 1].image); // Directly set image
    } else {
      setController(0);
      setDisplay(disImage[0].image);
    }
  };

  const handlePrev = () => {
    if (controller > 0) {
      setController((prev) => prev - 1);
      setDisplay(disImage[controller - 1].image); // Directly set image
    } else {
      setController(disImage.length - 1);
      setDisplay(disImage[disImage.length - 1].image);
    }
  };

  const handleDisplay = (id) => {
    const checking = disImage.find((items) => {
      if (items.id === id) {
        setDisplay(items.image); // Keep item as the source for display
        setShow((prev) => !prev);
      }
    });
  };

  const handleCancel = () => {
    setShow(false);
  };

  return (
    <>
      <div className="close-to-background">
        <div className="gall">
          <h1> OUR GALLERY</h1>
          <img src="images/our.png" alt="our-image" />
        </div>
        <div className="gallery-flex">
          {arrayImage?.map((item, index) => (
            <div className="image-gallery" key={item.id}>
              <img
                src={item.image}
                alt="image"
                onMouseOver={() => handleMouseOver(item.id)}
                style={{
                  width: over === item.id ? "250px" : "240px",
                }}
              />
              <div
                className="plus-icon"
                style={{
                  visibility: over === item.id ? "visible" : "hidden",
                  animation:
                    over === item.id ? "titilope 1s ease forwards" : "none",
                }}
                onClick={() => handleDisplay(item.id)}
              >
                <CiCirclePlus className="iccon" />
              </div>
            </div>
          ))}
        </div>
        <div
          className="modal-image"
          style={{ display: show ? "block" : "none" }}
        >
          <MdCancel className="cancel" onClick={handleCancel} />
          <div className="imagg">
            <img src={display} alt="" />
          </div>
          <div className="button">
            <button onClick={handlePrev}> PREV</button>{" "}
            <button onClick={handleNext}> NEXT</button>
          </div>
        </div>
      </div>
    </>
  );
}
