import { useMemo } from "react";
import "./SectionCard1.css";

const SectionCard1 = ({
  eventDate,
  hotelName,
  propTop,
  propTextAlign,
  onGroupContainer1Click,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const fuzhouHotelStyle = useMemo(() => {
    return {
      textAlign: propTextAlign,
    };
  }, [propTextAlign]);

  return (
    <div
      className="rectangle-parent16"
      onClick={onGroupContainer1Click}
      style={groupDivStyle}
    >
      <div className="group-child40" />
      <div className="july-2023-coming-container">
        <b>{eventDate}</b>
        <span> Coming Soon</span>
      </div>
      <b className="fuzhou-hotel" style={fuzhouHotelStyle}>
        {hotelName}
      </b>
      <div className="you-have-a">You have a trip coming up</div>
    </div>
  );
};

export default SectionCard1;
