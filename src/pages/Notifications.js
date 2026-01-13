import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Notifications.css";

const Notifications = () => {
  const navigate = useNavigate();

  const onFanhuiIconClick = useCallback(() => {
    navigate("/10-settings");
  }, [navigate]);

  return (
    <div className="anotifications">
      <div className="arectangle6" />
      <div className="anotifications-child" />
      <div className="arectangle7" />
      <div className="anotifications-item" />
      <div className="abeijing-shezi1" />
      <div className="anotifications-inner" />
      <div className="ayour-room-booking-container">
        <p className="ayour-room-booking">Your room booking in Heden golf</p>
        <p className="ayour-room-booking">has been successful</p>
      </div>
      <i className="ajuly-20232">20 july 2023</i>
      <div className="anotifications-child1" />
      <div className="amessage-from-the">Message from the app admin</div>
      <i className="ajuly-20233">20 july 2023</i>
      <div className="amyprofile-group">
        <div className="amyprofile2">Myprofile</div>
        <div className="anotifications1">Notifications</div>
    
      </div>
      <img
        className="afanhui-icon5"
        alt=""
        src="/fanhui.png"
        onClick={onFanhuiIconClick}
      />
    </div>
  );
};

export default Notifications;
