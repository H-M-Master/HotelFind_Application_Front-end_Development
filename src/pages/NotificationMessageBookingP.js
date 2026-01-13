import { useCallback } from "react";
import SectionCard1 from "../components/SectionCard1";
import { useNavigate } from "react-router-dom";
import "./NotificationMessageBookingP.css";

const NotificationMessageBookingP = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    // Please sync "19 booking details" to the project
    navigate("/19-booking-details");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    // Please sync "19 booking details" to the project
    navigate("/19-booking-details");
  }, [navigate]);

  const onGroupContainer3Click = useCallback(() => {
    navigate("/20-notification-message-booking");
  }, [navigate]);

  const onGroupContainer5Click = useCallback(() => {
    navigate("/30-accomodations-air");
  }, [navigate]);

  const onGroupContainer6Click = useCallback(() => {
    navigate("/5-book-a-car");
  }, [navigate]);

  const onGroupContainer7Click = useCallback(() => {
    navigate("/2-my-profile");
  }, [navigate]);

  const onGroupContainer8Click = useCallback(() => {
    navigate("/10-settings");
  }, [navigate]);

  return (
    <div className="notification-message-booking-p">
      <div className="vector-parent">
        <img className="group-child5" alt="" src="/zuhedi.png" />
        <img className="group-child6" alt="" src="/rectangle-24.png" />
 
        <div className="group-5bell-write">
          <div className="notifications9">Notifications</div>
          <img className="bellwrite-icon" alt="" src="/bellwrite.png" />
        </div>
      </div>
      <div className="notification-message-booking-p-child" />
      <div className="notifications10">Notifications</div>
      <SectionCard1
        eventDate="29 July 2023"
        hotelName="Fuzhou Hotel"
        propTop="144px"
        propTextAlign="left"
        onGroupContainer1Click={onGroupContainer1Click}
      />
      <SectionCard1
        eventDate="31 July 2023"
        hotelName="Beijing Hotel"
        propTop="244px"
        propTextAlign="center"
        onGroupContainer1Click={onGroupContainer2Click}
      />
      <div className="lanbiankuan124-parent" onClick={onGroupContainer3Click}>
        <img className="lanbiankuan124-icon" alt="" src="/lanbiankuan124.png" />
        <div className="message">Message</div>
        <img className="nvector-icon" alt="" src="/24nvector.png" />
      </div>
      <div className="lanse1-parent">
        <img className="lanbiankuan124-icon" alt="" src="/24lanse1.png" />
        <div className="plan">Plan</div>
        <img className="group-child7" alt="" src="/group-79.png" />
      </div>
      <div className="rooms-parent6" onClick={onGroupContainer5Click}>
        <div className="rooms8">Rooms</div>
        <img className="subtractwuzi-icon2" alt="" src="/subtractwuzi.png" />
      </div>
      <div className="car-booking-parent6" onClick={onGroupContainer6Click}>
        <div className="car-booking8">Car booking</div>
        <img className="blackcar-icon6" alt="" src="/blackcar.png" />
      </div>
      <div className="my-profile-parent6" onClick={onGroupContainer7Click}>
        <div className="my-profile8">My profile</div>
        <img className="blackpeo-icon7" alt="" src="/blackpeo.png" />
      </div>
      <div className="settings-parent6" onClick={onGroupContainer8Click}>
        <div className="settings9">Settings</div>
        <div className="blackset7">
          <div className="srectangle-29" />
          <div className="srectangle-39" />
          <div className="srectangle-217" />
          <div className="srectangle-317" />
          <div className="srectangle-227" />
          <div className="srectangle-327" />
        </div>
      </div>
    </div>
  );
};

export default NotificationMessageBookingP;
