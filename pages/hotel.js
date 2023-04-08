import Layout from "@/components/common/layout";
import HeroSection from "@/components/hotel/herosection";
import HotelFeatures from "@/components/hotel/hotelfeatures";
import { HotelGallery } from "@/components/hotel/hotelgallery";
import HotelIntro from "@/components/hotel/hotelintro";

export default function Hotel (){
    return(
        <Layout>
            <HeroSection/>
            <HotelIntro/>
            <HotelGallery/>
            <HotelFeatures/>
        </Layout>
    )
}