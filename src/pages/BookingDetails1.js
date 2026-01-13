import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./BookingDetails1.css";

const BookingDetails1 = () => {
  const navigate = useNavigate();

  const onFanhuiIconClick = useCallback(() => {
    navigate("/10-settings");
  }, [navigate]);

  return (
    <div className="abooking-details2">
      <div className="arectangle10" />
      <div className="apick-up1">Pick up</div>
      <div className="alocation-date-time-container2">
        <p className="alocation2">Location</p>
        <p className="alocation2">Date</p>
        <p className="alocation2">Time</p>
      </div>
      <div className="afuzhou-airport-23-container">
        <p className="alocation2">Fuzhou, Airport</p>
        <p className="alocation2">23 July 2023</p>
        <p className="alocation2">10:00 AM</p>
      </div>
      <div className="alocation-date-time-container3">
        <p className="alocation2">Location</p>
        <p className="alocation2">Date</p>
        <p className="alocation2">Time</p>
      </div>
      <div className="afuzhou-intercontinental-23-container">
        <p className="alocation2">Fuzhou, InterContinental</p>
        <p className="alocation2">23 July 2023</p>
        <p className="alocation2">11:00 AM</p>
      </div>
      <div className="alanguage-price-service-container1">
        <p className="alocation2">Language</p>
        <p className="alocation2">Price</p>
        <p className="alocation2">Service tax</p>
        <p className="alocation2">Total price</p>
      </div>
      <div className="aenglish-25-5-container1">
        <p className="alocation2">English</p>
        <p className="alocation2">$25</p>
        <p className="alocation2">$5</p>
        <p className="alocation2">$30</p>
      </div>
      <div className="aname-email-mobile-container1">
        <p className="alocation2">Name</p>
        <p className="alocation2">Email</p>
        <p className="alocation2">Mobile number</p>
        <p className="alocation2">Rating</p>
        <p className="alocation2">Dri. licence no</p>
      </div>
      <div className="awinston-winstongmailcom-225-container1">
        <p className="alocation2">Winston</p>
        <p className="alocation2">winston@gmail.com</p>
        <p className="alocation2">+225 22 43 15 89</p>
        <p className="alocation2">3.9</p>
        <p className="alocation2">Aghj2589331</p>
      </div>
      <div className="acar-type-car-container1">
        <p className="alocation2">Car type</p>
        <p className="alocation2">Car Reg.no</p>
        <p className="aalocation2">Car make</p>
        <p className="aalocation2">Car model</p>
      </div>
      <div className="asaloon-abdj2598-honda-container1">
        <p className="aalocation2">Saloon</p>
        <p className="aalocation2">ABDJ2598</p>
        <p className="aalocation2">Honda</p>
        <p className="aalocation2">city</p>
      </div>
      <div className="adrop-off1">Drop off</div>
      <div className="ainvoice1">Invoice</div>
      <div className="adriver1">Driver</div>
      <div className="acar2">Car</div>
      <div className="abooking-details-parent">
        <div className="abooking-details3">Booking details</div>
     
      </div>
      <img
        className="afanhui-icon7"
        alt=""
        src="/fanhui.png"
        onClick={onFanhuiIconClick}
      />
    </div>
  );
};

export default BookingDetails1;
