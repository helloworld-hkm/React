// destructure props
function Card({ img, name }) {
  return (
    <div className="card">
      <img src={img} alt="img" />
      <h3>{name}</h3>
    </div>
  );
}
export default Card;
