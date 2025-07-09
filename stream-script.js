// stream-script.js (DENGAN AD-LOCK & DETAIL LENGKAP - FIXED)
document.addEventListener('DOMContentLoaded', () => {
    const streamContainer = document.getElementById('stream-container');
    const urlParams = new URLSearchParams(window.location.search);
    const contentId = urlParams.get('id');
    const contentData = allContent.find(item => item.id == contentId);

    const initializeAdLock = () => {
        const modalOverlay = document.getElementById('modal-overlay');
        const modalContainer = document.getElementById('modal-container');
        const adLinkButton = document.getElementById('ad-link-button');
        const contentWrapper = document.getElementById('content-wrapper');

        // Tampilkan modal dan kunci konten
        modalOverlay.classList.add('show');
        modalContainer.classList.add('show');
        contentWrapper.classList.add('content-locked');

        adLinkButton.addEventListener('click', (e) => {
            e.preventDefault();
            // GANTI DENGAN DIRECT LINK IKLAN ANDA
            const adUrl = 'https://www.google.com'; 
            
            window.open(adUrl, '_blank'); // Buka iklan
            // Buka kunci konten
            contentWrapper.classList.remove('content-locked');
            modalOverlay.classList.remove('show');
            modalContainer.classList.remove('show');
        });
    };

    if (contentData && (contentData.category === 'movie' || contentData.category === 'indonesia')) {
        document.title = `Nonton ${contentData.title} | CinemaBaboet`;
        streamContainer.style.backgroundImage = `url('${contentData.poster_lg}')`;
        
        // RENDER KONTEN DENGAN SEMUA DETAIL
        streamContainer.innerHTML = `
            <div id="content-wrapper"> <!-- Wrapper untuk dikunci -->
                <div class="stream-content-area">
                    <div class="video-container">
                        <iframe src="${contentData.iframeSrc}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>

                    <div class="info-container">
                        <h1 class="movie-title">${contentData.title} (${contentData.year})</h1>
                        
                        <div class="meta-tags">
                            <span class="tag quality">${contentData.quality}</span>
                            <span class="tag subtitle">SUB: ${contentData.subtitle}</span>
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
            </div>
        `;
        initializeAdLock(); // Panggil Ad-Lock setelah konten dirender
    } else {
        streamContainer.innerHTML = `<div class="error-state"><h2>404 - Konten Tidak Ditemukan</h2></div>`;
    }
});
