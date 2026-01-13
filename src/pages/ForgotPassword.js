import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/28-signin");
  }, [navigate]);

  return (
    <div className="forgot-password">
      <div className="rectangle7" />
      <div className="forgot-password-child" />
      <input type="text" className="email3-top" placeholder=" Email" />
      <img className="email-icon1" alt="" src="/email.png" />
      <div className="forgot-password1">Forgot Password?</div>
      <div className="please-enter-your-container">
        <p className="please-enter">Please enter your registered email</p>
        <p className="please-enter">address to recover your password</p>
      </div>
      <div className="gaobu-parent1">
      </div>
      <div className="group2" onClick={onGroupContainer1Click}>
        <img className="search1-icon7" alt="" src="/search1.png" />
        <div className="submit">Submit</div>
      </div>
    </div>
  );
};

export default ForgotPassword;
