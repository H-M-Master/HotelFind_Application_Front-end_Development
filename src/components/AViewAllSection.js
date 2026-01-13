import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AViewAllSection.css";

const AViewAllSection = () => {
  const navigate = useNavigate();

  const onGroupContainer4Click = useCallback(() => {
    navigate("/58-jiudianw");
  }, [navigate]);

  const onGroupContainer5Click = useCallback(() => {
    navigate("/59-jiudianr");
  }, [navigate]);

  return (
    <div className="bfujian-fuzhou-parent12">
      <div className="bfujian-fuzhou15">Fujian, Fuzhou</div>
      <div className="bdiv37">+225 22 48 26 26</div>
      <img className="bfujian-icon1" alt="" src="/fujian@2x.png" />
      <div className="bline80" />
      <img className="bline-icon1" alt="" src="/line.png" />
      <div className="bthe-location-is">
        The location is close to the subway station. The hotel is just next to
        the famous East Tahoe Plaza, and there are various restaurants and
        street food vendors around. The front desk staffs are friendly and
        professional, especially Shirley, she gave us a warm welcome and
        thoughtful arrangement for the hotel.
      </div>
      <div className="bhotel-facilities2" />
      <div className="bfree-wi-fi1">Free Wi-Fi</div>
      <img className="bwifi11-icon1" alt="" src="/wifi11.png" />
      <div className="bfitness-center1">Fitness Center</div>
      <img className="bduanlian-icon1" alt="" src="/duanlian.png" />
      <div className="bfree-breakfast1">Free Breakfast</div>
      <img className="bfoodnay-icon1" alt="" src="/foodnay.png" />
      <img className="bbreakfast-icon1" alt="" src="/breakfast.png" />
      <div className="bkid-friendly1">Kid Friendly</div>
      <img className="bbaby-icon1" alt="" src="/baby.png" />
      <img className="blandi41-icon1" alt="" src="/landi41.png" />
      <div className="breview-10612">Review (106)</div>
      <div className="bbaidizhongjian-parent2" onClick={onGroupContainer4Click}>
        <div className="bbaidizhongjian4" />
        <div className="bphoto-107">Photo (10)</div>
      </div>
      <div className="bhotel-description1">Hotel Description</div>
      <div className="bhotel-facilities3">Hotel Facilities</div>
      <div className="brating-reviews2">{`Rating & Reviews`}</div>
      <div className="bnear-by-24-parent2" onClick={onGroupContainer5Click}>
        <div className="bnear-by-247">Near by (24)</div>
        <div className="bbaidi434" />
      </div>
      <img className="bphone-icon1" alt="" src="/phone.png" />
      <div className="bcheckin-12-pm1">Checkin 12 PM</div>
      <div className="bgreat-dining1">Great dining</div>
      <div className="bgreat-breakfast1">Great breakfast</div>
      <div className="bpet-friendly1">Pet friendly</div>
      <div className="bgreat-pool1">Great pool</div>
      <div className="bgreat-rooms1">Great rooms</div>
      <div className="bluxurious-vibe1">Luxurious vibe</div>
      <div className="bcheckout-11-am1">Checkout 11 AM</div>
      <img className="bpawprint-icon2" alt="" src="/pawprint.png" />
      <img className="bswimming-icon1" alt="" src="/swimming.png" />
      <img className="bdining-table-icon1" alt="" src="/41diningtable.png" />
      <img className="bbed-icon2" alt="" src="/41bed.png" />
      <img className="bdiamond-icon1" alt="" src="/diamond.png" />
      <div className="bview-all6">View all</div>
    </div>
  );
};

export default AViewAllSection;
