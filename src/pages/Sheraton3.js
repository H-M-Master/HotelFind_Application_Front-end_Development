import { useCallback } from "react";
import AASheratonSection from "../components/AASheratonSection";
import { useNavigate } from "react-router-dom";
import ASectionViewAll from "../components/ASectionViewAll";
import "./Sheraton3.css";

const Sheraton3 = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/42-ratings-reviews");
  }, [navigate]);

  const onGroupContainer4Click = useCallback(() => {
    navigate("/64-sheraton");
  }, [navigate]);

  const onFanhui1IconClick = useCallback(() => {
    navigate("/50-hotels-list");
  }, [navigate]);

  return (
    <div className="bsheraton3">
      <AASheratonSection
        prop="/7@2x.png"
        sheraton="Sheraton"
        gaodu2IconTop="43px"
      />
      <div className="bpeople-liked-this-parent">
        <div className="bpeople-liked-this3">85/100 people liked this</div>
        <div className="bcontainer" onClick={onGroupContainer1Click}>
          <div className="bdiv8">3.9</div>
          <img className="bstar-icon5" alt="" src="/star.png" />
        </div>
        <div className="bgroup-div">
          <div className="bfujian-fuzhou3">Fujian, Fuzhou</div>
          <img className="bgroup-icon3" alt="" src="/group@2x.png" />
        </div>
      </div>
      <div className="bline12" />
      <div className="bline13" />
      <div className="bline14" />
      <div className="bcheck-availability">Check Availability</div>
      <div className="bfood">Food</div>
      <div className="bview-all">View all</div>
      <img className="bicon" alt="" src="/11@2x.png" />
      <div className="bbagels-with-turkey">Bagels with turkey and ...</div>
      <img className="bicon1" alt="" src="/12@2x.png" />
      <div className="bgourmet-croissant-scrambled">
        gourmet croissant, scrambled eggs..
      </div>
      <img className="bicon2" alt="" src="/13@2x.png" />
      <div className="bsandwich">sandwich</div>
      <img className="bicon3" alt="" src="/14@2x.png" />
      <div className="bcrispy-mo">crispy mozza burger</div>
      <img className="btupian-icon" alt="" src="/tupian@2x.png" />
      <div className="bbookingnow-container" onClick={onGroupContainer4Click}>
        <img className="bbookingnow-icon2" alt="" src="/bookingnow.png" />
        <b className="bbooking-now2">Booking Now</b>
      </div>
      <div className="bsheraton-child1" />
      <div className="bdiv9">$150</div>
      <div className="bavgnight2">avg/night</div>
      <b className="bb3">$127</b>
      <div className="bsheraton-child2" />
      <ASectionViewAll />
      <img
        className="bfanhui1-icon3"
        alt=""
        src="/fanhui1.png"
        onClick={onFanhui1IconClick}
      />
      <div className="bline15" />
      <div className="bcheckin-date">{`Checkin date & time`}</div>
      <div className="bline16" />
      <img className="brectanglexia-icon" alt="" src="/rectanglexia.png" />
      <img className="brectanglexia-icon1" alt="" src="/rectanglexia.png" />
      <img className="brectanglexia-icon2" alt="" src="/rectanglexia.png" />
      <div className="bcheckout-date">{`Checkout date & time`}</div>
      <div className="badults-0-children">0 Adults. 0 Children. 0 room</div>
      <div className="bdatetime-parent">
        <img className="bdatetime-icon" alt="" src="/datetime.png" />
        <img className="bdatetime-icon123" alt="" src="/datetime2.png" />
        <img className="bgroup-item" alt="" src="/group-185@2x.png" />
      </div>
    </div>
  );
};

export default Sheraton3;
