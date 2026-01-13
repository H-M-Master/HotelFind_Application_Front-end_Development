import { useCallback } from "react";
import BookingNotificationContainer from "../components/BookingNotificationContainer";
import { useNavigate } from "react-router-dom";
import "./NotificationMessageService.css";

const NotificationMessageService = () => {
  const navigate = useNavigate();

  const onGroupContainer11Click = useCallback(() => {
    navigate("/24-notification-message-booking-plan");
  }, [navigate]);

  const onGroupContainer12Click = useCallback(() => {
    navigate("/30-accomodations-air");
  }, [navigate]);

  const onGroupContainer13Click = useCallback(() => {
    navigate("/5-book-a-car");
  }, [navigate]);

  const onGroupContainer14Click = useCallback(() => {
    navigate("/2-my-profile");
  }, [navigate]);

  const onGroupContainer15Click = useCallback(() => {
    navigate("/10-settings");
  }, [navigate]);

  return (
    <div className="notification-message-service">
      <div className="vector-container">
        <img className="group-child11" alt="" src="/zuhedi.png" />
        <img className="group-child12" alt="" src="/rectangle-24.png" />
 
        <div className="notifications-parent7">
          <div className="notifications13">Notifications</div>
          <img className="bellwrite-icon2" alt="" src="/bellwrite.png" />
        </div>
      </div>
      <div className="notification-message-service-child" />
      <div className="notifications14">Notifications</div>
      <BookingNotificationContainer />
      <div className="group-container">
        <div className="rectangle-parent5">
          <div className="group-child13" />
          <div className="fuzhou-hotel-service">Fuzhou Hotel Service</div>
          <div className="july-2023">23 july 2023</div>
          <div className="hello-how-can">Hello! How can I help you?</div>
        </div>
        <img className="group-child14" alt="" src="/group-80.png" />
      </div>
      <div className="lanse222-group">
        <img className="lanse222-icon1" alt="" src="/12landi12.png" />
        <div className="message2">Message</div>
        <img className="vector23m-icon1" alt="" src="/vector23m.png" />
      </div>
      <div className="lanbiankuan-group" onClick={onGroupContainer11Click}>
        <img className="lanse222-icon1" alt="" src="/1landi1.png" />
        <div className="plan2">Plan</div>
        <img className="group-child15" alt="" src="/group-79.png" />
      </div>
      <div className="rooms-parent8" onClick={onGroupContainer12Click}>
        <div className="rooms10">Rooms</div>
        <img className="subtractwuzi-icon4" alt="" src="/subtractwuzi.png" />
      </div>
      <div className="car-booking-parent8" onClick={onGroupContainer13Click}>
        <div className="car-booking10">Car booking</div>
        <img className="blackcar-icon8" alt="" src="/blackcar.png" />
      </div>
      <div className="my-profile-parent8" onClick={onGroupContainer14Click}>
        <div className="my-profile10">My profile</div>
        <img className="blackpeo-icon9" alt="" src="/blackpeo.png" />
      </div>
      <div className="settings-parent8" onClick={onGroupContainer15Click}>
        <div className="settings11">Settings</div>
        <div className="blackset9">
          <div className="srectangle-219" />
          <div className="srectangle-319" />
          <div className="srectangle-2110" />
          <div className="srectangle-3110" />
          <div className="srectangle-229" />
          <div className="srectangle-329" />
        </div>
      </div>
    </div>
  );
};

export default NotificationMessageService;
