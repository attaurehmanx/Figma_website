import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Services from "@/app/components/Services";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="bg-stone-900 mx-5 rounded-md">
    <Navbar/>
    <Hero/>
    <Services/>
    <Contact/>
    <Footer/>
    </div>
  );
}
