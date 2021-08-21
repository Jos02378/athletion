let check_information = sessionStorage.getItem('verify_email_signup');

let menuToggle = document.querySelector('.navigation-toggle');
let rightTab = document.querySelector('.right-header-tab');
let darkBackground = document.querySelector('.dark-background');
let darkBackground2 = document.querySelector('.dark-background-2');

let headerLogo = document.querySelector('.header-logo');

darkBackground.addEventListener('click', () => {
  darkBackground.classList.remove('active');
  headerLogo.classList.remove('active');
  rightTab.classList.remove('active');
});

menuToggle.addEventListener('click', () => {
  rightTab.classList.add('active');
  darkBackground.classList.add('active');
});

//FIRESTORE
var firebaseConfig = {
  apiKey: 'AIzaSyCVQiH2DSjYOiRrsmgaSRTObEWkGpHm1sA',
  authDomain: 'kebantai2020.firebaseapp.com',
  databaseURL: 'https://kebantai2020-default-rtdb.firebaseio.com',
  projectId: 'kebantai2020',
  storageBucket: 'kebantai2020.appspot.com',
  messagingSenderId: '290266641346',
  appId: '1:290266641346:web:85b99043fe87f7795a1c5b',
  measurementId: 'G-M3H7QJBJGQ',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//Initialize Firestore
const db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true,
});

let user_email = sessionStorage.getItem('verify_email_signup');

db.collection('account')
  .where('email', '==', user_email)
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      sessionStorage.setItem('room_id', doc.id);
    });
  })
  .catch((error) => {
    console.log('Error getting documents: ', error);
  });
