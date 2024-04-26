import About from "@/components/About/About";
import BannerTwo from "@/components/Banner/BannerTwo";
import ProfessionalAffiliation from "@/components/ProfessionalAffiliation/ProfessionalAffiliation";
import OurServices from "@/components/WhyChooseUs/OurServices";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
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
          <WhyChooseUs />
          {/* <RoadmapTwo />
          <TeamTwo />
          <DownloadArea />
          <Faq />
          <ContactTwo />
          <Newsletter /> */}
        </main>
      </LayoutTwo>
    </>
  );
}
