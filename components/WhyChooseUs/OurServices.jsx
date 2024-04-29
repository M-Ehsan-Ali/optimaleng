const OurServices = () => {
  return (
    <section id="about" className="about-area-two">
      <div className="container custom-container-four">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div
              className="about-img-two text-center wow fadeInLeft"
              data-wow-delay=".2s"
            >
              <img src={"/img/images/ourService.png"} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="about-content-two wow fadeInRight"
              data-wow-delay=".2s"
            >
              <div className="section-title section-title-two mb-15">
                <h1 className="sub-title">Our Services</h1>
              </div>
            </div>
            <div className="about-list">
              <ul>
                <li>
                  <i className="fas fa-circle"></i>
                  <span style={{ marginLeft: 8 }}>MECHANICAL</span>
                </li>
                <li>
                  <i className="fas fa-circle"></i>
                  <span style={{ marginLeft: 8 }}>ELECTRICAL thought</span>
                </li>
                <li>
                  <i className="fas fa-circle"></i>
                  <span style={{ marginLeft: 8 }}>ENERGY MODELING</span>
                </li>
                <li>
                  <i className="fas fa-circle"></i>
                  <span style={{ marginLeft: 8 }}>BIM</span>
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

export default OurServices;
