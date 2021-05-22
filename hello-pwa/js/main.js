window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./sw.js');
    }

    requestNotifPermission();
}

const games = [{
        slug: 'lost-in-cyberspace',
        name: 'Lost in Cyberspace',
        author: 'Zosia and Bartek',
        twitter: 'bartaz',
        website: '',
        github: 'github.com/bartaz/lost-in-cyberspace'
    },
    {
        slug: 'vernissage',
        name: 'Vernissage',
        author: 'Platane',
        twitter: 'platane_',
        website: 'github.com/Platane',
        github: 'github.com/Platane/js13k-2017'
    },
    {
        slug: 'emma-3d',
        name: 'Emma-3D',
        author: 'Prateek Roushan',
        twitter: '',
        website: '',
        github: 'github.com/coderprateek/Emma-3D'
    }
];

function requestNotifPermission() {
    Notification.requestPermission().then(function (result) {
        if (result === 'granted') {
            randomNotification();
        }
    });
}

function randomNotification() {
    var randomItem = Math.floor(Math.random() * games.length);
    var notifTitle = games[randomItem].name;
    var notifBody = 'Créé par ' + games[randomItem].author + '.';
    var notifImg = 'data/img/' + games[randomItem].slug + '.jpg';
    var options = {
        body: notifBody,
        icon: notifImg
    }

    navigator.serviceWorker.ready.then(registration => {
        registration.showNotification('Hello world!', options);
    })

    // var notif = new Notification(notifTitle, options);
    // self.registration.showNotification('Hello world!', options)
    setTimeout(randomNotification, 5000);
}