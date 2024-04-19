import "./styles/fourthSection.css";
import Carousel from "./Carousel";
import tickMark from "../assets/assets/tickmark.png";

const FourthSection = () => {
  return (
    <div className="fourth-section-div">
    <div>
      <Carousel />
    </div>
      <div className="fourth-right-div">
        <div className="all-key">
        <p className="s-main-heading">Everything you need to</p>
        <p className="s-main-heading">make your class more lively</p>

        <div className="key-points">
          <img src={tickMark} width={20} />
          <p>Power up your lectures with 3D models</p>
        </div>
        <div className="key-points">
          <img src={tickMark} width={20} />
          <p>Collaborate with students on live lecture</p>
        </div>
        <div className="key-points">
          <img src={tickMark} width={20} />
          <p>Add the dimension of exploration to your class</p>
        </div>
      </div>
        </div>
    </div>
  );
};

export default FourthSection;
