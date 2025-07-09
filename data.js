// DATABASE ULTIMATE - Dengan data genre yang LENGKAP
const allContent = [
    {
        id: 1,
        title: 'Gadis Kretek',
        year: '2023',
        category: 'series',
        quality: 'HD',
        rating: 8.5,
        genre: ['Drama', 'Sejarah', 'Romantis'], // <-- GENRE DITAMBAHKAN
        poster: 'https://m.media-amazon.com/images/M/MV5BN2RjZGVkNDItN2I3NC00YjVjLWIyYTUtZDE4NTA2MGMzODc4XkEyXkFqcGdeQXVyMTEzNDY2ODE5._V1_FMjpg_UX1000_.jpg',
        poster_lg: 'https://m.media-amazon.com/images/M/MV5BN2RjZGVkNDItN2I3NC00YjVjLWIyYTUtZDE4NTA2MGMzODc4XkEyXkFqcGdeQXVyMTEzNDY2ODE5._V1_FMjpg_UX1000_.jpg',
        synopsis: 'Kisah Dasiyah, seorang wanita visioner yang gemar meracik saus rokok kretek, berlatar belakang industri tembakau di Indonesia.',
        cast: ['Dian Sastrowardoyo', 'Ario Bayu', 'Putri Marino'],
        director: 'Kamila Andini, Ifa Isfansyah',
        seasons: [
            {
                season_number: 1,
                episodes: [
                    { episode_number: 1, iframeSrc: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
                    { episode_number: 2, iframeSrc: 'https://www.youtube.com/embed/uYPbbksJxIg' },
                    { episode_number: 3, iframeSrc: 'https://www.youtube.com/embed/9B69pS05S8w' }
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
