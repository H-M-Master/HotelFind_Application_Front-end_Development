import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./CheckDate.css";

const CheckDate = () => {
  const navigate = useNavigate();

  const onGroupContainer2Click = useCallback(() => {
    // Please sync "50 hotels list" to the project
    navigate("/50-hotels-list");
  }, [navigate]);

  const onViewAllTextClick = useCallback(() => {
    // Please sync "40 view all" to the project
    navigate("/40-view-all");
  }, [navigate]);

  const onViewAllText1Click = useCallback(() => {
    // Please sync "50 hotels list" to the project
    navigate("/50-hotels-list");
  }, [navigate]);

  const onGroupContainer3Click = useCallback(() => {
    navigate("/20-notification-message-booking");
  }, [navigate]);

  const onGroupContainer4Click = useCallback(() => {
    navigate("/5-book-a-car");
  }, [navigate]);

  const onGroupContainer5Click = useCallback(() => {
    navigate("/2-my-profile");
  }, [navigate]);

  const onGroupContainer6Click = useCallback(() => {
    navigate("/10-settings");
  }, [navigate]);

  const onDatetimepage1ImageClick = useCallback(() => {
    navigate("/35-people-number");
  }, [navigate]);

  const onGroupContainer7Click = useCallback(() => {
    navigate("/33-where-do-you");
  }, [navigate]);

  return (
    <div className="check-date">
      <img className="zuhedi-icon3" alt="" src="/zuhedi.png" />
      <div className="rectangle" />
      <div className="find-room-parent1">
        <div className="find-room3">Find room</div>
        <div className="stay3">Stay</div>
        <div className="pass3">Pass</div>
        <div className="huisejialus3" />
        <div className="luse3" />
        <img className="buzd-icon3" alt="" src="/buzd.png" />
        <img className="gaobu-icon3" alt="" src="/gaobu.png" />
        <img className="dibu-icon3" alt="" src="/dibu.png" />
        <div className="rooms-parent1">
          <div className="rooms3">Rooms</div>
          <img
            className="subtractroomwrite-icon3"
            alt=""
            src="/subtractroomwrite.png"
          />
        </div>
        <img className="landi12-icon3" alt="" src="/12landi12.png" />
        <img className="landi1-icon3" alt="" src="/1landi1.png" />
        <div className="hotels3">Hotels</div>
        <div className="villas3">Villas</div>
      </div>
      <div className="check-date-child" />
      <div className="line16" />
      <div className="checkin-date1">{`Checkin date & time`}</div>
      <div className="line17" />
      <img className="rectanglexia-icon9" alt="" src="/rectanglexia.png" />
      <img className="rectanglexia-icon10" alt="" src="/rectanglexia.png" />
      <img className="rectanglexia-icon11" alt="" src="/rectanglexia.png" />
      <div className="checkout-date1">{`Checkout date & time`}</div>
      <div className="line18" />
      <div className="adults-0-children2">0 Adults. 0 Children. 0 room</div>
      <div className="fan3">Fan</div>
      <img className="check-date-item" alt="" src="/group-186@2x.png" />
      <div className="air-conditioned3">Air conditioned</div>
      <div className="search1-parent1" onClick={onGroupContainer2Click}>
        <img className="search1-icon3" alt="" src="/search1.png" />
        <div className="search3">Search</div>
      </div>
      <div className="check-date-inner" />
      <div className="best-places3">Best Places</div>
      <a
        className="three-lanes-and3"
        href={`https://www.booking.com/hotel/cn/intercontinental-fuzhou.html?sid=76e1d2a6ea96017b4af97438f49b12d3&aid=397645&ucfs=1&arphpl=1&dest_id=-1905938&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=3&hapos=3&sr_order=popularity&srpvid=99361468a5410064&srepoch=1701831351&from_sustainable_property_sr=1&from=searchresults#hotelTmpl`}
        target="_blank"
      >
        Three lanes and seven alleys
      </a>
      <div className="view-all6" onClick={onViewAllTextClick}>
        View all
      </div>
      <div className="west-lake-park3">West Lake Park</div>
      <div className="forest-park3">Forest Park</div>
      <div className="drum-mo3">Drum Mo</div>
      <div className="best-hotels3">Best Hotels</div>
      <div className="intercontinental3">InterContinental</div>
      <div className="view-all7" onClick={onViewAllText1Click}>
        View all
      </div>
      <div className="kempinski3">Kempinski</div>
      <div className="sheraton3">Sheraton</div>
      <div className="hilton3">Hilton</div>
      <img className="icon24" alt="" src="/1@2x.png" />
      <img className="icon25" alt="" src="/2@2x.png" />
      <img className="icon26" alt="" src="/3@2x.png" />
      <img className="icon27" alt="" src="/4@2x.png" />
      <img className="icon28" alt="" src="/5@2x.png" />
      <img className="icon29" alt="" src="/6@2x.png" />
      <img className="icon30" alt="" src="/7@2x.png" />
      <img className="icon31" alt="" src="/8@2x.png" />
      <div className="huisedot3" />
      <img className="check-date-child1" alt="" src="/group-183.png" />
      <div className="notifications-parent1" onClick={onGroupContainer3Click}>
        <div className="notifications3">Notifications</div>
        <img className="blackbell-icon3" alt="" src="/blackbell.png" />
      </div>
      <div className="car-booking-parent1" onClick={onGroupContainer4Click}>
        <div className="car-booking3">Car booking</div>
        <img className="blackcar-icon3" alt="" src="/blackcar.png" />
      </div>
      <div className="my-profile-parent1" onClick={onGroupContainer5Click}>
        <div className="my-profile3">My profile</div>
        <img className="blackpeo-icon3" alt="" src="/blackpeo.png" />
      </div>
      <div className="settings-parent1" onClick={onGroupContainer6Click}>
        <div className="settings3">Settings</div>
        <div className="blackset3">
          <div className="srectangle-25" />
          <div className="srectangle-35" />
          <div className="srectangle-213" />
          <div className="srectangle-313" />
          <div className="srectangle-223" />
          <div className="srectangle-323" />
        </div>
      </div>
      <img
        className="datetimepage1-icon"
        alt=""
        src="/datetimepage1@2x.png"
        onClick={onDatetimepage1ImageClick}
      />
      <div className="line-parent3" onClick={onGroupContainer7Click}>
        <div className="line19" />
        <div className="fuzhou2">Fuzhou</div>
      </div>
    </div>
  );
};

export default CheckDate;
