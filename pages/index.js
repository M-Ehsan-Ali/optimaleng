import About from "@/components/About/About";
import BannerTwo from "@/components/Banner/BannerTwo";
import ContactTwo from "@/components/Contact/ContactTwo";
import ProfessionalAffiliation from "@/components/ProfessionalAffiliation/ProfessionalAffiliation";
import SelectProject from "@/components/Roadmap/SelectProject";
import Testimonials from "@/components/Team/Testimonials";
import TopPartners from "@/components/TopPartners/TopPartners";
import OurProcess from "@/components/WhyChooseUs/OurProcess";
import OurServices from "@/components/WhyChooseUs/OurServices";
import LayoutTwo from "@/layouts/LayoutTwo";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Optimaleng</title>
        <meta name="description" content="" />
      </Head>

      <LayoutTwo>
        <main>
          <BannerTwo />
          {/* <CountDownTwo /> */}
          <About />
          <OurServices />
          <ProfessionalAffiliation />
          <OurProcess />
          <SelectProject />
          <Testimonials />
          <TopPartners />
          <ContactTwo />
        </main>
      </LayoutTwo>
    </>
  );
}
