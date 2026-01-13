import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Settingslogout.css";

const Settingslogout = () => {
  const navigate = useNavigate();

  const onGroupContainer9Click = useCallback(() => {
    navigate("/20-notification-message-booking");
  }, [navigate]);

  const onGroupContainer10Click = useCallback(() => {
    navigate("/2-my-profile");
  }, [navigate]);

  const onGroupContainer11Click = useCallback(() => {
    navigate("/30-accomodations-air");
  }, [navigate]);

  const onGroupContainer12Click = useCallback(() => {
    navigate("/5-book-a-car");
  }, [navigate]);

  const onRectangleokIconClick = useCallback(() => {
    // Please sync "11 notifications" to the project
  }, []);

  const onRectangleokIcon1Click = useCallback(() => {
    // Please sync "12 privacy policy" to the project
  }, []);

  const onRectangleokIcon2Click = useCallback(() => {
    // Please sync "13 terms & conditions" to the project
  }, []);

  const onRectangleokIcon3Click = useCallback(() => {
    // Please sync "14 faq" to the project
  }, []);

  const onRectangleokIcon4Click = useCallback(() => {
    // Please sync "16 booking history" to the project
  }, []);

  const onRectangleokIcon5Click = useCallback(() => {
    // Please sync "15 change password" to the project
  }, []);

  const onNoTextClick = useCallback(() => {
    navigate("/10-settings");
  }, [navigate]);

  const onYesTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="settingslogout">
      <img className="settingslogout-child" alt="" src="/zuhedi.png" />
      <div className="settingslogout-item" />
      <div className="myprofile">Myprofile</div>
      <div className="rectangle1" />
      <div className="settingslogout-inner" />
      <div className="settings5">Settings</div>
      <div className="rectangle-div" />
      <div className="settingslogout-inner1">
        <div className="rectangle-parent">
          <div className="group-child" />
          <div className="privacy-policy">Notifications</div>
        </div>
      </div>
      <div className="rectangle-group">
        <div className="group-child" />
        <div className="privacy-policy">Privacy Policy</div>
      </div>
      <div className="rectangle-container">
        <div className="group-child" />
        <div className="privacy-policy">{`Terms & conditions`}</div>
      </div>
      <div className="rectangle-parent1">
        <div className="group-child" />
        <div className="privacy-policy">Faq?</div>
      </div>
      <div className="rectangle-parent2">
        <div className="group-child" />
        <div className="privacy-policy">Booking history</div>
      </div>
      <div className="rectangle-parent3">
        <div className="group-child" />
        <div className="privacy-policy">Change password</div>
      </div>
      <div className="rectangle-parent4">
        <div className="group-child" />
        <div className="privacy-policy">Logout</div>
      </div>
      <div className="group-parent">
        <div className="settings-parent3">
          <div className="settings6">Settings</div>
          <div className="groupsetwri">
            <div className="ssrectangle-2" />
            <div className="ssrectangle-3" />
            <div className="ssrectangle-21" />
            <div className="ssrectangle-31" />
            <div className="ssrectangle-22" />
            <div className="ssrectangle-32" />
          </div>
        </div>
      
        <div className="notifications-parent3" onClick={onGroupContainer9Click}>
          <div className="notifications6">Notifications</div>
          <img className="bell-icon" alt="" src="/blackbell.png" />
        </div>
        <div className="my-profile-parent3" onClick={onGroupContainer10Click}>
          <div className="my-profile5">My profile</div>
          <img className="union-icon" alt="" src="/blackpeo.png" />
        </div>
        <div className="rooms-parent3" onClick={onGroupContainer11Click}>
          <div className="rooms5">Rooms</div>
          <img className="subtractwuzi-icon" alt="" src="/subtractwuzi.png" />
        </div>
        <div className="car-booking-parent3" onClick={onGroupContainer12Click}>
          <div className="car-booking5">Car booking</div>
          <img className="union-icon1" alt="" src="/blackcar.png" />
        </div>
      </div>
      <img
        className="rectangleok-icon"
        alt=""
        src="/rectangleok.png"
        onClick={onRectangleokIconClick}
      />
      <img
        className="rectangleok-icon1"
        alt=""
        src="/rectangleok.png"
        onClick={onRectangleokIcon1Click}
      />
      <img
        className="rectangleok-icon2"
        alt=""
        src="/rectangleok.png"
        onClick={onRectangleokIcon2Click}
      />
      <img
        className="rectangleok-icon3"
        alt=""
        src="/rectangleok.png"
        onClick={onRectangleokIcon3Click}
      />
      <img
        className="rectangleok-icon4"
        alt=""
        src="/rectangleok.png"
        onClick={onRectangleokIcon4Click}
      />
      <img
        className="rectangleok-icon5"
        alt=""
        src="/rectangleok.png"
        onClick={onRectangleokIcon5Click}
      />
      <img className="rectangleok-icon6" alt="" src="/rectangleok.png" />
      <div className="logout-popup">
        <div className="logout-popup-child" />
        <div className="logout1">Logout</div>
        <div className="no" onClick={onNoTextClick}>
          No
        </div>
        <div className="yes" onClick={onYesTextClick}>
          Yes
        </div>
        <div className="are-you-sure">Are you sure you want to logout</div>
      </div>
    </div>
  );
};

export default Settingslogout;
