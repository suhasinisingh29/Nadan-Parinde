// Toggle claim forms on button click
document.querySelectorAll('.claim-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const formId = btn.getAttribute('aria-controls');
      const form = document.getElementById(formId);
      if (form.hasAttribute('hidden')) {
        form.removeAttribute('hidden');
        btn.setAttribute('aria-expanded', 'true');
        btn.textContent = 'Close Form';
      } else {
        form.setAttribute('hidden', '');
        btn.setAttribute('aria-expanded', 'false');
        btn.textContent = 'Claim';
      }
    });
  });
  
  // Form submission stub for claim forms - prevent reload and show alert
  document.querySelectorAll('.claim-form').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Claim form submitted! Staff will contact you soon.');
      form.setAttribute('hidden', '');
      const btn = document.querySelector(\[aria-controls="\${form.id}"]\);
      if (btn) {
        btn.setAttribute('aria-expanded', 'false');
        btn.textContent = 'Claim';
      }
      form.reset();
    });
  });
  
  // Report form stub
  const reportForm = document.querySelector('.report form');
  if (reportForm) {
    reportForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for reporting the item! Our staff will review and update the records.');
      e.target.reset();
    });
  }