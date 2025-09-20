'use client';
import { useEffect } from 'react';
import Link from 'next/link';

const PlatformFeaturesSection = () => {
  useEffect(() => {
    const section = document.getElementById('platform-features-component');
    if (!section) return;

    const topBar = section.querySelector('.top-bar');
    const mainContent = section.querySelector('.main-content');
    const tabs = topBar?.querySelectorAll('span');
    const arrows = topBar?.querySelectorAll('.arrow');
    const cards = mainContent?.querySelectorAll('.content-card');

    if (!tabs || !cards || !mainContent) return;

    const updateActiveStates = (activeIndex: number) => {
      tabs.forEach((tab, i) => tab.classList.toggle('active', i === activeIndex));
      arrows?.forEach((arrow, i) => arrow.classList.toggle('active', i < activeIndex));
    };

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const index = parseInt(tab.getAttribute('data-index') || '0', 10);
        const targetCard = cards[index] as HTMLElement;
        if (targetCard) {
          mainContent.scrollTo({ left: targetCard.offsetLeft, behavior: 'smooth' });
        }
      });
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0', 10);
          updateActiveStates(index);
        }
      });
    }, { root: mainContent, threshold: 0.6 });

    cards.forEach(card => observer.observe(card));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="platform-features-component" className="page-section">
      <div className="container">
        <h1 className="main-header">Whilter&apos;s Difference</h1>
        <div className="top-bar" id="featuresTopBar">
          <span data-index="0" className="active">Personalization</span>
          <div className="arrow"></div>
          <span data-index="1">Pathways</span>
          <div className="arrow"></div>
          <span data-index="2">Creativity</span>
          <div className="arrow"></div>
          <span data-index="3">Distribution</span>
          <div className="arrow"></div>
          <span data-index="4">Security</span>
        </div>
        <div className="main-content" id="featuresMainContent">
          <div className="content-card" data-index="0">
            <div className="text-content">
              <h1>Smart Personalization</h1>
              <p>Our AI crafts truly 1:1 smart videos. We dynamically weave user data—name, location, behavior—into every frame, creating authentic connections that build loyalty.</p>
            </div>
            <div className="media-content">
              <div className="dynamic-icon"></div>
            </div>
          </div>
          <div className="content-card" data-index="1">
            <div className="text-content">
              <h1>Interactive Pathways</h1>
              <p>Transform viewers into participants. We embed clickable, choice-driven pathways into every video, creating a unique journey that adapts to user decisions and drives conversion.</p>
            </div>
            <div className="media-content">
              <div className="dynamic-icon"></div>
            </div>
          </div>
          <div className="content-card" data-index="2">
            <div className="text-content">
              <h1>Automated Creativity</h1>
              <p>Launch cinematic campaigns, instantly. Our CreaTech engine automatically transforms brand assets into millions of unique smart videos, collapsing production timelines from months to minutes.</p>
            </div>
            <div className="media-content">
              <div className="dynamic-icon"></div>
            </div>
          </div>
          <div className="content-card" data-index="3">
            <div className="text-content">
              <h1>Integrated Distribution</h1>
              <p>Reach users with perfect timing and context. Our platform integrates into your stack, triggering smart videos across any channel—In-App, RCS, WhatsApp—at the most critical moments.</p>
            </div>
            <div className="media-content">
              <div className="dynamic-icon"></div>
            </div>
          </div>
          <div className="content-card" data-index="4">
            <div className="text-content">
              <h1>Fortress-Grade Security</h1>
              <p>Your data is our priority. Whilter AI is built on a foundation of fortress-grade security, compliant with ISO 27001, SOC 2, and HIPAA standards to protect your customer data with zero compromises.</p>
            </div>
            <div className="media-content">
              <div className="dynamic-icon"></div>
            </div>
          </div>
        </div>
      </div>
      <Link href="#video-types-section" className="scroll-down-arrow">↓</Link>
    </section>
  );
};

export default PlatformFeaturesSection;