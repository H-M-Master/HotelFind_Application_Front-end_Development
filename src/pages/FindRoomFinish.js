import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./FindRoomFinish.css";

const FindRoomFinish = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/20-notification-message-booking");
  }, [navigate]);

  const onGroupContainer6Click = useCallback(() => {
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

  const onGroupContainer7Click = useCallback(() => {
    navigate("/5-book-a-car");
  }, [navigate]);

  const onGroupContainer8Click = useCallback(() => {
    navigate("/2-my-profile");
  }, [navigate]);

  const onGroupContainer9Click = useCallback(() => {
    navigate("/10-settings");
  }, [navigate]);

  const onHuisedotClick = useCallback(() => {
    navigate("/111-ready-to-search");
  }, [navigate]);

  return (
    <div className="find-room-finish">
      <img className="zuhedi-icon5" alt="" src="/zuhedi.png" />
      <div className="find-room-finish-child" />
      <div className="find-room-finish-item" />
      <div className="best-places5">Best Places</div>
      <div className="fan5">Fan</div>
      <div className="air-conditioned5">Air conditioned</div>
      <div className="best-hotels5">Best Hotels</div>
      <div className="find-room-finish-inner" />
      <div className="find-room-finish-child1" />
      <a
        className="three-lanes-and5"
        href={`https://www.booking.com/hotel/cn/intercontinental-fuzhou.html?sid=76e1d2a6ea96017b4af97438f49b12d3&aid=397645&ucfs=1&arphpl=1&dest_id=-1905938&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=3&hapos=3&sr_order=popularity&srpvid=99361468a5410064&srepoch=1701831351&from_sustainable_property_sr=1&from=searchresults#hotelTmpl`}
        target="_blank"
      >
        Three lanes and seven alleys
      </a>
      <div className="west-lake-park5">West Lake Park</div>
      <div className="forest-park5">Forest Park</div>
      <div className="drum-mo5">Drum Mountain</div>
      <div className="intercontinental5">InterContinental</div>
      <div className="kempinski5">Kempinski</div>
      <div className="sheraton5">Sheraton</div>
      <div className="hilton5">Hilton</div>
      <img className="icon40" alt="" src="/1@2x.png" />
      <img className="icon41" alt="" src="/2@2x.png" />
      <img className="icon42" alt="" src="/3@2x.png" />
      <img className="icon43" alt="" src="/4@2x.png" />
      <img className="icon44" alt="" src="/5@2x.png" />
      <img className="icon45" alt="" src="/6@2x.png" />
      <img className="icon46" alt="" src="/7@2x.png" />
      <img className="icon47" alt="" src="/8@2x.png" />
      <div className="find-room-parent3">
        <div className="find-room5">Find room</div>
        <div className="stay5">Stay</div>
        <div className="pass5">Pass</div>
        <div className="rectangle2" />
        <div className="ellipse" />
        <img className="union-icon2" alt="" src="/buzd.png" />
       
        <div className="rooms-parent4">
          <div className="rooms6">Rooms</div>
          <img
            className="subtractroomwrite-icon5"
            alt=""
            src="/subtractroomwrite.png"
          />
        </div>
        <div className="notifications-parent4" onClick={onGroupContainer1Click}>
          <div className="notifications7">Notifications</div>
          <img className="blackbell-icon5" alt="" src="/blackbell.png" />
        </div>
        <img className="landi12-icon5" alt="" src="/12landi12.png" />
        <img className="landi1-icon5" alt="" src="/1landi1.png" />
        <div className="hotels5">Hotels</div>
        <div className="villas5">Villas</div>
      </div>
      <img className="find-room-finish-child2" alt="" src="/group-186@2x.png" />
      <div className="line-parent5">
        <div className="line24" />
        <div className="adults-2-children1">2 Adults. 2 Children. 1 room</div>
        <img className="rectanglexia-icon15" alt="" src="/rectanglexia.png" />
      </div>
      <div className="line-parent6">
        <div className="line25" />
        <img className="rectanglexia-icon16" alt="" src="/rectanglexia.png" />
        <div className="line26" />
        <div className="july-2019-1000am2">23 July 2019, 10:00AM</div>
        <img className="rectanglexia-icon17" alt="" src="/rectanglexia.png" />
        <div className="august-2019-11002">28 August 2019, 11:00 AM</div>
      </div>
      <div className="line-parent7">
        <div className="line26" />
        <div className="july-2019-1000am2">Fuzhou</div>
      </div>
      <div className="search1-parent3" onClick={onGroupContainer6Click}>
        <img className="search1-icon5" alt="" src="/search1.png" />
        <div className="search5">Search</div>
      </div>
      <div className="view-all10" onClick={onViewAllTextClick}>
        View all
      </div>
      <div className="view-all11" onClick={onViewAllText1Click}>
        View all
      </div>
      <img className="find-room-finish-child3" alt="" src="/group-189.png" />
      <div className="car-booking-parent4" onClick={onGroupContainer7Click}>
        <div className="car-booking6">Car booking</div>
        <img className="blackcar-icon5" alt="" src="/blackcar.png" />
      </div>
      <div className="my-profile-parent4" onClick={onGroupContainer8Click}>
        <div className="my-profile6">My profile</div>
        <img className="blackpeo-icon5" alt="" src="/blackpeo.png" />
      </div>
      <div className="settings-parent4" onClick={onGroupContainer9Click}>
        <div className="settings7">Settings</div>
        <div className="blackset5">
          <div className="srectangle-27" />
          <div className="srectangle-37" />
          <div className="srectangle-215" />
          <div className="srectangle-315" />
          <div className="srectangle-225" />
          <div className="srectangle-325" />
        </div>
      </div>
      <div className="huisedot5" onClick={onHuisedotClick} />
    </div>
  );
};

export default FindRoomFinish;
