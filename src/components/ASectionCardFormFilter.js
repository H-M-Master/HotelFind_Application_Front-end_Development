import { useMemo } from "react";
import "./ASectionCardFormFilter.css";

const ASectionCardFormFilter = ({
  prop,
  sheraton,
  theSheratonHotelsChainEst,
  oFF,
  prop1,
  propTop,
  propWidth,
  propWidth1,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      top: propTop,
      width: propWidth,
    };
  }, [propTop, propWidth]);

  const theSheratonHotelsStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className="bparent21" style={groupDivStyle}>
      <img className="bicon52" alt="" src={prop} />
      <div className="bsheraton6">{sheraton}</div>
      <div className="bdiv66">4.5</div>
      <div className="breviews-20">Reviews (20)</div>
      <div className="bthe-sheraton-hotels" style={theSheratonHotelsStyle}>
        {theSheratonHotelsChainEst}
      </div>
      <b className="boff-100">
        <span>{oFF}</span>
        <span className="bspan1">{prop1}</span>
      </b>
      <img className="bstar-icon39" alt="" src="/star.png" />
    </div>
  );
};

export default ASectionCardFormFilter;
