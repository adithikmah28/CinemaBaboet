const allContent = [
    {
        id: 9,
        title: 'Oppenheimer',
        year: '2023',
        category: 'movie',
        isOriginal: true,
        quality: 'HD', // 'HD', 'SD', 'CAM'
        rating: 8.6,   // Angka rating
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
        category: 'indonesia',
        isOriginal: false,
        quality: 'HD',
        rating: 8.9,
        poster: 'https://m.media-amazon.com/images/M/MV5BODkxNWM1MjYtZWZlZC00M2I0LWIzYWMtOTk3YTRkZDYxZDMxXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_FMjpg_UX1000_.jpg',
        poster_lg: 'https://m.media-amazon.com/images/M/MV5BODkxNWM1MjYtZWZlZC00M2I0LWIzYWMtOTk3YTRkZDYxZDMxXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_FMjpg_UX1000_.jpg',
        synopsis: 'Empat sekawan pengelola rumah hantu harus menghadapi konsekuensi saat salah satu pengunjung meninggal karena kaget.',
        cast: ['Bene Dion', 'Oki Rengga', 'Indra Jegel', 'Boris Bokir'],
        director: 'Muhadkly Acho',
        subtitle: 'Indonesia',
        iframeSrc: 'https://www.youtube.com/embed/9B69pS05S8w?si=t5y-MhT2L3SjB_5r'
    },
    {
        id: 1,
        title: 'Gadis Kretek',
        year: '2023',
        category: 'series',
        isOriginal: true,
        quality: 'HD',
        rating: 8.5,
        poster: 'https://m.media-amazon.com/images/M/MV5BN2RjZGVkNDItN2I3NC00YjVjLWIyYTUtZDE4NTA2MGMzODc4XkEyXkFqcGdeQXVyMTEzNDY2ODE5._V1_FMjpg_UX1000_.jpg',
        poster_lg: 'https://m.media-amazon.com/images/M/MV5BN2RjZGVkNDItN2I3NC00YjVjLWIyYTUtZDE4NTA2MGMzODc4XkEyXkFqcGdeQXVyMTEzNDY2ODE5._V1_FMjpg_UX1000_.jpg',
        synopsis: 'Kisah Dasiyah, seorang wanita visioner yang gemar meracik saus rokok kretek, berlatar belakang industri tembakau di Indonesia.',
        cast: ['Dian Sastrowardoyo', 'Ario Bayu', 'Putri Marino'],
        director: 'Kamila Andini',
        subtitle: 'Indonesia, English',
        iframeSrc: 'https://www.youtube.com/embed/videoseries?si=c-tXm2LzL7U5q3iM&list=PLgY_4k3g914GdiWa3Wk_Ld3u4nmx3ZJQY'
    },
    {
        id: 4,
        title: 'Stranger Things',
        year: '2016',
        category: 'series',
        isOriginal: false,
        quality: 'SD', // Contoh Kualitas SD
        rating: 7.9,
        poster: 'https://m.media-amazon.com/images/M/MV5BNDU4ODQ0OTk3OF5BMl5BanBnXkFtZTgwOTA4MDY2NTE@._V1_FMjpg_UX1000_.jpg',
        poster_lg: 'https://www.xtrafondos.com/wallpapers/resized/elenco-de-stranger-things-4-10617.jpg?s=large',
        synopsis: 'Ketika seorang anak laki-laki menghilang, sebuah kota kecil mengungkap misteri yang melibatkan eksperimen rahasia dan kekuatan supernatural.',
        cast: ['Millie Bobby Brown', 'Finn Wolfhard', 'Winona Ryder'],
        director: 'The Duffer Brothers',
        subtitle: 'English, Indonesia',
        iframeSrc: 'https://www.youtube.com/embed/b9EkMc79ZSU?si=4e4Q7E1fJ2I7z7vJ'
    },
    {
        id: 13,
        title: 'Movie CAM Example',
        year: '2024',
        category: 'movie',
        isOriginal: false,
        quality: 'CAM', // Contoh Kualitas CAM
        rating: 4.2,
        poster: 'https://picsum.photos/id/111/400/600',
        poster_lg: 'https://picsum.photos/id/111/1920/1080',
        synopsis: 'Ini adalah contoh film dengan kualitas CAM yang akan menampilkan tag merah.',
        cast: ['Actor A', 'Actor B'],
        director: 'Director C',
        subtitle: 'Indonesia',
        iframeSrc: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
];
