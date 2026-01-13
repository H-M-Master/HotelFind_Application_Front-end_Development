import { useCallback } from "react";
import ADiscountCard11 from "../components/ADiscountCard11";
import APriceCard from "../components/APriceCard";
import ASectionCardFormFilter from "../components/ASectionCardFormFilter";
import { useNavigate } from "react-router-dom";
import "./HotelsList.css";

const HotelsList = () => {
  const navigate = useNavigate();

  const onGroup504ContainerClick = useCallback(() => {
    navigate("/57-jiudianq");
  }, [navigate]);

  const onGroup503ContainerClick = useCallback(() => {
    navigate("/61-sheraton");
  }, [navigate]);

  const onGroup501ContainerClick = useCallback(() => {
    navigate("/41-hotel-details");
  }, [navigate]);

  const onFanhuiIconClick = useCallback(() => {
    // Please sync "30 accomodations air" to the project
    navigate("/30-accomodations-air");
  }, [navigate]);


  const onGroupContainer6Click = useCallback(() => {
    // Please sync "20 Notification_Message_Booking" to the project
    navigate("/20-notification-message-booking");
  }, [navigate]);

  const onGroupContainer7Click = useCallback(() => {
    // Please sync "5 book a car" to the project
    navigate("/5-book-a-car");
  }, [navigate]);

  const onGroupContainer8Click = useCallback(() => {
    // Please sync "2 my profile" to the project
    navigate("/2-my-profile");
  }, [navigate]);

  const onGroupContainer9Click = useCallback(() => {
    // Please sync "10 settings" to the project
    navigate("/10-settings");
  }, [navigate]);
  const onFanhuiIcon111Click = useCallback(() => {
    navigate("/90-hope-all");
  }, [navigate]);
  return (
    <div className="bhotels-list">
      <div className="bgaobu-container">
        <img className="bzuhedi-icon" alt="" src="/zuhedi.png" />
        <div className="brooms-parent">
          <div className="brooms">Rooms</div>
          <img
            className="bsubtractroomwrite-icon"
            alt=""
            src="/subtractroomwrite.png"
          />
        </div>
      </div>
      <div className="bhotels-abidjan-200-container">
        <p className="bhotels">Hotels</p>
        <p className="babidjan-200-hotels">Abidjan 200 hotels</p>
      </div>
      <div className="bshousuoyitioa1">
        <div className="bsearch1">Search</div>
        <div className="bshousuokuan1" />
        <img className="bshousuo-icon1" alt="" src="/shousuo@2x.png" />
        <img className="bcuowu-icon1" alt="" src="/cuowu.png" />
      </div>
      <div className="bamenities">Amenities</div>
      <div className="bfilter-by">Filter by</div>
      <div className="bsort-by">Sort by</div>
      <img className="brectanglexia-icon9" alt="" src="/rectanglexia.png" />
      <img className="brectanglexia-icon10" alt="" src="/rectanglexia.png" />
      <div className="bline73" />
      <div className="bline74" />
      
      <div className="bline75" />
      <div className="bline76" />
  
      <ASectionCardFormFilter
        prop="/8@2x.png"
        sheraton="Hilton"
        theSheratonHotelsChainEst="This understated hotel is 5 km from both..."
        oFF="45% OFF"
        prop1="      $127"
        propTop="420.4px"
        propWidth="342.6px"
        propWidth1="240.8px"
      />
      <ASectionCardFormFilter
        prop="/7@2x.png"
        sheraton="Sheraton"
        theSheratonHotelsChainEst="The Sheraton Hotels chain established..."
        oFF="15% OFF"
        prop1="      $100"
        propTop="535.4px"
        propWidth="326.4px"
        propWidth1="225.3px"
      />
      <ASectionCardFormFilter
        prop="/5@2x.png"
        sheraton="InterContinental"
        theSheratonHotelsChainEst="Set in landscaped gardens overlooking the ..."
        oFF="35% OFF"
        prop1="      $127"
        propTop="195.4px"
        propWidth="326.4px"
        propWidth1="225.3px"
      />
      <ASectionCardFormFilter
        prop="/6@2x.png"
        sheraton="Kempinski"
        theSheratonHotelsChainEst="Fuzhou City Aparthotel is a joint venture ..."
        oFF="25% OFF"
        prop1="      $120"
        propTop="309.4px"
        propWidth="326.4px"
        propWidth1="225.3px"
      />
      <div className="bline77" />
      
      <div className="bline78" />
      <div className="bgroup504" onClick={onGroup504ContainerClick}>
        <img
          className="brectangleviewall-icon"
          alt=""
          src="/rectangleviewall.png"
        />
        <div className="bbook-now">Book now</div>
      </div>
      <div className="bgroup503" onClick={onGroup503ContainerClick}>
        <img
          className="brectangleviewall-icon"
          alt=""
          src="/rectangleviewall.png"
        />
        <div className="bbook-now">Book now</div>
      </div>
      <div className="bgroup502">
        <img
          className="brectangleviewall-icon"
          alt=""
          src="/rectangleviewall.png"
        />
        <div className="bbook-now">Book now</div>
      </div>
      <div className="bgroup501" onClick={onGroup501ContainerClick}>
        <img
          className="brectangleviewall-icon"
          alt=""
          src="/rectangleviewall.png"
        />
        <div className="bbook-now">Book now</div>
      </div>
      <img
        className="bfanhui-icon4"
        alt=""
        src="/fanhui.png"
        onClick={onFanhuiIconClick}
      />
          <img
        className="brectanglexia-icon11"
        alt=""
        src="/rectanglexia.png"
        onClick={onFanhuiIcon111Click}
      />      

      <div className="bnotifications-parent" onClick={onGroupContainer6Click}>
        <div className="bnotifications">Notifications</div>
        <img className="bblackbell-icon" alt="" src="/blackbell.png" />
      </div>
      <div className="bcar-booking-parent" onClick={onGroupContainer7Click}>
        <div className="bcar-booking">Car booking</div>
        <img className="bblackcar-icon" alt="" src="/blackcar.png" />
      </div>
      <div className="bmy-profile-parent" onClick={onGroupContainer8Click}>
        <div className="bmy-profile">My profile</div>
        <img className="bblackpeo-icon" alt="" src="/blackpeo.png" />
      </div>
      <div className="bsettings-parent" onClick={onGroupContainer9Click}>
        <div className="bsettings">Settings</div>
        <div className="bblackset">
          <div className="bsrectangle-2" />
          <div className="bsrectangle-3" />
          <div className="bsrectangle-21" />
          <div className="bsrectangle-31" />
          <div className="bsrectangle-22" />
          <div className="bsrectangle-32" />
        </div>
      </div>
    </div>
  );

};

export default HotelsList;
