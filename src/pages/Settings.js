import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Settings.css";

const Settings = () => {
  const navigate = useNavigate();

  const onRectangleokIconClick = useCallback(() => {
    navigate("/11-notifications");
  }, [navigate]);

  const onRectangleokIcon1Click = useCallback(() => {
    navigate("/12-privacy-policy");
  }, [navigate]);

  const onRectangleokIcon2Click = useCallback(() => {
    navigate("/13-terms-conditions");
  }, [navigate]);

  const onRectangleokIcon3Click = useCallback(() => {
    navigate("/14-faq");
  }, [navigate]);

  const onRectangleokIcon4Click = useCallback(() => {
    navigate("/16-booking-history");
  }, [navigate]);

  const onRectangleokIcon5Click = useCallback(() => {
    navigate("/15-change-password");
  }, [navigate]);

  const onGroupContainer10Click = useCallback(() => {
    navigate("/20-notification-message-booking");
  }, [navigate]);

  const onGroupContainer11Click = useCallback(() => {
    navigate("/30-accomodations-air");
  }, [navigate]);

  const onGroupContainer12Click = useCallback(() => {
    navigate("/2-my-profile");
  }, [navigate]);

  const onGroupContainer13Click = useCallback(() => {
    navigate("/5-book-a-car");
  }, [navigate]);

  const onRectangleokIcon6Click = useCallback(() => {
    navigate("/47-settingslogout");
  }, [navigate]);

  return (
    <div className="settings14">
      <img className="settings-child" alt="" src="/zuhedi.png" />
      <div className="settings-item" />
      <div className="myprofile1">Myprofile</div>
      <div className="rectangle3" />
      <div className="settings-inner" />
      <div className="settings15">Settings</div>
      <div className="settings-child1" />
      <div className="settings-inner1">
        <div className="rectangle-parent7">
          <div className="group-child29" />
          <div className="notifications19">Notifications</div>
        </div>
      </div>
      <div className="rectangle-parent8">
        <div className="group-child29" />
        <div className="notifications19">Privacy Policy</div>
      </div>
      <div className="rectangle-parent9">
        <div className="group-child29" />
        <div className="notifications19">{`Terms & conditions`}</div>
      </div>
      <div className="rectangle-parent10">
        <div className="group-child29" />
        <div className="notifications19">Faq?</div>
      </div>
      <div className="rectangle-parent11">
        <div className="group-child29" />
        <div className="notifications19">Booking history</div>
      </div>
      <div className="rectangle-parent12">
        <div className="group-child29" />
        <div className="notifications19">Change password</div>
      </div>
      <div className="rectangle-parent13">
        <div className="group-child29" />
        <div className="notifications19">Logout</div>
      </div>
      <div className="group-parent2">
        <div className="settings-parent11">
          <div className="settings16">Settings</div>
          <div className="groupsetwri1">
            <div className="ssrectangle-23" />
            <div className="ssrectangle-33" />
            <div className="ssrectangle-211" />
            <div className="ssrectangle-311" />
            <div className="ssrectangle-221" />
            <div className="ssrectangle-321" />
          </div>
        </div>
      
      </div>
      <img
        className="rectangleok-icon7"
        alt=""
        src="/rectangleok.png"
        onClick={onRectangleokIconClick}
      />
      <img
        className="rectangleok-icon8"
        alt=""
        src="/rectangleok.png"
        onClick={onRectangleokIcon1Click}
      />
      <img
        className="rectangleok-icon9"
        alt=""
        src="/rectangleok.png"
        onClick={onRectangleokIcon2Click}
      />
      <img
        className="rectangleok-icon10"
        alt=""
        src="/rectangleok.png"
        onClick={onRectangleokIcon3Click}
      />
      <img
        className="rectangleok-icon11"
        alt=""
        src="/rectangleok.png"
        onClick={onRectangleokIcon4Click}
      />
      <img
        className="rectangleok-icon12"
        alt=""
        src="/rectangleok.png"
        onClick={onRectangleokIcon5Click}
      />
      <div className="notifications-parent10" onClick={onGroupContainer10Click}>
        <div className="notifications20">Notifications</div>
        <img className="blackbell-icon7" alt="" src="/blackbell.png" />
      </div>
      <div className="rooms-parent11" onClick={onGroupContainer11Click}>
        <div className="rooms13">Rooms</div>
        <img className="subtractwuzi-icon7" alt="" src="/subtractwuzi.png" />
      </div>
      <div className="my-profile-parent11" onClick={onGroupContainer12Click}>
        <div className="my-profile13">My profile</div>
        <img className="blackpeo-icon12" alt="" src="/blackpeo.png" />
      </div>
      <div className="car-booking-parent11" onClick={onGroupContainer13Click}>
        <div className="car-booking13">Car booking</div>
        <img className="blackcar-icon11" alt="" src="/blackcar.png" />
      </div>
      <img
        className="rectangleok-icon13"
        alt=""
        src="/rectangleok.png"
        onClick={onRectangleokIcon6Click}
      />
    </div>
  );
};

export default Settings;
