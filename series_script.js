document.addEventListener('DOMContentLoaded', () => {
    const streamContainer = document.getElementById('stream-container');
    const urlParams = new URLSearchParams(window.location.search);
    const contentId = urlParams.get('id');
    const seriesData = allContent.find(item => item.id == contentId);

    if (seriesData && seriesData.category === 'series') {
        document.title = `Nonton ${seriesData.title} | CinemaBaboet`;
        streamContainer.style.backgroundImage = `url('${seriesData.poster_lg}')`;
        renderSeriesPage(seriesData);
    } else {
        streamContainer.innerHTML = `<div class="error-state"><h2>404 - Series Tidak Ditemukan</h2><p>Maaf, series yang kamu cari tidak ada.</p><a href="index.html" class="btn">Kembali ke Beranda</a></div>`;
    }

    function renderSeriesPage(data) {
        streamContainer.innerHTML = `
            <div class="stream-content-area">
                <div class="video-container">
                    <iframe id="video-player" src="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                
                <div class="episode-navigation">
                    <div class="season-selector" id="season-selector">
                        <!-- Tombol season akan di-render di sini -->
                    </div>
                    <div class="episode-selector" id="episode-selector">
                        <!-- Kotak episode akan di-render di sini -->
                    </div>
                </div>

                <div class="info-container">
                    <h1 class="movie-title">${data.title} (${data.year})</h1>
                    <article class="synopsis"><p>${data.synopsis}</p></article>
                    <div class="credits">
                        <p><strong>Pemeran:</strong> ${data.cast.join(', ')}</p>
                        <p><strong>Sutradara:</strong> ${data.director}</p>
                    </div>
                </div>
            </div>
        `;
        setupSelectors(data.seasons);
    }

    function setupSelectors(seasons) {
        const seasonSelector = document.getElementById('season-selector');
        const episodeSelector = document.getElementById('episode-selector');
        const videoPlayer = document.getElementById('video-player');

        // Render tombol season
        seasonSelector.innerHTML = seasons.map((season, index) => 
            `<button class="season-btn ${index === 0 ? 'active' : ''}" data-season-index="${index}">Season ${season.season_number}</button>`
        ).join('');

        // Fungsi untuk render episode berdasarkan season yang dipilih
        function renderEpisodes(seasonIndex) {
            const episodes = seasons[seasonIndex].episodes;
            episodeSelector.innerHTML = episodes.map((ep, index) => 
                `<button class="episode-box ${index === 0 ? 'active' : ''}" data-episode-index="${index}">${ep.episode_number}</button>`
            ).join('');
            
            // Set video player ke episode pertama dari season ini
            videoPlayer.src = episodes[0].iframeSrc;

            // Tambahkan event listener untuk episode boxes yang baru di-render
            addEpisodeClickListeners(seasonIndex);
        }

        // Fungsi untuk menambahkan event listener ke episode boxes
        function addEpisodeClickListeners(seasonIndex) {
            episodeSelector.querySelectorAll('.episode-box').forEach(box => {
                box.addEventListener('click', () => {
                    episodeSelector.querySelector('.active')?.classList.remove('active');
                    box.classList.add('active');
                    const episodeIndex = box.dataset.episodeIndex;
                    videoPlayer.src = seasons[seasonIndex].episodes[episodeIndex].iframeSrc;
                });
            });
        }
        
        // Tambahkan event listener untuk season buttons
        seasonSelector.querySelectorAll('.season-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                seasonSelector.querySelector('.active')?.classList.remove('active');
                btn.classList.add('active');
                const seasonIndex = btn.dataset.seasonIndex;
                renderEpisodes(seasonIndex);
            });
        });

        // Render episode untuk season pertama saat halaman dimuat
        renderEpisodes(0);
    }
});
