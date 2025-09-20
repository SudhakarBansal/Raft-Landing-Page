'use client';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section id="hero-section" className="page-section">
      <div className="container">
        <h1 className="headline">Make Black Friday Great Again</h1>
        <p className="subhead">Crush your Black Friday targets: Content that wins, revenue that sticks.</p>
        <Link href="#samples-section" className="cta-button">See How</Link>
      </div>
      <Link href="#samples-section" className="scroll-down-arrow">↓</Link>
    </section>
  );
};

export default HeroSection;