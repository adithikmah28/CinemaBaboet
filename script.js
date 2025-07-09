// Ganti seluruh isi file script.js Anda dengan ini

document.addEventListener('DOMContentLoaded', () => {

    // --- LOGIKA UNTUK MENU MOBILE & OVERLAY ---
    const openMenuBtn = document.getElementById('open-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const overlay = document.getElementById('overlay');

    const openMenu = () => { mobileNav.classList.add('show'); overlay.classList.add('show'); };
    const closeMenu = () => { mobileNav.classList.remove('show'); overlay.classList.remove('show'); };

    openMenuBtn.addEventListener('click', openMenu);
    closeMenuBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);

    // --- LOGIKA UNTUK SEARCH BAR (BARU) ---
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            window.location.href = `category.html?search=${encodeURIComponent(searchTerm)}`;
        }
    });

    // --- LOGIKA UNTUK MEMBUAT KARTU POSTER ---
    const createPosterCard = (content) => {
    // MENENTUKAN HALAMAN TUJUAN BERDASARKAN KATEGORI
    const streamPage = content.category === 'series' ? 'series_stream.html' : 'stream.html';
    
    const qualityClass = content.quality.toLowerCase();
    return `
        <a href="${streamPage}?id=${content.id}" class="poster-link">
            <div class="poster-card">
                <img src="${content.poster}" alt="${content.title}">
                <div class="poster-badge rating-badge"><i class="fas fa-star"></i><span>${content.rating}</span></div>
                <div class="poster-badge quality-badge ${qualityClass}">${content.quality}</div>
                <div class="overlay">
                    <i class="fas fa-play-circle play-icon"></i>
                    <h3>${content.title}</h3>
                </div>
            </div>
        </a>
    `;
};

    // --- LOGIKA UNTUK MEMUAT KATEGORI DENGAN LIMIT (DIPERBARUI) ---
    const populateCategory = (containerId, filterFunction, limit = 10) => {
        const container = document.getElementById(containerId);
        if (!container) return;

        const filteredContent = allContent.filter(filterFunction);
        const limitedContent = filteredContent.slice(0, limit); // Batasi hanya 10 item
        container.innerHTML = limitedContent.map(createPosterCard).join('');
    };

    // --- LOGIKA UNTUK PANAH SCROLL KATEGORI ---
    const setupScrollArrows = () => {
        document.querySelectorAll('.category-row').forEach(row => {
            const leftArrow = row.querySelector('.scroll-arrow.left');
            const rightArrow = row.querySelector('.scroll-arrow.right');
            const container = row.querySelector('.poster-container');
            
            if (leftArrow && rightArrow && container) {
                leftArrow.addEventListener('click', () => container.scrollBy({ left: -container.clientWidth * 0.8, behavior: 'smooth' }));
                rightArrow.addEventListener('click', () => container.scrollBy({ left: container.clientWidth * 0.8, behavior: 'smooth' }));
            }
        });
    };

    // --- EKSEKUSI SEMUA FUNGSI ---
    // Sekarang memanggil populateCategory dengan limit 10
    populateCategory('originals-container', item => item.isOriginal === true, 10);
    populateCategory('movie-container', item => item.category === 'movie' && !item.isOriginal, 10);
    populateCategory('series-container', item => item.category === 'series' && !item.isOriginal, 10);
    populateCategory('indonesia-container', item => item.category === 'indonesia', 10);
    // Panah scroll tidak lagi diperlukan karena item terbatas, tapi kodenya tetap ada jika ingin diaktifkan lagi
    // setupScrollArrows();
});
