document.addEventListener('DOMContentLoaded', () => {
    const streamContainer = document.getElementById('stream-container');

    const urlParams = new URLSearchParams(window.location.search);
    const contentId = urlParams.get('id');
    const contentData = allContent.find(item => item.id == contentId);

    if (contentData) {
        // Update judul halaman
        document.title = `Nonton ${contentData.title} | CinemaBaboet`;

        // SET BACKGROUND PADA WRAPPER UTAMA (#stream-container)
        streamContainer.style.backgroundImage = `url('${contentData.poster_lg}')`;

        // RENDER KONTEN KE DALAM WRAPPER
        streamContainer.innerHTML = `
            <div class="stream-content-area">
                <div class="video-container">
                    <iframe 
                        src="${contentData.iframeSrc}" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>

                <div class="info-container">
                    <h1 class="movie-title">${contentData.title} (${contentData.year})</h1>
                    
                    <div class="meta-tags">
                        <span class="tag quality">${contentData.quality}</span>
                        <span class="tag subtitle">SUB: ${contentData.subtitle}</span>
                        <span class="tag category">${contentData.category.charAt(0).toUpperCase() + contentData.category.slice(1)}</span>
                    </div>

                    <article class="synopsis">
                        <h2>Sinopsis</h2>
                        <p>${contentData.synopsis}</p>
                    </article>

                    <div class="credits">
                        <p><strong>Sutradara:</strong> ${contentData.director}</p>
                        <p><strong>Pemeran:</strong> ${contentData.cast.join(', ')}</p>
                    </div>
                </div>
            </div>
        `;

    } else {
        // Tampilkan pesan error jika ID tidak valid
        streamContainer.innerHTML = `
            <div class="error-state">
                <h2>404 - Konten Tidak Ditemukan</h2>
                <p>Maaf, film atau series yang kamu cari tidak ada.</p>
                <a href="index.html" class="btn">Kembali ke Beranda</a>
            </div>
        `;
    }
});
