const ProfessionalAffiliation = () => {
  return (
    <section id="contact" className="contact-area pt-70 pb-110">
      <div className="container">
        {/* section title */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-70">
              <h2 className="title">
                <span>Professional Affiliation</span>
              </h2>
            </div>
          </div>
        </div>

        {/* secction info */}
        <div className="contact-info-wrap">
          <div className="row justify-content-center align-items-center gap-4">
            <div className="col-lg-3 col-sm-6">
              <img src="img/images/prof_eng.png" alt="" />
            </div>
            <div className="col-lg-3 col-sm-6">
              <img src="img/images/hrai.png" alt="" />
            </div>
            <div className="col-lg-3 col-sm-6">
              <img src="img/images/bild.png" alt="" />
            </div>
          </div>
        </div>

        {/* section form */}
        <div className="contact-info-wrap">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12 text-center">
              <img src="img/images/news.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalAffiliation;
