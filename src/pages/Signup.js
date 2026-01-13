import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";




const Signup = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    // Please sync "2a login with facebook" to the project
  }, []);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/30-accomodations-air");
  }, [navigate]);

  const onAlreadyHaveAnClick = useCallback(() => {
    navigate("/28-signin");
  }, [navigate]);

  return (
    <div className="signup">
      <div className="rectangle27" />
      <div className="signup-child" />
      <input type="text" className="email-top" placeholder=" Email" />
      <input type="text" className="full-name1-top" placeholder=" Full Name" />
      <input type="text" className="mobile-number-top" placeholder=" Mobile Number" />
      <div className="div7">+225</div>
      <img className="rectangle-icon5" alt="" src="/rectangle.png" />
      <div className="signup-item" />
      <input type="text" className="password-top" placeholder=" Password" />
      <div className="group3" onClick={onGroupContainerClick}>
        <div className="blue1" />
        <div className="facebook1">Facebook</div>
      </div>
      <div className="red1" />
      <div className="google1">Google</div>
      <div className="sign-up1">Sign Up</div>
      <div className="or-sign-in1">or sign In using</div>
      <div className="group-parent6">
        <div className="email-parent">
          <img className="email-icon3" alt="" src="/email.png" />
          <img className="peopleblue-icon" alt="" src="/bluepeople.png" />
          <img className="mobileblue-icon" alt="" src="/mobilephone.png" />
          <img className="suoblue-icon1" alt="" src="/suoblue.png" />
        </div>
        <div className="search1-parent6" onClick={onGroupContainer2Click}>
          <img className="search1-icon9" alt="" src="/search1.png" />
          <div className="create-account">Create Account</div>
        </div>
      </div>
      <div className="already-have-an-container" onClick={onAlreadyHaveAnClick}>
        <span>{`Already have an account? `}</span>
        <span className="sign-in1">Sign In</span>
      </div>
    </div>
  );
};

export default Signup;
