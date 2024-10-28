import React from "react";

import Hero from "@/components/sections/hero";
import AboutUs from "@/components/sections/aboutUs";
// import Services from "@/components/sections/services";
import Cta1 from "@/components/sections/cta1";

export default function Home() {
  return (
    <div>
      <div className="pb-56 md:pb-12">
        <Hero />
      </div>
      <AboutUs />
      <Cta1 />
    </div>
  );
}
