import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AOrderConfirm.css";

const AOrderConfirm = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/47-payment-methpds");
  }, [navigate]);

  const onFanhui1IconClick = useCallback(() => {
    navigate("/41-hotel-details");
  }, [navigate]);

  return (
    <div className="ba-order-confirm">
      <div className="bparent8">
        <img className="bicon24" alt="" src="/5@2x.png" />

        <div className="bintercontinental">InterContinental</div>
      </div>
      <div className="brectangle4" />
      <div className="broom-info2">Room info</div>
      <div className="bguest-info2">Guest info</div>
      <div className="bpromo-code2">Promo code</div>
      <div className="benter-promo-code2">Enter Promo code</div>
      <div className="bnoof-rooms-room-container2">
        <p className="bnoof-rooms2">No.of rooms</p>
        <p className="bnoof-rooms2">Room type</p>
        <p className="bnoof-rooms2">Room</p>
        <p className="bnoof-rooms2">Taxes</p>
      </div>
      <div className="btotal2">Total</div>
      <div className="bair-conditioned-3-container2">
        <p className="bnoof-rooms2">1</p>
        <p className="bnoof-rooms2">Air conditioned</p>
        <p className="bnoof-rooms2">3 Nights ($127 x 3 = $381)</p>
        <p className="bnoof-rooms2">$25</p>
      </div>
      <div className="bname-email-mobile-container2">
        <p className="bnoof-rooms2">Name</p>
        <p className="bnoof-rooms2">Email</p>
        <p className="bnoof-rooms2">Mobile number</p>
      </div>
      <div className="bif-you-have2">
        If you have promo code pleae enter it below
      </div>
      <div className="bjohn-smith-johnsmithgmailcom-container2">
        <p className="bnoof-rooms2">John smith</p>
        <p className="bnoof-rooms2">johnsmith@gmail.com</p>
        <p className="bnoof-rooms2">+225 698698966</p>
      </div>
      <b className="bb8">$406</b>
      <div className="bline52" />
      <div className="bline53" />
      <div className="bline54" />
      <div className="bline55" />
      <div className="bsearch1-container" onClick={onGroupContainer1Click}>
        <img className="bsearch1-icon2" alt="" src="/search1.png" />
        <div className="bconfirm-order2">Confirm order</div>
      </div>
      <div className="ba-order-confirm-child" />
      <div className="bparent9">
        <div className="bdiv22">3.9</div>
        <div className="bpeople-liked-this10">85/100 people liked this</div>
        <img className="bstar-icon14" alt="" src="/star.png" />
        <div className="bfujian-fuzhou-parent7">
          <div className="bfujian-fuzhou10">Fujian, Fuzhou</div>
          <img className="bgroup-icon10" alt="" src="/group@2x.png" />
        </div>
      </div>
      <img
        className="bfanhui1-icon14"
        alt=""
        src="/fanhui1.png"
        onClick={onFanhui1IconClick}
      />
    </div>
  );
};

export default AOrderConfirm;
