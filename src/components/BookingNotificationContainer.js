import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./BookingNotificationContainer.css";

const BookingNotificationContainer = () => {
  const navigate = useNavigate();

  const onGroupContainer3Click = useCallback(() => {
    navigate("/23-notification-message-vip");
  }, [navigate]);

  const onGroupContainer4Click = useCallback(() => {
    navigate("/21-notification-message-account");
  }, [navigate]);

  const onGroupContainer6Click = useCallback(() => {
    navigate("/20-notification-message-booking");
  }, [navigate]);

  return (
    <div className="group-parent9">
      <div className="service-parent1">
        <div className="service3">Service</div>
        <img className="lusei-icon" alt="" src="/23luse.png" />
      </div>
      <img className="group-child45" alt="" src="/group-85.png" />
      <div className="vip-parent1" onClick={onGroupContainer3Click}>
        <div className="vip3">VIP</div>
        <img className="lusei-icon" alt="" src="/23heise.png" />
        <img className="hamburger-icon3" alt="" src="/209hamburger.png" />
      </div>
      <div className="group-parent10">
        <div className="account-parent1" onClick={onGroupContainer4Click}>
          <div className="account3">Account</div>
          <img className="lusei-icon" alt="" src="/23heise.png" />
        </div>
        <img className="group-child46" alt="" src="/group-81.png" />
      </div>
      <div className="account-parent1" onClick={onGroupContainer6Click}>
        <div className="booking3">Booking</div>
        <img className="lusei-icon" alt="" src="/23heise.png" />
      </div>
      <img className="group-child47" alt="" src="/group-84.png" />
    </div>
  );
};

export default BookingNotificationContainer;
