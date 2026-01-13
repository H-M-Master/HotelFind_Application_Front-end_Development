import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./EditProfile.css";

const EditProfile = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/2-my-profile");
  }, [navigate]);

  const onFanhuiIconClick = useCallback(() => {
    navigate("/2-my-profile");
  }, [navigate]);

  return (
    <div className="edit-profile">
      <img className="people2-icon" alt="" src="/people2@2x.png" />
      <div className="rectangle4" />
      <div className="edit-profile1">Edit profile</div>
      <div className="line31" />
      <div className="johnsmithgmailcom">johnsmith@gmail.com</div>
      <img className="email-icon" alt="" src="/email.png" />
      <div className="line32" />
      <div className="john-smith1">John Smith</div>
      <img className="bluepeople-icon" alt="" src="/bluepeople.png" />
      <div className="line33" />
      <div className="div3">+225</div>
      <div className="div4">698698966</div>
      <div className="email">Email</div>
      <div className="full-name">Full Name</div>
      <div className="mobile-number">Mobile number</div>
      <img className="rectangle-icon2" alt="" src="/rectangle.png" />
      <div className="edit-profile-child" />
      <img className="mobilephone-icon" alt="" src="/mobilephone.png" />
      <img className="picture11-icon" alt="" src="/picture11.png" />
      <div className="group-group">
        <div className="group" onClick={onGroupContainerClick}>
          <img className="group-child36" alt="" src="/rectangle-22.png" />
          <div className="update">Update</div>
        </div>
 
      </div>
      <img
        className="fanhui-icon"
        alt=""
        src="/fanhui.png"
        onClick={onFanhuiIconClick}
      />
    </div>
  );
};

export default EditProfile;
