import Hero from "@/components/home/Hero/Hero";
import AppPreview from "@/components/home/AppPreview";
import Statistics from "@/components/home/Statistics/Statistics";
import PlatformServices from "@/components/home/PlatformServices";
import WhyBeem from "@/components/home/WhyBeem";
import Pricing from "@/components/home/Pricing";
import DownloadApp from "@/components/home/DownloadApp";
import BeemPlatform from "@/components/home/BeemPlatform";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
    return (
        <>
            <Navbar />

            <main>
                <Hero />
                <AppPreview />
                <Statistics />
                <PlatformServices />
                <WhyBeem />
                <Pricing />
                <DownloadApp />
                <BeemPlatform />
            </main>

            <Footer />
        </>
    );
}