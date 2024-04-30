import { useEffect, useState } from "react";
import OurPartnerItem from "../Roadmap/OurPartnerItem";
import SlickSlider from "../SlickSlider/SlickSlider";

const TopPartners = () => {
  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const slider_items = [
    { src: "/img/partner/Adstruct-Design-and-Build.png", alt: "" },
    { src: "/img/partner/Arani-Architecture.png", alt: "" },
    { src: "/img/partner/Arklab.png", alt: "" },
    { src: "/img/partner/ASE-Design-and-Build.png", alt: "" },
    { src: "/img/partner/ASM-Architect.png", alt: "" },
    { src: "/img/partner/BHI-Group.png", alt: "" },
    { src: "/img/partner/Brickhaus-Residential-Design.png", alt: "" },
    { src: "/img/partner/C-Architecture.png", alt: "" },
    { src: "/img/partner/CM-Designers-Engineers.png", alt: "" },
    { src: "/img/partner/Fine-Residence-Development.png", alt: "" },
    { src: "/img/partner/Gracemor-Construction.png", alt: "" },
    { src: "/img/partner/Imperial-Design.png", alt: "" },
    { src: "/img/partner/KBA-Architect.png", alt: "" },
    { src: "/img/partner/Lucid-Homes.png", alt: "" },
    { src: "/img/partner/Maserat-Developments.png", alt: "" },
    { src: "/img/partner/MD-Building-Design.png", alt: "" },
    { src: "/img/partner/Midtown-Technical-Service.png", alt: "" },
    { src: "/img/partner/n-Architecture.png", alt: "" },
    { src: "/img/partner/Noar.png", alt: "" },
    { src: "/img/partner/Optimalen-Partners-logos-2.png", alt: "" },
    { src: "/img/partner/PMP-Design-group.png", alt: "" },
    { src: "/img/partner/Pro-Vision-Architecture.png", alt: "" },
    { src: "/img/partner/Q-Architects.png", alt: "" },
    { src: "/img/partner/Quadrant-Architects.png", alt: "" },
    { src: "/img/partner/RDA-Designs.png", alt: "" },
    { src: "/img/partner/Shafe-Inc.png", alt: "" },
    { src: "/img/partner/Smart-Structural-Solutions.png", alt: "" },
    { src: "/img/partner/Tala-Rose-Developments.png", alt: "" },
    { src: "/img/partner/TBM-Engineers.png", alt: "" },
    { src: "/img/partner/Untitled-design-2-1.png", alt: "" },
    { src: "/img/partner/Untitled-design-3.png", alt: "" },
    { src: "/img/partner/Untitled-design-4.png", alt: "" },
    { src: "/img/partner/Untitled-design-5.png", alt: "" },
    { src: "/img/partner/Untitled-design-6.png", alt: "" },
    { src: "/img/partner/Untitled-design-7.png", alt: "" },
    { src: "/img/partner/Untitled-design-8.png", alt: "" },
    { src: "/img/partner/Untitled-design-9.png", alt: "" },
    { src: "/img/partner/Untitled-design-10.png", alt: "" },
    { src: "/img/partner/Untitled-design-11.png", alt: "" },
    { src: "/img/partner/Untitled-design-12.png", alt: "" },
    { src: "/img/partner/Untitled-design-13.png", alt: "" },
    { src: "/img/partner/Untitled-design-14.png", alt: "" },
    { src: "/img/partner/Untitled-design-15.png", alt: "" },
  ];

  const initalState = 0;
  const [count, setCount] = useState(initalState);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((old) => (old == 6 ? 0 : old + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const toMultiply = 100 / slider_items.length;

  return (
    <section className="choose-area pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section-title text-center mb-50">
              <h2 className="title">
                <span>Our Partners</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row choose-active">
          <SlickSlider settings={slickSettings}>
            {slider_items.map((item, index) => (
              <div key={index} className="col-lg-3">
                <OurPartnerItem item={item} />
              </div>
            ))}
          </SlickSlider>
        </div>

        <div
          className="slide-progress"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <span className="slider__label sr-only"></span>
        </div>
      </div>
    </section>
  );
};

export default TopPartners;
