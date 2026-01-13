import { useCallback } from "react";
import "./YourOrderIsSuccessful.css";

const YourOrderIsSuccessful = () => {
  const onGroupContainer1Click = useCallback(() => {
    // Please sync "30 accomodations air" to the project
    navigate("/30-accomodations-air");
  }, [navigate]);

  return (
    <div className="byour-order-is-successful">
      <img className="bthanks-icon" alt="" src="/thanks@2x.png" />
      <div className="bgaobu-group">

      </div>
      <div className="bthank-you-parent" onClick={onGroupContainer1Click}>
        <b className="bthank-you">Thank You</b>
        <div className="byour-order-is-container">
          <p className="byour-order-is">{`Your order is `}</p>
          <p className="byour-order-is">successful</p>
        </div>
        <img className="bbed-icon" alt="" src="/bed.png" />
      </div>
    </div>
  );
};

export default YourOrderIsSuccessful;
