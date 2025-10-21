import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="custom-height relative">
      <div className="container z-50 mx-auto my-auto flex h-full flex-col justify-center px-5 text-white md:px-10 xl:px-28 3xl:px-5">
        <h1 className="text-8xl font-bold capitalize leading-[1.2] tracking-tight 3xl:text-8xl 3xl:leading-[1.2]">
          Order here for your favourite
          <br />
          Get your delivery shortly
        </h1>
        <p className="mt-8 max-w-[600px] text-xl 3xl:text-2xl">
          Indulgence refined. Chocolates of distinction, delivered to your door{" "}
          <br />
          Where sophistication meets sweetness — your premium chocolates,
          delivered swiftly...
        </p>
        <Button variant="secondary" className="mt-8 w-fit px-8">
          Shop Now
        </Button>
      </div>

      <Image
        src="/chocolate.jpg"
        alt="Hero Chololate"
        fill
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/30" />
    </section>
  );
}
