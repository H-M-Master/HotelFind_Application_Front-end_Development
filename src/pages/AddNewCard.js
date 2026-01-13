import { useCallback } from "react";
import Yinghankazhongyao from "../components/Yinghankazhongyao";
import { useNavigate } from "react-router-dom";
import "./AddNewCard.css";

const AddNewCard = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/2-my-profile");
  }, [navigate]);

  const onFanhuiIconClick = useCallback(() => {
    navigate("/2-my-profile");
  }, [navigate]);

  return (
    <div className="add-new-card">
      <div className="add-new-card1">Add New card</div>
      <Yinghankazhongyao
        imageDimensions="/visapaylogo.png"
        yinghankazhongyaoPosition="absolute"
        yinghankazhongyaoTop="111px"
        yinghankazhongyaoLeft="17px"
      />
      <div className="group-parent3">
        <div className="group1" onClick={onGroupContainerClick}>
          <div className="signin">
            <img
              className="rectangle-add-icon"
              alt=""
              src="/rectangle-add.png"
            />
            <div className="add">Add</div>
          </div>
        </div>
   
      </div>
      <img
        className="fanhui-icon1"
        alt=""
        src="/fanhui.png"
        onClick={onFanhuiIconClick}
      />
    </div>
  );
};

export default AddNewCard;
