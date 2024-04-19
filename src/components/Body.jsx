import "./styles/body.css";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";

const Body = () => {
  return (
    <div className="body">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
    </div>
  );
};

export default Body;
