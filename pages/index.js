import Layout from "@/components/common/layout";
import BlogSection from "@/components/home/blogsection";
import SliderSection from "@/components/home/slidersection";
import Testimonials from "@/components/home/testimonials";
import VisitUsSection from "@/components/home/visitussection";
import Welcomesection from "@/components/home/welcomesection";

export default function Home() {
  return (
    <>
      <Layout>
        <Welcomesection />
        <VisitUsSection/>
        <SliderSection/>
        <BlogSection/>
        <Testimonials/>
      </Layout>
    </>
  );
}
