"use client";

import { useEffect, useState } from "react";

import { supabase } from "@/lib/supabase";

import Navbar from "@/components/navigation/Navbar";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Hero from "@/components/sections/Hero";
import HeroCard from "@/components/results/HeroCard";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import Statistics from "@/components/sections/Statistics";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

type Jackpot = {
  amount: string;
  next_draw: string;
  time: string;
};

export default function Home() {
  const [jackpot, setJackpot] = useState<Jackpot | null>(null);

  useEffect(() => {
    loadJackpot();
  }, []);

  async function loadJackpot() {
    const { data } = await supabase
      .from("jackpot")
      .select("*")
      .eq("id", 1)
      .maybeSingle();

    setJackpot(data);
  }

  return (
    <>
      <Navbar />

      <AnnouncementBar />

      <Hero />

      <Features />

      <HowItWorks />

      <Statistics />

      <Testimonials />

      <FAQ />

      <CTA />


    </>
  );
}