const Banner = ({ title, src }) => {
  return (
    <section className="banner-area-two">
      <div className="banner-bg-two"></div>
      <div className="container custom-container-four">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="banner-content text-center">
              <h2 className="title wow fadeInDown" data-wow-delay=".2s">
                {title}
              </h2>

              <img src={src} width={"100%"} alt="img" />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="banner-social-wrap">
        <ul>
          <li>
            <a href="#" className="banner-social-link">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <span>LinkedIn</span>
          </li>
          <li>
            <a href="#" className="banner-social-link">
              <i className="fab fa-twitter"></i>
            </a>
            <span>Twitter</span>
          </li>
          <li>
            <a href="#" className="banner-social-link">
              <i className="fab fa-pinterest"></i>
            </a>
            <span>Pinterest</span>
          </li>
          <li>
            <a href="#" className="banner-social-link">
              <i className="fab fa-instagram"></i>
            </a>
            <span>Instagram</span>
          </li>
        </ul>
      </div>
      <div className="banner-scroll">
        <span>Scroll down</span>
        <Link href="about?#about" data-target="about">
          <img src={"/img/icon/scroll_icon.svg"} alt="" />
        </Link>
      </div> */}
    </section>
  );
};

export default Banner;
