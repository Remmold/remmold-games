
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
        image: "assets/Blogheads/game-title-branch.png",
        description: "PixelJump is a challenging platformer game with retro pixel art and modern gameplay mechanics. Navigate through increasingly difficult levels, avoid obstacles, and collect power-ups to reach the end goal. The game features procedurally generated levels, ensuring a unique experience every time you play.",
        longDescription: "PixelJump is a fast-paced 2D platformer where players embark on a daring quest to rescue their beloved chicken companion from the clutches of a mischievous villain. Armed with precise platforming skills, players must navigate treacherous landscapes filled with spikes, moving platforms, and devious traps. The game embraces a <b>fluid movement system</b>, rewarding momentum and mastery of jumps. Each level introduces new obstacles and challenges, pushing players to refine their skills while uncovering the mystery behind the chicken’s capture. With vibrant <i>pixel-art visuals</i> and tight, responsive controls, <b>PixelJump</b> delivers an engaging adventure full of action, precision, and charm. 🐔🚀",
        platforms: ["PC"],
        status: "In Development",
        releaseDate: "TBD",
        tags: ["Platformer", "Pixel Art", "Indie", "Action", "Single Player"],
        features: [
          {
            icon: "⚡",
            title: "Dynamic Weathereffects",
            description: "Upcomming weather effects to make diffrent playthroughs of a level have a diffrent feel to them"
          },
          {
            icon: "🎮",
            title: "Multiple inputs",
            description: "Wether you prefer a mouse and keyboard och a console controller. the game will support common systems"
          },
          /*{
            icon: "🔄",
            title: "",
            description: ""
          },
          {
            icon: "💾",
            title: "",
            description: ""
          }*/
          {
            icon: "🏆",
            title: "Achievement System",
            description: "Currently not a thing"
          },
          {
            icon: "🎵",
            title: "Experimental music",
            description: "Experimenting alot with environmental effects affecting music."
          },
     
        ],
        screenshots: [
          "assets/Screenshots/TitleScreen.png",
          "assets/Screenshots/nighttime.png",
          "assets/Screenshots/treehouse.png",
          "assets/Blogheads/game-title-branch.png"

        ],
        updates: [
          {
            date: "March 20, 2025",
            title: "Better Cycles",
            content: "Now the sun and moon are alot better than before and ive added changes to night/daytime cycle that correlates properly to the musiclength."
          }, 
          {
            date: "March 17, 2025",
            title: "Let there be light",
            content: "Tonight i created the sun and the moon and thus there was light. pretty poor light at that but light nonetheless! tomorrow i look forward to tuning the sun and the moon and if time permits ill add some torches and lit up object across the map to make it more immersive"
          }, 
          {
            date: "March 15, 2025",
            title: "Menus and volumecontrol",
            content: "Today ive created a Settingsmenu with volumecontrol and placeholders for other settings <br> I have also been blessed with a new titlescreen image from a talented friend named Daniel, will fix proper links to his portfolios soon"
          }, 
          {
            date: "March 14, 2025",
            title: "Website Up and Running",
            content: "Im happy to say that the webpage has been posted online and sharing of my game demo can finally begin"
          },
            

        ],
        downloadLink: "https://github.com/Remmold/remmold-games/releases/latest/download/PixelJump_v0.1-demo.zip",// Link to latest demo version
        assetLink: "https://assetstore.unity.com/packages/2d/environments/2d-platformer-tileset-173155" //Link to unity asset store where i bought the assetpack
      
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
              
              ${game.downloadLink ? `<a href="${game.downloadLink}" class="fantasy-button-fixed">Download Demo for Windows</a>` : ''} 
              ${game.assetLink ? `<a href="${game.assetLink}" class="fantasy-button-fixed" target="_blank" rel="noopener noreferrer">Assets</a>` : ''}
              
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
                <img src="${screenshot}" alt="Game Screenshot" class="clickable-screenshot" />
              </div>
            `).join('')}
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
      // Make screenshots clickable to open in a new tab
      document.querySelectorAll(".clickable-screenshot").forEach(img => {
        img.addEventListener("click", function () {
          window.open(this.src, "_blank");
        });
      });
          

      
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


//blog post js


document.addEventListener("DOMContentLoaded", function () {
  fetch("blog-posts.json")
    .then(response => response.json())
    .then(posts => {
      if (posts.length === 0) return;

      // Sort posts by date (newest first)
      posts.sort((a, b) => new Date(b.date) - new Date(a.date));

      // Get the latest post
      const latestPost = posts[0];

      // Insert Featured Post
      const featuredPostContainer = document.querySelector(".featured-post");
      featuredPostContainer.innerHTML = `
        <div class="featured-post-image">
          <img src="${latestPost.image}" alt="${latestPost.title}" loading="lazy">
        </div>
        <div class="featured-post-content">
          <span class="post-date">${latestPost.date}</span>
          <h2 class="post-title">${latestPost.title}</h2>
          <p class="post-excerpt">${latestPost.excerpt}</p>
          <a href="blog-post.html?id=${latestPost.id}" class="fantasy-button-fixed">Read More</a>
        </div>
      `;

      // Insert Remaining Blog Posts
      const blogContainer = document.getElementById("blogPostsContainer");
      blogContainer.innerHTML = posts.slice(1).map(post => `
        <article class="blog-post-card">
          <div class="post-image">
            <img src="${post.image}" alt="${post.title}" loading="lazy">
          </div>
          <div class="post-content">
            <span class="post-date">${post.date}</span>
            <h3 class="post-title">${post.title}</h3>
            <p class="post-excerpt">${post.excerpt}</p>
            <a href="blog-post.html?id=${post.id}" class="fantasy-button-fixed">Read More</a>
          </div>
        </article>
      `).join('');
    });
});

