import { LiaBedSolid } from "react-icons/lia";
import { IoWifiOutline } from "react-icons/io5";
import { IoFastFoodOutline } from "react-icons/io5";
import { HiMiniArrowsPointingOut } from "react-icons/hi2";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import slidesData from "./slidesData";
import { useEffect } from "react";

export default function ArrayPart() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="room-price-flex">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{ delay: 3000 }}
          loop
        >
          {slidesData?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="image-array">
                  <div className="reel-image">
                    <img
                      src={item.image}
                      alt={`${index}-image-apartment`}
                      style={{ height: item.height && item.height }}
                    />
                  </div>
                  <div className="cont-inside-image">
                    <h2>{item.hkn}</h2>
                    <p>{item.price}/ PER NIGHT</p>
                  </div>
                  <div className="information">
                    <a href="#">{item.content}</a>
                  </div>
                  <div className="ikkon">
                    <div className="bed-icon">
                      <div className="beed">
                        <LiaBedSolid className="font-icon" />
                        <p> KingSize Bed</p>
                      </div>
                      <div className="arrow">
                        <HiMiniArrowsPointingOut className="font-icon" />
                        <p>45m2</p>
                      </div>
                    </div>
                    <div className="icons">
                      <div className="wifi">
                        <IoWifiOutline className="font-icon" />
                        <p> WiFi Access</p>
                      </div>
                      <div className="food">
                        <IoFastFoodOutline className="font-icon" />{" "}
                        <p>Breakfast</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="room-price-flex-media">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          loop
        >
          {slidesData?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="image-array">
                  <div className="reel-image">
                    <img
                      src={item.image}
                      alt={`${index}-image-apartment`}
                      style={{ height: item.height && item.height }}
                    />
                  </div>
                  <div className="cont-inside-image">
                    <h2>{item.hkn}</h2>
                    <p>{item.price}</p>
                  </div>
                  <div className="information">
                    <a href="#">{item.content}</a>
                  </div>
                  <div className="ikkon">
                    <div className="bed-icon">
                      <div className="beed">
                        <LiaBedSolid className="font-icon" />
                        <p> KingSize Bed</p>
                      </div>
                      <div className="arrow">
                        <HiMiniArrowsPointingOut className="font-icon" />
                        <p>45m2</p>
                      </div>
                    </div>
                    <div className="icons">
                      <div className="wifi">
                        <IoWifiOutline className="font-icon" />
                        <p> WiFi Access</p>
                      </div>
                      <div className="food">
                        <IoFastFoodOutline className="font-icon" />{" "}
                        <p>Breakfast</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="remaining">
        <div className="about">
          <h2>About Us</h2>
        </div>
        <div className="p-content">
          <p>
            {" "}
            We are an indigenous hospitality outfit with a board name of Hotel
            De Bently, located in the serene area of the Utako district, Abuja
            20 minutes drive from the Airport
          </p>
          <p>
            We are uncompromisingly committed to quality and excellence and this
            is achieved by setting and maintaining standards. For your event of
            whatever nature, be certain that your choice of venue is the one
            that “is a class of its own”.
          </p>
        </div>
      </div>
      <div className="image-collapse">
        <div className="first-image">
          <img src="/images/first-two.jpg" alt="" />
        </div>
        <div className="second-image">
          <img src="/images/two-two.jpg" alt="" />
        </div>
      </div>
      <div className="first-grid">
        <div className="grid">
          <img src="/images/bed.png" alt="" />
          <h5>Master Bedrooms</h5>
        </div>
        <div className="grid">
          <img src="/images/beac.png" alt="" />
          <h5>Sea View Balcony</h5>
        </div>
        <div className="grid">
          <img src="/images/pool.png" alt="" />
          <h5>Pool & Spa</h5>
        </div>
        <div className="grid">
          <img src="/images/wifi.png" alt="" />
          <h5>Wifi Coverage</h5>
        </div>
        <div className="grid">
          <img src="/images/package.png" alt="" />
          <h5>AwESOME pACKAGES</h5>
        </div>
        <div className="grid">
          <img src="/images/well.png" alt="" />
          <h5>cLEANING eVERDAY</h5>
        </div>
        <div className="grid">
          <img src="/images/buffet.png" alt="" />
          <h5>bUTFFET Breakfast</h5>
        </div>
        <div className="grid">
          <img src="/images/taxi.png" alt="" />
          <h5>Airport Taxi</h5>
        </div>
      </div>
    </>
  );
}
