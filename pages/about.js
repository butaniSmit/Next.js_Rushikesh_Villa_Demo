import Leadershipsec from "@/components/about/leadershipsec";
import Layout from "@/components/common/layout";
import HeroSection from "@/components/hotel/herosection";
import { HotelGallery } from "@/components/hotel/hotelgallery";

export default function About (){
    return(
        <Layout>
            <HeroSection/>
            <HotelGallery/>
            <Leadershipsec/>
        </Layout>
    )
}