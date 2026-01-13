import { useMemo } from "react";
import "./SectionCard.css";

const SectionCard = ({ serviceName, greetingMessage, propTop }) => {
  const groupDiv1Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className="rectangle-parent17" style={groupDiv1Style}>
      <div className="group-child41" />
      <div className="luxurious-personal-service">{serviceName}</div>
      <div className="july-20231">23 july 2023</div>
      <div className="hello-i-will">{greetingMessage}</div>
      <img className="group-child42" alt="" src="/group-80.png" />
    </div>
  );
};

export default SectionCard;
