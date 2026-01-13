import { useCallback } from "react";
import SectionCard from "../components/SectionCard";
import AccountNotificationsContainer from "../components/AccountNotificationsContainer";
import { useNavigate } from "react-router-dom";
import "./NotificationMessageVIP.css";

const NotificationMessageVIP = () => {
  const navigate = useNavigate();

  const onGroupContainer10Click = useCallback(() => {
    navigate("/24-notification-message-booking-plan");
  }, [navigate]);

  const onGroupContainer11Click = useCallback(() => {
    navigate("/30-accomodations-air");
  }, [navigate]);

  const onGroupContainer12Click = useCallback(() => {
    navigate("/5-book-a-car");
  }, [navigate]);

  const onGroupContainer13Click = useCallback(() => {
    navigate("/2-my-profile");
  }, [navigate]);

  const onGroupContainer14Click = useCallback(() => {
    navigate("/10-settings");
  }, [navigate]);

  return (
    <div className="notification-message-vip">
      <div className="vector-group">
        <img className="group-child8" alt="" src="/zuhedi.png" />
        <img className="group-child9" alt="" src="/rectangle-24.png" />
 
        <div className="notifications-parent6">
          <div className="notifications11">Notifications</div>
          <img className="bellwrite-icon1" alt="" src="/bellwrite.png" />
        </div>
      </div>
      <div className="notification-message-vip-child" />
      <div className="notifications12">Notifications</div>
      <SectionCard
        serviceName="Luxurious Personal Service"
        greetingMessage="Hello, I will try my best to fulfill the requirements from the customer."
        propTop="233px"
      />
      <AccountNotificationsContainer />
      <div className="lanse222-parent">
        <img className="lanse222-icon" alt="" src="/12landi12.png" />
        <div className="message1">Message</div>
        <img className="vector23m-icon" alt="" src="/vector23m.png" />
      </div>
      <div className="lanbiankuan-parent" onClick={onGroupContainer10Click}>
        <img className="lanse222-icon" alt="" src="/1landi1.png" />
        <div className="plan1">Plan</div>
        <img className="group-child10" alt="" src="/group-79.png" />
      </div>
      <div className="rooms-parent7" onClick={onGroupContainer11Click}>
        <div className="rooms9">Rooms</div>
        <img className="subtractwuzi-icon3" alt="" src="/subtractwuzi.png" />
      </div>
      <div className="car-booking-parent7" onClick={onGroupContainer12Click}>
        <div className="car-booking9">Car booking</div>
        <img className="blackcar-icon7" alt="" src="/blackcar.png" />
      </div>
      <div className="my-profile-parent7" onClick={onGroupContainer13Click}>
        <div className="my-profile9">My profile</div>
        <img className="blackpeo-icon8" alt="" src="/blackpeo.png" />
      </div>
      <div className="settings-parent7" onClick={onGroupContainer14Click}>
        <div className="settings10">Settings</div>
        <div className="blackset8">
          <div className="srectangle-210" />
          <div className="srectangle-310" />
          <div className="srectangle-218" />
          <div className="srectangle-318" />
          <div className="srectangle-228" />
          <div className="srectangle-328" />
        </div>
      </div>
    </div>
  );
};

export default NotificationMessageVIP;
