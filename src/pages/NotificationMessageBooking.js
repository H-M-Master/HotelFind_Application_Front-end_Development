import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SectionCard from "../components/SectionCard";
import "./NotificationMessageBooking.css";

const NotificationMessageBooking = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/30-accomodations-air");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/5-book-a-car");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/2-my-profile");
  }, [navigate]);

  const onGroupContainer3Click = useCallback(() => {
    navigate("/10-settings");
  }, [navigate]);

  const onGroupContainer7Click = useCallback(() => {
    navigate("/21-notification-message-account");
  }, [navigate]);

  const onGroupContainer8Click = useCallback(() => {
    navigate("/22-notification-message-service");
  }, [navigate]);

  const onGroupContainer9Click = useCallback(() => {
    navigate("/23-notification-message-vip");
  }, [navigate]);

  const onGroupContainer17Click = useCallback(() => {
    navigate("/24-notification-message-booking-plan");
  }, [navigate]);

  return (
    <div className="notification-message-booking">
      <div className="notifications17">Notifications</div>
      <div className="vector-parent2">
        <img className="group-child22" alt="" src="/zuhedi.png" />
        <img className="group-child23" alt="" src="/rectangle-24.png" />
        <div className="rooms-parent10" onClick={onGroupContainerClick}>
          <div className="rooms12">Rooms</div>
          <img className="subtractwuzi-icon6" alt="" src="/subtractwuzi.png" />
        </div>
        <div className="car-booking-parent10" onClick={onGroupContainer1Click}>
          <div className="car-booking12">Car booking</div>
          <img className="blackcar-icon10" alt="" src="/blackcar.png" />
        </div>
        <div className="my-profile-parent10" onClick={onGroupContainer2Click}>
          <div className="my-profile12">My profile</div>
          <img className="blackpeo-icon11" alt="" src="/blackpeo.png" />
        </div>
        <div className="settings-parent10" onClick={onGroupContainer3Click}>
          <div className="settings13">Settings</div>
          <div className="blackset11">
            <div className="srectangle-230" />
            <div className="srectangle-330" />
            <div className="srectangle-2112" />
            <div className="srectangle-3112" />
            <div className="srectangle-2211" />
            <div className="srectangle-3211" />
          </div>
        </div>
        <div className="notifications-parent9">
          <div className="notifications18">Notifications</div>
          <img className="bellwrite-icon4" alt="" src="/bellwrite.png" />
        </div>

      </div>
      <div className="rectangle-parent6">
        <div className="group-child24" />
        <div className="booking-group">
          <div className="booking1">Booking</div>
          <img className="luse-icon1" alt="" src="/23luse.png" />
        </div>
        <div className="account-group" onClick={onGroupContainer7Click}>
          <div className="account1">Account</div>
          <img className="luse-icon1" alt="" src="/23heise.png" />
          <img className="group-child25" alt="" src="/group-81.png" />
        </div>
        <div className="service-group" onClick={onGroupContainer8Click}>
          <div className="service1">Service</div>
          <img className="luse-icon1" alt="" src="/23heise.png" />
        </div>
        <div className="vip-group" onClick={onGroupContainer9Click}>
          <div className="vip1">VIP</div>
          <img className="luse-icon1" alt="" src="/23heise.png" />
          <img className="hamburger-icon1" alt="" src="/209hamburger.png" />
        </div>
        <SectionCard
          serviceName="Fuzhou Hotel"
          greetingMessage="Hello! How can I help you."
          propTop="88px"
        />
        <SectionCard
          serviceName="Shandong Hotel"
          greetingMessage="Hello! I can help you."
          propTop="187px"
        />
        <SectionCard
          serviceName="Beijing Hotel"
          greetingMessage="Hello! I want to help you."
          propTop="286px"
        />
        <SectionCard
          serviceName="Shanghai Hotel"
          greetingMessage="Hello! "
          propTop="385px"
        />
        <SectionCard
          serviceName="China Hotel"
          greetingMessage="Hi! If you want to be help, just call 4008-000-000."
          propTop="484px"
        />
        <img className="group-child26" alt="" src="/group-84.png" />
        <img className="group-child27" alt="" src="/group-85.png" />
      </div>
      <div className="lanse222-parent1">
        <img className="lanse222-icon3" alt="" src="/12landi12.png" />
        <div className="message4">Message</div>
        <img className="vector23m-icon3" alt="" src="/vector23m.png" />
      </div>
      <div className="lanbiankuan-parent1" onClick={onGroupContainer17Click}>
        <img className="lanse222-icon3" alt="" src="/1landi1.png" />
        <div className="plan4">Plan</div>
        <img className="group-child28" alt="" src="/group-79.png" />
      </div>
    </div>
  );
};

export default NotificationMessageBooking;
