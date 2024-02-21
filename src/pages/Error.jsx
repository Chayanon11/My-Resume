import React from "react";
import { HeaderComponent } from "../components/Header";
import { HeroComponent } from "../components/Hero";

export function ErrorComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#60072c] via-[#120b2e] to-[#091498] px-8 md:px-14 lg:px-36 pb-10 pt-7 ">
      <HeaderComponent />

      <HeroComponent />
    </div>
  );
}
