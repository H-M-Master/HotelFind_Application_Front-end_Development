import { useCallback } from "react";
import WinstonCardContainer from "../components/WinstonCardContainer";
import { useNavigate } from "react-router-dom";
import "./YourAssignedDriver.css";

const YourAssignedDriver = () => {
  const navigate = useNavigate();

  const onGroup2xxClick = useCallback(() => {
    navigate("/7-car-details-and-price");
  }, [navigate]);

  const onGroupContainer4Click = useCallback(() => {
    navigate("/20-notification-message-booking");
  }, [navigate]);

  const onGroupContainer5Click = useCallback(() => {
    navigate("/10-settings");
  }, [navigate]);

  const onGroupContainer6Click = useCallback(() => {
    navigate("/30-accomodations-air");
  }, [navigate]);

  const onGroupContainer7Click = useCallback(() => {
    navigate("/2-my-profile");
  }, [navigate]);

  return (
    <div className="your-assigned-driver">
      <img className="your-assigned-driver-child" alt="" src="/zuhedi.png" />
      <div className="eta">ETA</div>
      <div className="min">15 min</div>
      <div className="total-price">Total price</div>
      <div className="div5">$20</div>
      <div className="line34" />
      <div className="rectangle111-parent">
        <img className="rectangle111-icon1" alt="" src="/rectangle111@2x.png" />
        <WinstonCardContainer />
      </div>
      <div className="car">car</div>
      <div className="language">Language</div>
      <div className="book-a-car2">Book a car</div>
      <div className="fuzhou-airport1">Fuzhou, Airport</div>
      <img className="group-icon3" alt="" src="/group@2x.png" />
      <div className="fuzhou-intercontinental">Fuzhou, InterContinental</div>
      <img className="group-icon4" alt="" src="/group@2x.png" />
      <div className="dropoff-location1">Dropoff location</div>
      <div className="pickup-location">Pickup location</div>
      <div className="saloon">Saloon</div>
      <div className="english">English</div>
      <div className="line35" />
      <div className="gaobu-group">

        <div className="car-booking-parent13">
          <div className="car-booking15">Car booking</div>
          <img className="unioncarwrie-icon1" alt="" src="/unioncarwrie.png" />
        </div>
      </div>
      <img className="your-assigned-driver-item" alt="" src="/group-172.png" />
      <img
        className="group-2xx-icon"
        alt=""
        src="/group-2xx.png"
        onClick={onGroup2xxClick}
      />
      <div className="notifications-parent12" onClick={onGroupContainer4Click}>
        <div className="notifications22">Notifications</div>
        <img className="blackbell-icon9" alt="" src="/blackbell.png" />
      </div>
      <div className="settings-parent13" onClick={onGroupContainer5Click}>
        <div className="settings18">Settings</div>
        <div className="blackset13">
          <div className="srectangle-232" />
          <div className="srectangle-332" />
          <div className="srectangle-2114" />
          <div className="srectangle-3114" />
          <div className="srectangle-2213" />
          <div className="srectangle-3213" />
        </div>
      </div>
      <div className="rooms-parent13" onClick={onGroupContainer6Click}>
        <div className="rooms15">Rooms</div>
        <img className="subtractwuzi-icon9" alt="" src="/subtractwuzi.png" />
      </div>
      <div className="my-profile-parent13" onClick={onGroupContainer7Click}>
        <div className="my-profile16">My profile</div>
        <img className="blackpeo-icon13" alt="" src="/blackpeo.png" />
      </div>
    </div>
  );
};

export default YourAssignedDriver;
