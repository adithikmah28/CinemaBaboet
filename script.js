document.addEventListener('DOMContentLoaded', () => {

    // --- LOGIKA UNTUK MENU MOBILE & OVERLAY ---
    const openMenuBtn = document.getElementById('open-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const overlay = document.getElementById('overlay');

    const openMenu = () => {
        mobileNav.classList.add('show');
        overlay.classList.add('show');
    };
    const closeMenu = () => {
        mobileNav.classList.remove('show');
        overlay.classList.remove('show');
    };

    openMenuBtn.addEventListener('click', openMenu);
    closeMenuBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);


    // --- LOGIKA UNTUK HERO SECTION DINAMIS ---
    const setupHeroSection = () => {
        const featuredContent = allContent[0]; 
        if (!featuredContent) return;

        const heroSection = document.getElementById('hero-section');
        document.getElementById('hero-title').textContent = featuredContent.title;
        document.getElementById('hero-description').textContent = featuredContent.synopsis;
        const backgroundGradient = 'linear-gradient(to top, rgba(20,20,20,1) 10%, rgba(20,20,20,0) 50%)';
        heroSection.style.backgroundImage = `${backgroundGradient}, url('${featuredContent.poster_lg}')`;

        document.getElementById('hero-buttons-container').innerHTML = `
            <a href="stream.html?id=${featuredContent.id}" class="btn btn-play"><i class="fas fa-play"></i> Putar</a>
            <button class="btn btn-info"><i class="fas fa-info-circle"></i> Info Lainnya</button>
        `;
    };


    // --- LOGIKA UNTUK MEMBUAT KARTU POSTER ---
    const createPosterCard = (content) => `
        <a href="stream.html?id=${content.id}" class="poster-link">
            <div class="poster-card">
                <img src="${content.poster}" alt="${content.title}">
                <div class="overlay">
                    <h3>${content.title}</h3>
                    <p>${content.year}</p>
                    <i class="fas fa-play-circle play-icon"></i>
                </div>
            </div>
        </a>
    `;

    // --- LOGIKA UNTUK MEMUAT KATEGORI ---
    const populateCategory = (containerId, filterFunction) => {
        const container = document.getElementById(containerId);
        if (!container) return;

        const filteredContent = allContent.filter(filterFunction);
        container.innerHTML = filteredContent.map(createPosterCard).join('');
    };

    // --- LOGIKA UNTUK PANAH SCROLL KATEGORI (NEW) ---
    const setupScrollArrows = () => {
        const scrollArrows = document.querySelectorAll('.scroll-arrow');
        scrollArrows.forEach(arrow => {
            arrow.addEventListener('click', () => {
                const container = arrow.closest('.category-row').querySelector('.poster-container');
                const scrollAmount = container.clientWidth * 0.8; // Scroll 80% dari lebar container
                
                if (arrow.classList.contains('right')) {
                    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                } else {
                    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
                }
            });
        });
    };

    // --- EKSEKUSI SEMUA FUNGSI ---
    setupHeroSection();
    populateCategory('originals-container', item => item.isOriginal === true);
    populateCategory('movie-container', item => item.category === 'movie' && !item.isOriginal);
    populateCategory('series-container', item => item.category === 'series' && !item.isOriginal);
    populateCategory('indonesia-container', item => item.category === 'indonesia');
    setupScrollArrows();
});
