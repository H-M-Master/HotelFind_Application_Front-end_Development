import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Faq.css";

const Faq = () => {
  const navigate = useNavigate();

  const onFanhuiIconClick = useCallback(() => {
    navigate("/10-settings");
  }, [navigate]);

  return (
    <div className="afaq">
      <div className="arectangle1" />
      <div className="abeijing-shezi" />
      <div className="afaq-child" />
      <div className="ado-i-have">Do I have to buy the Mobile App?</div>
      <div className="ano-our-mobile-container">
        <p className="ano-our-mobile">{`No. Our Mobile App is completely `}</p>
        <p className="ano-our-mobile">free to download and install.</p>
      </div>
      <img className="arectanglexia-icon" alt="" src="/rectanglexia.png" />
      <div className="afaq-item" />
      <div className="ahow-do-i">How do I get the Mobile App for my phone?</div>
      <img className="arectangleyou-icon" alt="" src="/rectangleyou.png" />
      <div className="afaq-inner" />
      <div className="awhat-features-does">
        What features does the Mobile App have?
      </div>
      <img className="arectangleyou-icon1" alt="" src="/rectangleyou.png" />
      <div className="arectangle-div" />
      <div className="ais-the-mobile">Is the Mobile App secure?</div>
      <img className="arectangleyou-icon2" alt="" src="/rectangleyou.png" />
      <div className="afaq-child1" />
      <div className="ahow-current-is">
        How current is the account information ...
      </div>
      <img className="arectangleyou-icon3" alt="" src="/rectangleyou.png" />
      <div className="afaq-child2" />
      <div className="ahow-do-i1">{`How do I find your offices and payment locations? `}</div>
      <img className="arectangleyou-icon4" alt="" src="/rectangleyou.png" />
      <div className="amyprofile-parent">
        <div className="amyprofile">Myprofile</div>
        <div className="afaq1">Faq</div>
    
      </div>
      <img
        className="afanhui-icon2"
        alt=""
        src="/fanhui.png"
        onClick={onFanhuiIconClick}
      />
    </div>
  );
};

export default Faq;
