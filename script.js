'use strict';

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');
        
            if (a != '' && b != '' && a != null && b != null && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error!');
                i--
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы класический зритель');
        } else if (personalMovieDB >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка!');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if(personalMovieDB.privat) {
            personalMovieDB.privat = false
        } else  {
            personalMovieDB.privat = true
        }

    },
    writeYourGenres: function() {
        for(let i = 0; i < 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i+1}`);
            if(genre == null || genre == '') {
                i--
            } else {
                personalMovieDB.genres[i] = genre;
            }
        }
        personalMovieDB.genres.forEach(function(item, i) {
            console.log(`Любимый жанр # ${i + 1} - это ${item}`)
        })
    }    
};

// showMyDB(personalMovieDB.privat);