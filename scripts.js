document.addEventListener("DOMContentLoaded", function () {
  // --- Navbar scroll behavior ---
  const navbar = document.getElementById("navbar");
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar?.classList.add("scrolled");
      scrollToTopBtn?.classList.add("visible");
    } else {
      navbar?.classList.remove("scrolled");
      scrollToTopBtn?.classList.remove("visible");
    }
  });

  scrollToTopBtn?.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // --- Mobile menu ---
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileNavClose = document.querySelector(".mobile-nav-close");
  const mobileDropdownBtns = document.querySelectorAll(".mobile-dropdown-btn");

  function openMobileMenu() {
    mobileNav?.classList.add("active");
    mobileNav?.setAttribute("aria-hidden", "false");
    mobileMenuBtn?.setAttribute("aria-expanded", "true");
    document.body.classList.add("menu-open");
  }

  function closeMobileMenu() {
    mobileNav?.classList.remove("active");
    mobileNav?.setAttribute("aria-hidden", "true");
    mobileMenuBtn?.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  }

  mobileMenuBtn?.addEventListener("click", openMobileMenu);
  mobileNavClose?.addEventListener("click", closeMobileMenu);

  // Close on outside click
  document.addEventListener("click", function (event) {
    if (
      mobileNav?.classList.contains("active") &&
      !event.target.closest(".mobile-nav") &&
      !event.target.closest(".mobile-menu-btn")
    ) {
      closeMobileMenu();
    }
  });

  // Close on link click
  document.querySelectorAll(".mobile-nav-links .nav-link").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  // Mobile dropdown toggle
  mobileDropdownBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const dropdown = this.closest(".mobile-dropdown");
      const isExpanded = dropdown?.classList.contains("active");

      // Close all other dropdowns
      document.querySelectorAll(".mobile-dropdown").forEach((d) => {
        d.classList.remove("active");
        d.querySelector(".mobile-dropdown-btn")?.setAttribute("aria-expanded", "false");
      });

      // Toggle current
      if (!isExpanded) {
        dropdown?.classList.add("active");
        this.setAttribute("aria-expanded", "true");
      }
    });
  });

  // --- Smooth scroll for anchors ---
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (!href || href === "#") return;

      const targetId = href.slice(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        e.preventDefault();
        const targetPosition =
          targetElement.getBoundingClientRect().top + window.scrollY - navbar.offsetHeight;
        window.scrollTo({ top: targetPosition, behavior: "smooth" });
      }
    });
  });

  // --- Enhanced scroll animations with Intersection Observer ---
  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -10% 0px",
    threshold: 0.1
  };

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        // Trigger staggered animation for game cards
        const gamesGrid = entry.target.querySelector(".games-grid");
        if (gamesGrid) {
          setTimeout(() => gamesGrid.classList.add("animated"), 100);
        }

        fadeObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all fade-in elements
  document.querySelectorAll(".fade-in-element").forEach((el) => {
    fadeObserver.observe(el);
  });

  // Make hero section visible immediately
  const heroSection = document.querySelector(".hero-section");
  if (heroSection) {
    heroSection.classList.add("visible");
  }

  // --- Game detail rendering ---
  const gameDetailContainer = document.getElementById("gameDetailContainer");

  if (gameDetailContainer) {
    const urlParams = new URLSearchParams(window.location.search);
    const gameName = urlParams.get("game")?.toLowerCase();

    // Load game data from external JSON
    fetch("games-data.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load game data");
        return res.json();
      })
      .then((games) => {
        const gameData = games[gameName];

        if (gameData) {
          renderGameDetail(gameData);
        } else {
          gameDetailContainer.innerHTML = `<div class="fantasy-container"><h2>Game not found</h2><p>Check the URL or return to the <a href="index.html">home page</a>.</p></div>`;
        }
      })
      .catch((error) => {
        console.error("Error loading game data:", error);
        gameDetailContainer.innerHTML = `<div class="fantasy-container"><h2>Error loading game</h2><p>Please try again later or return to the <a href="index.html">home page</a>.</p></div>`;
      });

    function renderGameDetail(game) {
      const content = `
      <div class="fantasy-container">
        <div class="game-detail-header">
          <div class="game-detail-image">
            <img src="${game.image}" alt="${game.title}" />
          </div>
          <div class="game-detail-info">
            <h1 class="game-detail-title">${game.title}</h1>
            <div class="game-detail-meta">
              ${game.platforms.map((p) => `<span class="game-detail-platform">${p}</span>`).join("")}
              <span class="game-detail-status">${game.status}</span>
            </div>
            <div class="game-detail-description">${game.longDescription}</div>
            <div class="game-detail-tags">
              ${game.tags.map((t) => `<span class="game-tag">${t}</span>`).join("")}
            </div>
            ${game.downloadLink ? `<a href="${game.downloadLink}" class="fantasy-button-fixed">Download Windows Demo</a>` : ""}
            ${game.assetLink ? `<a href="${game.assetLink}" class="fantasy-button-fixed" target="_blank">Assets</a>` : ""}
            ${game.playnowLink ? `<a href="${game.playnowLink}" class="fantasy-button-fixed" target="_blank" rel="noopener noreferrer">Play Now in Browser</a>` : ''}
          </div>
        </div>

        <div class="game-detail-features">
          <h2 class="section-title">Key Features</h2>
          <div class="features-grid">
            ${game.features
          .map(
            (f) => `
              <div class="feature-card">
                <div class="feature-title">
                  <div class="feature-icon">${f.icon}</div>
                  <h3>${f.title}</h3>
                </div>
                <p>${f.description}</p>
              </div>`
          )
          .join("")}
          </div>
        </div>

        <div class="game-detail-screenshots">
          <h2 class="section-title">Screenshots</h2>
          <div class="screenshots-grid">
            ${game.screenshots
          .map(
            (s) => `
              <div class="screenshot-item">
                <img src="${s}" alt="Screenshot" class="clickable-screenshot"/>
              </div>`
          )
          .join("")}
          </div>
        </div>

        <div class="game-detail-updates">
          <h2 class="section-title">Development Updates</h2>
          <div class="updates-list">
            ${game.updates
          .map(
            (u) => `
              <div class="update-card">
                <span class="update-date">${u.date}</span>
                <h3 class="update-title">${u.title}</h3>
                <p>${u.content}</p>
              </div>`
          )
          .join("")}
          </div>
        </div>
      </div>`;

      gameDetailContainer.innerHTML = content;

      document.querySelectorAll(".clickable-screenshot").forEach((img) => {
        img.addEventListener("click", function () {
          window.open(this.src, "_blank");
        });
      });

      document
        .querySelectorAll(
          ".game-detail-header, .game-detail-features, .game-detail-screenshots, .game-detail-updates"
        )
        .forEach((el, i) => {
          el.classList.add("fade-in-element");
          setTimeout(() => {
            el.classList.add("visible");
          }, 200 * i);
        });
    }
  }

  // --- Blog preview loader ---
  fetch("blog-posts.json")
    .then((res) => {
      if (!res.ok) throw new Error("Failed to load blog posts");
      return res.json();
    })
    .then((posts) => {
      if (!Array.isArray(posts) || posts.length === 0) return;

      posts.sort((a, b) => new Date(b.date) - new Date(a.date));
      const featured = posts[0];

      const featuredPostContainer = document.querySelector(".featured-post");
      const blogContainer = document.getElementById("blogPostsContainer");

      if (featuredPostContainer) {
        featuredPostContainer.innerHTML = `
          <div class="featured-post-image"><img src="${featured.image}" alt="${featured.title}" loading="lazy"></div>
          <div class="featured-post-content">
            <span class="post-date">${featured.date}</span>
            <h2 class="post-title">${featured.title}</h2>
            <p class="post-excerpt">${featured.excerpt}</p>
            <a href="blog-post.html?id=${featured.id}" class="fantasy-button-fixed">Read More</a>
          </div>
        `;
      }

      if (blogContainer) {
        blogContainer.innerHTML = posts
          .slice(1)
          .map(
            (post) => `
          <article class="blog-post-card">
            <div class="post-image"><img src="${post.image}" alt="${post.title}" loading="lazy"></div>
            <div class="post-content">
              <span class="post-date">${post.date}</span>
              <h3 class="post-title">${post.title}</h3>
              <p class="post-excerpt">${post.excerpt}</p>
              <a href="blog-post.html?id=${post.id}" class="fantasy-button-fixed">Read More</a>
            </div>
          </article>
        `
          )
          .join("");
      }
    })
    .catch((error) => {
      console.error("Error loading blog posts:", error);
    });

  // --- Animate page load ---
  document.body.classList.add("fade-in");
});
