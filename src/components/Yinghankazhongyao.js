import { useMemo } from "react";
import "./Yinghankazhongyao.css";

const Yinghankazhongyao = ({
  imageDimensions,
  yinghankazhongyaoPosition,
  yinghankazhongyaoTop,
  yinghankazhongyaoLeft,
}) => {
  const yinghankazhongyaoStyle = useMemo(() => {
    return {
      position: yinghankazhongyaoPosition,
      top: yinghankazhongyaoTop,
      left: yinghankazhongyaoLeft,
    };
  }, [yinghankazhongyaoPosition, yinghankazhongyaoTop, yinghankazhongyaoLeft]);

  return (
    <div className="yinghankazhongyao" style={yinghankazhongyaoStyle}>
      <img className="yinghankazhongyao-child" alt="" src="/rectangle-23.png" />
      <img className="subtract-icon" alt="" src="/subtract.png" />
      <div className="yinghankazhongyao-item" />
      <img className="yinghankazhongyao-inner" alt="" src="/vector-2.png" />
      <img className="vector-icon" alt="" src="/vector-21.png" />
      <div className="line" />
      <div className="card-number">Card Number</div>
      <div className="div">0085 7789 2236 3685</div>
      <div className="line1" />
      <div className="card-holder-name">Card Holder Name</div>
      <div className="john-smith">John smith</div>
      <div className="line2" />
      <div className="expiry-date">Expiry date</div>
      <div className="div1">06/22</div>
      <div className="line3" />
      <div className="cvv">CVV</div>
      <div className="div2">321</div>
      <img className="visa-pay-logo-icon" alt="" src={imageDimensions} />
    </div>
  );
};

export default Yinghankazhongyao;
