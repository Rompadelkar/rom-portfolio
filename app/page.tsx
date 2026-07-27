import React from 'react';
import ThreeBackground from '@/components/background/three-background';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { FeaturedProject } from '@/components/sections/featured-project';
import { Projects } from '@/components/sections/projects';
import { Skills } from '@/components/sections/skills';
import { About } from '@/components/sections/about';
import { Blog } from '@/components/sections/blog';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between selection:bg-blue-500/30 selection:text-blue-200">
      <ThreeBackground />
      <Navbar />
      <main className="flex-1 space-y-12 sm:space-y-20 relative z-10">
        <Hero />
        <FeaturedProject />
        <Projects />
        <Skills />
        <About />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
