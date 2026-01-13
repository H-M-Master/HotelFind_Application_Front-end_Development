import { useMemo } from "react";
import "./AKempinskiSection.css";

const AKempinskiSection = ({ prop, kempinski, propTop }) => {
  const kempinskiStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className="bparent15">
      <img className="bicon45" alt="" src={prop} />
      <div className="bkempinski2" style={kempinskiStyle}>
        {kempinski}
      </div>
    </div>
  );
};

export default AKempinskiSection;
