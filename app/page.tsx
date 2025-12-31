
import Footer from "@/components/Footer";
import HeroSection from "@/components/Herosection";
import Navbar from "@/components/Navbar";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex flex-col w-screen">
      <Navbar />
      <HeroSection />
      <Separator orientation="horizontal" />
      <Footer />
    </div>
  );
}
