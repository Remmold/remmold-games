
document.addEventListener('DOMContentLoaded', function() {
  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
      scrollToTopBtn.classList.add('visible');
    } else {
      navbar.classList.remove('scrolled');
      scrollToTopBtn.classList.remove('visible');
    }
  });
  
  // Scroll to top button
  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileNav = document.querySelector('.mobile-nav');
  
  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileNav.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });
  }
  
  // Mobile dropdown toggle
  const mobileDropdownBtn = document.querySelector('.mobile-dropdown-btn');
  const mobileDropdownContent = document.querySelector('.mobile-dropdown-content');
  
  if (mobileDropdownBtn && mobileDropdownContent) {
    mobileDropdownBtn.addEventListener('click', function() {
      mobileDropdownContent.classList.toggle('hidden');
    });
  }
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    if (mobileNav && mobileNav.classList.contains('active') && !event.target.closest('.mobile-nav') && !event.target.closest('.mobile-menu-btn')) {
      mobileNav.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  });
  
  // Close mobile menu when clicking on a link
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-links .nav-link');
  
  mobileNavLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      if (mobileNav) {
        mobileNav.classList.remove('active');
        document.body.classList.remove('menu-open');
      }
    });
  });
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href === '#') return;
      
      if (href.startsWith('#')) {
        e.preventDefault();
        
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const navbarHeight = navbar.offsetHeight;
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // Add animation to elements on scroll
  const animateElements = document.querySelectorAll('.fade-in-element');
  
  function checkScroll() {
    animateElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight * 0.9) {
        element.classList.add('visible');
      }
    });
  }
  
  if (animateElements.length > 0) {
    window.addEventListener('scroll', checkScroll);
    checkScroll();
  }
  
  // Game detail page functionality
  const gameDetailContainer = document.getElementById('gameDetailContainer');
  
  if (gameDetailContainer) {
    // Simulate loading game data
    setTimeout(() => {
      const gameData = {
        id: 1,
        title: "PixelJump",
        image: "assets/images/TitleScreen.png",
        description: "PixelJump is a challenging platformer game with retro pixel art and modern gameplay mechanics. Navigate through increasingly difficult levels, avoid obstacles, and collect power-ups to reach the end goal. The game features procedurally generated levels, ensuring a unique experience every time you play.",
        longDescription: "PixelJump combines the nostalgic charm of classic platformer games with modern gameplay innovations. Each level presents new challenges and obstacles that will test your reflexes and problem-solving skills. The procedural generation system ensures that no two playthroughs are ever the same, providing endless entertainment and replayability.\n\nWith a unique art style that blends pixel art with modern lighting and effects, PixelJump creates a visually stunning world that pays homage to gaming's past while embracing the technological capabilities of the present.",
        platforms: ["PC"],
        status: "In Development",
        releaseDate: "TBD",
        tags: ["Platformer", "Pixel Art", "Indie", "Action", "Single Player"],
        features: [
          {
            icon: "⚡",
            title: "Dynamic Gameplay",
            description: "Experience fluid controls and responsive mechanics that make each jump and movement satisfying."
          },
          {
            icon: "🎮",
            title: "Retro-Modern Fusion",
            description: "Enjoy the nostalgic feel of pixel art combined with modern game design principles and effects."
          },
          {
            icon: "🔄",
            title: "Procedural Generation",
            description: "Encounter new challenges with every playthrough thanks to our advanced level generation system."
          },
          {
            icon: "🏆",
            title: "Achievement System",
            description: "Unlock achievements and compete with friends on the global leaderboard."
          },
          {
            icon: "🎵",
            title: "Original Soundtrack",
            description: "Immerse yourself in the game with our original chiptune-inspired soundtrack that evolves as you progress."
          },
          {
            icon: "💾",
            title: "Cross-Platform Save",
            description: "Continue your progress across different devices with our cloud save feature."
          }
        ],
        screenshots: [
          "assets/images/TitleScreen.png",
          "assets/images/nighttime.png",
          "assets/images/treehouse.png",

        ],
        updates: [
          {
            date: "March 14, 2025",
            title: "Website Up and Running",
            content: "Im happy to say that the webpage has been posted online and sharing of my game demo can finally begin"
          },
          /*{
            date: "",
            title: "",
            content: ""
          },    */

        ],
        downloadLink: "#" ,// Placeholder for Windows download link
        assetLink: "https://assetstore.unity.com/packages/2d/environments/2d-platformer-tileset-173155"
      };
      
      renderGameDetail(gameData);
    }, 1000);
    
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
                ${game.platforms.map(platform => `<span class="game-detail-platform">${platform}</span>`).join('')}
                <span class="game-detail-status">${game.status}</span>
              </div>
              
              <div class="game-detail-description">${game.longDescription.replace(/\n/g, '<br>')}</div>
              
              <div class="game-detail-tags">
                ${game.tags.map(tag => `<span class="game-tag">${tag}</span>`).join('')}
              </div>
              
              ${game.downloadLink ? `<a href="${game.downloadLink}" class="fantasy-button-fixed">Download for Windows</a>` : ''} 
              ${game.assetLink ? `<a href="${game.assetLink}" class="fantasy-button-fixed">Assets</a>` : ''}
            </div>
          </div>
          
          <div class="game-detail-features">
            <h2 class="section-title">Key Features</h2>
            
            <div class="features-grid">
              ${game.features.map(feature => `
                <div class="feature-card">
                  <div class="feature-title">
                    <div class="feature-icon">${feature.icon}</div>
                    <h3>${feature.title}</h3>
                  </div>
                  <p>${feature.description}</p>
                </div>
              `).join('')}
            </div>
          </div>
          
          <div class="game-detail-screenshots">
            <h2 class="section-title">Screenshots</h2>
            
            <div class="screenshots-grid">
              ${game.screenshots.map(screenshot => `
                <div class="screenshot-item">
                  <img src="${screenshot}" alt="Game Screenshot" />
                </div>
              `).join('')}
            </div>
          </div>
          
          <div class="game-detail-updates">
            <h2 class="section-title">Development Updates</h2>
            
            <div class="updates-list">
              ${game.updates.map(update => `
                <div class="update-card">
                  <span class="update-date">${update.date}</span>
                  <h3 class="update-title">${update.title}</h3>
                  <p>${update.content}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
      
      gameDetailContainer.innerHTML = content;
      
      // Add animation classes to elements
      const elements = gameDetailContainer.querySelectorAll('.game-detail-header, .game-detail-features, .game-detail-screenshots, .game-detail-updates');
      elements.forEach((element, index) => {
        element.classList.add('fade-in-element');
        setTimeout(() => {
          element.classList.add('visible');
        }, 200 * index);
      });
    }
  }
  
  // Add fade-in animations to elements
  document.body.classList.add('fade-in');
});

// Add CSS styles for animations
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  .fade-in {
    animation: fadeIn 0.5s ease-out;
  }
  
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
  
  body.menu-open {
    overflow: hidden;
  }
`;
document.head.appendChild(styleSheet);
