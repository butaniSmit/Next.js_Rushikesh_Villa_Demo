import Blogs from "@/components/blog/blogs";
import BlogHeroSection from "@/components/blog/herosection";
import Layout from "@/components/common/layout";

export default function Blog(){
    return(
        <Layout>
            <BlogHeroSection/>
            <Blogs/>
        </Layout>

    )
}