import React from 'react';
import Hero from "@/components/Hero";
import Working from '@/components/Working';
import Safety from '@/components/Safety';
export default function Home() {
  return (
    <>
    <div className=" bg-gradient-to-b from-[#063427] to-[#84c0be]">
      <Hero />
      
    </div>
    <Working/>
    <Safety/>
    </>
  );
}
