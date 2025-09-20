'use client';
import Link from 'next/link';

const SamplesSection = () => {
  return (
    <section id="samples-section" className="page-section">
      <div className="container">
        <h1 className="headline">Ignite Your Campaign ROI</h1>
        <p className="subhead">
          ... by <span className="highlight">BRINGING LIFE TO EVERY USER INTERACTION</span>
        </p>
        <div className="sample-carousel-wrapper">
          <div className="sample-card">
            <div className="sample-placeholder">
              <span className="industry-tag">Retail</span>
              <span>Video 1</span>
            </div>
            <p className="sample-description">Dynamic ads for customer acquisition.</p>
          </div>
          <div className="sample-card">
            <div className="sample-placeholder">
              <span className="industry-tag">FinTech</span>
              <span>Video 2</span>
            </div>
            <p className="sample-description">Personalized explainer videos for onboarding.</p>
          </div>
          <div className="sample-card">
            <div className="sample-placeholder">
              <span className="industry-tag">DTC</span>
              <span>Video 3</span>
            </div>
            <p className="sample-description">Tailored videos boosting e-commerce conversions.</p>
          </div>
        </div>
      </div>
      <Link href="#funnel-section" className="scroll-down-arrow">↓</Link>
    </section>
  );
};

export default SamplesSection;