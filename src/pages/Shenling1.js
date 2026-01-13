import { useCallback } from "react";
import ASectionCard2 from "../components/ASectionCard2";
import { useNavigate } from "react-router-dom";
import "./Shenling1.css";

const Shenling1 = () => {
  const navigate = useNavigate();

  const onGroupContainer3Click = useCallback(() => {
    navigate("/56-shenling");
  }, [navigate]);

  const onFanhui1IconClick = useCallback(() => {
    navigate("/40-view-all");
  }, [navigate]);

  return (
    <div className="bshenling1">
      <img className="brectangle-icon2" alt="" src="/3@2x.png" />
      <div className="bline35" />
      <div className="bline36" />
      <ASectionCard2 />
      <div className="bline36" />
      <div className="bline35" />
      <div className="bline39" />
      <div className="bfuzhou-national-forest">
        Fuzhou National Forest Park (also known as "Fuzhou Botanical Garden") is
        the first national forest park in Fujian Province, one of the top ten
        forest parks in the country, and one of the six 4A scenic spots in
        Fuzhou. Fuzhou National Forest Park, formerly known as Fuzhou Arboretum,
        was founded in February 1960 and approved by the Ministry of Forestry to
        establish "Fuzhou Forest Park" in 1988. The area is 859.33 hectares. It
        is divided into five parts: forest area, nursery, greenhouse, special
        garden and rest area.
      </div>
      <div className="bat-the-same">
        At the same time, the development of scenic spots and the construction
        of tourism service infrastructure have been fruitful. In the east of the
        east, there are entrance service areas, including integrated service
        buildings and inside and outside squares. In the forest resort, the
        holiday inn, which is available for 80 people, the holiday hotel of 150
        people, and the forest cabin of 50 people, is the ideal place for people
        to meet and spend their holidays. In the forest camp, there is also a
        Korean barbecue with unique forest features. In the construction of
        infrastructure, the main road is 25 kilometers; Introduce the program
        control telephone 1000 gate; Increase the power supply system capacity
        to 300 kilowatts; The water energy of the sun reaches 600 tons. In the
        park, there is a tour of the electric car, which is the basic form of
        the tourist loop of the park east and the south gate.
      </div>
      <div className="bthe-park-has">
        The park has been able to raise money, accelerate the development of
        tourism, and invest more than 22 million yuan in construction funds in
        the introduction of foreign investment in the introduction of foreign
        investment in the introduction of foreign investment, joint ventures,
        independent operations, clearing of forest and landscape rental, etc.
        Pay attention to the project level and the theme of forest tourism. We
        have introduced the birds' language forest, the mountain slide, the
        water world, the animal performance field, the snake garden, the tour of
        the electric car and other amusement projects. The birds and the birds
        of the bird language and the southeast of the peacock attract a lot of
        visitors to the birds and the birds. The total length of the mountain
        slide is more than 900 meters long, allowing people to travel freely in
        the green trees and enjoy the pleasure of intimate contact with nature.
      </div>
      <div className="bdescription">Description</div>
      <div className="binfrastructure">
        <p className="binfrastructure1">infrastructure</p>
      </div>
      <div className="bline40" />
      <div className="bdevelopment-prospect">
        <p className="binfrastructure1">development prospect</p>
      </div>
      <div className="bphoto-12-parent" onClick={onGroupContainer3Click}>
        <div className="bphoto-121">Photo (12)</div>
        <div className="bgroup-child2" />
      </div>
      <img
        className="bfanhui1-icon9"
        alt=""
        src="/fanhui1.png"
        onClick={onFanhui1IconClick}
      />
    </div>
  );
};

export default Shenling1;
