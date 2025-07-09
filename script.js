document.addEventListener('DOMContentLoaded', () => {
    // Fungsi untuk membuat satu kartu poster
    function createPosterCard(content) {
        // Kita bungkus semuanya dengan tag <a> yang mengarah ke stream.html dengan ID
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

    // Fungsi untuk memuat konten ke dalam container berdasarkan filter
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

    // Memuat semua kategori saat halaman pertama kali dibuka
    populateCategory('originals-container', item => item.isOriginal === true);
    populateCategory('movie-container', item => item.category === 'movie' && !item.isOriginal);
    populateCategory('series-container', item => item.category === 'series' && !item.isOriginal);
    populateCategory('indonesia-container', item => item.category === 'indonesia');
});
