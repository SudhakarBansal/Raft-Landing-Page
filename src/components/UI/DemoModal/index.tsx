'use client';
import { useEffect } from 'react';

const DemoModal = () => {
  useEffect(() => {
    const modalBackdrop = document.getElementById('demoModal');
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    const handleBackdropClick = (e: MouseEvent) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    };

    if (modalBackdrop) {
      modalBackdrop.addEventListener('click', handleBackdropClick);
    }
    
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      if (modalBackdrop) {
        modalBackdrop.removeEventListener('click', handleBackdropClick);
      }
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const closeModal = () => {
    const modal = document.getElementById('demoModal');
    if (modal) modal.classList.remove('show');
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert('Thanks!');
    closeModal();
  };

  return (
    <div className="modal-backdrop" id="demoModal">
      <div className="modal">
        <div className="modal-header">
          <h2 id="modalTitle">Personalize a Black Friday demo</h2>
          <button className="close-button" onClick={closeModal}>&times;</button>
        </div>
        <form onSubmit={handleSubmit}>
          <input className="form-input" type="email" placeholder="Work email" required />
          <input className="form-input" type="text" placeholder="Company" required />
          <select className="form-select" required>
            <option value="" disabled>Select your role</option>
            <option value="performance">Performance Marketing</option>
          </select>
          <button className="form-button" type="submit">Request my demo</button>
        </form>
      </div>
    </div>
  );
};

export default DemoModal;