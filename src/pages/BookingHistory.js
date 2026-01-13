import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./BookingHistory.css";

const BookingHistory = () => {
  const navigate = useNavigate();

  const onRectangle21kuanClick = useCallback(() => {
    navigate("/18-booking-history");
  }, [navigate]);

  const onFanhuiIconClick = useCallback(() => {
    navigate("/10-settings");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/17-booking-details");
  }, [navigate]);

  return (
    <div className="abooking-history">
         <div className="aroom">Room</div>
        <div className="acar1">Car</div>
      <div className="abooking-history-child" />
      <div className="agaobu-group">
        <div className="agroup-child" />
        <img
          className="arectangle-3blue-icon"
          alt=""
          src="/rectangle-3blue.png"
        />
        <img
          className="arectangle-21kuan-icon"
          alt=""
          src="/rectangle-21kuan.png"
          onClick={onRectangle21kuanClick}
        />
        <div className="aroom-booking-history">Room booking history</div>
     
      </div>
      <img
        className="afanhui-icon1"
        alt=""
        src="/fanhui.png"
        onClick={onFanhuiIconClick}
      />
      <div className="arectangle-parent" onClick={onGroupContainer1Click}>
        <div className="agroup-item" />
        <div className="afuzhou-airport">Fuzhou, Airport</div>
        <div className="ajuly-2019">23 july 2019</div>
        <img className="agroup-icon" alt="" src="/group@2x.png" />
        <div className="afuzhou-intercontinental">Fuzhou, InterContinental</div>
        <b className="ab">$30</b>
        <img className="agroup-icon1" alt="" src="/group@2x.png" />
      </div>
    </div>
  );
};

export default BookingHistory;
