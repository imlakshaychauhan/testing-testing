import rocketLogo from "../assets/assets/rocket-logo.png";
import bodyImg from "../assets/assets/images/out-14.jpg";
import "./styles/secondSection.css"
import VideoComponent from "./VideoComponent";
import video from "../assets/assets/output-video/output_video-2.mp4"

const SecondSection = () => {
  return (
    <div className="s-section-div">
      <div className="s-left-div">
        <VideoComponent VideoSource={video} />
      </div>
      <div className="s-right-div">
        <p className="s-anim-heading">Smart Lectures</p>
        <p className="s-main-heading">Increases students'</p>
        <p className="s-main-heading">retention rate by 57%</p>
        <p className="s-desc">
          Now everything is in your power to create a highly engaging &
          interactive online class with your students.
        </p>
        <button className="s-startBtn">
            <p className="s-btnHeading2">Try for free</p>
        </button>
      </div>
    </div>
  );
};

export default SecondSection;
