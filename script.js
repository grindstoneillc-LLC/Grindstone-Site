document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('[data-menu-button]');
  const mobilePanel = document.querySelector('[data-mobile-panel]');
  if (menuButton && mobilePanel) {
    menuButton.addEventListener('click', () => {
      mobilePanel.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', mobilePanel.classList.contains('open') ? 'true' : 'false');
    });
  }

  const yearEls = document.querySelectorAll('[data-year]');
  const year = new Date().getFullYear();
  yearEls.forEach(el => el.textContent = year);

  const form = document.querySelector('[data-estimate-form]');
  if (form) {
    const success = form.parentElement.querySelector('.alert-success');
    const error = form.parentElement.querySelector('.alert-error');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (success) success.style.display = 'none';
      if (error) error.style.display = 'none';

      const data = new FormData(form);
      const name = (data.get('name') || '').trim();
      const phone = (data.get('phone') || '').trim();
      const email = (data.get('email') || '').trim();
      const city = (data.get('city') || '').trim();
      const address = (data.get('address') || '').trim();
      const service = (data.get('service') || '').trim();
      const description = (data.get('description') || '').trim();
      const contactMethod = (data.get('contact_method') || '').trim();
      const reachTime = (data.get('reach_time') || '').trim();

      if (!name || (!phone && !email) || !service || !description) {
        if (error) error.style.display = 'block';
        return;
      }

      const subject = encodeURIComponent(`Website Estimate Request - ${name}`);
      const body = encodeURIComponent(
`Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nCity: ${city}\nProperty Address: ${address}\nService Needed: ${service}\nPreferred Contact Method: ${contactMethod}\nBest Time to Reach: ${reachTime}\n\nProject Description:\n${description}`
      );

      window.location.href = `mailto:Grindstoneillc@gmail.com?subject=${subject}&body=${body}`;
      if (success) success.style.display = 'block';
      form.reset();
    });
  }
});
