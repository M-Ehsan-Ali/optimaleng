const About = () => {
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
                  <h1 className="sub-title">About Us</h1>
                </div>
                <p>
                  Optimal Engineering is a Toronto based engineering firm
                  offering mechanical and{" "}
                  <span style={{ color: "#00c4f4" }}>
                    electrical design services
                  </span>{" "}
                  for{" "}
                  <span style={{ color: "#00c4f4" }}>
                    residential, commercial
                  </span>{" "}
                  and industrial projects. Our team consists of licensed
                  professional engineers, experienced designers and detail
                  oriented drafters.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img src={"/img/images/h2_about_img.jpeg"} alt="" />
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

export default About;
