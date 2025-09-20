'use client';
import Link from 'next/link';

const FunnelSection = () => {
  return (
    <section id="funnel-section" className="page-section">
      <div className="container">
        <h1 className="headline">Nobody will leave your funnel if you are with Whilter.</h1>
        <p className="subhead" style={{ marginTop: '32px' }}>
          8x conversions, 10x engagement, and 4x brand recall—while cutting acquisition costs by 50%.
        </p>
      </div>
      <Link href="#platform-features-component" className="scroll-down-arrow">↓</Link>
    </section>
  );
};

export default FunnelSection;