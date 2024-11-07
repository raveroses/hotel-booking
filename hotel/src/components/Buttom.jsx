import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
export default function Buttom() {
  const arrayImage = [
    { image: "images/bently.jpg", id: 0 },
    { image: "images/songle.jpg", id: 1 },
    { image: "images/white-pillow.jpg", id: 2 },
    { image: "images/tele.jpg", id: 3 },
  ];

  const [over, setOver] = useState(null);
  //   const [check, setCheck] = useState();
  //   const array = arrayImage[check];
  const handleMouseOver = (id) => {
    setOver(id);
  };
  const handleMouseOut = () => {
    setOver(null);
  };
  //   console.log(array);
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
                  //   onMouseOut={handleMouseOut}
                  style={{
                    width: over === item.id ? "250px" : "240",
                  }}
                />

                <div
                  className="plus-icon"
                  style={{
                    visibility: over === item.id ? "visible" : "hidden",
                    animation:
                      over === item.id ? "titilope 1s ease forwards" : "none",
                  }}
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
