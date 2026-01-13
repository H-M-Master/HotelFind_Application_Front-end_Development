import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AccountNotificationsContainer.css";

const AccountNotificationsContainer = () => {
  const navigate = useNavigate();

  const onGroupContainer3Click = useCallback(() => {
    navigate("/20-notification-message-booking");
  }, [navigate]);

  const onGroupContainer5Click = useCallback(() => {
    navigate("/22-notification-message-service");
  }, [navigate]);

  const onGroupContainer7Click = useCallback(() => {
    navigate("/21-notification-message-account");
  }, [navigate]);

  return (
    <div className="bgroup-parent7">
      <div className="bbooking-container" onClick={onGroupContainer3Click}>
        <div className="bbooking2">Booking</div>
        <img className="bheise-icon1" alt="" src="/23heise.png" />
        <img className="bgroup-child43" alt="" src="/group-84.png" />
      </div>
      <div className="bvip-container">
        <div className="bvip2">VIP</div>
        <img className="bheise-icon1" alt="" src="/23luse.png" />
        <img className="bhamburger-icon2" alt="" src="/hamburger.png" />
      </div>
      <div className="bgroup-parent8">
        <div className="bbooking-container" onClick={onGroupContainer5Click}>
          <div className="bservice2">Service</div>
          <img className="bheise-icon1" alt="" src="/23heise.png" />
        </div>
        <img className="bvector-icon1" alt="" src="/208vector.png" />
        <img className="bvector-icon2" alt="" src="/207vector.png" />
        <img className="bvector-icon3" alt="" src="/206vector.png" />
        <img className="bvector-icon4" alt="" src="/206vector.png" />
      </div>
      <div className="baccount-container" onClick={onGroupContainer7Click}>
        <div className="baccount2">Account</div>
        <img className="bheise-icon1" alt="" src="/23heise.png" />
        <img className="bgroup-child44" alt="" src="/group-81.png" />
      </div>
    </div>
  );
};

export default AccountNotificationsContainer;
