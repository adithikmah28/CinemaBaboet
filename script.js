document.addEventListener('DOMContentLoaded', () => {

    // --- FUNGSI UNTUK MENU MOBILE ---
    const openMenuBtn = document.getElementById('open-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const overlay = document.getElementById('overlay');

    function openMenu() {
        mobileNav.classList.add('show');
        overlay.classList.add('show');
    }
    function closeMenu() {
        mobileNav.classList.remove('show');
        overlay.classList.remove('show');
    }

    openMenuBtn.addEventListener('click', openMenu);
    closeMenuBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);


    // --- FUNGSI UNTUK HERO SECTION DINAMIS ---
    function setupHeroSection() {
        // Ambil film pertama dari data.js sebagai unggulan
        const featuredContent = allContent[0]; 
        if (!featuredContent) return; // Keluar jika data kosong

        const heroSection = document.getElementById('hero-section');
        const heroTitle = document.getElementById('hero-title');
        const heroDescription = document.getElementById('hero-description');
        const heroButtonsContainer = document.getElementById('hero-buttons-container');

        // Set background
        const backgroundGradient = 'linear-gradient(to top, rgba(20,20,20,1) 10%, rgba(20,20,20,0) 50%)';
        heroSection.style.backgroundImage = `${backgroundGradient}, url('${featuredContent.poster_lg}')`;

        // Set info
        heroTitle.textContent = featuredContent.title;
        heroDescription.textContent = featuredContent.synopsis;

        // Set buttons
        heroButtonsContainer.innerHTML = `
            <a href="stream.html?id=${featuredContent.id}" class="btn btn-play"><i class="fas fa-play"></i> Putar</a>
            <button class="btn btn-info"><i class="fas fa-info-circle"></i> Info Lainnya</button>
        `;
    }


    // --- FUNGSI UNTUK MEMBUAT KARTU POSTER ---
    function createPosterCard(content) {
        return `
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
    }

    // --- FUNGSI UNTUK MEMUAT KATEGORI ---
    function populateCategory(containerId, filterFunction) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const filteredContent = allContent.filter(filterFunction);
        
        let contentHTML = '';
        filteredContent.forEach(item => {
            contentHTML += createPosterCard(item);
        });

        container.innerHTML = contentHTML;
    }

    // --- EKSEKUSI SEMUA FUNGSI SAAT HALAMAN DIMUAT ---
    setupHeroSection();
    populateCategory('originals-container', item => item.isOriginal === true);
    populateCategory('movie-container', item => item.category === 'movie' && !item.isOriginal);
    populateCategory('series-container', item => item.category === 'series' && !item.isOriginal);
    populateCategory('indonesia-container', item => item.category === 'indonesia');
});
