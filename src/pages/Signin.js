import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Signin.css";

const Signin = () => {
  const navigate = useNavigate();

  const onBlueContainerClick = useCallback(() => {
    // Please sync "2a login with facebook" to the project
  }, []);

  const onDontHaveAnClick = useCallback(() => {
    navigate("/27-signup");
  }, [navigate]);

  const onForgotPasswordTextClick = useCallback(() => {
    navigate("/29-forgot-password");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/30-accomodations-air");
  }, [navigate]);

  return (
    <div className="signin1">
      <div className="rectangle-parent14">
        <div className="rectangle8" />
        <div className="group-child38" />
        <input type="text" className="email2-top" placeholder=" Email" />
        <input type="text" className="password2-top" placeholder=" Password" />
        <img className="suoblue-icon" alt="" src="/suoblue.png" />
        <img className="email-icon2" alt="" src="/email.png" />
      </div>
      <div className="blue" onClick={onBlueContainerClick}>
        <div className="blue-child" />
        <div className="facebook">Facebook</div>
      </div>
      <div className="red" />
      <div className="google">Google</div>
      <div className="or-sign-in">or sign In using</div>
      <div className="dont-have-an-container" onClick={onDontHaveAnClick}>
        <span>{`Don’t have an account? `}</span>
        <span className="sign-up">Sign Up</span>
      </div>
      <div className="forgot-password2" onClick={onForgotPasswordTextClick}>
        Forgot Password?
      </div>
      <div className="sign-in">Sign In</div>
      <div className="search1-parent5" onClick={onGroupContainer1Click}>
        <img className="search1-icon8" alt="" src="/search1.png" />
        <div className="log-in">Log In</div>
      </div>
    </div>
  );
};

export default Signin;
