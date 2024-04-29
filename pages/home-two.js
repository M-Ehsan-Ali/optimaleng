import About from "@/components/About/About";
import BannerTwo from "@/components/Banner/BannerTwo";
import ContactTwo from "@/components/Contact/ContactTwo";
import CountDownTwo from "@/components/CountDown/CountDownTwo";
import CounterArea from "@/components/CounterArea/CounterArea";
import DownloadArea from "@/components/DownloadArea/DownloadArea";
import Faq from "@/components/Faq/Faq";
import Newsletter from "@/components/Newsletter/Newsletter";
import RoadmapTwo from "@/components/Roadmap/SelectProject";
import TeamTwo from "@/components/Team/TeamTwo";
import LayoutTwo from "@/layouts/LayoutTwo";
import Head from "next/head";

export default function HomeTwo() {
  return (
    <>
      <Head>
        <title>Optimaleng</title>
        <meta name="description" content="" />
      </Head>

      <LayoutTwo>
        <main>
          <BannerTwo />
          <CountDownTwo />
          <About />
          {/* <WhyChooseUsTwo /> */}
          <CounterArea />
          <RoadmapTwo />
          <TeamTwo />
          <DownloadArea />
          <Faq />
          <ContactTwo />
          <Newsletter />
        </main>
      </LayoutTwo>
    </>
  );
}
