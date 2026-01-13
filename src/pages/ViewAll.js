import { useCallback } from "react";
import AForestParkSection from "../components/AForestParkSection";
import ADrumMountainSection from "../components/ADrumMountainSection";
import AWestLakeParkContainer from "../components/AWestLakeParkContainer";
import AFormContainer from "../components/AFormContainer";
import { useNavigate } from "react-router-dom";
import "./ViewAll.css";

const ViewAll = () => {
  const navigate = useNavigate();

  const onGroup401ContainerClick = useCallback(() => {
    navigate("/51-sanfanqixian");
  }, [navigate]);

  const onGroup402ContainerClick = useCallback(() => {
    navigate("/55-shenling");
  }, [navigate]);

  const onGroup403ContainerClick = useCallback(() => {
    navigate("/53-xihu");
  }, [navigate]);

  const onFanhuiIconClick = useCallback(() => {
    // Please sync "30 accomodations air" to the project
    navigate("/30-accomodations-air");
  }, [navigate]);
  
  return (
    <div className="bview-all2">
      <div className="bline49" />
      <div className="bline50" />
      <div className="bline51" />
      <div className="bview-all-parent">
        <div className="bview-all3">View all</div>

      </div>
      <AForestParkSection />
      <ADrumMountainSection />
      <AWestLakeParkContainer />
      <AFormContainer />
      <div className="bgroup401" onClick={onGroup401ContainerClick}>
        <img className="brectangleview-icon" alt="" src="/rectangleview.png" />
        <div className="bview">View</div>
      </div>
      <div className="bgroup402" onClick={onGroup402ContainerClick}>
        <img className="brectangleview-icon" alt="" src="/rectangleview.png" />
        <div className="bview">View</div>
      </div>
      <div className="bgroup403" onClick={onGroup403ContainerClick}>
        <img className="brectangleview-icon" alt="" src="/rectangleview.png" />
        <div className="bview">View</div>
      </div>
      <div className="bgroup404">
        <img className="brectangleview-icon" alt="" src="/rectangleview.png" />
        <div className="bview">View</div>
      </div>
      <img
        className="bfanhui-icon"
        alt=""
        src="/fanhui.png"
        onClick={onFanhuiIconClick}
      />
   
      <div className="bshousuoyitioa">
        <div className="bsearch">Search</div>
        <div className="bshousuokuan" />
        <img className="bshousuo-icon" alt="" src="/shousuo@2x.png" />
        <img className="bcuowu-icon" alt="" src="/cuowu.png" />
      </div>
    </div>
  );
};

export default ViewAll;
