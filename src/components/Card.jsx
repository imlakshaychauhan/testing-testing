import "./styles/card.css"

const Card = ({backCol, heading, desc}) => {
  return (
    <div className="card" style={{ backgroundColor: backCol }} >
      <p className="c-heading">{heading}</p>
      <p className="c-desc">{desc}</p>
    </div>
  )
}

export default Card