const MissionVisionAndPrinciples = () => {
  return (
    <section className="about-area-two">
      <div className="container custom-container-four">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div
              className="about-img-two text-center wow fadeInLeft"
              data-wow-delay=".2s"
            >
              <div
                className="about-content-two wow fadeInRight"
                data-wow-delay=".2s"
              >
                <div className="section-title section-title-two mb-15">
                  <h1 className="sub-title">Mission And Vision</h1>
                </div>
                <p>
                  At Optimal Engineering, we always aim for excellence in our
                  work and make the individual needs of our clients a priority.
                  Our goal is to provide superior mechanical and electrical
                  design services for a variety of construction projects. While
                  our objective is to provide comfort for every space we design
                  for, our ultimate goal is to complete each project within the
                  given time-frame and budget without comprising safety. Our
                  vision is to become one of the most reliable and reputable
                  engineering firms in Ontario.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-title section-title-two mb-15">
              <h1 className="sub-title">Principles Of Our Work</h1>
            </div>
            <div className="about-list">
              <ul>
                <li>
                  <i className="fas fa-circle"></i>
                  <span style={{ marginLeft: 8 }}>Code compliant design</span>
                </li>
                <li>
                  <i className="fas fa-circle"></i>
                  <span style={{ marginLeft: 8 }}>
                    Fully coordinated design
                  </span>
                </li>
                <li>
                  <i className="fas fa-circle"></i>
                  <span style={{ marginLeft: 8 }}>
                    On time and budget delivery
                  </span>
                </li>
                <li>
                  <i className="fas fa-circle"></i>
                  <span style={{ marginLeft: 8 }}>
                    Exceptional customer service
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="about-shape-wrap">
        <img
          src={"/img/images/about_shape01.png"}
          alt=""
          className="shape-one"
        />
        <img
          src={"/img/images/about_shape02.png"}
          alt=""
          className="shape-two rotateme"
        />
      </div>
    </section>
  );
};

export default MissionVisionAndPrinciples;
