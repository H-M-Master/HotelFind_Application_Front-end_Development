import { useCallback } from "react";
import Yinghankazhongyao from "../components/Yinghankazhongyao";
import { useNavigate } from "react-router-dom";
import "./MyProfile.css";

const MyProfile = () => {
  const navigate = useNavigate();

  const onGroupClick = useCallback(() => {
    navigate("/4-edit-profile");
  }, [navigate]);

  const onAddNewCardClick = useCallback(() => {
    navigate("/3-add-new-card");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/20-notification-message-booking");
  }, [navigate]);

  const onGroupContainer3Click = useCallback(() => {
    navigate("/5-book-a-car");
  }, [navigate]);

  const onGroupContainer4Click = useCallback(() => {
    navigate("/10-settings");
  }, [navigate]);

  const onGroupContainer5Click = useCallback(() => {
    navigate("/30-accomodations-air");
  }, [navigate]);

  return (
    <div className="my-profile14">
      <img className="my-profile-child" alt="" src="/zuhedi.png" />
      <div className="rectangle5" />
      <div className="my-profile-item" />
      <img className="people2-icon1" alt="" src="/people2@2x.png" />
      <div className="myprofile2">Myprofile</div>
      <div className="rectangle6" />
      <div className="my-profile-inner" />
      <div className="john-smith-johnsmithgmailcom-container">
        <p className="john-smith2">John Smith</p>
        <p className="p">johnsmith@gmail.com</p>
        <p className="p">+225 698698966</p>
      </div>
      <Yinghankazhongyao
        imageDimensions="/visapaylogo.png"
        yinghankazhongyaoPosition="absolute"
        yinghankazhongyaoTop="491px"
        yinghankazhongyaoLeft="18px"
      />
      <div className="group-parent4">
        <div className="my-profile-parent12">
          <div className="my-profile15">My profile</div>
          <img
            className="unionpeoplewrite-icon"
            alt=""
            src="/unionpeoplewrite.png"
          />
        </div>

      </div>
      <img
        className="my-profile-child1"
        alt=""
        src="/group-3.png"
        onClick={onGroupClick}
      />
      <div className="add-new-card2" onClick={onAddNewCardClick}>
        + Add new card
      </div>
      <div className="notifications-parent11" onClick={onGroupContainer2Click}>
        <div className="notifications21">Notifications</div>
        <img className="blackbell-icon8" alt="" src="/blackbell.png" />
      </div>
      <div className="car-booking-parent12" onClick={onGroupContainer3Click}>
        <div className="car-booking14">Car booking</div>
        <img className="blackcar-icon12" alt="" src="/blackcar.png" />
      </div>
      <div className="settings-parent12" onClick={onGroupContainer4Click}>
        <div className="settings17">Settings</div>
        <div className="blackset12">
          <div className="srectangle-231" />
          <div className="srectangle-331" />
          <div className="srectangle-2113" />
          <div className="srectangle-3113" />
          <div className="srectangle-2212" />
          <div className="srectangle-3212" />
        </div>
      </div>
      <div className="rooms-parent12" onClick={onGroupContainer5Click}>
        <div className="rooms14">Rooms</div>
        <img className="subtractwuzi-icon8" alt="" src="/subtractwuzi.png" />
      </div>
    </div>
  );
};

export default MyProfile;
