import { useCallback } from "react";
import AYinghankazhongyao from "../components/AYinghankazhongyao";
import { useNavigate } from "react-router-dom";
import "./PaymentMethpds.css";

const PaymentMethpds = () => {
  const navigate = useNavigate();

  const onFinishorderContainerClick = useCallback(() => {
    navigate("/30-accomodations-air");
  }, [navigate]);

  const onFanhuiIconClick = useCallback(() => {
    navigate("/45a-order-confirm");
  }, [navigate]);

  return (
    <div className="bpayment-methpds">
      <div className="bpayment-methods-parent">
        <div className="bpayment-methods">Payment methods</div>
        <img className="bvector47-icon" alt="" src="/vector47.png" />
      </div>
      <div className="byinghankazuhe">
        <img className="bka5-icon" alt="" src="/ka5@2x.png" />
        <img className="bka4-icon" alt="" src="/ka4@2x.png" />
        <img className="bka3-icon" alt="" src="/ka3@2x.png" />
        <div className="bka2" />
        <img className="bka1-icon" alt="" src="/ka1@2x.png" />
      </div>
      <div className="byinghankazhongyao-parent">
        <AYinghankazhongyao />
       
      </div>
      <div className="bfinishorder" onClick={onFinishorderContainerClick}>
        <img className="bsearch1-icon4" alt="" src="/search1.png" />
        <div className="bfinish-order">Finish Order</div>
      </div>
      <img
        className="bfanhui-icon3"
        alt=""
        src="/fanhui.png"
        onClick={onFanhuiIconClick}
      />
    </div>
  );
};

export default PaymentMethpds;
