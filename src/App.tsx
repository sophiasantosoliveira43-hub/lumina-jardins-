import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SpecsGrid } from './components/SpecsGrid';
import { GallerySection } from './components/GallerySection';
import { FeaturesSection } from './components/FeaturesSection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { FloorPlanSection } from './components/FloorPlanSection';
import { LocationSection } from './components/LocationSection';
import { InvestmentCalculator } from './components/InvestmentCalculator';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { StickyBottomBar } from './components/StickyBottomBar';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col selection:bg-amber-500 selection:text-neutral-950">
      {/* Top Fixed Header with Navigation and Tenho Interesse CTA */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero with High-Impact Imagery, Value Proposition & Conversion Button */}
        <HeroSection />

        {/* Key Numerical Specifications */}
        <SpecsGrid />

        {/* Filterable Image Gallery with Lightbox Viewer */}
        <GallerySection />

        {/* High Standard Construction & Finishing Features */}
        <FeaturesSection />

        {/* Condominium Amenities & Leisure */}
        <AmenitiesSection />

        {/* Interactive Floor Plans (3 Suítes vs Living Ampliado) */}
        <FloorPlanSection />

        {/* Location & Neighborhood Highlights */}
        <LocationSection />

        {/* Financial & Installment Simulator */}
        <InvestmentCalculator />

        {/* Frequently Asked Questions Accordion */}
        <FaqSection />

        {/* Final Conversion High-Impact Section */}
        <CtaBanner />
      </main>

      {/* Sticky Bottom Bar on Scroll */}
      <StickyBottomBar />

      {/* Footer with Legal & CRECI */}
      <Footer />
    </div>
  );
}
