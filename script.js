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


    // --- LOGIKA UNTUK MEMBUAT KARTU POSTER (DENGAN BADGES) ---
    const createPosterCard = (content) => {
        // Menentukan kelas warna berdasarkan kualitas
        const qualityClass = content.quality.toLowerCase();

        return `
            <a href="stream.html?id=${content.id}" class="poster-link">
                <div class="poster-card">
                    <img src="${content.poster}" alt="${content.title}">
                    
                    <!-- Badge Rating -->
                    <div class="poster-badge rating-badge">
                        <i class="fas fa-star"></i>
                        <span>${content.rating}</span>
                    </div>

                    <!-- Badge Kualitas -->
                    <div class="poster-badge quality-badge ${qualityClass}">
                        ${content.quality}
                    </div>

                    <div class="overlay">
                        <i class="fas fa-play-circle play-icon"></i>
                        <h3>${content.title}</h3>
                    </div>
                </div>
            </a>
        `;
    };

    // --- LOGIKA UNTUK MEMUAT KATEGORI ---
    const populateCategory = (containerId, filterFunction) => {
        const container = document.getElementById(containerId);
        if (!container) return;

        const filteredContent = allContent.filter(filterFunction);
        container.innerHTML = filteredContent.map(createPosterCard).join('');
    };

    // --- LOGIKA UNTUK PANAH SCROLL KATEGORI ---
    const setupScrollArrows = () => {
        document.querySelectorAll('.category-row').forEach(row => {
            const leftArrow = row.querySelector('.scroll-arrow.left');
            const rightArrow = row.querySelector('.scroll-arrow.right');
            const container = row.querySelector('.poster-container');
            
            if (leftArrow && rightArrow && container) {
                leftArrow.addEventListener('click', () => {
                    const scrollAmount = container.clientWidth * 0.8;
                    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
                });
                rightArrow.addEventListener('click', () => {
                    const scrollAmount = container.clientWidth * 0.8;
                    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                });
            }
        });
    };

    // --- EKSEKUSI SEMUA FUNGSI ---
    populateCategory('originals-container', item => item.isOriginal === true);
    populateCategory('movie-container', item => item.category === 'movie' && !item.isOriginal);
    populateCategory('series-container', item => item.category === 'series' && !item.isOriginal);
    populateCategory('indonesia-container', item => item.category === 'indonesia');
    setupScrollArrows();
});
