import { useEffect, useState } from "react";
import SlickSlider from "../SlickSlider/SlickSlider";
import WhyChooseUsItem from "./WhyChooseUsItem";

const OurProcess = () => {
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
    {
      src: "/img/icon/choose_icon01.png",
      alt: "",
      link: "/",
      title: "Planning",
      description:
        "The project deliverables and requirements are defined, and the project schedule is created.",
    },
    {
      src: "/img/icon/choose_icon02.png",
      alt: "",
      link: "/",
      title: "Design Development",
      description:
        "During this stage many of the prominent features of the design are decided and preliminary design is created.",
    },
    {
      src: "/img/icon/choose_icon03.png",
      alt: "",
      link: "/",
      title: "Coordination",
      description:
        "Through a collaborative process with the architect, interior designer, builder and/or contractor of the project, the proposed design is fully coordinated in order to attain the satisfaction of the client.",
    },
    {
      src: "/img/icon/choose_icon04.png",
      alt: "",
      link: "/",
      title: "Deliverable",
      description:
        "The final design is prepared according to the feedback received from the stockholders of the project.",
    },
    {
      src: "/img/icon/choose_icon01.png",
      alt: "",
      link: "/",
      title: "Construction Review",
      description:
        "Thorough assessment of the installation during various stages of the construction, we ensure that the design is correctly and accurately implemented.",
    },
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
                <span>Our Proccess</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row choose-active">
          <SlickSlider settings={slickSettings}>
            {slider_items.map((item, index) => (
              <div key={index} className="col-lg-3">
                <WhyChooseUsItem item={item} />
              </div>
            ))}
          </SlickSlider>
        </div>

        <div className="slide-progressbar">
          <div
            style={{
              // width: `${count * toMultiply}%`,
              backgroundSize: `${count * toMultiply}% 100%`,
            }}
            className="slide-filler"
          />
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

export default OurProcess;
