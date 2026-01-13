import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./BookingDetails.css";

const BookingDetails = () => {
  const navigate = useNavigate();

  const onFanhuiIconClick = useCallback(() => {
    navigate("/10-settings");
  }, [navigate]);

  return (
    <div className="abooking-details">
      <div className="arectangle" />
      <div className="apick-up">Pick up</div>
      <div className="alocation-date-time-container">
        <p className="alocation">Location</p>
        <p className="alocation">Date</p>
        <p className="alocation">Time</p>
      </div>
      <div className="aabidjan-airport-23-container">
        <p className="alocation">Abidjan, Airport</p>
        <p className="alocation">23 July 2023</p>
        <p className="alocation">10:00 AM</p>
      </div>
      <div className="alocation-date-time-container1">
        <p className="alocation">Location</p>
        <p className="alocation">Date</p>
        <p className="alocation">Time</p>
      </div>
      <div className="aabidjan-cte-divoire-container">
        <p className="alocation">Abidjan, Côte d'Ivoire</p>
        <p className="alocation">23 July 2023</p>
        <p className="alocation">11:00 AM</p>
      </div>
      <div className="alanguage-price-service-container">
        <p className="alocation">Language</p>
        <p className="alocation">Price</p>
        <p className="alocation">Service tax</p>
        <p className="alocation">Total price</p>
      </div>
      <div className="aenglish-25-5-container">
        <p className="alocation">English</p>
        <p className="alocation">$25</p>
        <p className="alocation">$5</p>
        <p className="alocation">$30</p>
      </div>
      <div className="aname-email-mobile-container">
        <p className="alocation">Name</p>
        <p className="alocation">Email</p>
        <p className="alocation">Mobile number</p>
        <p className="alocation">Rating</p>
        <p className="alocation">Dri. licence no</p>
      </div>
      <div className="awinston-winstongmailcom-225-container">
        <p className="alocation">Winston</p>
        <p className="alocation">winston@gmail.com</p>
        <p className="alocation">+225 22 43 15 89</p>
        <p className="alocation">3.9</p>
        <p className="alocation">Aghj2589331</p>
      </div>
      <div className="acar-type-car-container">
        <p className="alocation">Car type</p>
        <p className="alocation">Car Reg.no</p>
        <p className="alocation">Car make</p>
        <p className="alocation">Car model</p>
      </div>
      <div className="asaloon-abdj2598-honda-container">
        <p className="alocation">Saloon</p>
        <p className="alocation">ABDJ2598</p>
        <p className="alocation">Honda</p>
        <p className="alocation">city</p>
      </div>
      <div className="adrop-off">Drop off</div>
      <div className="ainvoice">Invoice</div>
      <div className="adriver">Driver</div>
      <div className="acar">Car</div>
      <div className="agaobu-parent">
   
        <div className="abooking-details1">Booking details</div>
   
      </div>
      <img
        className="afanhui-icon"
        alt=""
        src="/fanhui.png"
        onClick={onFanhuiIconClick}
      />
    </div>
  );
};

export default BookingDetails;
