import ContactTwo from "@/components/Contact/ContactTwo";
import Banner from "@/components/CustomBanner/Banner";
import ProfessionalAffiliation from "@/components/ProfessionalAffiliation/ProfessionalAffiliation";
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
          <Banner title={"Contact us"} src={"/img/images/contact.jpg"} />
          <ProfessionalAffiliation />
          {/* <WhoWeAre />
          <MissionVisionAndPrinciples />
          <Testimonials />
          <TopPartners />
          <OurServices />
          <OurProcess />
          <SelectProject /> */}
          <ContactTwo />
        </main>
      </LayoutTwo>
    </>
  );
}
