// DOM Elements
const navbar = document.getElementById('navbar');
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileNav = document.querySelector('.mobile-nav');
const mobileDropdownBtn = document.querySelector('.mobile-dropdown-btn');
const mobileDropdownContent = document.querySelector('.mobile-dropdown-content');
const contactForm = document.getElementById('contactForm');
const gameDetailContainer = document.getElementById('gameDetailContainer');

// Helper Functions
function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function() {
    const context = this, args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Handle Navbar scroll effect
function handleScroll() {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
    scrollToTopBtn.classList.add('visible');
  } else {
    navbar.classList.remove('scrolled');
    scrollToTopBtn.classList.remove('visible');
  }
}

// Initialize the page
function init() {
  // Add scroll event listener
  window.addEventListener('scroll', debounce(handleScroll));
  
  // Mobile menu toggle
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('active');
      document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
      
      // Update menu icon
      const menuIcon = mobileMenuBtn.querySelector('.menu-icon');
      menuIcon.textContent = mobileNav.classList.contains('active') ? '✕' : '☰';
    });
  }
  
  // Mobile dropdown toggle
  if (mobileDropdownBtn) {
    mobileDropdownBtn.addEventListener('click', () => {
      mobileDropdownContent.classList.toggle('hidden');
      
      // Update dropdown icon
      const dropdownIcon = mobileDropdownBtn.querySelector('.dropdown-icon');
      if (dropdownIcon) {
        dropdownIcon.style.transform = mobileDropdownContent.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
      }
    });
  }
  
  // Scroll to top button
  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // Handle contact form submission
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form data
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      // In a real app, you would send this data to a server
      console.log('Form submitted:', { name, email, message });
      
      // Show success message
      alert('Thank you for your message! We will get back to you soon.');
      
      // Reset form
      contactForm.reset();
    });
  }
  
  // Load game details if on game detail page
  if (gameDetailContainer && window.location.pathname.includes('game-detail.html')) {
    loadGameDetails();
  }
}

// Load game details based on URL parameter
function loadGameDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const gameId = urlParams.get('game');
  
  if (!gameId) {
    showGameNotFound();
    return;
  }
  
  // In a real app, you would fetch game data from a server
  // For this example, we'll use a mock game object
  const game = getGameData(gameId);
  
  if (!game) {
    showGameNotFound();
    return;
  }
  
  renderGameDetails(game);
}

// Mock function to get game data
function getGameData(gameId) {
  // Mock game data
  const games = {
    'pixeljump': {
      id: 'pixeljump',
      title: 'PixelJump',
      description: 'A retro-styled platformer set in a world where pixels come to life. Navigate through challenging levels, collect magical artifacts, and defeat the glitch king.',
      longDescription: 'PixelJump is a captivating retro platformer that combines classic gameplay with modern twists. As the heroic Bit, you must traverse through increasingly challenging pixel worlds, each with unique obstacles and enemies. The game features precision jumps, power-ups, and hidden secrets that will test your reflexes and problem-solving skills. With its charming pixel art style and chiptune soundtrack, PixelJump offers a nostalgic experience while introducing innovative gameplay mechanics that keep the adventure fresh and exciting.',
      platforms: ['PC', 'Mac', 'Mobile'],
      status: 'In Development',
      releaseDate: 'Q4 2023',
      tags: ['Platformer', 'Retro', 'Adventure', '2D'],
      imageUrl: 'https://placehold.co/600x400?text=PixelJump',
      features: [
        {
          title: 'Challenging Levels',
          description: '30+ handcrafted levels of increasing difficulty',
          icon: '🏆'
        },
        {
          title: 'Power-ups',
          description: 'Collect various power-ups to enhance your abilities',
          icon: '⚡'
        },
        {
          title: 'Boss Battles',
          description: 'Epic boss fights at the end of each world',
          icon: '👾'
        }
      ],
      screenshots: [
        'https://placehold.co/800x450?text=Screenshot+1',
        'https://placehold.co/800x450?text=Screenshot+2',
        'https://placehold.co/800x450?text=Screenshot+3'
      ],
      updates: [
        {
          date: 'September 15, 2023',
          title: 'Alpha Testing Begins',
          description: 'We\'ve started our closed alpha testing phase with a select group of players.'
        },
        {
          date: 'August 1, 2023',
          title: 'New World Announced',
          description: 'We\'re excited to reveal the Crystal Caves world, coming to PixelJump!'
        }
      ]
    }
  };
  
  return games[gameId];
}

// Render game details
function renderGameDetails(game) {
  document.title = `${game.title} - RemmoldGames`;
  
  const gameDetailHTML = `
    <div class="fantasy-container">
      <div class="game-detail-header">
        <div class="game-detail-image">
          <img src="${game.imageUrl}" alt="${game.title}" loading="lazy">
        </div>
        <div class="game-detail-info">
          <h1 class="game-detail-title">${game.title}</h1>
          <div class="game-detail-meta">
            ${game.platforms.map(platform => `<span class="game-detail-platform">${platform}</span>`).join('')}
            <span class="game-detail-status">${game.status}</span>
          </div>
          <p class="game-detail-description">${game.longDescription}</p>
          <div class="game-detail-tags">
            ${game.tags.map(tag => `<span class="game-tag">${tag}</span>`).join('')}
          </div>
          <a href="#" class="fantasy-button-fixed">Wishlist Now</a>
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
              <img src="${screenshot}" alt="Game screenshot" loading="lazy">
            </div>
          `).join('')}
        </div>
      </div>
      
      <div class="game-detail-cta">
        <h2 class="cta-title">Join the Adventure</h2>
        <p class="cta-description">Follow our development journey and be the first to experience ${game.title} when it's released.</p>
        <a href="#" class="gold-button-fixed">Subscribe for Updates</a>
      </div>
      
      <div class="game-detail-updates">
        <h2 class="section-title">Development Updates</h2>
        <div class="updates-list">
          ${game.updates.map(update => `
            <div class="update-card">
              <span class="update-date">${update.date}</span>
              <h3 class="update-title">${update.title}</h3>
              <p>${update.description}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
  
  gameDetailContainer.innerHTML = gameDetailHTML;
}

// Show game not found message
function showGameNotFound() {
  gameDetailContainer.innerHTML = `
    <div class="fantasy-container">
      <div class="fantasy-card" style="padding: 3rem; text-align: center;">
        <h1 class="fantasy-title">Game Not Found</h1>
        <p>Sorry, we couldn't find the game you're looking for.</p>
        <a href="index.html#games" class="fantasy-button-fixed" style="margin-top: 2rem;">Back to Games</a>
      </div>
    </div>
  `;
}

// Add smooth scrolling for anchor links
document.addEventListener('click', function(e) {
  const target = e.target;
  
  // Check if the clicked element is an anchor tag with a hash
  if (target.tagName === 'A' && target.getAttribute('href') && target.getAttribute('href').startsWith('#')) {
    const href = target.getAttribute('href');
    
    // If it's just a "#" (link to top), scroll to top
    if (href === '#') {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }
    
    // Otherwise, find the element and scroll to it
    const element = document.querySelector(href);
    if (element) {
      e.preventDefault();
      const headerOffset = 100; // Adjust based on navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // If mobile menu is open, close it
      if (mobileNav && mobileNav.classList.contains('active')) {
        mobileNav.classList.remove('active');
        document.body.style.overflow = '';
        
        // Update menu icon
        const menuIcon = mobileMenuBtn.querySelector('.menu-icon');
        if (menuIcon) {
          menuIcon.textContent = '☰';
        }
      }
    }
  }
});

// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);
