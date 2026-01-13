import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AccomodationsFan.css";

const AccomodationsFan = () => {
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
    navigate("/33-where-do-you");
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

  const onHuisedotClick = useCallback(() => {
    navigate("/30-accomodations-air");
  }, [navigate]);

  const onGroupContainer7Click = useCallback(() => {
    // Please sync "50 hotels list" to the project
  }, []);

  return (
    <div className="accomodations-fan">
      <div className="find-room-container">
        <div className="find-room2">Find room</div>
        <img className="zuhedi-icon2" alt="" src="/zuhedi.png" />
        <div className="stay2">Stay</div>
        <div className="pass2">Pass</div>
        <div className="huisejialus2" />
        <div className="luse2" />
        <img className="buzd-icon2" alt="" src="/buzd.png" />
  
        <div className="rooms-container">
          <div className="rooms2">Rooms</div>
          <img
            className="subtractroomwrite-icon2"
            alt=""
            src="/subtractroomwrite.png"
          />
        </div>
        <img className="landi12-icon2" alt="" src="/12landi12.png" />
        <img className="landi1-icon2" alt="" src="/1landi1.png" />
        <div className="hotels2">Hotels</div>
        <div className="villas2">Villas</div>
      </div>
      <div className="accomodations-fan-child" />
      <div className="line12" />
      <div className="checkin-date">{`Checkin date & time`}</div>
      <div className="line13" />
      <img className="rectanglexia-icon6" alt="" src="/rectanglexia.png" />
      <img className="rectanglexia-icon7" alt="" src="/rectanglexia.png" />
      <img className="rectanglexia-icon8" alt="" src="/rectanglexia.png" />
      <div className="checkout-date">{`Checkout date & time`}</div>
      <div className="line14" />
      <div className="adults-0-children1">0 Adults. 0 Children. 0 room</div>
      <div className="fan2">Fan</div>
      <img className="accomodations-fan-item" alt="" src="/group-186@2x.png" />
      <div className="air-conditioned2">Air conditioned</div>
      <div className="accomodations-fan-inner" />
      <div className="best-places2">Best Places</div>
      <a
        className="three-lanes-and2"
        href={`https://www.booking.com/hotel/cn/intercontinental-fuzhou.html?sid=76e1d2a6ea96017b4af97438f49b12d3&aid=397645&ucfs=1&arphpl=1&dest_id=-1905938&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=3&hapos=3&sr_order=popularity&srpvid=99361468a5410064&srepoch=1701831351&from_sustainable_property_sr=1&from=searchresults#hotelTmpl`}
        target="_blank"
      >
        Three lanes and seven alleys
      </a>
      <div className="view-all4" onClick={onViewAllTextClick}>
        View all
      </div>
      <div className="west-lake-park2">West Lake Park</div>
      <div className="forest-park2">Forest Park</div>
      <div className="drum-mo2">Drum Mo</div>
      <div className="best-hotels2">Best Hotels</div>
      <div className="intercontinental2">InterContinental</div>
      <div className="view-all5" onClick={onViewAllText1Click}>
        View all
      </div>
      <div className="kempinski2">Kempinski</div>
      <div className="sheraton2">Sheraton</div>
      <div className="hilton2">Hilton</div>
      <img className="icon16" alt="" src="/1@2x.png" />
      <img className="icon17" alt="" src="/2@2x.png" />
      <img className="icon18" alt="" src="/3@2x.png" />
      <img className="icon19" alt="" src="/4@2x.png" />
      <img className="icon20" alt="" src="/5@2x.png" />
      <img className="icon21" alt="" src="/6@2x.png" />
      <img className="icon22" alt="" src="/7@2x.png" />
      <img className="icon23" alt="" src="/8@2x.png" />
      <div className="line-parent2" onClick={onGroupContainer2Click}>
        <div className="line15" />
        <div className="where-do-you">Where do you want</div>
      </div>
      <div className="notifications-container" onClick={onGroupContainer3Click}>
        <div className="notifications2">Notifications</div>
        <img className="blackbell-icon2" alt="" src="/blackbell.png" />
      </div>
      <div className="car-booking-container" onClick={onGroupContainer4Click}>
        <div className="car-booking2">Car booking</div>
        <img className="blackcar-icon2" alt="" src="/blackcar.png" />
      </div>
      <div className="my-profile-container" onClick={onGroupContainer5Click}>
        <div className="my-profile2">My profile</div>
        <img className="blackpeo-icon2" alt="" src="/blackpeo.png" />
      </div>
      <div className="settings-container" onClick={onGroupContainer6Click}>
        <div className="settings2">Settings</div>
        <div className="blackset2">
          <div className="srectangle-24" />
          <div className="srectangle-34" />
          <div className="srectangle-212" />
          <div className="srectangle-312" />
          <div className="srectangle-222" />
          <div className="srectangle-322" />
        </div>
      </div>
      <img className="accomodations-fan-child1" alt="" src="/group-184.png" />
      <div className="huisedot2" onClick={onHuisedotClick} />
      <div className="search1-container" onClick={onGroupContainer7Click}>
        <img className="search1-icon2" alt="" src="/search1.png" />
        <div className="search2">Search</div>
      </div>
    </div>
  );
};

export default AccomodationsFan;
