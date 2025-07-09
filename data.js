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
        id: 2,
        title: 'Oppenheimer',
        year: '2023',
        category: 'movie',
        quality: 'HD',
        rating: 8.6,
        genre: ['Biografi', 'Drama', 'Sejarah'], // <-- GENRE DITAMBAHKAN
        poster: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
        poster_lg: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
        synopsis: 'Kisah J. Peran Robert Oppenheimer dalam pengembangan bom atom selama Perang Dunia II.',
        cast: ['Cillian Murphy', 'Emily Blunt', 'Matt Damon', 'Robert Downey Jr.'],
        director: 'Christopher Nolan',
        subtitle: 'English, Indonesia',
        iframeSrc: 'https://www.youtube.com/embed/uYPbbksJxIg'
    },
    {
        id: 3,
        title: 'Pemandi Jenazah',
        year: '2024',
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
    },
    {
        id: 4,
        title: 'Perempuan Tanah Jahanam',
        year: '2019',
        category: 'indonesia',
        quality: 'HD',
        rating: 6.7,
        genre: ['Horror', 'Mystery', 'Thriller'], // <-- GENRE DITAMBAHKAN
        poster: 'https://image.tmdb.org/t/p/original/tAYHRuKxNa4arD32YTmDT1j46Mi.jpg',
        poster_lg: 'https://image.tmdb.org/t/p/original/tAYHRuKxNa4arD32YTmDT1j46Mi.jpg',
        synopsis: 'Seorang operator pintu tol pergi ke kampung leluhurnya dengan harapan mendapatkan harta warisan, hingga akhirnya ia menemukan fakta yang meresahkan tentang masa lalunya.',
        cast: ['Tara Basro', 'Marissa Anita', 'Asmara Abigail'],
        director: 'Joko Anwar',
        subtitle: 'Indonesia',
        iframeSrc: 'https://vidlink.pro/movie/572468'
    },
    {
        id: 5,
        title: 'Pengabdi Setan',
        year: '2017',
        category: 'indonesia',
        quality: 'HD',
        rating: 6.7,
        genre: ['Drama', 'Horror', 'Mystery'], // <-- GENRE DITAMBAHKAN
        poster: 'https://image.tmdb.org/t/p/original/xTWgncjZOrMmSjaEwA3DLOxaqf0.jpg',
        poster_lg: 'https://image.tmdb.org/t/p/original/xTWgncjZOrMmSjaEwA3DLOxaqf0.jpg',
        synopsis: 'Setelah Rini ditinggal mati ibunya, ada sesuatu peristiwa yang terus menganggu keluarga mereka.',
        cast: ['Tara Basro', 'Bront Palarae', 'Endy Arfian'],
        director: 'Joko Anwar',
        subtitle: 'Indonesia',
        iframeSrc: 'https://vidlink.pro/movie/467012'
    },
    {
        id: 6,
        title: 'pengabdi setan 2: communion',
        year: '2022',
        category: 'indonesia',
        quality: 'HD',
        rating: 6.9,
        genre: ['Drama', 'Horror', 'Mystery'], // <-- GENRE DITAMBAHKAN
        poster: 'https://image.tmdb.org/t/p/original/zzpxuEXS1azwhqfvtacLtScixbS.jpg',
        poster_lg: 'https://image.tmdb.org/t/p/original/zzpxuEXS1azwhqfvtacLtScixbS.jpg',
        synopsis: 'Beberapa tahun setelah berhasil menyelamatkan diri dari kejadian mengerikan yang membuat mereka kehilangan ibu dan si bungsu Ian, Rini dan adik-adiknya, Toni dan Bondi, serta Bapak tinggal di rumah susun karena percaya tinggal di rumah susun aman jika terjadi sesuatu karena ada banyak orang. Namun, mereka segera menyadari bahwa tinggal bersama banyak orang mungkin juga sangat berbahaya, jika mereka tidak sangat mengenali siapa saja yang menjadi tetangga mereka. Pada sebuah malam penuh teror, Rini dan Keluarganya harus kembali menyelamatkan diri. Tapi kali ini, mungkin sudah terlambat untuk lari.',
        cast: ['Tara Basro', 'Bront Palarae', 'Endy Arfian'],
        director: 'Joko Anwar',
        subtitle: 'Indonesia',
        iframeSrc: 'https://vidlink.pro/movie/925786'
    },
    {
        id: 7,
        title: 'Mencuri Raden Saleh',
        year: '2022',
        category: 'indonesia',
        quality: 'HD',
        rating: 7.5,
        genre: ['Drama', 'Horror', 'Mystery'], // <-- GENRE DITAMBAHKAN
        poster: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/1fdqRcgEYNkXCnnKAzz2JtFnUv7.jpg',
        poster_lg: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/1fdqRcgEYNkXCnnKAzz2JtFnUv7.jpg',
        synopsis: 'Mengisahkan tentang pencurian lukisan karya Raden Saleh.',
        cast: ['Iqbaal Ramadhan', 'Angga Yunanda', 'Aghniny Haque'],
        director: 'Angga Dwimas Sasongko',
        subtitle: 'Indonesia',
        iframeSrc: 'https://vidsrc.icu/embed/movie/832544'
    }
];
