import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AMaskGroupIcon from "../components/AMaskGroupIcon";
import AComponent from "../components/AComponent";
import "./HotelNearby.css";

const HotelNearby = () => {
  const navigate = useNavigate();

  const onGroupContainer3Click = useCallback(() => {
    navigate("/41-hotel-details");
  }, [navigate]);

  const onGroupContainer4Click = useCallback(() => {
    navigate("/43-hotel-photos");
  }, [navigate]);

  const onGroupContainer5Click = useCallback(() => {
    navigate("/45a-order-confirm");
  }, [navigate]);

  const onFanhui1IconClick = useCallback(() => {
    navigate("/50-hotels-list");
  }, [navigate]);

  return (
    <div className="bhotel-nearby">
      <div className="bparent10">
        <img className="bicon26" alt="" src="/5@2x.png" />
        <div className="bintercontinental1">InterContinental</div>
      </div>
      <div className="babidjan-cte-divoire2">Abidjan, Côte d'Ivoire</div>
      <div className="bthree-lanes-and8">Three lanes and seven alleys</div>
      <div className="bthree-lanes-and9">
        Three lanes and seven alleys are located in South Back Street, Gulou
        District, Fuzhou City, Fujian Province.
      </div>
      <div className="brating-16494">Rating (1,649)</div>
      <div className="bdistance4">Distance</div>
      <div className="bdiv27">4.4</div>
      <div className="bmin4">6 min</div>
      <div className="bparent11">
        <div className="bdiv28">3.9</div>
        <div className="bpeople-liked-this11">85/100 people liked this</div>
        <img className="bstar-icon15" alt="" src="/star.png" />
        <div className="bfujian-fuzhou-parent8">
          <div className="bfujian-fuzhou11">Fujian, Fuzhou</div>
          <img className="bgroup-icon11" alt="" src="/group@2x.png" />
        </div>
      </div>
      <div className="bline60" />
      <div className="bline61" />
      <div className="bline62" />
      <div className="bline63" />
      <div className="bline64" />
      <div className="bset-in-the-container1">
        <p className="bset-in-the1">
          Set in the tallest building in Fuzhou, InterContinental Fuzhou offers
          accommodations with stunning views, great 'In The Know' concierge
          service and modern facilities. The hotel features a fitness center
          with an indoor pool and 3 gourmet restaurants.
        </p>
      </div>
      <div className="bscores-are-calculated-container2">
        <p className="bset-in-the1">{`Scores are calculated based on data from google Maps and `}</p>
        <p className="bset-in-the1">
          evaluate the hotel’s proximity to nearby things to do,
        </p>
        <p className="bset-in-the1">transportation and airport.</p>
      </div>
      <div className="bgood-location-overall2">
        Good location overall for sightseeing, recreation, and getting around
      </div>
      <div className="bgreat-for-promximity2">
        3.8 Great for promximity things to do.
      </div>
      <div className="bno-nearby-transit2">0.0 No nearby transit options.</div>
      <div className="bok-for-airport2">2.2 OK for Airport access.</div>
      <div className="bbaidi44-parent2" onClick={onGroupContainer3Click}>
        <img className="bbaidi44-icon4" alt="" src="/baidi44.png" />
        <div className="breview-1069">Review (106)</div>
      </div>
      <div
        className="bbaidizhongjian-container"
        onClick={onGroupContainer4Click}
      >
        <div className="bbaidizhongjian2" />
        <div className="bphoto-104">Photo (10)</div>
      </div>
      <div className="blocation-over-view2">Location Over view</div>
      <div className="bhotel-location-score2">Hotel Location score</div>
      <div className="bthings-to-do2">Things to do</div>
      <div className="blandi442" />
      <div className="bnear-by-244">Near by (24)</div>
      <AMaskGroupIcon />
      <div className="bbookingnow-parent4" onClick={onGroupContainer5Click}>
        <img className="bbookingnow-icon6" alt="" src="/bookingnow.png" />
        <b className="bbooking-now6">Booking Now</b>
      </div>
      <div className="bhotel-nearby-child" />
      <div className="bdiv29">$150</div>
      <div className="bavgnight6">avg/night</div>
      <b className="bb9">$127</b>
      <div className="bhotel-nearby-item" />
      <AComponent itemCode="/subtract1212.png" />
      <img className="bsubway-icon2" alt="" src="/subway.png" />
      <img className="bphoto-camera-icon2" alt="" src="/photocamera.png" />
      <img className="bplane-icon2" alt="" src="/plane.png" />
      <div className="bdirections-container">
        <div className="bdirections2">Directions</div>
        <img className="bgroup-child5" alt="" src="/rectangle-3.png" />
      </div>
      <img className="bhotel-nearby-inner" alt="" src="/rectangle-34.png" />
      <img className="bd1-icon2" alt="" src="/1d1@2x.png" />
      <img className="bstar-icon16" alt="" src="/star.png" />
      <img className="bcar-icon4" alt="" src="/car.png" />
      <div className="bwest-lake-park2">West Lake Park</div>
      <div className="bthe-west-lake3">{`The west lake park in fuzhou, fuzhou, fujian province, has a history of more than 1,700 years. `}</div>
      <div className="brating-16495">Rating (1,649)</div>
      <div className="bdistance5">Distance</div>
      <div className="bdiv30">4.4</div>
      <div className="bmin5">27 min</div>
      <div className="bline65" />
      <img className="bdd2-icon2" alt="" src="/2dd2@2x.png" />
      <img className="bstar-icon17" alt="" src="/star.png" />
      <img className="bcar-icon5" alt="" src="/car.png" />
      <img
        className="bfanhui1-icon15"
        alt=""
        src="/fanhui1.png"
        onClick={onFanhui1IconClick}
      />
    </div>
  );
};

export default HotelNearby;
