"use client";
import React from "react";

import Navigation from "./_components/header";
import Hero from "./_components/hero";
import SpecialProducts from "./_components/SpecialProducts";
const HomePage = () => {
  return (
    <>
      <Navigation />
      <Hero/>
      <SpecialProducts/>
    </>
  );
};

export default HomePage;
