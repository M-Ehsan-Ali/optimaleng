const OurPartnerItem = (props) => {
  return (
    <div className="">
      <div className="choose-content">
        <h2>
          <img src={props.item.src} alt={props.item.alt} />
        </h2>
      </div>
    </div>
  );
};

export default OurPartnerItem;
