import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./CarDetailsAndPrice.css";

const CarDetailsAndPrice = () => {
  const navigate = useNavigate();

  const onFuzhouInterContinentalTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onGroup2yyClick = useCallback(() => {
    navigate("/8-your-assigned-driver");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/20-notification-message-booking");
  }, [navigate]);

  const onGroupContainer3Click = useCallback(() => {
    navigate("/10-settings");
  }, [navigate]);

  const onGroupContainer4Click = useCallback(() => {
    navigate("/30-accomodations-air");
  }, [navigate]);

  const onGroupContainer5Click = useCallback(() => {
    navigate("/2-my-profile");
  }, [navigate]);

  return (
    <div className="car-details-and-price">
      <img className="car-details-and-price-child" alt="" src="/zuhedi.png" />
      <div className="car-details-and-price-item" />
      <div className="book-a-car3">Book a car</div>
      <div className="fuzhou-airport2">Fuzhou, Airport</div>
      <img className="group-icon5" alt="" src="/group@2x.png" />
      <div
        className="fuzhou-intercontinental1"
        onClick={onFuzhouInterContinentalTextClick}
      >
        Fuzhou, InterContinental
      </div>
      <img className="group-icon6" alt="" src="/group@2x.png" />
      <div className="car1">car</div>
      <div className="saloon1">Saloon</div>
      <div className="language1">Language</div>
      <div className="english1">English</div>
      <div className="eta1">ETA</div>
      <div className="min1">15 min</div>
      <div className="total-price1">Total price</div>
      <div className="div6">$20</div>
      <div className="line36" />
      <div className="line37" />
      <img
        className="car-details-and-price-inner"
        alt=""
        src="/group-6@2x.png"
      />
      <div
        className="car-details-and-price-child1"
        data-scroll-to="rectangle"
      />
      <div className="gaobu-container">
  
        <div className="car-booking-parent14">
          <div className="car-booking16">Car booking</div>
          <img className="unioncarwrie-icon2" alt="" src="/unioncarwrie.png" />
        </div>
      </div>
      <img
        className="car-details-and-price-child2"
        alt=""
        src="/group-171.png"
      />
      <img
        className="group-2yy-icon"
        alt=""
        src="/group-2yy.png"
        onClick={onGroup2yyClick}
      />
      <div className="notifications-parent13" onClick={onGroupContainer2Click}>
        <div className="notifications23">Notifications</div>
        <img className="blackbell-icon10" alt="" src="/blackbell.png" />
      </div>
      <div className="settings-parent14" onClick={onGroupContainer3Click}>
        <div className="settings19">Settings</div>
        <div className="blackset14">
          <div className="srectangle-233" />
          <div className="srectangle-333" />
          <div className="srectangle-2115" />
          <div className="srectangle-3115" />
          <div className="srectangle-2214" />
          <div className="srectangle-3214" />
        </div>
      </div>
      <div className="rooms-parent14" onClick={onGroupContainer4Click}>
        <div className="rooms16">Rooms</div>
        <img className="subtractwuzi-icon10" alt="" src="/subtractwuzi.png" />
      </div>
      <div className="my-profile-parent14" onClick={onGroupContainer5Click}>
        <div className="my-profile17">My profile</div>
        <img className="blackpeo-icon14" alt="" src="/blackpeo.png" />
      </div>
    </div>
  );
};

export default CarDetailsAndPrice;
