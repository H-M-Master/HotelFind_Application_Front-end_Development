import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./BookACar.css";

const BookACar = () => {
  const navigate = useNavigate();

  const onImageClick = useCallback(() => {
    navigate("/7-car-details-and-price");
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
    <div className="book-a-car">
      <img className="book-a-car-child" alt="" src="/zuhedi.png" />
      <div className="book-a-car-item" />
      <div className="book-a-car1">Book a car</div>
      <div className="line28" />
      <img className="rectangle111-icon" alt="" src="/rectangle111@2x.png" />
      <div className="dropoff-location">Dropoff Location</div>
      <img className="group-icon1" alt="" src="/group@2x.png" />
      <div className="book-a-car-inner" />
      <div className="line29" />
      <img className="rectangle-icon" alt="" src="/rectangle.png" />
      <div className="select-car-type">Select car type</div>
      <div className="select-car-type1">Select car type</div>
      <div className="line30" />
      <img className="rectangle-icon1" alt="" src="/rectangle.png" />
      <div className="select-language">Select Language</div>
      <div className="select-language1">Select Language</div>
      <div className="fuzhou-airport">Fuzhou, Airport</div>
      <img className="group-icon2" alt="" src="/group@2x.png" />
      <img className="book-a-car-child1" alt="" src="/group-6@2x.png" />
      <div className="book-a-car-child2" />
      <div className="gaobu-parent">
      
        <div className="car-booking-parent5">
          <div className="car-booking7">Car booking</div>
          <img className="unioncarwrie-icon" alt="" src="/unioncarwrie.png" />
        </div>
      </div>
      <img
        className="image-icon"
        alt=""
        src="/datetimepage12@2x.png"
        onClick={onImageClick}
      />
      <div className="notifications-parent5" onClick={onGroupContainer2Click}>
        <div className="notifications8">Notifications</div>
        <img className="blackbell-icon6" alt="" src="/blackbell.png" />
      </div>
      <div className="settings-parent5" onClick={onGroupContainer3Click}>
        <div className="settings8">Settings</div>
        <div className="blackset6">
          <div className="srectangle-28" />
          <div className="srectangle-38" />
          <div className="srectangle-216" />
          <div className="srectangle-316" />
          <div className="srectangle-226" />
          <div className="srectangle-326" />
        </div>
      </div>
      <div className="rooms-parent5" onClick={onGroupContainer4Click}>
        <div className="rooms7">Rooms</div>
        <img className="subtractwuzi-icon1" alt="" src="/subtractwuzi.png" />
      </div>
      <div className="my-profile-parent5" onClick={onGroupContainer5Click}>
        <div className="my-profile7">My profile</div>
        <img className="blackpeo-icon6" alt="" src="/blackpeo.png" />
      </div>
    </div>
  );
};

export default BookACar;
