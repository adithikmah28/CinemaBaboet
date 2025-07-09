document.addEventListener('DOMContentLoaded', () => {
    // === 1. DEFINISIKAN SEMUA ELEMEN DAN FUNGSI DULU ===

    const pageTitle = document.getElementById('page-title');
    const posterGrid = document.getElementById('poster-grid');
    const paginationContainer = document.getElementById('pagination-container');
    const searchForm = document.getElementById('search-form-category');
    const searchInput = document.getElementById('search-input-category');

    // Fungsi untuk membuat satu kartu poster
    const createPosterCard = (content) => {
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

    // Fungsi untuk membuat tombol-tombol pagination
    const renderPagination = (totalPages, currentPage, category, searchQuery) => {
        let paginationHTML = '';
        if (totalPages <= 1) {
            paginationContainer.innerHTML = ''; // Jangan tampilkan pagination jika hanya 1 halaman
            return;
        }

        for (let i = 1; i <= totalPages; i++) {
            const isActive = i === currentPage ? 'active' : '';
            let url = `category.html?`;
            if (category) url += `category=${category}&`;
            if (searchQuery) url += `search=${searchQuery}&`;
            url += `page=${i}`;

            paginationHTML += `<a href="${url}" class="page-btn ${isActive}">${i}</a>`;
        }
        paginationContainer.innerHTML = paginationHTML;
    };


    // === 2. LOGIKA UTAMA SETELAH FUNGSI SIAP ===
    
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const searchQuery = urlParams.get('search');
    let currentPage = parseInt(urlParams.get('page')) || 1;
    const itemsPerPage = 20;

    let filteredContent = [];
    let pageHeader = '';

    // Filter konten berdasarkan parameter di URL
    if (category) {
        let categoryName = category.charAt(0).toUpperCase() + category.slice(1);
        if (category === 'movie') categoryName = "Movie";
        if (category === 'series') categoryName = "Series";

        document.title = `Kategori ${categoryName} | CinemaBaboet`;
        pageHeader = `Kategori: ${categoryName}`;
        
        filteredContent = allContent.filter(item => item.category === category);

    } else if (searchQuery) {
        document.title = `Cari: ${searchQuery} | CinemaBaboet`;
        pageHeader = `Hasil Pencarian untuk: "${searchQuery}"`;
        filteredContent = allContent.filter(item => 
            item.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }
    pageTitle.textContent = pageHeader;

    // Lakukan pagination
    const totalItems = filteredContent.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedItems = filteredContent.slice(startIndex, endIndex);

    // Render konten yang sudah dipaginasi
    if (paginatedItems.length > 0) {
        posterGrid.innerHTML = paginatedItems.map(createPosterCard).join('');
    } else {
        posterGrid.innerHTML = `<p class="no-results">Tidak ada hasil yang cocok ditemukan.</p>`;
    }

    // Render tombol pagination
    renderPagination(totalPages, currentPage, category, searchQuery);

    // Aktifkan form pencarian di halaman ini
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const term = searchInput.value.trim();
        if (term) {
            window.location.href = `category.html?search=${encodeURIComponent(term)}`;
        }
    });
});
