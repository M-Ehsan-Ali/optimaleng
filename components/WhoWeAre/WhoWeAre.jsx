const WhoWeAre = () => {
  return (
    <section id="about" className="about-area-two">
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
                  <h1 className="sub-title">Who We Are</h1>
                </div>
                <p>
                  Optimal Engineering is a Toronto based engineering firm
                  offering energy modeling, mechanical and electrical design
                  services for residential, commercial and industrial projects.
                  Our team consists of licensed professional engineers,
                  experienced designers and detail oriented drafters.
                </p>
                <p>
                  Having dealt with most municipal authorities across Ontario,
                  we are confident in our capabilities to generate mechanical
                  and electrical designs that are code compliant and meet the
                  specific local requirements and standards for different
                  cities.
                </p>
                <p>
                  Our engineering team offers top-notch design services for a
                  wide variety of projects. Our team works closely with
                  architects, builders, contractors and home owners to ensure
                  each project is completed efficiently and effectively.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img src={"/img/images/h2_about_img.png"} alt="" />
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

export default WhoWeAre;
