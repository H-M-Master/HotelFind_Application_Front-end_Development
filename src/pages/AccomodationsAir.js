import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AccomodationsAir.css";

const AccomodationsAir = () => {
  const navigate = useNavigate();

  const onViewAllTextClick = useCallback(() => {
    // Please sync "40 view all" to the project
    navigate("/40-view-all");
  }, [navigate]);

  const onViewAllText1Click = useCallback(() => {
    // Please sync "50 hotels list" to the project
    navigate("/50-hotels-list");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/20-notification-message-booking");
  }, [navigate]);

  const onGroupContainer3Click = useCallback(() => {
    navigate("/5-book-a-car");
  }, [navigate]);

  const onGroupContainer4Click = useCallback(() => {
    navigate("/2-my-profile");
  }, [navigate]);

  const onGroupContainer5Click = useCallback(() => {
    navigate("/10-settings");
  }, [navigate]);

  const onGroupContainer6Click = useCallback(() => {
    navigate("/33-where-do-you");
  }, [navigate]);

  const onHuisedotClick = useCallback(() => {
    navigate("/31-accomodations-fan");
  }, [navigate]);

  const onGroupContainer7Click = useCallback(() => {
    // Please sync "50 hotels list" to the project
    navigate("/50-hotels-list");
  }, [navigate]);

  return (
    <div className="accomodations-air">
      <div className="find-room-parent4">
        <div className="find-room6">Find room</div>
        <img className="zuhedi-icon6" alt="" src="/zuhedi.png" />
        <div className="stay6">Stay</div>
        <div className="pass6">Pass</div>
        <div className="huisejialus5" />
        <div className="luse5" />
        <img className="buzd-icon5" alt="" src="/buzd.png" />
    
        <div className="rooms-parent16">
          <div className="rooms18">Rooms</div>
          <img
            className="subtractroomwrite-icon6"
            alt=""
            src="/subtractroomwrite.png"
          />
        </div>
        <img className="landi12-icon6" alt="" src="/12landi12.png" />
        <img className="landi1-icon6" alt="" src="/1landi1.png" />
        <div className="hotels6">Hotels</div>
        <div className="villas6">Villas</div>
      </div>
      <div className="accomodations-air-child" />
      <div className="line41" />
      <div className="checkin-date3">{`Checkin date & time`}</div>
      <div className="line42" />
      <img className="rectanglexia-icon18" alt="" src="/rectanglexia.png" />
      <img className="rectanglexia-icon19" alt="" src="/rectanglexia.png" />
      <img className="rectanglexia-icon20" alt="" src="/rectanglexia.png" />
      <div className="checkout-date3">{`Checkout date & time`}</div>
      <div className="line43" />
      <div className="adults-0-children4">0 Adults. 0 Children. 0 room</div>
      <div className="fan6">Fan</div>
      <img className="accomodations-air-item" alt="" src="/group-186@2x.png" />
      <div className="air-conditioned6">Air conditioned</div>
      <div className="accomodations-air-inner" />
      <div className="best-places6">Best Places</div>
      <a
        className="three-lanes-and6"
      >
        Three lanes and seven alleys
      </a>
      <div className="view-all12" onClick={onViewAllTextClick}>
        View all
      </div>
      <div className="west-lake-park6">West Lake Park</div>
      <div className="forest-park6">Forest Park</div>
      <div className="drum-mo6">Drum Mo</div>
      <div className="best-hotels6">Best Hotels</div>
      <div className="intercontinental6">InterContinental</div>
      <div className="view-all13" onClick={onViewAllText1Click}>
        View all
      </div>
      <div className="kempinski6">Kempinski</div>
      <div className="sheraton6">Sheraton</div>
      <div className="hilton6">Hilton</div>
      <img className="icon48" alt="" src="/1@2x.png" />
      <img className="icon49" alt="" src="/2@2x.png" />
      <img className="icon50" alt="" src="/3@2x.png" />
      <img className="icon51" alt="" src="/4@2x.png" />
      <img className="icon52" alt="" src="/5@2x.png" />
      <img className="icon53" alt="" src="/6@2x.png" />
      <img className="icon54" alt="" src="/7@2x.png" />
      <img className="icon55" alt="" src="/8@2x.png" />
      <img className="accomodations-air-child1" alt="" src="/group-183.png" />
      <div className="notifications-parent15" onClick={onGroupContainer2Click}>
        <div className="notifications25">Notifications</div>
        <img className="blackbell-icon12" alt="" src="/blackbell.png" />
      </div>
      <div className="car-booking-parent16" onClick={onGroupContainer3Click}>
        <div className="car-booking18">Car booking</div>
        <img className="blackcar-icon13" alt="" src="/blackcar.png" />
      </div>
      <div className="my-profile-parent16" onClick={onGroupContainer4Click}>
        <div className="my-profile19">My profile</div>
        <img className="blackpeo-icon16" alt="" src="/blackpeo.png" />
      </div>
      <div className="settings-parent16" onClick={onGroupContainer5Click}>
        <div className="settings21">Settings</div>
        <div className="blackset16">
          <div className="srectangle-235" />
          <div className="srectangle-335" />
          <div className="srectangle-2117" />
          <div className="srectangle-3117" />
          <div className="srectangle-2216" />
          <div className="srectangle-3216" />
        </div>
      </div>
      <div className="line-parent8" onClick={onGroupContainer6Click}>
        <div className="line44" />
        <div className="where-do-you3">Where do you want</div>
      </div>
      <div className="huisedot6" onClick={onHuisedotClick} />
      <div className="search1-parent4" onClick={onGroupContainer7Click}>
        <img className="search1-icon6" alt="" src="/search1.png" />
        <div className="search6">Search</div>
      </div>
    </div>
  );
};

export default AccomodationsAir;
