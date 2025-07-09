// GABUNGKAN SEMUA DATA MENJADI SATU
const allContent = [...movieData, ...seriesData, ...indonesiaData, ...animeData];

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

        modalOverlay.classList.add('show');
        modalContainer.classList.add('show');
        contentWrapper.classList.add('content-locked');

        adLinkButton.addEventListener('click', (e) => {
            e.preventDefault();
            const adUrl = 'https://www.google.com'; // GANTI DENGAN DIRECT LINK ANDA
            window.open(adUrl, '_blank');
            contentWrapper.classList.remove('content-locked');
            modalOverlay.classList.remove('show');
            modalContainer.classList.remove('show');
        });
    };

    if (contentData && (contentData.category === 'movie' || contentData.category === 'indonesia')) {
        document.title = `Nonton ${contentData.title} | CinemaBaboet`;
        streamContainer.style.backgroundImage = `url('${contentData.poster_lg}')`;
        streamContainer.innerHTML = `
            <div id="content-wrapper">
                <div class="stream-content-area">
                    <div class="video-container">
                        <iframe src="${contentData.iframeSrc}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="info-container">
                        <h1 class="movie-title">${contentData.title}</h1>
                        <div class="meta-tags">
                            <span class="tag quality">${contentData.quality}</span>
                            <span class="tag subtitle">SUB: ${contentData.subtitle}</span>
                        </div>
                        <div class="genre-tags">
                            ${contentData.genre.map(g => `<span class="tag genre">${g}</span>`).join('')}
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
        initializeAdLock();
    } else {
        streamContainer.innerHTML = `<div class="error-state"><h2>404 - Konten Tidak Ditemukan</h2></div>`;
    }
});
