import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./WhereDoYou.css";

const WhereDoYou = () => {
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

  const onDatetimepage12ImageClick = useCallback(() => {
    navigate("/34-check-date");
  }, [navigate]);

  return (
    <div className="where-do-you1">
      <div className="find-room-parent2">
        <div className="find-room4">Find room</div>
        <img className="zuhedi-icon4" alt="" src="/zuhedi.png" />
        <div className="stay4">Stay</div>
        <div className="pass4">Pass</div>
        <div className="huisejialus4" />
        <div className="luse4" />
        <img className="buzd-icon4" alt="" src="/buzd.png" />
 
        <div className="rooms-parent2">
          <div className="rooms4">Rooms</div>
          <img
            className="subtractroomwrite-icon4"
            alt=""
            src="/subtractroomwrite.png"
          />
        </div>
        <img className="landi12-icon4" alt="" src="/12landi12.png" />
        <img className="landi1-icon4" alt="" src="/1landi1.png" />
        <div className="hotels4">Hotels</div>
        <div className="villas4">Villas</div>
      </div>
      <div className="where-do-you-child" />
      <div className="line20" />
      <div className="checkin-date2">{`Checkin date & time`}</div>
      <div className="line21" />
      <img className="rectanglexia-icon12" alt="" src="/rectanglexia.png" />
      <img className="rectanglexia-icon13" alt="" src="/rectanglexia.png" />
      <img className="rectanglexia-icon14" alt="" src="/rectanglexia.png" />
      <div className="checkout-date2">{`Checkout date & time`}</div>
      <div className="line22" />
      <div className="adults-0-children3">0 Adults. 0 Children. 0 room</div>
      <div className="fan4">Fan</div>
      <img className="where-do-you-item" alt="" src="/group-186@2x.png" />
      <div className="air-conditioned4">Air conditioned</div>
      <div className="search1-parent2" onClick={onGroupContainer2Click}>
        <img className="search1-icon4" alt="" src="/search1.png" />
        <div className="search4">Search</div>
      </div>
      <div className="where-do-you-inner" />
      <div className="best-places4">Best Places</div>
      <a
        className="three-lanes-and4"
        href={`https://www.booking.com/hotel/cn/intercontinental-fuzhou.html?sid=76e1d2a6ea96017b4af97438f49b12d3&aid=397645&ucfs=1&arphpl=1&dest_id=-1905938&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=3&hapos=3&sr_order=popularity&srpvid=99361468a5410064&srepoch=1701831351&from_sustainable_property_sr=1&from=searchresults#hotelTmpl`}
        target="_blank"
      >
        Three lanes and seven alleys
      </a>
      <div className="view-all8" onClick={onViewAllTextClick}>
        View all
      </div>
      <div className="west-lake-park4">West Lake Park</div>
      <div className="forest-park4">Forest Park</div>
      <div className="drum-mo4">Drum Mo</div>
      <div className="best-hotels4">Best Hotels</div>
      <div className="intercontinental4">InterContinental</div>
      <div className="view-all9" onClick={onViewAllText1Click}>
        View all
      </div>
      <div className="kempinski4">Kempinski</div>
      <div className="sheraton4">Sheraton</div>
      <div className="hilton4">Hilton</div>
      <img className="icon32" alt="" src="/1@2x.png" />
      <img className="icon33" alt="" src="/2@2x.png" />
      <img className="icon34" alt="" src="/3@2x.png" />
      <img className="icon35" alt="" src="/4@2x.png" />
      <img className="icon36" alt="" src="/5@2x.png" />
      <img className="icon37" alt="" src="/6@2x.png" />
      <img className="icon38" alt="" src="/7@2x.png" />
      <img className="icon39" alt="" src="/8@2x.png" />
      <div className="huisedot4" />
      <img className="where-do-you-child1" alt="" src="/group-183.png" />
      <div className="line-parent4">
        <div className="line23" />
        <div className="where-do-you2">Where do you want</div>
      </div>
      <div className="notifications-parent2" onClick={onGroupContainer4Click}>
        <div className="notifications4">Notifications</div>
        <img className="blackbell-icon4" alt="" src="/blackbell.png" />
      </div>
      <div className="car-booking-parent2" onClick={onGroupContainer5Click}>
        <div className="car-booking4">Car booking</div>
        <img className="blackcar-icon4" alt="" src="/blackcar.png" />
      </div>
      <div className="my-profile-parent2" onClick={onGroupContainer6Click}>
        <div className="my-profile4">My profile</div>
        <img className="blackpeo-icon4" alt="" src="/blackpeo.png" />
      </div>
      <div className="settings-parent2" onClick={onGroupContainer7Click}>
        <div className="settings4">Settings</div>
        <div className="blackset4">
          <div className="srectangle-26" />
          <div className="srectangle-36" />
          <div className="srectangle-214" />
          <div className="srectangle-314" />
          <div className="srectangle-224" />
          <div className="srectangle-324" />
        </div>
      </div>
      <img
        className="datetimepage12-icon"
        alt=""
        src="/datetimepage12@2x.png"
        onClick={onDatetimepage12ImageClick}
      />
    </div>
  );
};

export default WhereDoYou;
