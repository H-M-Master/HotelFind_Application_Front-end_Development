import { useCallback } from "react";
import ASheratonSection1 from "../components/ASheratonSection1";
import { useNavigate } from "react-router-dom";
import AMaskGroupIcon from "../components/AMaskGroupIcon";
import AComponent from "../components/AComponent";
import "./Sheraton1.css";

const Sheraton1 = () => {
  const navigate = useNavigate();

  const onGroupContainer3Click = useCallback(() => {
    navigate("/61-sheraton");
  }, [navigate]);

  const onGroupContainer4Click = useCallback(() => {
    navigate("/62-sheraton");
  }, [navigate]);

  const onGroupContainer5Click = useCallback(() => {
    navigate("/64-sheraton");
  }, [navigate]);

  const onFanhui1IconClick = useCallback(() => {
    navigate("/50-hotels-list");
  }, [navigate]);

  return (
    <div className="bsheraton1">
      <ASheratonSection1
        hotelImageDimensions="/7@2x.png"
        hotelName="Sheraton"
      />
      <div className="babidjan-cte-divoire">Abidjan, Côte d'Ivoire</div>
      <div className="bthree-lanes-and">Three lanes and seven alleys</div>
      <div className="bthree-lanes-and1">
        Three lanes and seven alleys are located in South Back Street, Gulou
        District, Fuzhou City, Fujian Province.
      </div>
      <div className="brating-1649">Rating (1,649)</div>
      <div className="bdistance">Distance</div>
      <div className="bdiv1">4.4</div>
      <div className="bmin">6 min</div>
      <div className="bgroup">
        <div className="bdiv2">3.9</div>
        <div className="bpeople-liked-this1">85/100 people liked this</div>
        <img className="bstar-icon1" alt="" src="/star.png" />
        <div className="bfujian-fuzhou-group">
          <div className="bfujian-fuzhou1">Fujian, Fuzhou</div>
          <img className="bgroup-icon1" alt="" src="/group@2x.png" />
        </div>
      </div>
      <div className="bline4" />
      <div className="bline5" />
      <div className="bline6" />
      <div className="bline7" />
      <div className="bline8" />
      <div className="bsheraton-fuzhou-hotel-container">
        <p className="bsheraton-fuzhou-hotel">
          Sheraton Fuzhou Hotel is located in the Eastern New Town of Fuzhou,
          528 feet from Fujian Strait International Conference and Exhibition
          Center. Free public parking is provided at the property.
        </p>
        <p className="bsheraton-fuzhou-hotel">
          Sheraton Fuzhou Hotel is 1.9 mi from Drum Mountain, 5 mi from Fuzhou
          South Railway Station.
        </p>
      </div>
      <div className="bscores-are-calculated-container">
        <p className="bsheraton-fuzhou-hotel">{`Scores are calculated based on data from google Maps and `}</p>
        <p className="bsheraton-fuzhou-hotel">
          evaluate the hotel’s proximity to nearby things to do,
        </p>
        <p className="bsheraton-fuzhou-hotel">transportation and airport.</p>
      </div>
      <div className="bgood-location-overall">
        Good location overall for sightseeing, recreation, and getting around
      </div>
      <div className="bgreat-for-promximity">
        3.8 Great for promximity things to do.
      </div>
      <div className="bno-nearby-transit">0.0 No nearby transit options.</div>
      <div className="bok-for-airport">2.2 OK for Airport access.</div>
      <div className="bbaidi44-parent" onClick={onGroupContainer3Click}>
        <img className="bbaidi44-icon" alt="" src="/baidi44.png" />
        <div className="breview-106">Review (106)</div>
      </div>
      <div className="bbaidizhongjian-parent" onClick={onGroupContainer4Click}>
        <div className="bbaidizhongjian" />
        <div className="bphoto-10">Photo (10)</div>
      </div>
      <div className="blocation-over-view">Location Over view</div>
      <div className="bhotel-location-score">Hotel Location score</div>
      <div className="bthings-to-do">Things to do</div>
      <div className="blandi44" />
      <div className="bnear-by-24">Near by (24)</div>
      <AMaskGroupIcon />
      <div className="bbookingnow-parent" onClick={onGroupContainer5Click}>
        <img className="bbookingnow-icon" alt="" src="/bookingnow.png" />
        <b className="bbooking-now">Booking Now</b>
      </div>
      <div className="bsheraton-item" />
      <div className="bdiv3">$150</div>
      <div className="bavgnight">avg/night</div>
      <b className="bb1">$127</b>
      <div className="bsheraton-inner" />
      <AComponent itemCode="/subtract1212.png" />
      <img className="bsubway-icon" alt="" src="/subway.png" />
      <img className="bphoto-camera-icon" alt="" src="/photocamera.png" />
      <img className="bplane-icon" alt="" src="/plane.png" />
      <div className="bdirections-parent">
        <div className="bdirections">Directions</div>
        <img className="bgroup-child" alt="" src="/rectangle-3.png" />
      </div>
      <img className="brectangle-icon" alt="" src="/rectangle-34.png" />
      <img className="bd1-icon" alt="" src="/1d1@2x.png" />
      <img className="bstar-icon2" alt="" src="/star.png" />
      <img className="bcar-icon" alt="" src="/car.png" />
      <div className="bwest-lake-park">West Lake Park</div>
      <div className="bthe-west-lake">{`The west lake park in fuzhou, fuzhou, fujian province, has a history of more than 1,700 years. `}</div>
      <div className="brating-16491">Rating (1,649)</div>
      <div className="bdistance1">Distance</div>
      <div className="bdiv4">4.4</div>
      <div className="bmin1">27 min</div>
      <div className="bline9" />
      <img className="bdd2-icon" alt="" src="/2dd2@2x.png" />
      <img className="bstar-icon3" alt="" src="/star.png" />
      <img className="bcar-icon1" alt="" src="/car.png" />
      <img
        className="bfanhui1-icon1"
        alt=""
        src="/fanhui1.png"
        onClick={onFanhui1IconClick}
      />
    </div>
  );
};

export default Sheraton1;
