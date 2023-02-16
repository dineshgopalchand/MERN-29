const Card = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <div className="card-details">
         {props.children}
        </div>
      </div>
    </div>
  );
};

export default Card;
