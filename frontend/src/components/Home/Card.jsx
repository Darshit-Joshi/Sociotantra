import "./Card.css";
function Card({ url, head, desc }) {
  return (
    <div className="card" style={{ backgroundImage: `url(${url})` }}>
      <div className="card-overlay">
        <h3>{head}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default Card;
