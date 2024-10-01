import React from 'react';
import Hero from "@/components/Hero";
import Working from '@/components/Working';
import Safety from '@/components/Safety';
export default function Home() {
  return (
    <>
    <div className=" bg-gradient-to-b from-[#2d4067] to-[#717ea0]">
      <Hero />
      
    </div>
    <Working/>
    <Safety/>
    </>
  );
}
