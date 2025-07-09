// GABUNGKAN SEMUA DATA MENJADI SATU
const allContent = [...movieData, ...seriesData, ...indonesiaData, ...animeData];

document.addEventListener('DOMContentLoaded', () => {
    const streamContainer = document.getElementById('stream-container');
    const urlParams = new URLSearchParams(window.location.search);
    const contentId = urlParams.get('id');
    const seriesData = allContent.find(item => item.id == contentId);

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

    const renderSeriesPage = (data) => {
        streamContainer.innerHTML = `
            <div id="content-wrapper">
                <div class="stream-content-area">
                    <div class="video-container">
                        <iframe id="video-player" src="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="episode-navigation">
                        <div class="season-selector" id="season-selector"></div>
                        <div class="episode-selector" id="episode-selector"></div>
                    </div>
                    <div class="info-container">
                        <h1 class="movie-title">${data.title}</h1>
                        <div class="genre-tags">
                            ${data.genre.map(g => `<span class="tag genre">${g}</span>`).join('')}
                        </div>
                        <article class="synopsis">
                            <h2>Sinopsis</h2>
                            <p>${data.synopsis}</p>
                        </article>
                        <div class="credits">
                            <p><strong>Sutradara:</strong> ${data.director}</p>
                            <p><strong>Pemeran:</strong> ${data.cast.join(', ')}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        setupSelectors(data.seasons);
        initializeAdLock();
    };

    const setupSelectors = (seasons) => {
        const seasonSelector = document.getElementById('season-selector');
        const episodeSelector = document.getElementById('episode-selector');
        const videoPlayer = document.getElementById('video-player');
        seasonSelector.innerHTML = seasons.map((season, i) => `<button class="season-btn ${i === 0 ? 'active' : ''}" data-season-index="${i}">Season ${season.season_number}</button>`).join('');
        const renderEpisodes = (seasonIndex) => {
            const episodes = seasons[seasonIndex].episodes;
            episodeSelector.innerHTML = episodes.map((ep, i) => `<button class="episode-box ${i === 0 ? 'active' : ''}" data-episode-index="${i}">${ep.episode_number}</button>`).join('');
            videoPlayer.src = episodes[0].iframeSrc;
            addEpisodeClickListeners(seasonIndex);
        };
        const addEpisodeClickListeners = (seasonIndex) => {
            episodeSelector.querySelectorAll('.episode-box').forEach(box => {
                box.addEventListener('click', () => {
                    episodeSelector.querySelector('.active')?.classList.remove('active');
                    box.classList.add('active');
                    videoPlayer.src = seasons[seasonIndex].episodes[box.dataset.episodeIndex].iframeSrc;
                });
            });
        };
        seasonSelector.querySelectorAll('.season-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                seasonSelector.querySelector('.active')?.classList.remove('active');
                btn.classList.add('active');
                renderEpisodes(btn.dataset.seasonIndex);
            });
        });
        renderEpisodes(0);
    };

    if (seriesData && (seriesData.category === 'series' || seriesData.category === 'anime')) {
        document.title = `Nonton ${seriesData.title} | CinemaBaboet`;
        streamContainer.style.backgroundImage = `url('${seriesData.poster_lg}')`;
        renderSeriesPage(seriesData);
    } else {
        streamContainer.innerHTML = `<div class="error-state"><h2>404 - Konten Tidak Ditemukan</h2></div>`;
    }
});
