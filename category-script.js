document.addEventListener('DOMContentLoaded', () => {
    const createPosterCard = (content) => {
        const streamPage = content.category === 'series' ? 'series_stream.html' : 'stream.html';
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
    const pageTitle = document.getElementById('page-title');
    const posterGrid = document.getElementById('poster-grid');
    const paginationContainer = document.getElementById('pagination-container');
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const searchQuery = urlParams.get('search');
    let currentPage = parseInt(urlParams.get('page')) || 1;
    const itemsPerPage = 20;
    let filteredContent = [], pageHeader = '';
    if (category) {
        pageHeader = `Kategori: ${category.charAt(0).toUpperCase() + category.slice(1)}`;
        filteredContent = allContent.filter(item => item.category === category);
    } else if (searchQuery) {
        pageHeader = `Hasil Pencarian untuk: "${searchQuery}"`;
        filteredContent = allContent.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    pageTitle.textContent = pageHeader;
    const totalPages = Math.ceil(filteredContent.length / itemsPerPage);
    const paginatedItems = filteredContent.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    if (paginatedItems.length > 0) {
        posterGrid.innerHTML = paginatedItems.map(createPosterCard).join('');
    } else {
        posterGrid.innerHTML = `<p class="no-results">Tidak ada hasil yang cocok ditemukan.</p>`;
    }
    if (totalPages > 1) {
        let paginationHTML = '';
        for (let i = 1; i <= totalPages; i++) {
            const isActive = i === currentPage ? 'active' : '';
            let url = `category.html?${category ? `category=${category}&` : ''}${searchQuery ? `search=${searchQuery}&` : ''}page=${i}`;
            paginationHTML += `<a href="${url}" class="page-btn ${isActive}">${i}</a>`;
        }
        paginationContainer.innerHTML = paginationHTML;
    }
    const searchForm = document.getElementById('search-form-category');
    const searchInput = document.getElementById('search-input-category');
    if(searchForm){
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const term = searchInput.value.trim();
            if(term) window.location.href = `category.html?search=${encodeURIComponent(term)}`;
        });
    }
});
