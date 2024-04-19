import "./styles/body.css";
import rocketLogo from "../assets/assets/rocket-logo.png";
import bodyImg from "../assets/assets/images/out-14.jpg";
import "./styles/firstSection.css";
import VideoComponent from "./VideoComponent";
import video from "../assets/assets/output-video/output_video-15.mp4"

const FirstSection = () => {
  const headings = [
    "beautiful design interface ⭐",
    "smart designs are only here ⭐",
    "Now everything is in your power to create a highly ⭐",
  ];
  return (
    <div className="first-section-div">
      <div className="left-div">
        <p className="anim-heading">{headings[0]}</p>
        <p className="main-heading">Smart lectures</p>  
        <p className="desc"> Now everything is in your power to create a highly engaging &
          interactive online class with your students.</p>
        <button className="startBtn">
        <div>

          <img src={rocketLogo} width={30} />
        </div>
          <div className="buttonText">
          <p className="btnHeading1">Get a demo</p>
          <p className="btnHeading2">Start Now - It's Free</p>
          </div>
        </button>
      </div>
      <div className="right-div">
        {/* <img src={bodyImg} height={400} width={300} /> */}
        <VideoComponent VideoSource={video} />
      </div>
    </div>
  );
};

export default FirstSection;
