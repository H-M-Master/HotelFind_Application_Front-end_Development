import { useCallback } from "react";
import ASectionCard from "../components/ASectionCard";
import { useNavigate } from "react-router-dom";
import "./Xihu.css";

const Xihu = () => {
  const navigate = useNavigate();

  const onFanhui1IconClick = useCallback(() => {
    navigate("/40-view-all");
  }, [navigate]);

  const onWhite1Click = useCallback(() => {
    navigate("/53-xihu");
  }, [navigate]);

  return (
    <div className="bxihu">
      <img className="bicon22" alt="" src="/2@2x.png" />
      <div className="bline41" />
      <ASectionCard />
      <div className="blandi39-group">
        <div className="blandi391" />
        <div className="bphoto-122">Photo (12)</div>
      </div>
      <img className="btupianzuhe1-icon" alt="" src="/tupianzuhe1.png" />
      <img
        className="bfanhui1-icon10"
        alt=""
        src="/fanhui1.png"
        onClick={onFanhui1IconClick}
      />
      <div className="bwhite1-group">
        <img
          className="bwhite1-icon1"
          alt=""
          src="/39white1.png"
          onClick={onWhite1Click}
        />
        <div className="breview-1065">Review (106)</div>
      </div>
    </div>
  );
};

export default Xihu;
