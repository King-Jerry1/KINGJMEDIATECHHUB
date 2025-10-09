
  const toggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  // Toggle menu open/close
  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    toggle.classList.toggle("active");
  });

  // Close menu when a link is clicked (on mobile)
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      toggle.classList.remove("active");
    });
  });


  // Bootstrap Carousel instance
  const carouselElement = document.querySelector('#heroCarousel');
  const carousel = new bootstrap.Carousel(carouselElement, {
    interval: 3000,
    ride: 'carousel'
  });

  // Manual button control
  document.getElementById('prevBtn').addEventListener('click', function () {
    carousel.prev();
  });

  document.getElementById('nextBtn').addEventListener('click', function () {
    carousel.next();
  });