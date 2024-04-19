import Card from "./Card";
import "./styles/thirdSection.css";

const ThirdSection = () => {
  return (
    <div className="third-section-div">
        <h1 className="t-heading">Who is it for...</h1>
        <div className="cards">
            <Card backCol={"#FFE6DF"} heading={"School"} desc={"Enable the 21st century way of teaching in your school"} />
            <Card backCol={"#CFF4EE"} heading={"Teacher"} desc={"Become part of dimensionEd Teacher Programme"}/>
            <Card backCol={"#D1E4FF"} heading={"Tutoring Centers"} desc={"Have an additional dimension to your tutoring website."} />
        </div>
    </div>
  )
}

export default ThirdSection