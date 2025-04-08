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

  mobileMenuBtn?.addEventListener("click", function () {
    mobileNav?.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  });

  document.addEventListener("click", function (event) {
    if (
      mobileNav?.classList.contains("active") &&
      !event.target.closest(".mobile-nav") &&
      !event.target.closest(".mobile-menu-btn")
    ) {
      mobileNav.classList.remove("active");
      document.body.classList.remove("menu-open");
    }
  });

  document.querySelectorAll(".mobile-nav-links .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav?.classList.remove("active");
      document.body.classList.remove("menu-open");
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

  // --- Scroll animations ---
  const animateElements = document.querySelectorAll(".fade-in-element");
  function checkScroll() {
    animateElements.forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight * 0.9) {
        element.classList.add("visible");
      }
    });
  }
  if (animateElements.length > 0) {
    window.addEventListener("scroll", checkScroll);
    checkScroll();
  }

  // --- Game detail rendering ---
  const gameDetailContainer = document.getElementById("gameDetailContainer");

  if (gameDetailContainer) {
    const urlParams = new URLSearchParams(window.location.search);
    const gameName = urlParams.get("game")?.toLowerCase();

    const games = {
      pixeljump: {
        id: 1,
        title: "PixelJump",
        image: "assets/Blogheads/game-title-branch.png",
        description: "PixelJump is a challenging platformer...",
        longDescription:
          "PixelJump is a fast-paced 2D platformer where players embark on a daring quest...",
        platforms: ["PC"],
        status: "Paused",
        releaseDate: "TBD",
        tags: ["Platformer", "Pixel Art", "Indie", "Action", "Single Player"],
        features: [
          { icon: "⚡", title: "Dynamic Weathereffects", description: "Upcoming effects..." },
          { icon: "🎮", title: "Multiple inputs", description: "Supports KB+Mouse and controller" },
          { icon: "🏆", title: "Achievement System", description: "Currently not a thing" },
          { icon: "🎵", title: "Experimental music", description: "Dynamic music testing" },
        ],
        screenshots: [
          "assets/Screenshots/TitleScreen.png",
          "assets/Screenshots/nighttime.png",
          "assets/Screenshots/treehouse.png",
          "assets/Blogheads/game-title-branch.png",
        ],
        updates: [
          { date: "March 20, 2025", title: "Better Cycles", content: "Sun/moon improved." },
          { date: "March 17, 2025", title: "Let there be light", content: "Sun, moon, torches added." },
          { date: "March 15, 2025", title: "Menus and volumecontrol", content: "Settings menu created." },
          { date: "March 14, 2025", title: "Website Up", content: "RemmoldGames is live!" },
        ],
        downloadLink:
          "https://github.com/Remmold/remmold-games/releases/latest/download/PixelJump_v0.1-demo.zip",
        assetLink:
          "https://assetstore.unity.com/packages/2d/environments/2d-platformer-tileset-173155",
      },

      rocketracer: {
        id: 2,
        title: "RocketRacer",
        image: "assets/Blogheads/RocketRacer.png",
        description: "Fast-paced Unity WebGL game. Fly, dodge, and win.",
        longDescription:
          "RocketRacer is a high-speed obstacle-dodging WebGL game built in Unity...",
        platforms: ["WebGL"],
        status: "Playable Prototype",
        releaseDate: "March 31, 2025",
        tags: ["WebGL", "Unity", "Prototype", "3D", "Indie"],
        features: [
          { icon: "🚀", title: "Speed!", description: "Zippy movement and physics-based control." },
          { icon: "🌌", title: "Stylized World", description: "A small looping course in the stars." },
        ],
        screenshots: [
          "assets/Blogheads/RocketRacer.png",

        ],
        updates: [
          {
            date: "April 1, 2025",
            title: "WebGL Launch!",
            content: "RocketRacer is now playable in your browser on GitHub Pages.",
          },
        ],
        downloadLink: "",
        assetLink: "",
        playnowLink: "https://remmold.github.io/remmold-games/games/RocketRacer/index.html",
      },
      infiniterunner: {
        id: 3,
        title: "InfiniteRunner",
        image: "assets/Blogheads/InfiniteRunner.png",
        description: "Dodge or die in this Unity WebGL survival sprint.",
        longDescription:
          "InfiniteRunner is a fast-paced 3D prototype built in Unity, where the player races against time while dodging an ever-increasing wave of flying obstacles. Built as a physics and timing challenge, it tests your reflexes and decision-making under pressure.",
        platforms: ["WebGL"],
        status: "Playable Prototype",
        releaseDate: "April 8, 2025",
        tags: ["WebGL", "Unity", "Prototype", "3D", "Reflex"],
        features: [
          { icon: "⏱️", title: "Time Pressure", description: "Survive as long as you can against incoming chaos." },
          { icon: "💥", title: "Flying Obstacles", description: "Physics-based objects hurled at you with increasing speed." },
        ],
        screenshots: [
          "assets/Blogheads/InfiniteRunner.png"
        ],
        updates: [
          {
            date: "April 8, 2025",
            title: "WebGL Launch!",
            content: "InfiniteRunner is now live and playable in-browser on GitHub Pages. Try to survive the onslaught!",
          },
        ],
        downloadLink: "",
        assetLink: "",
        playnowLink: "https://remmold.github.io/remmold-games/games/InfiniteRunner/index.html",
      }
      
    };

    const gameData = games[gameName];

    if (gameData) {
      renderGameDetail(gameData);
    } else {
      gameDetailContainer.innerHTML = `<div class="fantasy-container"><h2>Game not found</h2><p>Check the URL or return to the <a href="index.html">home page</a>.</p></div>`;
    }

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
            ${game.downloadLink ? `<a href="${game.downloadLink}" class="fantasy-button-fixed">Download Demo</a>` : ""}
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
    .then((res) => res.json())
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
    });

  // --- Animate page load ---
  document.body.classList.add("fade-in");
});

// --- Add animation styles ---
const styleSheet = document.createElement("style");
styleSheet.textContent = `
.fade-in { animation: fadeIn 0.5s ease-out; }
.fade-in-element {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}
.fade-in-element.visible {
  opacity: 1;
  transform: translateY(0);
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
body.menu-open { overflow: hidden; }
`;
document.head.appendChild(styleSheet);
