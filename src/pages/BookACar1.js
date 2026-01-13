import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./BookACar1.css";

const BookACar1 = () => {
  const navigate = useNavigate();

  const onImageClick = useCallback(() => {
    navigate("/6-book-a-car");
  }, [navigate]);

  const onGroupContainer3Click = useCallback(() => {
    navigate("/20-notification-message-booking");
  }, [navigate]);

  const onGroupContainer4Click = useCallback(() => {
    navigate("/10-settings");
  }, [navigate]);

  const onGroupContainer5Click = useCallback(() => {
    navigate("/30-accomodations-air");
  }, [navigate]);

  const onGroupContainer6Click = useCallback(() => {
    navigate("/2-my-profile");
  }, [navigate]);

  return (
    <div className="book-a-car4">
      <img className="book-a-car-child3" alt="" src="/zuhedi.png" />
      <div className="line38" />
      <div className="line39" />
      <div className="book-a-car-child4" />
      <div className="book-a-car5">Book a car</div>
      <div className="line40" />
      <img className="rectangle111-icon2" alt="" src="/rectangle111@2x.png" />
      <div className="pickup-location-parent">
        <div className="pickup-location1">Pickup Location</div>
        <div className="group-child37" />
        <img className="group-icon7" alt="" src="/group@2x.png" />
      </div>
      <div className="dropoff-location2">Dropoff Location</div>
      <div className="book-a-car-child5" />
      <img className="group-icon8" alt="" src="/group@2x.png" />
      <div className="book-a-car-child6" />
      <img className="rectangle-icon3" alt="" src="/rectangle.png" />
      <div className="select-car-type2">Select car type</div>
      <div className="select-car-type3">Select car type</div>
      <img className="rectangle-icon4" alt="" src="/rectangle.png" />
      <div className="select-language2">Select Language</div>
      <div className="select-language3">Select Language</div>
      <div className="group-parent5">
        <div className="car-booking-parent15">
          <div className="car-booking17">Car booking</div>
          <img className="unioncarwrie-icon3" alt="" src="/unioncarwrie.png" />
        </div>
     
      </div>
      <img
        className="image-icon1"
        alt=""
        src="/datetimepage12@2x.png"
        onClick={onImageClick}
      />
      <div className="notifications-parent14" onClick={onGroupContainer3Click}>
        <div className="notifications24">Notifications</div>
        <img className="blackbell-icon11" alt="" src="/blackbell.png" />
      </div>
      <div className="settings-parent15" onClick={onGroupContainer4Click}>
        <div className="settings20">Settings</div>
        <div className="blackset15">
          <div className="srectangle-234" />
          <div className="srectangle-334" />
          <div className="srectangle-2116" />
          <div className="srectangle-3116" />
          <div className="srectangle-2215" />
          <div className="srectangle-3215" />
        </div>
      </div>
      <div className="rooms-parent15" onClick={onGroupContainer5Click}>
        <div className="rooms17">Rooms</div>
        <img className="subtractwuzi-icon11" alt="" src="/subtractwuzi.png" />
      </div>
      <div className="my-profile-parent15" onClick={onGroupContainer6Click}>
        <div className="my-profile18">My profile</div>
        <img className="blackpeo-icon15" alt="" src="/blackpeo.png" />
      </div>
    </div>
  );
};

export default BookACar1;
