import { useCallback } from "react";
import ASheratonSection1 from "../components/ASheratonSection1";
import { useNavigate } from "react-router-dom";
import AMaskGroupIcon from "../components/AMaskGroupIcon";
import AComponent from "../components/AComponent";
import "./Jiudianr.css";

const Jiudianr = () => {
  const navigate = useNavigate();

  const onGroupContainer3Click = useCallback(() => {
    navigate("/57-jiudianq");
  }, [navigate]);

  const onGroupContainer4Click = useCallback(() => {
    navigate("/58-jiudianw");
  }, [navigate]);

  const onGroupContainer5Click = useCallback(() => {
    navigate("/60-jiudiant");
  }, [navigate]);

  const onFanhui1IconClick = useCallback(() => {
    navigate("/50-hotels-list");
  }, [navigate]);

  return (
    <div className="bjiudianr">
      <ASheratonSection1
        hotelImageDimensions="/6@2x.png"
        hotelName="Kempinski"
      />
      <div className="babidjan-cte-divoire1">Abidjan, Côte d'Ivoire</div>
      <div className="bthree-lanes-and2">Three lanes and seven alleys</div>
      <div className="bthree-lanes-and3">
        Three lanes and seven alleys are located in South Back Street, Gulou
        District, Fuzhou City, Fujian Province.
      </div>
      <div className="brating-16492">Rating (1,649)</div>
      <div className="bdistance2">Distance</div>
      <div className="bdiv11">4.4</div>
      <div className="bmin2">6 min</div>
      <div className="bparent3">
        <div className="bdiv12">3.9</div>
        <div className="bpeople-liked-this5">85/100 people liked this</div>
        <img className="bstar-icon7" alt="" src="/star.png" />
        <div className="bfujian-fuzhou-parent2">
          <div className="bfujian-fuzhou5">Fujian, Fuzhou</div>
          <img className="bgroup-icon5" alt="" src="/group@2x.png" />
        </div>
      </div>
      <div className="bline21" />
      <div className="bline22" />
      <div className="bline23" />
      <div className="bline24" />
      <div className="bline25" />
      <div className="bset-in-the-container">
        <p className="bset-in-the">
          Set in the tallest building in Fuzhou, InterContinental Fuzhou offers
          accommodations with stunning views, great 'In The Know' concierge
          service and modern facilities. The hotel features a fitness center
          with an indoor pool and 3 gourmet restaurants.
        </p>
      </div>
      <div className="bscores-are-calculated-container1">
        <p className="bset-in-the">{`Scores are calculated based on data from google Maps and `}</p>
        <p className="bset-in-the">
          evaluate the hotel’s proximity to nearby things to do,
        </p>
        <p className="bset-in-the">transportation and airport.</p>
      </div>
      <div className="bgood-location-overall1">
        Good location overall for sightseeing, recreation, and getting around
      </div>
      <div className="bgreat-for-promximity1">
        3.8 Great for promximity things to do.
      </div>
      <div className="bno-nearby-transit1">0.0 No nearby transit options.</div>
      <div className="bok-for-airport1">2.2 OK for Airport access.</div>
      <div className="bbaidi44-container" onClick={onGroupContainer3Click}>
        <img className="bbaidi44-icon2" alt="" src="/baidi44.png" />
        <div className="breview-1062">Review (106)</div>
      </div>
      <div className="bbaidizhongjian-group" onClick={onGroupContainer4Click}>
        <div className="bbaidizhongjian1" />
        <div className="bphoto-102">Photo (10)</div>
      </div>
      <div className="blocation-over-view1">Location Over view</div>
      <div className="bhotel-location-score1">Hotel Location score</div>
      <div className="bthings-to-do1">Things to do</div>
      <div className="blandi441" />
      <div className="bnear-by-242">Near by (24)</div>
      <AMaskGroupIcon />
      <div className="bbookingnow-parent1" onClick={onGroupContainer5Click}>
        <img className="bbookingnow-icon3" alt="" src="/bookingnow.png" />
        <b className="bbooking-now3">Booking Now</b>
      </div>
      <div className="bjiudianr-child" />
      <div className="bdiv13">$150</div>
      <div className="bavgnight3">avg/night</div>
      <b className="bb5">$127</b>
      <div className="bjiudianr-item" />
      <AComponent itemCode="/subtract1212.png" />
      <img className="bsubway-icon1" alt="" src="/subway.png" />
      <img className="bphoto-camera-icon1" alt="" src="/photocamera.png" />
      <img className="bplane-icon1" alt="" src="/plane.png" />
      <div className="bdirections-group">
        <div className="bdirections1">Directions</div>
        <img className="bgroup-inner" alt="" src="/rectangle-3.png" />
      </div>
      <img className="bjiudianr-inner" alt="" src="/rectangle-34.png" />
      <img className="bd1-icon1" alt="" src="/1d1@2x.png" />
      <img className="bstar-icon8" alt="" src="/star.png" />
      <img className="bcar-icon2" alt="" src="/car.png" />
      <div className="bwest-lake-park1">West Lake Park</div>
      <div className="bthe-west-lake1">{`The west lake park in fuzhou, fuzhou, fujian province, has a history of more than 1,700 years. `}</div>
      <div className="brating-16493">Rating (1,649)</div>
      <div className="bdistance3">Distance</div>
      <div className="bdiv14">4.4</div>
      <div className="bmin3">27 min</div>
      <div className="bline26" />
      <img className="bdd2-icon1" alt="" src="/2dd2@2x.png" />
      <img className="bstar-icon9" alt="" src="/star.png" />
      <img className="bcar-icon3" alt="" src="/car.png" />
      <img
        className="bfanhui1-icon5"
        alt=""
        src="/fanhui1.png"
        onClick={onFanhui1IconClick}
      />
    </div>
  );
};

export default Jiudianr;
