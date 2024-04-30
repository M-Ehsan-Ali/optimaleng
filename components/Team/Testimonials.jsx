import { useEffect, useState } from "react";
import SlickSlider from "../SlickSlider/SlickSlider";
import TestimonialItem from "../WhyChooseUs/TestimonialItem";

const Testimonials = () => {
  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1920,
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
      src: "/img/icon/tsml-1.png",
      alt: "",
      title: "David E. / Pro Vision Architecture",
      description:
        "We are an architectural firm and we have been working with Optimal Engineering for all our mechanical needs for a number of years. It has been a great experience to work with a professional and energetic team that take care of project without any hassle. We no longer need to run after the mechanical engineer to get something done. In short they are great to work with and very reasonable in pricing. We completely indorse them and recommend them for anyone who needs a good consultant in their design team. All the best wishes for their growth and success.",
    },
    {
      src: "/img/icon/tsml-2.png",
      alt: "",
      title: "Rick J / MIDTOWN Technical Services ",
      description:
        "The Optimal Engineers and Designers are professional and very passionate about their work. We have completed several HVAC and plumbing projects with the Optimal Engineering group and their work has been very well organized, ensuring that all the requirements are addressed and meet general Engineering practice in accordance with the provincial building codes. MIDTOWN is pleased to have Optimal as part of our Consulting Team and hope to continue building our working relationship moving forward on future projects to come.  We highly recommend that potential clients consider using Optimal Engineering for their future Consulting Services.",
    },
    {
      src: "/img/icon/tsml-3.png",
      alt: "",
      title: "Sean K. / Studio Quadrant ",
      description:
        "We have been using the services provided by Optimal Engineering Inc. within past 2 years. From the beginning they have been a good partner to work with. Optimal Engineering is very satisfied with HVAC design services. They have met all our deadlines and exceeded our expectations in quality. We believe that this partnership brings value to both companies and value will only grows as the relationship evolves.",
    },
    {
      src: "/img/icon/tsml-4.png",
      alt: "",
      title: "Pamir R / Lucid Homes",
      description:
        " I am the owner of Lucid Homes, a custom home design company and I would like to say how pleased we are with the excellent service of Optimal Engineering; we have been working with Optimal for a few years. From start to finish, it has been a great experience working with them. They are quick to accommodate us with our requests for HVAC from small to large. They are responsive with any questions or concerns we may have in the process of the HVAC drawings. Optimal Engineering is well-mannered, very professional, and knowledgeable. The speed and quality of work is unmatched and we aim to continue working with Optimal Engineering for many years to come.",
    },
    {
      src: "/img/icon/tsml-5.png",
      alt: "",
      title: "Ron H",
      description:
        "I am writing on be half of (PMP Design Group) to tell you how pleased we are with the excellent service Optimal Engineering has provide us. It has been a great experience working with the engineers, we always get quick response to our requests. Their service is timely and efficient.",
    },
    {
      src: "/img/icon/tsml-6.png",
      alt: "",
      title: "Michael Z. / Fine Residence Development",
      description:
        "It was an absolute pleasure working with Optimal Engineering. They are very professional and great to work with! They are very responsive and knowledgeable about HVAC design. Optimal Engineering exceeds my expectations and will definitely be working with them again in the future. Highly recommend!!",
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
                <span>Testimonials</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row choose-active">
          <SlickSlider settings={slickSettings}>
            {slider_items.map((item, index) => (
              <div key={index} className="col-lg-3">
                <TestimonialItem item={item} />
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

export default Testimonials;
