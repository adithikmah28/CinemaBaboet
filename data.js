// DATABASE ULTIMATE - Dengan struktur Season & Episode untuk Series
const allContent = [
    {
        id: 1,
        title: 'Gadis Kretek',
        year: '2023',
        category: 'series', // Kategori Series
        quality: 'HD',
        rating: 8.5,
        poster: 'https://m.media-amazon.com/images/M/MV5BN2RjZGVkNDItN2I3NC00YjVjLWIyYTUtZDE4NTA2MGMzODc4XkEyXkFqcGdeQXVyMTEzNDY2ODE5._V1_FMjpg_UX1000_.jpg',
        poster_lg: 'https://m.media-amazon.com/images/M/MV5BN2RjZGVkNDItN2I3NC00YjVjLWIyYTUtZDE4NTA2MGMzODc4XkEyXkFqcGdeQXVyMTEzNDY2ODE5._V1_FMjpg_UX1000_.jpg',
        synopsis: 'Kisah Dasiyah, seorang wanita visioner yang gemar meracik saus rokok kretek, berlatar belakang industri tembakau di Indonesia.',
        cast: ['Dian Sastrowardoyo', 'Ario Bayu', 'Putri Marino'],
        director: 'Kamila Andini',
        // STRUKTUR BARU UNTUK SERIES
        seasons: [
            {
                season_number: 1,
                episodes: [
                    { episode_number: 1, iframeSrc: 'https://www.youtube.com/embed/dQw4w9WgXcQ?si=example1' },
                    { episode_number: 2, iframeSrc: 'https://www.youtube.com/embed/uYPbbksJxIg?si=example2' },
                    { episode_number: 3, iframeSrc: 'https://www.youtube.com/embed/9B69pS05S8w?si=example3' },
                    { episode_number: 4, iframeSrc: 'https://www.youtube.com/embed/Y274jZs5s7s?si=example4' },
                    { episode_number: 5, iframeSrc: 'https://www.youtube.com/embed/b9EkMc79ZSU?si=example5' }
                ]
            }
        ]
    },
    {
        id: 4,
        title: 'Stranger Things',
        year: '2016',
        category: 'series',
        quality: 'HD',
        rating: 8.7,
        poster: 'https://m.media-amazon.com/images/M/MV5BNDU4ODQ0OTk3OF5BMl5BanBnXkFtZTgwOTA4MDY2NTE@._V1_FMjpg_UX1000_.jpg',
        poster_lg: 'https://www.xtrafondos.com/wallpapers/resized/elenco-de-stranger-things-4-10617.jpg?s=large',
        synopsis: 'Ketika seorang anak laki-laki menghilang, sebuah kota kecil mengungkap misteri yang melibatkan eksperimen rahasia dan kekuatan supernatural.',
        cast: ['Millie Bobby Brown', 'Finn Wolfhard', 'Winona Ryder'],
        director: 'The Duffer Brothers',
        seasons: [
            {
                season_number: 1,
                episodes: [
                    { episode_number: 1, iframeSrc: 'https://www.youtube.com/embed/b9EkMc79ZSU?si=st1ep1' },
                    { episode_number: 2, iframeSrc: 'https://www.youtube.com/embed/b9EkMc79ZSU?si=st1ep2' },
                    { episode_number: 3, iframeSrc: 'https://www.youtube.com/embed/b9EkMc79ZSU?si=st1ep3' },
                    { episode_number: 4, iframeSrc: 'https://www.youtube.com/embed/b9EkMc79ZSU?si=st1ep4' }
                ]
            },
            {
                season_number: 2,
                episodes: [
                    { episode_number: 1, iframeSrc: 'https://www.youtube.com/embed/R1g07RpTPFE?si=st2ep1' },
                    { episode_number: 2, iframeSrc: 'https://www.youtube.com/embed/R1g07RpTPFE?si=st2ep2' },
                    { episode_number: 3, iframeSrc: 'https://www.youtube.com/embed/R1g07RpTPFE?si=st2ep3' }
                ]
            }
        ]
    },
    {
        id: 9,
        title: 'Oppenheimer',
        year: '2023',
        category: 'movie', // Kategori Movie
        quality: 'HD',
        rating: 8.6,
        poster: 'https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_FMjpg_UX1000_.jpg',
        poster_lg: 'https://images.thedirect.com/media/photos/oppenheimer-poster.jpg',
        synopsis: 'Kisah fisikawan teoretis Amerika J. Robert Oppenheimer, dan kontribusinya dalam penciptaan bom atom.',
        cast: ['Cillian Murphy', 'Emily Blunt', 'Matt Damon'],
        director: 'Christopher Nolan',
        subtitle: 'English, Indonesia',
        iframeSrc: 'https://www.youtube.com/embed/uYPbbksJxIg?si=i12tq_3G5xG4L8nC'
    },
    {
        id: 3,
        title: 'Agak Laen',
        year: '2024',
        category: 'indonesia', // Kategori Indonesia
        quality: 'HD',
        rating: 8.9,
        poster: 'https://m.media-amazon.com/images/M/MV5BODkxNWM1MjYtZWZlZC00M2I0LWIzYWMtOTk3YTRkZDYxZDMxXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_FMjpg_UX1000_.jpg',
        poster_lg: 'https://m.media-amazon.com/images/M/MV5BODkxNWM1MjYtZWZlZC00M2I0LWIzYWMtOTk3YTRkZDYxZDMxXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_FMjpg_UX1000_.jpg',
        synopsis: 'Empat sekawan pengelola rumah hantu harus menghadapi konsekuensi saat salah satu pengunjung meninggal karena kaget.',
        cast: ['Bene Dion', 'Oki Rengga', 'Indra Jegel', 'Boris Bokir'],
        director: 'Muhadkly Acho',
        subtitle: 'Indonesia',
        iframeSrc: 'https://www.youtube.com/embed/9B69pS05S8w?si=t5y-MhT2L3SjB_5r'
    }
];
