var firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyC4QygYL5lcu8Gufr-mSdzOa8onTrT89DY",
    authDomain: "trail-e4d77.firebaseapp.com",
    projectId: "trail-e4d77",
    storageBucket: "trail-e4d77.appspot.com",
    messagingSenderId: "1001242080487",
    appId: "1:1001242080487:web:46c271f55a039cfd7c1e42",
    measurementId: "G-3GBGYBMFK5"
  };


const db = firebase.initializeApp(firebaseConfig);
module.exports = db