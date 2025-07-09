document.addEventListener('DOMContentLoaded', () => {
    const allContent = [...movieData, ...seriesData, ...indonesiaData];

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
            const adUrl = 'https://www.google.com';
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
                            ${(data.genre && Array.isArray(data.genre)) ? data.genre.map(g => `<span class="tag genre">${g}</span>`).join('') : ''}
                        </div>
                        <article class="synopsis">
                            <h2>Sinopsis</h2>
                            <p>${data.synopsis || 'Sinopsis tidak tersedia.'}</p>
                        </article>
                        <div class="credits">
                            <p><strong>Sutradara:</strong> ${data.director || 'N/A'}</p>
                            <p><strong>Pemeran:</strong> ${(data.cast && Array.isArray(data.cast)) ? data.cast.join(', ') : 'N/A'}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        setupSelectors(data.seasons);
        initializeAdLock();
    };

    const setupSelectors = (seasons) => {
        const episodeNav = document.querySelector('.episode-navigation');
        const videoPlayer = document.getElementById('video-player');

        if (!seasons || seasons.length === 0) {
            if (episodeNav) episodeNav.innerHTML = '<p>Data episode belum tersedia.</p>';
            if (videoPlayer) videoPlayer.src = '';
            return;
        }

        const seasonSelector = document.getElementById('season-selector');
        const episodeSelector = document.getElementById('episode-selector');
        
        seasonSelector.innerHTML = seasons.map((season, i) => `<button class="season-btn ${i === 0 ? 'active' : ''}" data-season-index="${i}">Season ${season.season_number}</button>`).join('');
        
        const renderEpisodes = (seasonIndex) => {
            const currentSeason = seasons[seasonIndex];
            
            if (!currentSeason || !currentSeason.episodes || currentSeason.episodes.length === 0) {
                episodeSelector.innerHTML = '<p>Episode untuk season ini belum tersedia.</p>';
                if (videoPlayer) videoPlayer.src = '';
                return;
            }

            const episodes = currentSeason.episodes;
            episodeSelector.innerHTML = episodes.map((ep, i) => `<button class="episode-box ${i === 0 ? 'active' : ''}" data-episode-index="${i}">${ep.episode_number}</button>`).join('');
            
            videoPlayer.src = episodes[0].iframeSrc;
            
            addEpisodeClickListeners(seasonIndex);
        };

        const addEpisodeClickListeners = (seasonIndex) => {
            episodeSelector.querySelectorAll('.episode-box').forEach(box => {
                box.addEventListener('click', () => {
                    episodeSelector.querySelector('.active')?.classList.remove('active');
                    box.classList.add('active');
                    const episodeIndex = box.dataset.episodeIndex;
                    videoPlayer.src = seasons[seasonIndex].episodes[episodeIndex].iframeSrc;
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

    if (seriesData && (seriesData.category === 'series')) {
        document.title = `Nonton ${seriesData.title} | CinemaBaboet`;
        streamContainer.style.backgroundImage = `url('${seriesData.poster_lg}')`;
        renderSeriesPage(seriesData);
    } else {
        streamContainer.innerHTML = `<div class="error-state"><h2>404 - Konten Tidak Ditemukan</h2></div>`;
    }
});
