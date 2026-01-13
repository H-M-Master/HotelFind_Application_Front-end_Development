import { useCallback } from "react";
import AContainerCard1 from "../components/AContainerCard1";
import { useNavigate } from "react-router-dom";
import "./RatingsReviews.css";

const RatingsReviews = () => {
  const navigate = useNavigate();

  const onWriteAReviewClick = useCallback(() => {
    navigate("/46-rate-the-app");
  }, [navigate]);

  const onFanhuiIconClick = useCallback(() => {
    navigate("/41-hotel-details");
  }, [navigate]);

  return (
    <div className="bratings-reviews">
      <div className="brating-reviews">{`Rating & Reviews`}</div>
      <div className="bsearch-reviews">Search reviews</div>
      <div className="breview-summary">Review Summary</div>
      <img className="bratings-reviews-child" alt="" src="/group-2@2x.png" />
      <div className="bayoub-elhourch">Ayoub ELHOURCH</div>
      <div className="bdiv23">4/5</div>
      <div className="bdiv24">5/5</div>
      <div className="bnice-hotel-and">
        Nice hotel and Great food and have nice things to visit around
      </div>
      <div className="bmins-ago">20 mins ago</div>
      <div className="bline56" />
      <div className="bline57" />
      <div className="bgaobu-parent">
        <div className="bshoushuokuamn" />
        <AContainerCard1 />
      </div>
      <img className="bratings-reviews-item" alt="" src="/ellipse-2@2x.png" />
      <div className="bdzigbodi-hosi">Dzigbodi Hosi</div>
      <div className="bcant-hate-this">
        Can't hate this place. Love the place
      </div>
      <div className="bdays-ago">2 days ago</div>
      <img className="bratings-reviews-inner" alt="" src="/ellipse-21@2x.png" />
      <div className="bdiv25">4.5/5</div>
      <div className="bline58" />
      <div className="bhanna">Hanna</div>
      <div className="bgood-service">Good service</div>
      <div className="bdays-ago1">2 days ago</div>
      <img className="bellipse-icon" alt="" src="/ellipse-22@2x.png" />
      <div className="bdiv26">4.5/5</div>
      <div className="bline59" />
      <div className="bkate">Kate</div>
      <div className="bgreat-service-wonderful">
        Great service, wonderful pool area situated next to the lagoon. They
        have also recently renovated most of the amenities. Lovely hotel.
      </div>
      <div className="bdays-ago2">3 days ago</div>
      <img className="bratings-reviews-child1" alt="" src="/ellipse-23@2x.png" />
      <div className="bwrite-a-review-container" onClick={onWriteAReviewClick}>
        <span>+</span>
        <span className="bwrite-a-review"> Write a review</span>
      </div>
      <img
        className="bfanhui-icon2"
        alt=""
        src="/fanhui.png"
        onClick={onFanhuiIconClick}
      />
    </div>
  );
};

export default RatingsReviews;
