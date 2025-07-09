// DATABASE ULTIMATE - Dengan data genre yang LENGKAP
const allContent = [
    {
        id: 1,
        title: 'Squid Game (2021)',
        year: '',
        category: 'series',
        quality: 'HD',
        rating: 7.9,
        genre: ['Action', 'Mystery', 'Drama'], // <-- GENRE DITAMBAHKAN
        poster: 'https://image.tmdb.org/t/p/original/1QdXdRYfktUSONkl1oD5gc6Be0s.jpg',
        poster_lg: 'https://image.tmdb.org/t/p/original/1QdXdRYfktUSONkl1oD5gc6Be0s.jpg',
        synopsis: 'Ratusan pemain yang butuh uang menerima undangan aneh untuk bertanding dalam permainan anak-anak. Di permainan ini, hadiah menggiurkan menanti—dengan taruhan mematikan.',
        cast: ['Lee Jung-jae', 'Wi Ha-jun', 'Jeon Young-soo'],
        director: 'Hwang Dong-hyuk',
        seasons: [
            {
                season_number: 1,
                episodes: [
                    { episode_number: 1, iframeSrc: 'https://vidlink.pro/tv/93405/1/1' },
                    { episode_number: 2, iframeSrc: 'https://vidlink.pro/tv/93405/1/2' },
                    { episode_number: 3, iframeSrc: 'https://vidlink.pro/tv/93405/1/3' },
                    { episode_number: 4, iframeSrc: 'https://vidlink.pro/tv/93405/1/4' },
                    { episode_number: 5, iframeSrc: 'https://vidlink.pro/tv/93405/1/5' },
                    { episode_number: 6, iframeSrc: 'https://vidlink.pro/tv/93405/1/6' },
                    { episode_number: 7, iframeSrc: 'https://vidlink.pro/tv/93405/1/7' },
                    { episode_number: 8, iframeSrc: 'https://vidlink.pro/tv/93405/1/8' },
                    { episode_number: 9, iframeSrc: 'https://vidlink.pro/tv/93405/1/9' },
                    ]
            },
            {
                season_number: 2,
                episodes: [
                    { episode_number: 1, iframeSrc: 'https://vidlink.pro/tv/93405/2/1' },
                    { episode_number: 2, iframeSrc: 'https://vidlink.pro/tv/93405/2/2' },
                    { episode_number: 3, iframeSrc: 'https://vidlink.pro/tv/93405/2/3' },
                    { episode_number: 4, iframeSrc: 'https://vidlink.pro/tv/93405/2/4' },
                    { episode_number: 5, iframeSrc: 'https://vidlink.pro/tv/93405/2/5' },
                    { episode_number: 6, iframeSrc: 'https://vidlink.pro/tv/93405/2/6' },
                    { episode_number: 7, iframeSrc: 'https://vidlink.pro/tv/93405/2/7' },
                    ]
            },
            {
                season_number: 3,
                episodes: [
                    { episode_number: 1, iframeSrc: 'https://vidlink.pro/tv/93405/3/1' },
                    { episode_number: 2, iframeSrc: 'https://vidlink.pro/tv/93405/3/2' },
                    { episode_number: 3, iframeSrc: 'https://vidlink.pro/tv/93405/3/3' },
                    { episode_number: 4, iframeSrc: 'https://vidlink.pro/tv/93405/3/4' },
                    { episode_number: 5, iframeSrc: 'https://vidlink.pro/tv/93405/3/5' },
                    { episode_number: 6, iframeSrc: 'https://vidlink.pro/tv/93405/3/6' }
                ]
            }
        ]
    },
    {
        id: 9,
        title: 'Oppenheimer',
        year: '',
        category: 'movie',
        quality: 'HD',
        rating: 8.6,
        genre: ['Biografi', 'Drama', 'Sejarah'], // <-- GENRE DITAMBAHKAN
        poster: 'https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_FMjpg_UX1000_.jpg',
        poster_lg: 'https://images.thedirect.com/media/photos/oppenheimer-poster.jpg',
        synopsis: 'Kisah fisikawan teoretis Amerika J. Robert Oppenheimer, dan kontribusinya dalam penciptaan bom atom.',
        cast: ['Cillian Murphy', 'Emily Blunt', 'Matt Damon', 'Robert Downey Jr.'],
        director: 'Christopher Nolan',
        subtitle: 'English, Indonesia',
        iframeSrc: 'https://www.youtube.com/embed/uYPbbksJxIg'
    },
    {
        id: 3,
        title: 'Pemandi Jenazah (2024)',
        year: '',
        category: 'indonesia',
        quality: 'HD',
        rating: 6.9,
        genre: ['Horror', 'Drama', 'Thriller'], // <-- GENRE DITAMBAHKAN
        poster: 'https://image.tmdb.org/t/p/original/tgMEMGpnSKJrqSAmrnRygv5KBur.jpg',
        poster_lg: 'https://image.tmdb.org/t/p/original/tgMEMGpnSKJrqSAmrnRygv5KBur.jpg',
        synopsis: 'Lela, seorang petugas pemakaman, menemukan keanehan pada jenazah ibunya yang meninggal mendadak. Terjebak dalam ketegangan sakral dan perjalanan horor yang menegangkan, Lela menemukan keanehan lain pada tubuh mayat yang sedang dimandikannya.',
        cast: ['Aghniny Haque', 'Djenar Maesa Ayu', 'Ibrahim Risyad'],
        director: 'Hadrah Daeng Ratu',
        subtitle: 'Indonesia',
        iframeSrc: 'https://vidlink.pro/movie/1223799'
    }
];
