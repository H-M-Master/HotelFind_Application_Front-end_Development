import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ASectionViewAll.css";

const ASectionViewAll = () => {
  const navigate = useNavigate();

  const onGroupContainer5Click = useCallback(() => {
    navigate("/62-sheraton");
  }, [navigate]);

  const onGroupContainer6Click = useCallback(() => {
    navigate("/63-sheraton");
  }, [navigate]);

  return (
    <div className="bfujian-fuzhou-parent11">
      <div className="bfujian-fuzhou14">Fujian, Fuzhou</div>
      <div className="bdiv36">+225 22 48 26 26</div>
      <img className="bfujian-icon" alt="" src="/fujian@2x.png" />
      <div className="bline79" />
      <img className="bline-icon" alt="" src="/line.png" />
      <div className="bsheraton-fuzhou-hotel-container1">
        <p className="bsheraton-fuzhou-hotel2">
          Sheraton Fuzhou Hotel is located in the Eastern New Town of Fuzhou,
          528 feet from Fujian Strait International Conference and Exhibition
          Center. Free public parking is provided at the property.
        </p>
        <p className="bsheraton-fuzhou-hotel2">
          Sheraton Fuzhou Hotel is 1.9 mi from Drum Mountain, 5 mi from Fuzhou
          South Railway Station.
        </p>
      </div>
      <div className="bhotel-facilities" />
      <div className="bfree-wi-fi">Free Wi-Fi</div>
      <img className="bwifi11-icon" alt="" src="/wifi11.png" />
      <div className="bfitness-center">Fitness Center</div>
      <img className="bduanlian-icon" alt="" src="/duanlian.png" />
      <div className="bfree-breakfast">Free Breakfast</div>
      <img className="bfoodnay-icon" alt="" src="/foodnay.png" />
      <img className="bbreakfast-icon" alt="" src="/breakfast.png" />
      <div className="bkid-friendly">Kid Friendly</div>
      <img className="bbaby-icon" alt="" src="/baby.png" />
      <img className="blandi41-icon" alt="" src="/landi41.png" />
      <div className="breview-10611">Review (106)</div>
      <div className="bbaidizhongjian-parent1" onClick={onGroupContainer5Click}>
        <div className="bbaidizhongjian3" />
        <div className="bphoto-106">Photo (10)</div>
      </div>
      <div className="bhotel-description">Hotel Description</div>
      <div className="bhotel-facilities1">Hotel Facilities</div>
      <div className="brating-reviews1">{`Rating & Reviews`}</div>
      <div className="bnear-by-24-parent1" onClick={onGroupContainer6Click}>
        <div className="bnear-by-246">Near by (24)</div>
        <div className="bbaidi433" />
      </div>
      <img className="bphone-icon" alt="" src="/phone.png" />
      <div className="bcheckin-12-pm">Checkin 12 PM</div>
      <div className="bgreat-dining">Great dining</div>
      <div className="bgreat-breakfast">Great breakfast</div>
      <div className="bpet-friendly">Pet friendly</div>
      <div className="bgreat-pool">Great pool</div>
      <div className="bgreat-rooms">Great rooms</div>
      <div className="bluxurious-vibe">Luxurious vibe</div>
      <div className="bcheckout-11-am">Checkout 11 AM</div>
      <img className="bpawprint-icon1" alt="" src="/pawprint.png" />
      <img className="bswimming-icon" alt="" src="/swimming.png" />
      <img className="bdining-table-icon" alt="" src="/41diningtable.png" />
      <img className="bbed-icon1" alt="" src="/41bed.png" />
      <img className="bdiamond-icon" alt="" src="/diamond.png" />
      <div className="bview-all5">View all</div>
    </div>
  );
};

export default ASectionViewAll;
