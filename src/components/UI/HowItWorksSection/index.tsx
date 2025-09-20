'use client';
import { useEffect } from 'react';

const HowItWorksSection = () => {
  useEffect(() => {
    const section = document.getElementById('how-it-works-component');
    if (!section) return;

    const contentData = {
      1: { 
        title: 'Target Your Metric', 
        description: 'Pinpoint your core objective. We tailor every interaction to crush key metrics—slashing CAC, boosting LTV, and driving retention.' 
      },
      2: { 
        title: 'Craft the Experience', 
        description: 'Our engine strategizes and generates dynamic, interactive videos/Image. Turn passive viewers into active participants and drive measurable results.' 
      },
      3: { 
        title: 'Launch Anywhere', 
        description: 'Reach your audience on their terms. Deploy your interactive experience instantly across any channel—in-app, RCS, email, and more.' 
      }
    };

    const nodes = section.querySelectorAll('.flow-node');
    const titleElement = section.querySelector('#content-title');
    const descriptionElement = section.querySelector('#content-description');
    const contentCard = section.querySelector('.content-card');
    const centralIcons = section.querySelectorAll('.card-icon');
    const lines = {
      1: section.querySelector('#line-1'),
      2: section.querySelector('#line-2'),
      3: section.querySelector('#line-3')
    };

    nodes.forEach(node => {
      node.addEventListener('click', () => {
        const tabId = node.getAttribute('data-tab') as keyof typeof contentData;
        
        nodes.forEach(n => n.classList.remove('active'));
        node.classList.add('active');
        
        centralIcons.forEach(icon => icon.classList.remove('active'));
        const targetIcon = section.querySelector(`#icon-${tabId}`);
        if (targetIcon) targetIcon.classList.add('active');

        Object.values(lines).forEach(l => l?.classList.remove('active'));
        const targetLine = lines[parseInt(tabId)];
        if (targetLine) targetLine.classList.add('active');

        contentCard?.classList.add('content-fade');
        setTimeout(() => {
          if (titleElement) titleElement.textContent = contentData[tabId].title;
          if (descriptionElement) descriptionElement.textContent = contentData[tabId].description;
          contentCard?.classList.remove('content-fade');
        }, 150);
      });
    });

    // Initialize with first node
    if (nodes[0]) {
      (nodes[0] as HTMLElement).click();
    }
  }, []);

  const openModal = () => {
    const modal = document.getElementById('demoModal');
    if (modal) modal.classList.add('show');
  };

  return (
    <section id="how-it-works-component" className="page-section">
      <h1 className="main-heading">HOW WHILTER<br />VIDEO WORKS</h1>
      <div className="flow-container">
        <svg className="lines-svg">
          <path id="line-1" className="line active" d="M 120 300 C 250 300, 350 300, 350 300"></path>
          <path id="line-2" className="line" d="M 600 540 C 600 450, 600 380, 600 375"></path>
          <path id="line-3" className="line" d="M 1080 300 C 950 300, 850 300, 850 300"></path>
        </svg>
        <div className="content-card">
          <div className="card-icon-container">
            <div id="icon-1" className="card-icon active"></div>
            <div id="icon-2" className="card-icon"></div>
            <div id="icon-3" className="card-icon"></div>
          </div>
          <h2 id="content-title"></h2>
          <p id="content-description"></p>
        </div>
        <div className="flow-node active" id="node-1" data-tab="1">
          <div className="node-shape">
            <div className="node-number">1</div>
            <div className="node-label">DEFINE</div>
          </div>
        </div>
        <div className="flow-node" id="node-2" data-tab="2">
          <div className="node-shape">
            <div className="node-number">2</div>
            <div className="node-label">CREATE</div>
          </div>
        </div>
        <div className="flow-node" id="node-3" data-tab="3">
          <div className="node-shape">
            <div>
              <div className="node-number">3</div>
              <div className="node-label">DEPLOY</div>
            </div>
          </div>
        </div>
      </div>
      <button className="cta-button" style={{ marginTop: '40px' }} onClick={openModal}>
        Request a Demo
      </button>
    </section>
  );
};

export default HowItWorksSection;