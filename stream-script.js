document.addEventListener('DOMContentLoaded', () => {
    const streamContainer = document.getElementById('stream-container');

    // 1. Ambil ID dari URL (misal: stream.html?id=3)
    const urlParams = new URLSearchParams(window.location.search);
    const contentId = urlParams.get('id');

    // 2. Cari data konten berdasarkan ID
    const contentData = allContent.find(item => item.id == contentId);

    // 3. Jika data ditemukan, render ke halaman. Jika tidak, tampilkan error.
    if (contentData) {
        // Update judul halaman browser
        document.title = `Nonton ${contentData.title} | CinemaBaboet`;
        
        // Buat HTML lengkap untuk halaman streaming
        streamContainer.innerHTML = `
            <section class="stream-hero" style="background-image: linear-gradient(to top, rgba(20,20,20,1) 20%, rgba(20,20,20,0.5) 50%), url('${contentData.poster_lg}');">
                <!-- Konten bisa ditaruh di sini jika perlu -->
            </section>

            <section class="stream-details">
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
            </section>
        `;

    } else {
        // Tampilkan pesan error jika ID tidak valid atau tidak ditemukan
        streamContainer.innerHTML = `
            <div class="error-state">
                <h2>404 - Konten Tidak Ditemukan</h2>
                <p>Maaf, film atau series yang kamu cari tidak ada. Mungkin link-nya salah atau konten sudah dihapus.</p>
                <a href="index.html" class="btn">Kembali ke Beranda</a>
            </div>
        `;
    }
});
