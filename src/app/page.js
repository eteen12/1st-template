import React from "react";

import Hero from "@/components/sections/hero";
import AboutUs from "@/components/sections/aboutUs";
import Services from "@/components/sections/services";

export default function Home() {
  return (
    <div>
      <div className="pb-56 md:pb-12">
        <Hero />
      </div>
      <AboutUs />
      <div className="h-screen">
        <Services />
      </div>
    </div>
  );
}
