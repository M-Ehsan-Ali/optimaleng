const TestimonialItem = (props) => {
  return (
    <div className="choose-item">
      <div className="choose-icon">
        <img src={props.item.src} alt={props.item.alt} />
      </div>
      <div className="choose-content">
        <h2 className="title">{props.item.title}</h2>
        <p>{props.item.description}</p>
      </div>
    </div>
  );
};

export default TestimonialItem;
