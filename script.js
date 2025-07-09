// script.js (FIXED)
document.addEventListener('DOMContentLoaded', () => {
    // THE REAL FIX: Pindahkan 'allContent' ke dalam DOMContentLoaded
    const allContent = [...movieData, ...seriesData, ...indonesiaData, ...animeData];

    // --- LOGIKA UNTUK MENU MOBILE & OVERLAY ---
    const openMenuBtn = document.getElementById('open-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const overlay = document.getElementById('overlay');
    if (openMenuBtn) {
        const openMenu = () => { mobileNav.classList.add('show'); overlay.classList.add('show'); };
        const closeMenu = () => { mobileNav.classList.remove('show'); overlay.classList.remove('show'); };
        openMenuBtn.addEventListener('click', openMenu);
        closeMenuBtn.addEventListener('click', closeMenu);
        overlay.addEventListener('click', closeMenu);
    }

    // --- LOGIKA UNTUK SEARCH BAR DI HALAMAN UTAMA ---
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    if(searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const searchTerm = searchInput.value.trim();
            if (searchTerm) window.location.href = `category.html?search=${encodeURIComponent(searchTerm)}`;
        });
    }

    // --- FUNGSI UNTUK MEMBUAT KARTU POSTER ---
    const createPosterCard = (content) => {
        const streamPage = content.category === 'series' || content.category === 'anime' ? 'series_stream.html' : 'stream.html';
        const qualityClass = content.quality.toLowerCase();
        return `
            <a href="${streamPage}?id=${content.id}" class="poster-link">
                <div class="poster-card">
                    <img src="${content.poster}" alt="${content.title}">
                    <div class="poster-badge rating-badge"><i class="fas fa-star"></i><span>${content.rating}</span></div>
                    <div class="poster-badge quality-badge ${qualityClass}">${content.quality}</div>
                </div>
                <h3 class="poster-title">${content.title}</h3>
            </a>
        `;
    };

    // --- FUNGSI UNTUK MEMUAT KATEGORI ---
    const populateCategory = (containerId, filterFunction, limit = 10) => {
        const container = document.getElementById(containerId);
        if (!container) return;
        const filteredContent = allContent.filter(filterFunction).slice(0, limit);
        container.innerHTML = filteredContent.map(createPosterCard).join('');
    };

    // --- EKSEKUSI SEMUA FUNGSI ---
    populateCategory('movie-container', item => item.category === 'movie', 10);
    populateCategory('series-container', item => item.category === 'series', 10);
    populateCategory('indonesia-container', item => item.category === 'indonesia', 10);
    populateCategory('anime-container', item => item.category === 'anime', 10);
});
