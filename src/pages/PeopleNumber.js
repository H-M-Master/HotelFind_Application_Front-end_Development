import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./PeopleNumber.css";

const PeopleNumber = () => {
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

  const onDatetimepage123ImageClick = useCallback(() => {
    navigate("/111-ready-to-search");
  }, [navigate]);

  const onGroupContainer7Click = useCallback(() => {
    navigate("/33-where-do-you");
  }, [navigate]);

  const onGroupContainer8Click = useCallback(() => {
    navigate("/34-check-date");
  }, [navigate]);

  return (
    <div className="people-number">
      <div className="find-room-group">
        <div className="find-room1">Find room</div>
        <img className="zuhedi-icon1" alt="" src="/zuhedi.png" />
        <div className="stay1">Stay</div>
        <div className="pass1">Pass</div>
        <div className="huisejialus1" />
        <div className="luse1" />
        <img className="buzd-icon1" alt="" src="/buzd.png" />
    
        <div className="rooms-group">
          <div className="rooms1">Rooms</div>
          <img
            className="subtractroomwrite-icon1"
            alt=""
            src="/subtractroomwrite.png"
          />
        </div>
        <img className="landi12-icon1" alt="" src="/12landi12.png" />
        <img className="landi1-icon1" alt="" src="/1landi1.png" />
        <div className="hotels1">Hotels</div>
        <div className="villas1">Villas</div>
      </div>
      <div className="people-number-child" />
      <img className="rectanglexia-icon3" alt="" src="/rectanglexia.png" />
      <img className="rectanglexia-icon4" alt="" src="/rectanglexia.png" />
      <img className="rectanglexia-icon5" alt="" src="/rectanglexia.png" />
      <div className="line8" />
      <div className="adults-0-children">0 Adults. 0 Children. 0 room</div>
      <div className="fan1">Fan</div>
      <img className="people-number-item" alt="" src="/group-186@2x.png" />
      <div className="air-conditioned1">Air conditioned</div>
      <div className="search1-group" onClick={onGroupContainer2Click}>
        <img className="search1-icon1" alt="" src="/search1.png" />
        <div className="search1">Search</div>
      </div>
      <div className="people-number-inner" />
      <div className="best-places1">Best Places</div>
      <a
        className="three-lanes-and1"
        href={`https://www.booking.com/hotel/cn/intercontinental-fuzhou.html?sid=76e1d2a6ea96017b4af97438f49b12d3&aid=397645&ucfs=1&arphpl=1&dest_id=-1905938&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=3&hapos=3&sr_order=popularity&srpvid=99361468a5410064&srepoch=1701831351&from_sustainable_property_sr=1&from=searchresults#hotelTmpl`}
        target="_blank"
      >
        Three lanes and seven alleys
      </a>
      <div className="view-all2" onClick={onViewAllTextClick}>
        View all
      </div>
      <div className="west-lake-park1">West Lake Park</div>
      <div className="forest-park1">Forest Park</div>
      <div className="drum-mo1">Drum Mo</div>
      <div className="best-hotels1">Best Hotels</div>
      <div className="intercontinental1">InterContinental</div>
      <div className="view-all3" onClick={onViewAllText1Click}>
        View all
      </div>
      <div className="kempinski1">Kempinski</div>
      <div className="sheraton1">Sheraton</div>
      <div className="hilton1">Hilton</div>
      <img className="icon8" alt="" src="/1@2x.png" />
      <img className="icon9" alt="" src="/2@2x.png" />
      <img className="icon10" alt="" src="/3@2x.png" />
      <img className="icon11" alt="" src="/4@2x.png" />
      <img className="icon12" alt="" src="/5@2x.png" />
      <img className="icon13" alt="" src="/6@2x.png" />
      <img className="icon14" alt="" src="/7@2x.png" />
      <img className="icon15" alt="" src="/8@2x.png" />
      <div className="huisedot1" />
      <img className="people-number-child1" alt="" src="/group-183.png" />
      <div className="notifications-group" onClick={onGroupContainer3Click}>
        <div className="notifications1">Notifications</div>
        <img className="blackbell-icon1" alt="" src="/blackbell.png" />
      </div>
      <div className="car-booking-group" onClick={onGroupContainer4Click}>
        <div className="car-booking1">Car booking</div>
        <img className="blackcar-icon1" alt="" src="/blackcar.png" />
      </div>
      <div className="my-profile-group" onClick={onGroupContainer5Click}>
        <div className="my-profile1">My profile</div>
        <img className="blackpeo-icon1" alt="" src="/blackpeo.png" />
      </div>
      <div className="settings-group" onClick={onGroupContainer6Click}>
        <div className="settings1">Settings</div>
        <div className="blackset1">
          <div className="srectangle-23" />
          <div className="srectangle-33" />
          <div className="srectangle-211" />
          <div className="srectangle-311" />
          <div className="srectangle-221" />
          <div className="srectangle-321" />
        </div>
      </div>
      <img
        className="datetimepage123-icon"
        alt=""
        src="/datetimepage123@2x.png"
        onClick={onDatetimepage123ImageClick}
      />
      <div className="group-div" onClick={onGroupContainer7Click}>
        <div className="line9" />
        <div className="fuzhou1">Fuzhou</div>
      </div>
      <div className="line-parent1" onClick={onGroupContainer8Click}>
        <div className="line9" />
        <div className="fuzhou1">23 July 2019, 10:00AM</div>
        <div className="line11" />
        <div className="august-2019-11001">28 August 2019, 11:00 AM</div>
      </div>
    </div>
  );
};

export default PeopleNumber;
