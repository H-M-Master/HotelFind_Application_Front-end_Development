import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ChangePassword.css";

const ChangePassword = () => {
  const navigate = useNavigate();

  const onGroupContainer2Click = useCallback(() => {
    navigate("/10-settings");
  }, [navigate]);

  const onFanhuiIconClick = useCallback(() => {
    navigate("/10-settings");
  }, [navigate]);

  return (
    <div className="achange-password1">
      <div className="arectangle9" />
      <div className="achange-password2">Change Password</div>
      <div className="aline" alt="" src="/line.png"/>
      <div className="aold-password">Old Password</div>
      <div className="aline1" alt="" src="/line.png"/>
      <div className="acreate-new-password">Create New Password</div>
      <div className="aline2" alt="" src="/line.png" />
      <div className="aconfirm-new-password">Confirm New Password</div>
      <img className="achange-password-child" alt="" src="/group-180@2x.png" />
      <div className="achange-password-inner">
        <div className="agaobu-parent1">
    
        </div>
      </div>
      <div className="agroup" onClick={onGroupContainer2Click}>
        <div className="asignin">
          <img className="asaearch1-icon" alt="" src="/search1.png" />
          <div className="aupdate">Update</div>
        </div>
      </div>
      <img
        className="afanhui-icon6"
        alt=""
        src="/fanhui.png"
        onClick={onFanhuiIconClick}
      />
    </div>
  );
};

export default ChangePassword;
