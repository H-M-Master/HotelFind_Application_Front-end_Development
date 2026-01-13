import { useCallback } from "react";
import ASectionCard1 from "../components/ASectionCard1";
import { useNavigate } from "react-router-dom";
import "./Sanfanqixian.css";

const Sanfanqixian = () => {
  const navigate = useNavigate();

  const onWhite1Click = useCallback(() => {
    navigate("/51-sanfanqixian");
  }, [navigate]);

  const onFanhui1IconClick = useCallback(() => {
    navigate("/40-view-all");
  }, [navigate]);

  return (
    <div className="bsanfanqixian">
      <div className="bline46" />
      <div className="btupianzu121">
        <img className="btupianzu121-child" alt="" src="/rectangle-312@2x.png" />
        <img className="btupianzu121-item" alt="" src="/rectangle-313@2x.png" />
        <img className="btupianzu121-inner" alt="" src="/rectangle-314@2x.png" />
        <img className="btupianzu121-child1" alt="" src="/rectangle-3@2x.png" />
        <img className="btupianzu121-child2" alt="" src="/rectangle-34@2x.png" />
        <img className="btupianzu121-child3" alt="" src="/rectangle-35@2x.png" />
        <img className="btupianzu121-child4" alt="" src="/rectangle-36@2x.png" />
        <img className="btupianzu121-child5" alt="" src="/rectangle-37@2x.png" />
        <img className="btupianzu121-child6" alt="" src="/rectangle-38@2x.png" />
        <img className="btupianzu121-child7" alt="" src="/rectangle-39@2x.png" />
        <img
          className="btupianzu121-child8"
          alt=""
          src="/rectangle-310@2x.png"
        />
        <img
          className="btupianzu121-child9"
          alt=""
          src="/rectangle-311@2x.png"
        />
      </div>
      <ASectionCard1 />
      <div className="blandi39-container">
        <div className="blandi392" />
        <div className="bphoto-124">Photo (12)</div>
      </div>
      <div className="bwhite1-container">
        <img
          className="bwhite1-icon2"
          alt=""
          src="/39white1.png"
          onClick={onWhite1Click}
        />
        <div className="breview-1067">Review (106)</div>
      </div>
      <img
        className="bfanhui1-icon12"
        alt=""
        src="/fanhui1.png"
        onClick={onFanhui1IconClick}
      />
    </div>
  );
};

export default Sanfanqixian;
