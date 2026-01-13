import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./RateTheApp.css";

const RateTheApp = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/42-ratings-reviews");
  }, [navigate]);

  const onFanhuiIconClick = useCallback(() => {
    navigate("/42-ratings-reviews");
  }, [navigate]);

  return (
    <div className="brate-the-app">
      <div className="bmyprofile">Myprofile</div>
      <div className="bgive-rating">{`Give rating & Review`}</div>
      <div className="brate-the-app-child" />
      <div className="bwrite-your-review">Write your review</div>
      <img className="brate-the-app-item" alt="" src="/group-141@2x.png" />
      <div className="bgroup1" onClick={onGroupContainerClick}>
        <img className="bsearch1-icon3" alt="" src="/search1.png" />
        <div className="bsubmit">Submit</div>
      </div>
      <img
        className="bfanhui-icon1"
        alt=""
        src="/fanhui.png"
        onClick={onFanhuiIconClick}
      />
    </div>
  );
};

export default RateTheApp;
