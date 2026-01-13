import { useCallback } from "react";
import SectionCard from "../components/SectionCard";
import { useNavigate } from "react-router-dom";
import "./NotificationMessageAccount.css";

const NotificationMessageAccount = () => {
  const navigate = useNavigate();

  const onGroupContainer4Click = useCallback(() => {
    navigate("/22-notification-message-service");
  }, [navigate]);

  const onGroupContainer5Click = useCallback(() => {
    navigate("/23-notification-message-vip");
  }, [navigate]);

  const onGroupContainer6Click = useCallback(() => {
    navigate("/20-notification-message-booking");
  }, [navigate]);

  const onGroupContainer9Click = useCallback(() => {
    navigate("/24-notification-message-booking-plan");
  }, [navigate]);

  const onGroupContainer10Click = useCallback(() => {
    navigate("/30-accomodations-air");
  }, [navigate]);

  const onGroupContainer11Click = useCallback(() => {
    navigate("/5-book-a-car");
  }, [navigate]);

  const onGroupContainer12Click = useCallback(() => {
    navigate("/2-my-profile");
  }, [navigate]);

  const onGroupContainer13Click = useCallback(() => {
    navigate("/10-settings");
  }, [navigate]);

  return (
    <div className="notification-message-account">
      <div className="vector-parent1">
        <img className="group-child16" alt="" src="/zuhedi.png" />
        <img className="group-child17" alt="" src="/rectangle-24.png" />
  
        <div className="notifications-parent8">
          <div className="notifications15">Notifications</div>
          <img className="bellwrite-icon3" alt="" src="/bellwrite.png" />
        </div>
      </div>
      <div className="notification-message-account-child" />
      <div className="notifications16">Notifications</div>
      <SectionCard
        serviceName="Hotel Find"
        greetingMessage="Thank you for registering! You are now ready to use our app."
        propTop="233px"
      />
      <div className="group-parent1">
        <div className="account-parent">
          <div className="account">Account</div>
          <img className="luse-icon" alt="" src="/23luse.png" />
          <img className="group-child18" alt="" src="/group-81.png" />
        </div>
        <div className="service-parent" onClick={onGroupContainer4Click}>
          <div className="service">Service</div>
          <img className="luse-icon" alt="" src="/23heise.png" />
          <img className="group-child19" alt="" src="/group-85.png" />
        </div>
        <div className="vip-parent" onClick={onGroupContainer5Click}>
          <div className="vip">VIP</div>
          <img className="luse-icon" alt="" src="/23heise.png" />
          <img className="hamburger-icon" alt="" src="/209hamburger.png" />
        </div>
        <div className="booking-parent" onClick={onGroupContainer6Click}>
          <div className="booking">Booking</div>
          <img className="luse-icon" alt="" src="/23heise.png" />
          <img className="group-child20" alt="" src="/group-84.png" />
        </div>
      </div>
      <div className="lanse222-container">
        <img className="lanse222-icon2" alt="" src="/12landi12.png" />
        <div className="message3">Message</div>
        <img className="vector23m-icon2" alt="" src="/vector23m.png" />
      </div>
      <div className="lanbiankuan-container" onClick={onGroupContainer9Click}>
        <img className="lanse222-icon2" alt="" src="/1landi1.png" />
        <div className="plan3">Plan</div>
        <img className="group-child21" alt="" src="/group-79.png" />
      </div>
      <div className="rooms-parent9" onClick={onGroupContainer10Click}>
        <div className="rooms11">Rooms</div>
        <img className="subtractwuzi-icon5" alt="" src="/subtractwuzi.png" />
      </div>
      <div className="car-booking-parent9" onClick={onGroupContainer11Click}>
        <div className="car-booking11">Car booking</div>
        <img className="blackcar-icon9" alt="" src="/blackcar.png" />
      </div>
      <div className="my-profile-parent9" onClick={onGroupContainer12Click}>
        <div className="my-profile11">My profile</div>
        <img className="blackpeo-icon10" alt="" src="/blackpeo.png" />
      </div>
      <div className="settings-parent9" onClick={onGroupContainer13Click}>
        <div className="settings12">Settings</div>
        <div className="blackset10">
          <div className="srectangle-220" />
          <div className="srectangle-320" />
          <div className="srectangle-2111" />
          <div className="srectangle-3111" />
          <div className="srectangle-2210" />
          <div className="srectangle-3210" />
        </div>
      </div>
    </div>
  );
};

export default NotificationMessageAccount;
