import { useCallback } from "react";
import ASheratonSection1 from "../components/ASheratonSection1";
import { useNavigate } from "react-router-dom";
import "./Sheraton.css";

const Sheraton = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/47-payment-methpds");
  }, [navigate]);

  const onFanhui1IconClick = useCallback(() => {
    navigate("/61-sheraton");
  }, [navigate]);

  return (
    <div className="bsheraton">
      <ASheratonSection1
        hotelImageDimensions="/7@2x.png"
        hotelName="Sheraton"
      />
      <div className="brectangle" />
      <div className="broom-info">Room info</div>
      <div className="bguest-info">Guest info</div>
      <div className="bpromo-code">Promo code</div>
      <div className="benter-promo-code">Enter Promo code</div>
      <div className="bnoof-rooms-room-container">
        <p className="bnoof-rooms">No.of rooms</p>
        <p className="bnoof-rooms">Room type</p>
        <p className="bnoof-rooms">Room</p>
        <p className="bnoof-rooms">Taxes</p>
      </div>
      <div className="btotal">Total</div>
      <div className="bair-conditioned-3-container">
        <p className="bnoof-rooms">1</p>
        <p className="bnoof-rooms">Air conditioned</p>
        <p className="bnoof-rooms">3 Nights ($127 x 3 = $381)</p>
        <p className="bnoof-rooms">$25</p>
      </div>
      <div className="bname-email-mobile-container">
        <p className="bnoof-rooms">Name</p>
        <p className="bnoof-rooms">Email</p>
        <p className="bnoof-rooms">Mobile number</p>
      </div>
      <div className="bif-you-have">
        If you have promo code pleae enter it below
      </div>
      <div className="bjohn-smith-johnsmithgmailcom-container">
        <p className="bnoof-rooms">John smith</p>
        <p className="bnoof-rooms">johnsmith@gmail.com</p>
        <p className="bnoof-rooms">+225 698698966</p>
      </div>
      <b className="bb">$406</b>
      <div className="bline" />
      <div className="bline1" />
      <div className="bline2" />
      <div className="bline3" />
      <div className="bsearch1-parent" onClick={onGroupContainer1Click}>
        <img className="bsearch1-icon" alt="" src="/search1.png" />
        <div className="bconfirm-order">Confirm order</div>
      </div>
      <div className="bsheraton-child" />
      <div className="bparent">
        <div className="bdiv">3.9</div>
        <div className="bpeople-liked-this">85/100 people liked this</div>
        <img className="bstar-icon" alt="" src="/star.png" />
        <div className="bfujian-fuzhou-parent">
          <div className="bfujian-fuzhou">Fujian, Fuzhou</div>
          <img className="bgroup-icon" alt="" src="/group@2x.png" />
        </div>
      </div>
      <img
        className="bfanhui1-icon"
        alt=""
        src="/fanhui1.png"
        onClick={onFanhui1IconClick}
      />
    </div>
  );
};

export default Sheraton;
