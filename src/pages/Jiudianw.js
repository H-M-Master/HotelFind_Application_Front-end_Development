import { useCallback } from "react";
import AKempinskiSection from "../components/AKempinskiSection";
import { useNavigate } from "react-router-dom";
import "./Jiudianw.css";

const Jiudianw = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/57-jiudianq");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/59-jiudianr");
  }, [navigate]);

  const onGroupContainer3Click = useCallback(() => {
    navigate("/60-jiudiant");
  }, [navigate]);

  const onFanhui1IconClick = useCallback(() => {
    navigate("/50-hotels-list");
  }, [navigate]);

  return (
    <div className="bjiudianw">
      <AKempinskiSection
        prop="/6@2x.png"
        kempinski="Kempinski"
        propTop="43px"
      />
      <div className="brectangle3" />
      <img className="bicon5" alt="" src="/4311@2x.png" />
      <img className="bicon6" alt="" src="/4312@2x.png" />
      <img className="bicon7" alt="" src="/4313@2x.png" />
      <div className="blandizhongjian1" />
      <div className="bline27" />
      <div className="bbaidi44-parent1" onClick={onGroupContainer1Click}>
        <img className="bbaidi44-icon3" alt="" src="/baidi44.png" />
        <div className="breview-1063">Review (106)</div>
      </div>
      <div className="bphoto-103">Photo (10)</div>
      <div className="bnear-by-24-group" onClick={onGroupContainer2Click}>
        <div className="bnear-by-243">Near by (24)</div>
        <div className="bbaidi431" />
      </div>
      <div className="bbookingnow-parent2" onClick={onGroupContainer3Click}>
        <img className="bbookingnow-icon4" alt="" src="/bookingnow.png" />
        <b className="bbooking-now4">Booking Now</b>
      </div>
      <div className="bjiudianw-child" />
      <div className="bdiv15">$150</div>
      <div className="bavgnight4">avg/night</div>
      <b className="bb6">$127</b>
      <div className="bjiudianw-item" />
      <div className="bline28" />
      <img className="bicon8" alt="" src="/431@2x.png" />
      <img className="bicon9" alt="" src="/432@2x.png" />
      <img className="bicon10" alt="" src="/433@2x.png" />
      <img className="bicon11" alt="" src="/434@2x.png" />
      <img className="bicon12" alt="" src="/435@2x.png" />
      <img className="bicon13" alt="" src="/436@2x.png" />
      <img className="bicon14" alt="" src="/437@2x.png" />
      <img className="bicon15" alt="" src="/438@2x.png" />
      <img className="bicon16" alt="" src="/439@2x.png" />
      <div className="bdiv16">
        <div className="bdiv17">3.9</div>
        <div className="bpeople-liked-this6">85/100 people liked this</div>
        <img className="bstar-icon10" alt="" src="/star.png" />
        <div className="bfujian-fuzhou-parent3">
          <div className="bfujian-fuzhou6">Fujian, Fuzhou</div>
          <img className="bgroup-icon6" alt="" src="/group@2x.png" />
        </div>
      </div>
      <img
        className="bfanhui1-icon6"
        alt=""
        src="/fanhui1.png"
        onClick={onFanhui1IconClick}
      />
    </div>
  );
};

export default Jiudianw;
