import Link from "next/link";

const SelectProjectItem = (props) => {
  return (
    <div className="">
      <div className="choose-content">
        <h2 className="title">{props.item.revName}</h2>
        <h2>
          <Link href={props.item.link}>
            <img src={props.item.src} alt={props.item.alt} />
          </Link>
        </h2>
        <p>{props.item.description}</p>
      </div>
    </div>
  );
};

export default SelectProjectItem;
