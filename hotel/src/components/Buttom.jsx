import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
export default function Buttom() {
  const arrayImage = [
    { image: "images/bently.jpg", id: 1 },
    { image: "images/songle.jpg", id: 2 },
    { image: "images/white-pillow.jpg", id: 3 },
    { image: "images/tele.jpg", id: 4 },
  ];

  const [over, setOver] = useState(false);
  const handleMouseOver = (id) => {
    const compare = arrayImage.forEach((item) => {
      if (item.id === id) {
        setOver((prev) => !prev);
      }
    });
  };

  return (
    <>
      <div className="close-to-background">
        <div className="gall">
          <h1> OUR GALLERY</h1>
          <img src="images/our.png" alt="our-image" />
        </div>
        <div className="gallery-flex">
          {arrayImage?.map((item) => {
            return (
              <div className="image-gallery" key={item.id}>
                <img
                  src={item.image}
                  alt="image"
                  onMouseOver={() => handleMouseOver(item.id)}
                  style={{ width: over ? "250px" : "" }}
                />
                <div
                  className="plus-icon"
                  //   style={{ visibility: over ? "visible" : "hidden" }}
                >
                  <CiCirclePlus className="iccon" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
