import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Sanfanqixian1.css";

const Sanfanqixian1 = () => {
  const navigate = useNavigate();

  const onGroupContainer3Click = useCallback(() => {
    navigate("/52-sanfanqixian");
  }, [navigate]);

  const onFanhui1IconClick = useCallback(() => {
    navigate("/40-view-all");
  }, [navigate]);

  return (
    <div className="bsanfanqixian1">
      <div className="bline47" />
      <div className="bline48" />
      <div className="bthree-lanes-and-container">
        <p className="bthree-lanes-and5">
          Three lanes and seven alleys are located in South Back Street, Gulou
          District, Fuzhou City, Fujian Province, covering a total area of about
          45 hectares. It is a general term for the alleys arranged from north
          to south on both sides of South Back Street.
        </p>
        <p className="bthree-lanes-and5">
          Three lanes and seven lanes started in the Jin Dynasty, formed in the
          Tang and five dynasties, and reached its peak in the Ming and Qing
          Dynasties. Three lanes and seven alleyways is a historical and
          cultural district with large scale and complete protection in China.
          It has the reputation of "living fossil of Chinese city Lifang system"
          and "Chinese Ming and Qing Architectural Museum". With South Back
          Street as the central axis of the scenic spot, including a radius of
          40 hectares of area, each corner has a guide map to follow the guide,
          very convenient. The so-called three lanes refer to the alleys on the
          left side of the South Back Street, which in turn are Guanglu Lane,
          Wenru Lane and Yijin Lane; The so-called seven lanes are Jibei Lane,
          Gong Lane, Anmin lane, Yellow lane, Tower lane, Lang Guan Lane,
          Yangqiao Lane.
        </p>
        <p className="bthree-lanes-and5">
          On May 25, 2006, it was listed as the sixth batch of national key
          cultural relic protection units by The State Council in the name of
          "Three lanes and seven alleys and Zhu Zifang Complex". On June 10,
          2009, Sanfang 7Xiang Historical and Cultural Block was awarded the
          honorary title of "China's Top Ten Historical and Cultural Streets"
          approved by the Ministry of Culture of the People's Republic of China
          and the State Administration of Cultural Heritage. In 2015, Sanfang
          Seven lanes was awarded the national 5A tourist attraction, and was
          selected as the first batch of Chinese historical and cultural blocks
          jointly announced by the Ministry of Housing and Urban-Rural
          Development and the State Administration of Cultural Heritage.
        </p>
      </div>
      <div className="bthe-architectural-layout">
        The architectural layout of "three lanes and seven alleys" also has
        historical characteristics at that time. It was formed in Luocheng,
        which was the prosperous business district of Fuzhou at that time.
        Bounded by the Antai River, the southern part of the city is divided
        into two parts: the northern part is the local political center and the
        aristocratic residential area is located here, and the southern part is
        the civilian residential and commercial area. In ancient times, the
        layout of the city emphasized the symmetry of the axis, and on both
        sides of the central axis in the south of the city, there were divided
        walls, which was the beginning of residential houses becoming squares
        and alleys.
      </div>
      <div className="bdescription2">Description</div>
      <div className="barchitectural-composition">architectural composition</div>
      <div className="brectangle-parent">
        <img className="brectangle-icon3" alt="" src="/rectangle@2x.png" />
        <div className="bthree-lanes-and7">Three lanes and seven alleys</div>
        <div className="bpeople-liked-this9">85/100 people liked this</div>
        <div className="bparent7">
          <div className="bdiv21">4.0</div>
          <img className="bstar-icon13" alt="" src="/star.png" />
        </div>
        <div className="bfujian-fuzhou-parent6">
          <div className="bfujian-fuzhou9">Fujian, Fuzhou</div>
          <img className="bgroup-icon9" alt="" src="/group@2x.png" />
        </div>
        <img className="bblue1-icon1" alt="" src="/38blue1.png" />
        <div className="breview-1068">Review (106)</div>
      </div>
      <div className="bphoto-12-container" onClick={onGroupContainer3Click}>
        <div className="bphoto-125">Photo (12)</div>
        <div className="bgroup-child4" />
      </div>
      <img
        className="bfanhui1-icon13"
        alt=""
        src="/fanhui1.png"
        onClick={onFanhui1IconClick}
      />
    </div>
  );
};

export default Sanfanqixian1;
