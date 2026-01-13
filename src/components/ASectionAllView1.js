import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ASectionAllView1.css";

const ASectionAllView1 = () => {
  const navigate = useNavigate();

  const onGroupContainer5Click = useCallback(() => {
    navigate("/43-hotel-photos");
  }, [navigate]);

  const onGroupContainer6Click = useCallback(() => {
    navigate("/44-hotel-nearby");
  }, [navigate]);

  return (
    <div className="bfujian-fuzhou-parent16">
      <div className="bfujian-fuzhou19">Fujian, Fuzhou</div>
      <div className="bdiv63">+225 22 48 26 26</div>
      <img className="bfujian-icon2" alt="" src="/fujian@2x.png" />
      <div className="bline87" />
      <img className="bline-icon2" alt="" src="/line.png" />
      <div className="bset-in-the-container2">
        <p className="bset-in-the2">
          Set in the tallest building in Fuzhou, InterContinental Fuzhou offers
          accommodations with stunning views, great 'In The Know' concierge
          service and modern facilities. The hotel features a fitness center
          with an indoor pool and 3 gourmet restaurants.
        </p>
      </div>
      <div className="bhotel-facilities4" />
      <div className="bfree-wi-fi2">Free Wi-Fi</div>
      <img className="bwifi11-icon2" alt="" src="/wifi11.png" />
      <div className="bfitness-center2">Fitness Center</div>
      <img className="bduanlian-icon2" alt="" src="/duanlian.png" />
      <div className="bfree-breakfast2">Free Breakfast</div>
      <img className="bfoodnay-icon2" alt="" src="/foodnay.png" />
      <img className="bbreakfast-icon2" alt="" src="/breakfast.png" />
      <div className="bkid-friendly2">Kid Friendly</div>
      <img className="bbaby-icon2" alt="" src="/baby.png" />
      <img className="blandi41-icon2" alt="" src="/landi41.png" />
      <div className="breview-10614">Review (106)</div>
      <div className="bbaidizhongjian-parent3" onClick={onGroupContainer5Click}>
        <div className="bbaidizhongjian5" />
        <div className="bphoto-108">Photo (10)</div>
      </div>
      <div className="bhotel-description2">Hotel Description</div>
      <div className="bhotel-facilities5">Hotel Facilities</div>
      <div className="brating-reviews3">{`Rating & Reviews`}</div>
      <div className="bnear-by-24-parent3" onClick={onGroupContainer6Click}>
        <div className="bnear-by-248">Near by (24)</div>
        <div className="bbaidi435" />
      </div>
      <img className="bphone-icon2" alt="" src="/phone.png" />
      <div className="bcheckin-12-pm2">Checkin 12 PM</div>
      <div className="bgreat-dining2">Great dining</div>
      <div className="bgreat-breakfast2">Great breakfast</div>
      <div className="bpet-friendly2">Pet friendly</div>
      <div className="bgreat-pool2">Great pool</div>
      <div className="bgreat-rooms2">Great rooms</div>
      <div className="bluxurious-vibe2">Luxurious vibe</div>
      <div className="bcheckout-11-am2">Checkout 11 AM</div>
      <img className="bpawprint-icon3" alt="" src="/pawprint.png" />
      <img className="bswimming-icon2" alt="" src="/swimming.png" />
      <img className="bdining-table-icon2" alt="" src="/41diningtable.png" />
      <img className="bbed-icon3" alt="" src="/41bed.png" />
      <img className="bdiamond-icon2" alt="" src="/diamond.png" />
      <div className="bview-all7">View all</div>
    </div>
  );
};

export default ASectionAllView1;
