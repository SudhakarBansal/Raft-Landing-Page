'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const VideoTypesSection = () => {
  useEffect(() => {
    const section = document.querySelector('#video-types-section');
    if (!section) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const elementsToAnimate = section.querySelectorAll(".feature-card");
    elementsToAnimate.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="video-types-section">
      <div className="main-container">
        <div className="header-section">
          <h1>Stop Hiring Different Teams For Every Video Type</h1>
          <p>Traditional production forces you to work with separate crews, budgets, and timelines for cinematic ads, UGC content, and personalized videos. We deliver all formats through one AI-powered solution.</p>
        </div>
        <div className="features-section">
          <article className="feature-card">
            <div className="card-image">
              <Image 
                src="https://assets-global.website-files.com/64b555432b03901b5768e233/666c00223759922e967a57c5_Cinematic-p-800.png" 
                alt="Cosmetic ad"
                width={400}
                height={300}
              />
            </div>
            <div className="card-text">
              <span className="category-label">Cinematic/Lifestyle Videos</span>
              <h2>Cinematic Videos That Convert</h2>
              <p>With us, you get videos that captivate and convert with striking visuals, dynamic storytelling, and polished production that drive real business results.</p>
              <Link href="#" className="cta-button">Book a Free Strategy Call →</Link>
            </div>
          </article>
          <article className="feature-card">
            <div className="card-image">
              <Image 
                src="https://assets-global.website-files.com/64b555432b03901b5768e233/666c002220d58a52db9a35e0_Brand-p-800.png" 
                alt="Robot vacuum"
                width={400}
                height={300}
              />
            </div>
            <div className="card-text">
              <span className="category-label">Brand Storytelling Videos</span>
              <h2>Brand Stories That Resonate</h2>
              <p>With us, you can recreate existing videos or create fresh brand narratives using AI. Update branding, change voice-overs, swap avatars, or localize content for different markets without reshoots.</p>
              <Link href="#" className="cta-button">Schedule a call →</Link>
            </div>
          </article>
          <article className="feature-card">
            <div className="card-image">
              <Image 
                src="https://assets-global.website-files.com/64b555432b03901b5768e233/666c002206833d7b7e6144e5_UGC-p-800.png" 
                alt="UGC content"
                width={400}
                height={300}
              />
            </div>
            <div className="card-text">
              <span className="category-label">User Generated Content (UGC)</span>
              <h2>Authentic Content That Builds Trust</h2>
              <p>Our AI generates authentic, on-brand UGC-style videos with diverse avatars and settings in minutes, giving you a scalable content engine that builds trust and engages your audience.</p>
              <Link href="#" className="cta-button">See Examples →</Link>
            </div>
          </article>
        </div>
      </div>
      <Link href="#how-it-works-component" className="scroll-down-arrow">↓</Link>
    </section>
  );
};

export default VideoTypesSection;