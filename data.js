// DATABASE ULTIMATE - Dengan data genre yang LENGKAP
const allContent = [
    {
        id: 1,
        title: 'Squid Game',
        year: '2021',
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
                    { episode_number: 9, iframeSrc: 'https://vidlink.pro/tv/93405/1/9' }
                ]
            }
        ]
    },
    {
        id: 9,
        title: 'Oppenheimer',
        year: '2023',
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
        title: 'Agak Laen',
        year: '2024',
        category: 'indonesia',
        quality: 'HD',
        rating: 8.9,
        genre: ['Komedi', 'Horor'], // <-- GENRE DITAMBAHKAN
        poster: 'https://m.media-amazon.com/images/M/MV5BODkxNWM1MjYtZWZlZC00M2I0LWIzYWMtOTk3YTRkZDYxZDMxXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_FMjpg_UX1000_.jpg',
        poster_lg: 'https://m.media-amazon.com/images/M/MV5BODkxNWM1MjYtZWZlZC00M2I0LWIzYWMtOTk3YTRkZDYxZDMxXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_FMjpg_UX1000_.jpg',
        synopsis: 'Empat sekawan pengelola rumah hantu harus menghadapi konsekuensi saat salah satu pengunjung meninggal karena kaget.',
        cast: ['Bene Dion', 'Oki Rengga', 'Indra Jegel', 'Boris Bokir'],
        director: 'Muhadkly Acho',
        subtitle: 'Indonesia',
        iframeSrc: 'https://www.youtube.com/embed/9B69pS05S8w'
    }
];
