const ContactTwoInfo = () => {
  const info_items = [
    {
      src: "/img/icon/contact_icon01.svg",
      info: "7030 woodbine Ave, Office 500 Markham, ON,L3R 6G2",
    },
    {
      src: "/img/icon/contact_icon01.svg",
      info: "info@buysmartlive.com",
    },
    {
      src: "/img/icon/contact_icon01.svg",
      info: "647 948 4742",
    },
  ];

  return (
    <div className="contact-info-wrap-two wow fadeInLeft" data-wow-delay=".2s">
      <h2 className="title">Get in Touch</h2>

      {info_items.map((x, index) => (
        <div key={index} className="contact-list-item">
          {/* <div className="icon">
            <img src={x.src} alt="" />
          </div> */}
          <div className="content">
            <p>{x.info}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactTwoInfo;
