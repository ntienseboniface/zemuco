(function () {
  "use strict";

  const config = window.Zemuco_CONFIG || {};
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });

  document.querySelectorAll(".js-whatsapp").forEach((link) => {
    const message = link.dataset.message || config.defaultWhatsAppMessage || "Hello Zemuco, I would like to make an enquiry.";
    link.href = `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(message)}`;
  });

  document.querySelectorAll(".js-directions").forEach((link) => {
    link.href = config.directionsUrl;
  });

  const header = document.querySelector(".site-header");
  const backToTop = document.querySelector(".back-to-top");
  const updateScrolledState = () => {
    const scrolled = window.scrollY > 30;
    if (header) header.classList.toggle("is-scrolled", scrolled);
    if (backToTop) backToTop.classList.toggle("is-visible", window.scrollY > 600);
  };
  updateScrolledState();
  window.addEventListener("scroll", updateScrolledState, { passive: true });

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
  }

  const revealItems = document.querySelectorAll("[data-reveal]");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-revealed"));
  } else {
    const observer = new IntersectionObserver((entries, revealObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -48px" });
    revealItems.forEach((item) => observer.observe(item));
  }

  document.querySelectorAll(".offcanvas a:not(.dropdown-toggle)").forEach((link) => {
    link.addEventListener("click", () => {
      const panel = link.closest(".offcanvas");
      if (panel && window.bootstrap) {
        const instance = window.bootstrap.Offcanvas.getInstance(panel);
        if (instance) instance.hide();
      }
    });
  });
}());
