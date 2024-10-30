import React from "react";

import Hero from "@/components/sections/hero";
import AboutUs from "@/components/sections/aboutUs";
import Services from "@/components/sections/services";
import Cta1 from "@/components/sections/cta1";
import Projects from "@/components/sections/projects";
import Testimonials from "@/components/sections/testimonials";

export default function Home() {
  return (
    <>
      <div className="pb-56 md:pb-12">
        <Hero />
      </div>

      <AboutUs />

      <Cta1 />
      <Services />
      <div className="bg-gray-50">
        <Projects />
      </div>
      <Testimonials />
      <Cta1 />
    </>
  );
}
