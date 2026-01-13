import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Jiudiant.css";

const Jiudiant = () => {
  const navigate = useNavigate();

  const onFanhui1IconClick = useCallback(() => {
    navigate("/57-jiudianq");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/47-payment-methpds");
  }, [navigate]);

  return (
    <div className="bjiudiant">
      <div className="bparent1">
        <img className="bicon4" alt="" src="/6@2x.png" />
        <img
          className="bfanhui1-icon4"
          alt=""
          src="/fanhui1.png"
          onClick={onFanhui1IconClick}
        />
        <div className="bkempinski">Kempinski</div>
      </div>
      <div className="brectangle2" />
      <div className="broom-info1">Room info</div>
      <div className="bguest-info1">Guest info</div>
      <div className="bpromo-code1">Promo code</div>
      <div className="benter-promo-code1">Enter Promo code</div>
      <div className="bnoof-rooms-room-container1">
        <p className="bnoof-rooms1">No.of rooms</p>
        <p className="bnoof-rooms1">Room type</p>
        <p className="bnoof-rooms1">Room</p>
        <p className="bnoof-rooms1">Taxes</p>
      </div>
      <div className="btotal1">Total</div>
      <div className="bair-conditioned-3-container1">
        <p className="bnoof-rooms1">1</p>
        <p className="bnoof-rooms1">Air conditioned</p>
        <p className="bnoof-rooms1">3 Nights ($127 x 3 = $381)</p>
        <p className="bnoof-rooms1">$25</p>
      </div>
      <div className="bname-email-mobile-container1">
        <p className="bnoof-rooms1">Name</p>
        <p className="bnoof-rooms1">Email</p>
        <p className="bnoof-rooms1">Mobile number</p>
      </div>
      <div className="bif-you-have1">
        If you have promo code pleae enter it below
      </div>
      <div className="bjohn-smith-johnsmithgmailcom-container1">
        <p className="bnoof-rooms1">John smith</p>
        <p className="bnoof-rooms1">johnsmith@gmail.com</p>
        <p className="bnoof-rooms1">+225 698698966</p>
      </div>
      <b className="bb4">$406</b>
      <div className="bline17" />
      <div className="bline18" />
      <div className="bline19" />
      <div className="bline20" />
      <div className="bsearch1-group" onClick={onGroupContainer1Click}>
        <img className="bsearch1-icon1" alt="" src="/search1.png" />
        <div className="bconfirm-order1">Confirm order</div>
      </div>
      <div className="bjiudiant-child" />
      <div className="bparent2">
        <div className="bdiv10">3.9</div>
        <div className="bpeople-liked-this4">85/100 people liked this</div>
        <img className="bstar-icon6" alt="" src="/star.png" />
        <div className="bfujian-fuzhou-parent1">
          <div className="bfujian-fuzhou4">Fujian, Fuzhou</div>
          <img className="bgroup-icon4" alt="" src="/group@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default Jiudiant;
