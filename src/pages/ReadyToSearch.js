import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ReadyToSearch.css";

const ReadyToSearch = () => {
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
    navigate("/33-where-do-you");
  }, [navigate]);

  const onGroupContainer4Click = useCallback(() => {
    navigate("/20-notification-message-booking");
  }, [navigate]);

  const onGroupContainer5Click = useCallback(() => {
    navigate("/5-book-a-car");
  }, [navigate]);

  const onGroupContainer6Click = useCallback(() => {
    navigate("/2-my-profile");
  }, [navigate]);

  const onGroupContainer7Click = useCallback(() => {
    navigate("/10-settings");
  }, [navigate]);

  const onGroupContainer8Click = useCallback(() => {
    navigate("/35-people-number");
  }, [navigate]);

  const onGroupContainer9Click = useCallback(() => {
    navigate("/34-check-date");
  }, [navigate]);

  const onHuisedotClick = useCallback(() => {
    navigate("/111-ready-to-search");
  }, [navigate]);

  return (
    <div className="ready-to-search">
      <div className="find-room-parent">
        <div className="find-room">Find room</div>
        <img className="zuhedi-icon" alt="" src="/zuhedi.png" />
        <div className="stay">Stay</div>
        <div className="pass">Pass</div>
        <div className="huisejialus" />
        <div className="luse" />
        <img className="buzd-icon" alt="" src="/buzd.png" />
  
        <div className="rooms-parent">
          <div className="rooms">Rooms</div>
          <img
            className="subtractroomwrite-icon"
            alt=""
            src="/subtractroomwrite.png"
          />
        </div>
        <img className="landi12-icon" alt="" src="/12landi12.png" />
        <img className="landi1-icon" alt="" src="/1landi1.png" />
        <div className="hotels">Hotels</div>
        <div className="villas">Villas</div>
      </div>
      <div className="ready-to-search-child" />
      <img className="rectanglexia-icon" alt="" src="/rectanglexia.png" />
      <img className="rectanglexia-icon1" alt="" src="/rectanglexia.png" />
      <img className="rectanglexia-icon2" alt="" src="/rectanglexia.png" />
      <div className="fan">Fan</div>
      <img className="ready-to-search-item" alt="" src="/group-186@2x.png" />
      <div className="air-conditioned">Air conditioned</div>
      <div className="search1-parent" onClick={onGroupContainer2Click}>
        <img className="search1-icon" alt="" src="/search1.png" />
        <div className="search">Search</div>
      </div>
      <div className="ready-to-search-inner" />
      <div className="best-places">Best Places</div>
      <a
        className="three-lanes-and"
        href={`https://www.booking.com/hotel/cn/intercontinental-fuzhou.html?sid=76e1d2a6ea96017b4af97438f49b12d3&aid=397645&ucfs=1&arphpl=1&dest_id=-1905938&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=3&hapos=3&sr_order=popularity&srpvid=99361468a5410064&srepoch=1701831351&from_sustainable_property_sr=1&from=searchresults#hotelTmpl`}
        target="_blank"
      >
        Three lanes and seven alleys
      </a>
      <div className="view-all" onClick={onViewAllTextClick}>
        View all
      </div>
      <div className="west-lake-park">West Lake Park</div>
      <div className="forest-park">Forest Park</div>
      <div className="drum-mo">Drum Mo</div>
      <div className="best-hotels">Best Hotels</div>
      <div className="intercontinental">InterContinental</div>
      <div className="view-all1" onClick={onViewAllText1Click}>
        View all
      </div>
      <div className="kempinski">Kempinski</div>
      <div className="sheraton">Sheraton</div>
      <div className="hilton">Hilton</div>
      <img className="icon" alt="" src="/1@2x.png" />
      <img className="icon1" alt="" src="/2@2x.png" />
      <img className="icon2" alt="" src="/3@2x.png" />
      <img className="icon3" alt="" src="/4@2x.png" />
      <img className="icon4" alt="" src="/5@2x.png" />
      <img className="icon5" alt="" src="/6@2x.png" />
      <img className="icon6" alt="" src="/7@2x.png" />
      <img className="icon7" alt="" src="/8@2x.png" />
      <div className="line-parent" onClick={onGroupContainer3Click}>
        <div className="line4" />
        <div className="fuzhou">Fuzhou</div>
      </div>
      <div className="notifications-parent" onClick={onGroupContainer4Click}>
        <div className="notifications">Notifications</div>
        <img className="blackbell-icon" alt="" src="/blackbell.png" />
      </div>
      <div className="car-booking-parent" onClick={onGroupContainer5Click}>
        <div className="car-booking">Car booking</div>
        <img className="blackcar-icon" alt="" src="/blackcar.png" />
      </div>
      <div className="my-profile-parent" onClick={onGroupContainer6Click}>
        <div className="my-profile">My profile</div>
        <img className="blackpeo-icon" alt="" src="/blackpeo.png" />
      </div>
      <div className="settings-parent" onClick={onGroupContainer7Click}>
        <div className="settings">Settings</div>
        <div className="blackset">
          <div className="srectangle-2" />
          <div className="srectangle-3" />
          <div className="srectangle-21" />
          <div className="srectangle-31" />
          <div className="srectangle-22" />
          <div className="srectangle-32" />
        </div>
      </div>
      <img className="group-icon" alt="" src="/group-184.png" />
      <div className="line-group" onClick={onGroupContainer8Click}>
        <div className="line4" />
        <div className="adults-2-children">2 Adults. 2 Children. 1 room</div>
      </div>
      <div className="line-container" onClick={onGroupContainer9Click}>
        <div className="line4" />
        <div className="fuzhou">23 July 2019, 10:00AM</div>
        <div className="line7" />
        <div className="august-2019-1100">28 August 2019, 11:00 AM</div>
      </div>
      <div className="huisedot" onClick={onHuisedotClick} />
    </div>
  );
};

export default ReadyToSearch;
