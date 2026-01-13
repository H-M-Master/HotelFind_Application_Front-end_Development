import { useCallback } from "react";
import ASectionCard2 from "../components/ASectionCard2";
import { useNavigate } from "react-router-dom";
import "./Shenling.css";

const Shenling = () => {
  const navigate = useNavigate();

  const onWhite1Click = useCallback(() => {
    navigate("/55-shenling");
  }, [navigate]);

  const onFanhui1IconClick = useCallback(() => {
    navigate("/40-view-all");
  }, [navigate]);

  return (
    <div className="bshenling">
      <img className="btupianzu333-icon" alt="" src="/tupianzu333.png" />
      <img className="brectangle-icon1" alt="" src="/3@2x.png" />
      <div className="bline34" />
      <ASectionCard2 />
      <div className="blandi39-parent">
        <div className="blandi39" />
        <div className="bphoto-12">Photo (12)</div>
      </div>
      <div className="bwhite1-parent">
        <img
          className="bwhite1-icon"
          alt=""
          src="/39white1.png"
          onClick={onWhite1Click}
        />
        <div className="breview-1064">Review (106)</div>
      </div>
      <img
        className="bfanhui1-icon8"
        alt=""
        src="/fanhui1.png"
        onClick={onFanhui1IconClick}
      />
    </div>
  );
};

export default Shenling;
