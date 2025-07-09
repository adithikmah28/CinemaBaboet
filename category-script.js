document.addEventListener('DOMContentLoaded', () => {
    const pageTitle = document.getElementById('page-title');
    const posterGrid = document.getElementById('poster-grid');
    const paginationContainer = document.getElementById('pagination-container');

    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const searchQuery = urlParams.get('search');
    let currentPage = parseInt(urlParams.get('page')) || 1;
    const itemsPerPage = 20;

    let filteredContent = [];
    let pageHeader = '';

    // --- 1. FILTER KONTEN BERDASARKAN URL ---
    if (category) {
        document.title = `Kategori ${category.charAt(0).toUpperCase() + category.slice(1)} | CinemaBaboet`;
        pageHeader = `Kategori: ${category.charAt(0).toUpperCase() + category.slice(1)}`;

        if (category === 'originals') {
            filteredContent = allContent.filter(item => item.isOriginal === true);
        } else if (category === 'movie' || category === 'series' || category === 'indonesia') {
            filteredContent = allContent.filter(item => item.category === category);
        }
    } else if (searchQuery) {
        document.title = `Cari: ${searchQuery} | CinemaBaboet`;
        pageHeader = `Hasil Pencarian untuk: "${searchQuery}"`;
        filteredContent = allContent.filter(item => 
            item.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }
    pageTitle.textContent = pageHeader;

    // --- 2. LOGIKA PAGINATION ---
    const totalItems = filteredContent.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedItems = filteredContent.slice(startIndex, endIndex);

    // --- 3. RENDER KONTEN ---
    if (paginatedItems.length > 0) {
        posterGrid.innerHTML = paginatedItems.map(createPosterCard).join('');
    } else {
        posterGrid.innerHTML = `<p class="no-results">Tidak ada hasil ditemukan.</p>`;
    }

    // --- 4. RENDER TOMBOL PAGINATION ---
    if (totalPages > 1) {
        renderPagination(totalPages, currentPage, category, searchQuery);
    }
    
    // --- FUNGSI UNTUK MEMBUAT KARTU POSTER (SAMA SEPERTI DI HALAMAN UTAMA) ---
    function createPosterCard(content) {
        const qualityClass = content.quality.toLowerCase();
        return `
            <a href="stream.html?id=${content.id}" class="poster-link">
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
    }

    // --- FUNGSI UNTUK MEMBUAT TOMBOL PAGINATION ---
    function renderPagination(totalPages, currentPage, category, searchQuery) {
        let paginationHTML = '';
        for (let i = 1; i <= totalPages; i++) {
            const isActive = i === currentPage ? 'active' : '';
            let url = `category.html?`;
            if (category) url += `category=${category}&`;
            if (searchQuery) url += `search=${searchQuery}&`;
            url += `page=${i}`;

            paginationHTML += `<a href="${url}" class="page-btn ${isActive}">${i}</a>`;
        }
        paginationContainer.innerHTML = paginationHTML;
    }

    // --- Fungsikan Search Bar di halaman ini juga ---
    const searchForm = document.getElementById('search-form-category');
    const searchInput = document.getElementById('search-input-category');
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const term = searchInput.value.trim();
        if (term) {
            window.location.href = `category.html?search=${encodeURIComponent(term)}`;
        }
    });
});
