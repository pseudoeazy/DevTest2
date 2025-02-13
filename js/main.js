const view = {
  mobileMenu: document.getElementById('navMobile'),
  navMenu: document.getElementById('navMenu'),
  contactForm: document.forms['hero_form'],
  country: document.getElementById('country'),
  options: document.getElementById('options'),
  hiddenInput: document.getElementById('selected-option'),
  prevBtn: document.getElementById('prevBtn'),
  nextBtn: document.getElementById('nextBtn'),
  navBtns: document.querySelectorAll('.testimonials__dot'),
  slideWrapper: document.querySelector('.testimonials__slides-wrapper'),
  videoPlayBtn: document.getElementById('videoPlayBtn'),
  video: document.getElementById('videoElement'),
  videoOverlay: document.getElementById('videoOverlay'),
  closeModal: document.getElementById('closeModal'),
  modalOverlay: document.getElementById('modalOverlay'),

  createElement(tag, attributes, content) {
    const element = document.createElement(tag);

    for (const att in attributes) {
      element.setAttribute(att, attributes[att]);
    }

    if (content) {
      element.textContent = content;
    }

    return element;
  },
  toggleMenu() {
    if (view.navMenu.style.display === 'block') {
      view.navMenu.style.display = 'none';
    } else {
      view.navMenu.classList.toggle('nav__menu--active');
    }
  },
};

const controller = {
  watch() {
    window.addEventListener('DOMContentLoaded', () => {
      handleSelect();
      handleTestimonials();
      handleVideo();
    });

    view.contactForm.addEventListener('input', (e) => {
      validateInput(e.target);
    });

    view.videoPlayBtn.addEventListener('click', playVideo);

    view.mobileMenu.addEventListener('click', function () {
      view.mobileMenu.classList.toggle('nav__mobile--active');
      view.toggleMenu();
    });

    document.addEventListener('DOMContentLoaded', function () {
      const select = document.querySelector('.custom-select');
      const selected = select.querySelector('.custom-select__selected');

      selected.addEventListener('click', () => {
        select.classList.toggle('open');
      });

      document.addEventListener('click', (e) => {
        if (!select.contains(e.target)) {
          select.classList.remove('open');
        }
      });
    });

    view.contactForm.addEventListener('submit', handleSubmit);
  },
};

controller.watch();

function handleTestimonials() {
  const nextBtn = view.nextBtn;
  const prevBtn = view.prevBtn;
  const navBtns = view.navBtns;
  const slideWrapper = view.slideWrapper;
  const testimonialNavBtns = [...navBtns];
  let index = 0;

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % 3; // Loop back after last slide
    updateSlider();
  });

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + 3) % 3; // Loop back to last slide
    updateSlider();
  });

  function updateSlider() {
    const element = slideWrapper.children[index];
    const width = element.offsetWidth * index;
    slideWrapper.style.transform = `translateX(-${width}px)`;
    // slideWrapper.style.transform = `translateX(-${index * 100}%)`;
    const activeLink = testimonialNavBtns[index];

    if (activeLink) {
      resetActiveClass();
      activeLink.classList.add('testimonials__dot--active');
    }
  }

  function resetActiveClass() {
    testimonialNavBtns.forEach((navBtn) =>
      navBtn.classList.remove('testimonials__dot--active')
    );
  }

  nextBtn.addEventListener('mouseenter', () => {
    const svg = nextBtn.children[0];

    if (svg) {
      const path = svg.querySelector('path');
      path.setAttribute('fill', '#5bc8af');
    }
  });

  nextBtn.addEventListener('mouseleave', () => {
    const svg = nextBtn.children[0];
    if (svg) {
      const path = svg.querySelector('path');
      path.setAttribute('fill', '#EAEAEA');
    }
  });

  prevBtn.addEventListener('mouseenter', () => {
    const svg = prevBtn.children[0];

    if (svg) {
      const path = svg.querySelector('path');
      path.setAttribute('fill', '#5bc8af');
    }
  });

  prevBtn.addEventListener('mouseleave', () => {
    const svg = prevBtn.children[0];
    if (svg) {
      const path = svg.querySelector('path');
      path.setAttribute('fill', '#EAEAEA');
    }
  });

  testimonialNavBtns.forEach((navBtn, idx) => {
    navBtn.addEventListener('click', () => {
      resetActiveClass();
      navBtn.classList.add('testimonials__dot--active');

      if (index !== idx) {
        index = idx;
        updateSlider();
      }
    });
  });
}

function getCountries() {
  countries.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (b.name > a.name) {
      return -1;
    }
    return 0;
  });
  return countries;
}

function handleSelect() {
  const countries = getCountries();
  const options = view.options;
  const hiddenInput = view.hiddenInput;
  const select = document.querySelector('.custom-select');
  const selected = select.querySelector('.custom-select__selected');

  countries.forEach((country) => {
    const option = view.createElement(
      'div',
      {
        class: 'custom-select__option',
        'data-value': country.name,
      },
      country.name
    );
    options.appendChild(option);

    option.addEventListener('click', () => {
      selected.textContent = option.textContent;
      hiddenInput.value = option.getAttribute('data-value');
      select.classList.remove('open');
    });
  });
}

function handleSubmit(e) {
  e.preventDefault();

  const firstName = view.contactForm.firstName.value;
  const lastName = view.contactForm.lastName.value;
  const email = view.contactForm.email.value;
  const company = view.contactForm.company.value;
  const country = view.hiddenInput.value;

  const formData = { firstName, lastName, email, company, country };
  console.log(JSON.stringify(formData));
  window.location.href = '/thank-you.html';
}

function playVideo() {
  view.modalOverlay.classList.add('video__show-modal');
  view.video.style.display = 'block';
  view.video.play();
}

function handleVideo() {
  view.closeModal.addEventListener('click', () => {
    view.modalOverlay.classList.remove('video__show-modal');
  });

  window.addEventListener('click', (e) => {
    if (e.target === view.modalOverlay) {
      view.modalOverlay.classList.remove('video__show-modal');
    }
  });
}

function validateInput(inputElement) {
  if (!inputElement.checkValidity()) {
    const errorEl = inputElement.nextElementSibling?.nextElementSibling;
    inputElement.style.border = '1px solid #f77';
    errorEl.style.display = 'block';
  } else {
    inputElement.style.border = '1px solid rgba(255, 255, 255, 0.5)';
    const errorEl = inputElement.nextElementSibling?.nextElementSibling;
    errorEl.style.display = 'none';
  }
}
