import AboutBanner from "@/components/BannerForAbout/AboutBanner";
import MissionVisionAndPrinciples from "@/components/MissionVisionAndPrinciples/MissionVisionAndPrinciples";
import ProfessionalAffiliation from "@/components/ProfessionalAffiliation/ProfessionalAffiliation";
import Testimonials from "@/components/Team/Testimonials";
import TopPartners from "@/components/TopPartners/TopPartners";
import WhoWeAre from "@/components/WhoWeAre/WhoWeAre";
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
          <AboutBanner />
          <WhoWeAre />
          <MissionVisionAndPrinciples />
          <Testimonials />
          <TopPartners />
          <ProfessionalAffiliation />
          {/* <OurServices />
          <OurProcess />
          <SelectProject />
          <ContactTwo /> */}
        </main>
      </LayoutTwo>
    </>
  );
}
