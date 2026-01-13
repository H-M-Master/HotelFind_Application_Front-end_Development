import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AViewAllSection from "../components/AViewAllSection";
import "./Jiudianq.css";

const Jiudianq = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/42-ratings-reviews");
  }, [navigate]);

  const onGroupContainer3Click = useCallback(() => {
    navigate("/60-jiudiant");
  }, [navigate]);

  const onFanhui1IconClick = useCallback(() => {
    navigate("/50-hotels-list");
  }, [navigate]);

  return (
    <div className="bjiudianq">
      <img className="bicon17" alt="" src="/6@2x.png" />
      <img className="bdituba1-icon" alt="" src="/dituba1@2x.png" />
      <div className="bpeople-liked-this-group">
        <div className="bpeople-liked-this7">85/100 people liked this</div>
        <div className="bparent4" onClick={onGroupContainerClick}>
          <div className="bdiv18">3.9</div>
          <img className="bstar-icon11" alt="" src="/star.png" />
        </div>
        <div className="bfujian-fuzhou-parent4">
          <div className="bfujian-fuzhou7">Fujian, Fuzhou</div>
          <img className="bgroup-icon7" alt="" src="/group@2x.png" />
        </div>
      </div>
      <div className="bline29" />
      <div className="bline30" />
      <div className="bline31" />
      <div className="bcheck-availability1">Check Availability</div>
      <div className="bfood1">Food</div>
      <div className="bview-all1">View all</div>
      <img className="bicon18" alt="" src="/11@2x.png" />
      <div className="bbagels-with-turkey1">Bagels with turkey and ...</div>
      <img className="bicon19" alt="" src="/12@2x.png" />
      <div className="bgourmet-croissant-scrambled1">
        gourmet croissant, scrambled eggs..
      </div>
      <img className="bicon20" alt="" src="/13@2x.png" />
      <div className="bsandwich1">sandwich</div>
      <img className="bicon21" alt="" src="/14@2x.png" />
      <div className="bcrispy-mo1">crispy mozza burger</div>
      <div className="bbookingnow-parent3" onClick={onGroupContainer3Click}>
        <img className="bbookingnow-icon5" alt="" src="/bookingnow.png" />
        <b className="bbooking-now5">Booking Now</b>
      </div>
      <div className="bjiudianq-child" />
      <div className="bdiv19">$150</div>
      <div className="bavgnight5">avg/night</div>
      <b className="bb7">$127</b>
      <div className="bjiudianq-item" />
      <AViewAllSection />
      <img
        className="bfanhui1-icon7"
        alt=""
        src="/fanhui1.png"
        onClick={onFanhui1IconClick}
      />
      <div className="bline32" />
      <div className="bcheckin-date1">{`Checkin date & time`}</div>
      <div className="bline33" />
      <img className="brectanglexia-icon3" alt="" src="/rectanglexia.png" />
      <img className="brectanglexia-icon4" alt="" src="/rectanglexia.png" />
      <img className="brectanglexia-icon5" alt="" src="/rectanglexia.png" />
      <div className="bcheckout-date1">{`Checkout date & time`}</div>
      <div className="badults-0-children1">0 Adults. 0 Children. 0 room</div>
      <div className="bdatetime-group">
        <img className="bdatetime-icon1" alt="" src="/datetime.png" />
        <img className="bdatetime-icon2" alt="" src="/datetime2.png" />
        <img className="bgroup-child1" alt="" src="/group-185@2x.png" />
      </div>
      <div className="bkempinski1">Kempinski</div>
    </div>
  );
};

export default Jiudianq;
