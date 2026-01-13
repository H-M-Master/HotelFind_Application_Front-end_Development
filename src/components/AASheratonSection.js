import { useMemo } from "react";
import "./AASheratonSection.css";

const AASheratonSection = ({ prop, sheraton, gaodu2IconTop }) => {
  const sheratonStyle = useMemo(() => {
    return {
      top: gaodu2IconTop,
    };
  }, [gaodu2IconTop]);

  return (
    <div className="bparent14">
      <img className="bicon44" alt="" src={prop} />
      <div className="bsheraton5" style={sheratonStyle}>
        {sheraton}
      </div>
      <img className="bgroup-child7" alt="" src="/group-2.png" />
    </div>
  );
};

export default AASheratonSection;
