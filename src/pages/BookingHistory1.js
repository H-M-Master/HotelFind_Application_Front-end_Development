import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./BookingHistory1.css";

const BookingHistory1 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/19-booking-details");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/19-booking-details");
  }, [navigate]);

  const onRectangle4kuan18Click = useCallback(() => {
    navigate("/16-booking-history");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/19-booking-details");
  }, [navigate]);

  const onFanhuiIconClick = useCallback(() => {
    navigate("/10-settings");
  }, [navigate]);

  return (
    <div className="abooking-history2">
      <div className="abeijing-shezi2">
        <div className="abeijing-shezi-child" />
      </div>
      <div className="abooking-history-item" />
      <img className="agroup-icon2" alt="" src="/group@2x.png" />
      <div
        className="afuzhou-city-centre-parent"
        onClick={onGroupContainerClick}
      >
        <div className="afuzhou-city-centre">Fuzhou, city centre</div>
        <div className="ajuly-20191">24 july 2019</div>
        <div className="afuzhou-intercontinental2">Fuzhou, InterContinental</div>
        <b className="ab1">$20</b>
      </div>
      <img className="agroup-icon3" alt="" src="/group@2x.png" />
      <div className="abooking-history-inner" onClick={onRectangle2Click} />
      <div className="afuzhou-intercontinental3">Fuzhou, InterContinental</div>
      <div className="ajuly-20192">24 july 2019</div>
      <img className="agroup-icon4" alt="" src="/group@2x.png" />
      <div className="afuzhou-airport2">Fuzhou, Airport</div>
      <b className="ab2">$15</b>
      <img className="agroup-icon5" alt="" src="/group@2x.png" />
      <div className="abooking-history-child1" />
      <div className="afuzhou-intercontinental4">Fuzhou, InterContinental</div>
      <div className="ajuly-20193">25 july 2019</div>
      <img className="agroup-icon6" alt="" src="/group@2x.png" />
      <div className="afuzhou-city-centre1">Fuzhou, city centre</div>
      <b className="ab3">$30</b>
      <img className="agroup-icon7" alt="" src="/group@2x.png" />
      <div className="arectangle-parent6">
        <div className="agroup-child7" />
        <div className="acar-booking-history">Car booking history</div>
        <div className="acompleted">Completed</div>
        <img
          className="arectangle-4kuan18-icon"
          alt=""
          src="/rectangle-4kuan18.png"
          onClick={onRectangle4kuan18Click}
        />
        <img
          className="arectangle-21blue18-icon"
          alt=""
          src="/rectangle-21blue18.png"
        />
        <div className="aroom1">Room</div>
        <div className="acar3">Car</div>
      </div>
      <div className="arectangle-parent7" onClick={onGroupContainer2Click}>
        <div className="agroup-child8" />
        <div className="afuzhou-airport3">Fuzhou, Airport</div>
        <div className="ajuly-20194">23 july 2019</div>
        <img className="agroup-icon8" alt="" src="/group@2x.png" />
        <div className="afuzhou-intercontinental5">Fuzhou, InterContinental</div>
        <b className="ab4">$30</b>
        <img className="agroup-icon9" alt="" src="/group@2x.png" />
      </div>
      <img
        className="afanhui-icon8"
        alt=""
        src="/fanhui.png"
        onClick={onFanhuiIconClick}
      />
    </div>
  );
};

export default BookingHistory1;
