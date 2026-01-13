import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Xihu1.css";

const Xihu1 = () => {
  const navigate = useNavigate();

  const onGroupContainer3Click = useCallback(() => {
    navigate("/54-xihu");
  }, [navigate]);

  const onFanhui1IconClick = useCallback(() => {
    navigate("/40-view-all");
  }, [navigate]);

  return (
    <div className="bxihu1">
      <div className="bline42" />
      <div className="bline43" />
      <div className="bparent5">
        <img className="bicon23" alt="" src="/2@2x.png" />
        <div className="bthree-lanes-and4">West Lake Park</div>
        <div className="bpeople-liked-this8">85/100 people liked this</div>
        <div className="bparent6">
          <div className="bdiv20">4.0</div>
          <img className="bstar-icon12" alt="" src="/star.png" />
        </div>
        <div className="bfujian-fuzhou-parent5">
          <div className="bfujian-fuzhou8">Fujian, Fuzhou</div>
          <img className="bgroup-icon8" alt="" src="/group@2x.png" />
        </div>
        <img className="bblue1-icon" alt="" src="/38blue1.png" />
        <div className="breview-1066">Review (106)</div>
      </div>
      <div className="bline43" />
      <div className="bthe-west-lake2">
        The west lake park in fuzhou, fuzhou, fujian province, has a history of
        more than 1,700 years, which is the most complete classical garden in
        fuzhou. The total area is about 42.51 hectares, including 12.21 hectares
        of land.Fuzhou west lake park is the oldest park in fuzhou, and is known
        as "the pearl of fujian garden, which is ranked among the 36 west lake
        in the country. With the different style of suzhou garden, it is a
        scenic spot of the lake, the jade belt bridge, the jade belt bridge and
        the flying rainbow bridge, which is one of the "ten best scenic spots"
        in fujian province.
      </div>
      <div className="bdescription1">Description</div>
      <div className="bline45" />
      <div className="barchitectural-characteristic">
        architectural characteristic
      </div>
      <div className="bfuzhou-west-lake">
        Fuzhou west lake park is a traditional garden style of fuzhou, using
        natural landscape and the allocation of native tree species. The three
        small islands of the west lake park are made of willow bridge, flying
        rainbow bridge, and the north gate bridge. The whole park is surrounded
        by water, and the water building is built along the coast, the
        afforestation is planted, the water of the mountain is covered, the ring
        is the corridor of the observation, the porch of the view, the river
        wall of the park, the river, the weeping willow. The water building is
        more light and flexible, because of the climate, the pillars of the
        building are thinner, the roof is thinner, the permeability is stronger,
        so the hierarchy is deeper. The green plants are mainly based on local
        plants, combined with the rockery waterfall, high and low, the tree
        shrub, the color is rich, there is a cluster, there is a solitary plant,
        and there is more rain in the south. The combination of the mountains
        and the water is more elaborate, and the falls follow the rockery. With
        the flow of lines, the beautiful water sound strengthens the life of the
        garden, the lake water is the view corridor, the corridor, the side is
        the broad water, the side is the dense jungle, the porch is broken, the
        porch is in the jungle, the "small is seen big", increased the interest
        of the garden.
      </div>
      <div className="bphoto-12-group" onClick={onGroupContainer3Click}>
        <div className="bphoto-123">Photo (12)</div>
        <div className="bgroup-child3" />
      </div>
      <img
        className="bfanhui1-icon11"
        alt=""
        src="/fanhui1.png"
        onClick={onFanhui1IconClick}
      />
    </div>
  );
};

export default Xihu1;
