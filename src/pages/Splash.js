import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Component2Icon from "../components/Component2Icon";
import "./Splash.css";

const Splash = () => {
  const navigate = useNavigate();

  const onSplashContainerClick = useCallback(() => {
    navigate("/27-signup");
  }, [navigate]);

  return (
    <div className="splash" onClick={onSplashContainerClick}>
      <div className="rectangle-parent15">
        <div className="group-child39" />
        <div className="group4">
          <Component2Icon />
          <img className="chenbao-icon" alt="" src="/chenbao.png" />
          <img className="yun-icon" alt="" src="/yun.png" />
          <img className="yun-icon" alt="" src="/yun.png" />
          <img className="yun-icon" alt="" src="/yun.png" />
          <div className="hotel-find">Hotel Find</div>
        </div>

      </div>
    </div>
  );
};

export default Splash;
