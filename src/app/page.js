import Hero from "@/components/sections/hero";
import AboutUs from "@/components/sections/aboutUs";

export default function Home() {
  return (
    <div>
      <div className="pb-56 md:pb-12">
        <Hero />
      </div>
      <AboutUs />
    </div>
  );
}
