const TestimonialItems = (props) => {
  return (
    <div>
      <div
        className="choose-item"
        style={{
          minHeight: "fit-content",
          whiteSpace: "nowrap",
          padding: "30px 20px",
        }}
      >
        <h2 className="title">{props.item.revName}</h2>
      </div>
      <p>{props.item.description}</p>=
    </div>
  );
};

export default TestimonialItems;
