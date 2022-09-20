window.addEventListener('DOMContentLoaded', () => {
  (function categoriesSlisder() {
    const swiper3 = new Swiper('.categories__slider', {
      slidesPerView: 'auto',
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      breakpoints: {
        991: {
          spaceBetween: 48,
        },
      },
    });
  })();

  (function productSlider() {
    const swiper3 = new Swiper('.product__slider', {
      slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  })();

  (function someBusiness() {
    const swiper3 = new Swiper('.some-business__slider', {
      slidesPerView: 'auto',
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        991: {
          spaceBetween: 40,
        },
      },
    });
  })();
});

// * ===== Show Menu
(function showMenu() {
  const menuBtn = document.querySelector('.header__toggle');
  const menu = document.querySelector('.mobile-menu');
  const menuCloseBtn = document.querySelector('.mobile-menu__close');
  const body = document.querySelector('body');
  const overlay = document.querySelector('.overlay');

  menuBtn.addEventListener('click', (e) => {
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
    body.classList.toggle('no-scroll');
  });

  overlay.addEventListener('click', (e) => {
    menu.classList.remove('active');
    overlay.classList.remove('active');
    body.classList.remove('no-scroll');
  });

  menuCloseBtn.addEventListener('click', (e) => {
    menu.classList.remove('active');
    overlay.classList.remove('active');
    body.classList.remove('no-scroll');
  });
})();

// * ==== Show Filters
(function showFilters() {
  const menuBtn = document.querySelector('.catalog__filter-btn');
  const menu = document.querySelector('.catalog__side');
  const body = document.querySelector('body');
  const overlay = document.querySelector('.overlay');

  if (menuBtn) {
    menuBtn.addEventListener('click', (e) => {
      menu.classList.toggle('active');
      overlay.classList.toggle('active');
      body.classList.toggle('no-scroll');
    });

    overlay.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });
  }
})();

(function fixedHeader() {
  function scrollHeader() {
    const nav = document.querySelector('header');
    if (this.scrollY >= 90) {
      nav.classList.add('scroll-header');
    } else {
      nav.classList.remove('scroll-header');
    }
  }

  window.addEventListener('scroll', scrollHeader);

  // ! Change
  function changeBg() {
    const header = document.querySelector('header');
    if (window.pageYOffset >= 90) {
      header.classList.add('scroll-header');
    }
  }

  changeBg();
})();

(function customSelect() {
  const element = document.querySelectorAll('select');

  element.forEach((el) => {
    const choices = new Choices(el, {
      itemSelectText: '',
      searchEnabled: false,
    });
  });
})();

function toggleAccordion(accordionControl, accordionContent, accordion) {
  const filters = document.querySelectorAll(accordionControl);
  filters.forEach((el) => {
    el.addEventListener('click', (e) => {
      const target = e.target.closest(accordion);
      const content = target.querySelector(accordionContent);
      target.classList.toggle('active');
      if (target.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = null;
      }
    });
  });
}
toggleAccordion('.accordion__control', '.accordion__content', '.accordion');

(function maskInput() {
  const elements = document.querySelectorAll('input[type="tel"]');
  elements.forEach((el) => {
    const maskOptions = {
      mask: '+{7} (000) 000-00-00',
    };
    IMask(el, maskOptions);
  });
})();

// * ===== Modal
(function modals() {
  function bindModal(openBtn, modal, close) {
    const openBtnEl = document.querySelectorAll(openBtn);
    const modalEl = document.querySelector(modal);
    const closeEl = document.querySelectorAll(close);
    const body = document.querySelector('body');
    if (modalEl) {
      openBtnEl.forEach((el) => {
        el.addEventListener('click', (e) => {
          if (e.target) {
            e.preventDefault();
          }
          modalEl.classList.add('active');
          body.classList.add('no-scroll');
        });
      });
      closeEl.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          modalEl.classList.remove('active');
          body.classList.remove('no-scroll');
        });
      });
      modalEl.addEventListener('click', (e) => {
        if (e.target === modalEl) {
          modalEl.classList.remove('active');
          body.classList.remove('no-scroll');
        }
      });
    }
  }
  bindModal('.header__btn', '.popup', '.popup__close');
})();

(function handlesSlider() {
  const parent = document.querySelector('.range-slider--cost');

  if (parent) {
    const handlesSlider = parent.querySelector('#slider-handles');
    const minStep = parent.querySelector('.range-slider__min');
    const maxStep = parent.querySelector('.range-slider__max');
    const inputs = [minStep, maxStep];

    noUiSlider.create(handlesSlider, {
      start: [100000, 80000000],
      connect: true,
      padding: [10, 10],
      range: {
        min: [0],
        max: [100000000],
      },
      format: wNumb({
        decimals: 0,
        thousand: ' ',
        suffix: ' ',
      }),
    });

    handlesSlider.noUiSlider.on('update', function (values, handle) {
      inputs[handle].value = values[handle];
    });

    minStep.addEventListener('change', function () {
      handlesSlider.noUiSlider.set([this.value, null]);
    });

    maxStep.addEventListener('change', function () {
      handlesSlider.noUiSlider.set([null, this.value]);
    });
  }
})();

(function handlesSliderProfit() {
  const parent = document.querySelector('.range-slider--profit');

  if (parent) {
    const handlesSlider = parent.querySelector('#slider-profit');
    const minStep = parent.querySelector('.range-slider__min');
    const maxStep = parent.querySelector('.range-slider__max');
    const inputs = [minStep, maxStep];

    noUiSlider.create(handlesSlider, {
      start: [100000, 80000000],
      connect: true,
      padding: [10, 10],
      range: {
        min: [0],
        max: [100000000],
      },
      format: wNumb({
        decimals: 0,
        thousand: ' ',
        suffix: ' ',
      }),
    });

    handlesSlider.noUiSlider.on('update', function (values, handle) {
      inputs[handle].value = values[handle];
    });

    minStep.addEventListener('change', function () {
      handlesSlider.noUiSlider.set([this.value, null]);
    });

    maxStep.addEventListener('change', function () {
      handlesSlider.noUiSlider.set([null, this.value]);
    });
  }
})();

// * ===== Toggle Tabs
function someTabs(headerSelector, tabSelector, contentSelector, activeClass) {
  const header = document.querySelectorAll(headerSelector);
  const tab = document.querySelectorAll(tabSelector);
  const content = document.querySelectorAll(contentSelector);

  header.forEach((el) => {
    if (el) {
      hideTabContent();
      showTabContent();
      function hideTabContent() {
        content.forEach((item) => {
          item.classList.remove('active');
        });
        tab.forEach((item) => {
          item.classList.remove(activeClass);
        });
      }
      function showTabContent(i = 0) {
        content[i].classList.add('active');
        tab[i].classList.add(activeClass);
      }
      header.forEach((item) => {
        if (item) {
          item.addEventListener('click', (e) => {
            const target = e.target;
            if (target.classList.contains(tabSelector.replace(/\./, ''))) {
              tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                  hideTabContent();
                  showTabContent(i);
                }
              });
            }
          });
        }
      });
    }
  });
}

someTabs('.scheme__inner', '.scheme__btn', '.scheme__content', 'active');
