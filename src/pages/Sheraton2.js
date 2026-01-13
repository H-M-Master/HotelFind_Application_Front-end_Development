import { useCallback } from "react";
import ASheratonSection1 from "../components/ASheratonSection1";
import { useNavigate } from "react-router-dom";
import "./Sheraton2.css";

const Sheraton2 = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/61-sheraton");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/63-sheraton");
  }, [navigate]);

  const onGroupContainer3Click = useCallback(() => {
    navigate("/64-sheraton");
  }, [navigate]);

  const onFanhui1IconClick = useCallback(() => {
    navigate("/50-hotels-list");
  }, [navigate]);

  return (
    <div className="bsheraton2">
      <div className="btupianzuhe445">
        <div className="btupianzuhe445-child" />
        <img
          className="btupianzuhe445-item"
          alt=""
          src="/rectangle-312@2x.png"
        />
        <img
          className="btupianzuhe445-inner"
          alt=""
          src="/rectangle-313@2x.png"
        />
        <img
          className="btupianzuhe445-child1"
          alt=""
          src="/rectangle-314@2x.png"
        />
        <img
          className="btupianzuhe445-child2"
          alt=""
          src="/rectangle-3@2x.png"
        />
        <img
          className="btupianzuhe445-child3"
          alt=""
          src="/rectangle-34@2x.png"
        />
        <img
          className="btupianzuhe445-child4"
          alt=""
          src="/rectangle-35@2x.png"
        />
        <img
          className="btupianzuhe445-child5"
          alt=""
          src="/rectangle-36@2x.png"
        />
        <img
          className="btupianzuhe445-child6"
          alt=""
          src="/rectangle-37@2x.png"
        />
        <img
          className="btupianzuhe445-child7"
          alt=""
          src="/rectangle-38@2x.png"
        />
        <img
          className="btupianzuhe445-child8"
          alt=""
          src="/rectangle-39@2x.png"
        />
        <img
          className="btupianzuhe445-child9"
          alt=""
          src="/rectangle-310@2x.png"
        />
        <img
          className="btupianzuhe445-child10"
          alt=""
          src="/rectangle-311@2x.png"
        />
      </div>
      <ASheratonSection1
        hotelImageDimensions="/7@2x.png"
        hotelName="Sheraton"
      />
      <div className="brectangle1" />
      <div className="blandizhongjian" />
      <div className="bline10" />
      <div className="bbaidi44-group" onClick={onGroupContainer1Click}>
        <img className="bbaidi44-icon1" alt="" src="/baidi44.png" />
        <div className="breview-1061">Review (106)</div>
      </div>
      <div className="bphoto-101">Photo (10)</div>
      <div className="bnear-by-24-parent" onClick={onGroupContainer2Click}>
        <div className="bnear-by-241">Near by (24)</div>
        <div className="bbaidi43" />
      </div>
      <div className="bbookingnow-group" onClick={onGroupContainer3Click}>
        <img className="bbookingnow-icon1" alt="" src="/bookingnow.png" />
        <b className="bbooking-now1">Booking Now</b>
      </div>
      <div className="brectangle-div" />
      <div className="bdiv5">$150</div>
      <div className="bavgnight1">avg/night</div>
      <b className="bb2">$127</b>
      <div className="bline-div" />
      <div className="bline11" />
      <div className="bdiv6">
        <div className="bdiv7">3.9</div>
        <div className="bpeople-liked-this2">85/100 people liked this</div>
        <img className="bstar-icon4" alt="" src="/star.png" />
        <div className="bfujian-fuzhou-container">
          <div className="bfujian-fuzhou2">Fujian, Fuzhou</div>
          <img className="bgroup-icon2" alt="" src="/group@2x.png" />
        </div>
      </div>
      <img
        className="bfanhui1-icon2"
        alt=""
        src="/fanhui1.png"
        onClick={onFanhui1IconClick}
      />
    </div>
  );
};

export default Sheraton2;
