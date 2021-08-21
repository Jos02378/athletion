let check_information = sessionStorage.getItem('verify_email_signup');

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

let menuToggle = document.querySelector('.navigation-toggle');
let rightTab = document.querySelector('.right-header-tab');
let darkBackground = document.querySelector('.dark-background');

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

//Initialize Realtime Database
var db_rd = firebase.database();

document.querySelector('.date-submit').addEventListener('click', function () {
  document.querySelector('.date-background').style.visibility = 'hidden';
  document.querySelector('.month').style.opacity = 0;
  document.querySelector('.month').style.pointerEvents = 'none';
  document.querySelector('.day').style.opacity = 0;
  document.querySelector('.day').style.pointerEvents = 'none';
});

document
  .querySelector('#form__date-selector')
  .addEventListener('click', function () {
    document.querySelector('.date-background').style.visibility = 'visible';
    document.querySelector('.month').style.opacity = 1;
    document.querySelector('.month').style.pointerEvents = 'unset';
    document.querySelector('.day').style.opacity = 1;
    document.querySelector('.day').style.pointerEvents = 'unset';
  });

/*
// Progress Bar
*/
let nextPage1 = document.querySelector('.next-1');
let event_name = document.querySelector('#event-name');
let location_name = document.querySelector('#location-name');
let address = document.querySelector('#address');

let nextPage2 = document.querySelector('.next-2');
let prevPage1 = document.querySelector('.back-2');
let prevPage2 = document.querySelector('.back-3');

let submit_button = document.querySelector('.next');

const form__selection__sport = document.querySelector(
  '.form__selection__sport'
);
const basketball_input = document.querySelector('#basketball');
const basketball_html = document.querySelector('#option-selected_sport');
const optionsFormSport =
  form__selection__sport.querySelectorAll('.sport-radio');
let sport_value = 'basketball';
optionsFormSport.forEach((o) => {
  o.addEventListener('click', (e) => {
    sport_value = o.querySelector('input').value;
  });
});

const form__selection__sex = document.querySelector('.form__selection__sex');
const sex_input = document.querySelector('#anyone');
const sex_html = document.querySelector('#option-selected_sex');
const optionsFormSex = form__selection__sex.querySelectorAll('.sex-radio');
let sex_value = 'anyone';
optionsFormSex.forEach((o) => {
  o.addEventListener('click', (e) => {
    sex_value = o.querySelector('input').value;
  });
});

let page1 = document.querySelector('.page-1');
let page2 = document.querySelector('.page-2');
let page3 = document.querySelector('.page-3');

let progress1 = document.querySelector('.first-progress');
let progress2 = document.querySelector('.second-progress');
let progress3 = document.querySelector('.third-progress');

let wrapper = document.querySelector('.wrapper');

nextPage1.addEventListener('click', function () {
  let duplicate = false;

  daySelector.select(new Date().getDate());

  //SUCCESS MESSAGE AUTOMATIC CLOSE
  successBox.style.transform = 'scale(0.01)';
  successBox.style.opacity = '0';
  if (successBox.style.opacity === '0') {
    successBox.style.display = 'none';
  }

  db.collection('match')
    .where('event_name', '==', event_name.value)
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        if (doc.exists) {
          duplicate = true;
        }
      });
      if (event_name.value == '') {
        error_text.innerHTML = 'Please fill in the event name.';
        error.style.display = 'block';
        error.style.opacity = '1';
        errorBox.style.transform = 'scale(1)';
      } else if (duplicate) {
        error_text.innerHTML = 'The event name has been taken.';
        error.style.display = 'block';
        error.style.opacity = '1';
        errorBox.style.transform = 'scale(1)';
      } else if (location_name.value == '') {
        error_text.innerHTML = 'Please fill in the location name.';
        error.style.display = 'block';
        error.style.opacity = '1';
        errorBox.style.transform = 'scale(1)';
      } else if (region_value == '') {
        error_text.innerHTML = 'Please choose a region.';
        error.style.display = 'block';
        error.style.opacity = '1';
        errorBox.style.transform = 'scale(1)';
      } else if (address.value == '') {
        error_text.innerHTML = 'Please fill in the address.';
        error.style.display = 'block';
        error.style.opacity = '1';
        errorBox.style.transform = 'scale(1)';
      } else {
        page1.classList.add('page-1-stateA');
        page2.classList.add('page-2-stateA');
        page3.classList.add('page-3-stateA');
        progress1.innerHTML = '1';
        progress2.innerHTML = 'SET THE TIME FOR YOUR EVENT';
        progress1.classList.remove('active-progress');
        progress2.classList.add('active-progress');
        error.style.display = 'none';
        error.style.opacity = '0';
        errorBox.style.transform = 'scale(0.01)';
      }
    });
});

prevPage1.addEventListener('click', function () {
  page1.classList.remove('page-1-stateA');
  page2.classList.remove('page-2-stateA');
  page3.classList.remove('page-3-stateA');
  progress1.innerHTML = 'GENERAL CUSTOMIZATION';
  progress2.innerHTML = '2';
  progress1.classList.add('active-progress');
  progress2.classList.remove('active-progress');
});

nextPage2.addEventListener('click', function () {
  // CHECK TIME
  const current_month = new Date().getMonth();
  const current_date = new Date().getDate();
  let current_hour = new Date().getHours();
  const current_minute = new Date().getMinutes();
  let calender_month = new Date(date_calender).getMonth();
  let calender_date = new Date(date_calender).getDate();
  const input_time = document.getElementsByName('time');
  var i;
  var temp = '';

  for (i = 0; i < input_time.length; i++) {
    if (input_time[i].checked == true) {
      temp = input_time[i].value;
    }
  }

  //TURN INTO NUMBER
  var temp_list = temp.split(':');
  var hour_input = Number(temp_list[0]);
  if (current_minute > 0) {
    current_hour += 1;
  }
  var hour_diff = hour_input - current_hour;

  if (
    calender_month == current_month &&
    calender_date == current_date &&
    hour_input < current_hour
  ) {
    error_text.innerHTML = 'Your desired time has passed.';
    error.style.display = 'block';
    error.style.opacity = '1';
    errorBox.style.transform = 'scale(1)';
  } else if (
    calender_month == current_month &&
    calender_date == current_date &&
    hour_diff < 3
  ) {
    error_text.innerHTML =
      'You must make an event three hours before your desired time.';
    error.style.display = 'block';
    error.style.opacity = '1';
    errorBox.style.transform = 'scale(1)';
  } else {
    page1.classList.add('page-1-stateB');
    page2.classList.add('page-2-stateB');
    page3.classList.add('page-3-stateB');
    progress3.innerHTML = 'SPECIFY YOUR EVENT';
    progress2.innerHTML = '2';
    progress3.classList.add('active-progress');
    progress2.classList.remove('active-progress');
    error.style.display = 'none';
    error.style.opacity = '0';
    errorBox.style.transform = 'scale(0.01)';
  }
});

prevPage2.addEventListener('click', function () {
  page1.classList.remove('page-1-stateB');
  page2.classList.remove('page-2-stateB');
  page3.classList.remove('page-3-stateB');
  progress2.innerHTML = 'SET THE TIME FOR YOUR EVENT';
  progress3.innerHTML = '3';
  progress2.classList.add('active-progress');
  progress3.classList.remove('active-progress');
});

/*
//ERROR 
*/

let error = document.querySelector('.error');
let error_text = document.querySelector('.error-text');
let errorClose = document.querySelector('.error-circle');
let errorBox = document.querySelector('.error');

errorClose.addEventListener('click', () => {
  errorBox.style.transform = 'scale(0.01)';
  errorBox.style.opacity = '0';
  if (errorBox.style.opacity === '0') {
    errorBox.style.display = 'none';
  }
});

let success = document.querySelector('.success');
let successText = document.querySelector('.success-text');
let successClose = document.querySelector('.success-circle');
let successBox = document.querySelector('.success');

successClose.addEventListener('click', () => {
  successBox.style.transform = 'scale(0.01)';
  successBox.style.opacity = '0';
  if (successBox.style.opacity === '0') {
    successBox.style.display = 'none';
  }
});

const selectedAll = document.querySelectorAll('.option-selected');

selectedAll.forEach((selected) => {
  const optionsContainer = selected.previousElementSibling;
  const optionsList = optionsContainer.querySelectorAll('.option');

  selected.addEventListener('click', () => {
    if (optionsContainer.classList.contains('active')) {
      optionsContainer.classList.remove('active');
    } else {
      let currentActive = document.querySelector('.options-box.active');

      if (currentActive) {
        currentActive.classList.remove('active');
      }

      optionsContainer.classList.add('active');
    }
  });

  optionsList.forEach((o) => {
    o.addEventListener('click', () => {
      selected.innerHTML = o.querySelector('label').innerHTML;
      optionsContainer.classList.remove('active');
    });
  });
});

/*
// CALENDER FOR PHONE
*/

let dateInput = document.querySelector('#form__date-selector');
let time_06_00 = document.querySelector('#time_06_00');

monthSelector = new IosSelector({
  el: '#month1',
  type: 'normal',
  source: monthSource,
  count: 20,
  onChange: (selected) => {
    currentMonth = selected.value;
    daySource = getDays(currentYear, currentMonth);
    daySelector.updateSource(daySource);
    dateInput.setAttribute(
      'placeholder',
      yearSelector.value +
        ' - ' +
        monthSelector.value +
        ' - ' +
        daySelector.value
    );
  },
});

daySelector = new IosSelector({
  el: '#day1',
  type: 'normal',
  source: [],
  count: 20,
  onChange: (selected) => {
    currentDay = selected.value;
    dateInput.setAttribute(
      'placeholder',
      yearSelector.value +
        ' - ' +
        monthSelector.value +
        ' - ' +
        daySelector.value
    );
  },
});

/*
// CALENDER FOR IPAD SIZE AND ABOVE
*/

const nextYear = new Date().getFullYear() + 1;
let myCalender = new CalendarPicker('#myCalendarWrapper', {
  min: new Date(),
  max: new Date(nextYear, 12), // NOTE: new Date(nextYear, 10) is "Sun Nov 01 <nextYear>"
});

// CURRENT SELECTED DATE
let current_date = new Date().getDate();
let current_date_selected =
  document.getElementsByTagName('time')[current_date - 1];

let date_calender = myCalender.value.toDateString();

myCalender.onValueChange((currentValue) => {
  date_calender = currentValue.toDateString();
});

let date_wheel_button = document.querySelector('.date-submit');
let date_phone = '';
date_wheel_button.addEventListener('click', () => {
  date_phone = dateInput.placeholder.split('-');
  let date_input = date_phone.join(' ');
  let date_final = new Date(date_input).toDateString();
  date_calender = date_final;
});

/*
// FIREBASE
*/

//OPTION BOX REGION
const options_box_region = document.getElementById('options_box_region');
const optionsListRegion = options_box_region.querySelectorAll('.option');
const option_selected_region = document.getElementById(
  'option_selected_region'
);
let region_value = '';
optionsListRegion.forEach((o) => {
  o.addEventListener('click', (e) => {
    e.preventDefault();

    region_value = o.querySelector('input').value;
  });
});

const options_box_sport = document.getElementById('options_box_sport');
const optionsListSport = options_box_sport.querySelectorAll('.option');
optionsListSport.forEach((o) => {
  o.addEventListener('click', (e) => {
    sport_value = o.querySelector('input').value;
  });
});

const options_box_sex = document.getElementById('options_box_sex');
const optionsListSex = options_box_sex.querySelectorAll('.option');
optionsListSex.forEach((o) => {
  o.addEventListener('click', (e) => {
    sex_value = o.querySelector('input').value;
  });
});

let form_number = document.querySelector('.form__number');
const signupForm = document.querySelector('.content');

let doc_id = '';

//Save data to Firestore
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let event_name_form = signupForm.event_name.value;
  let location_name_form = signupForm.location_name.value;
  let address_form = signupForm.address.value;

  db.collection('match').add({
    event_name: event_name_form.trim().toLowerCase(),
    location: location_name_form.trim(),
    address: address_form.trim(),
    sport: sport_value,
    region: region_value,
    time: signupForm.time.value,
    date: date_calender,
    sex: sex_value,
    limit: form_number.value,
    //ARRAY BUAT MATCHES_JOIN DAN PENDING
    matches_join: [],
    pending: [],
    //GANTI NAMA OWNER
    owner: 'Wf1bl64tzXIKmO97D2ry',
  });

  // ADD DATA TO ACCOUNT
  db.collection('match')
    .where('event_name', '==', event_name_form.trim())
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        db.collection('account')
          .doc('Wf1bl64tzXIKmO97D2ry')
          .update({
            matches_created_join: firebase.firestore.FieldValue.arrayUnion(
              doc.id
            ),
          });
      });
    })
    .catch((error) => {
      console.log('Error getting documents: ', error);
    });

  //GO TO FIRST SECTION OF THE FORM
  page1.classList.remove('page-1-stateB');
  page2.classList.remove('page-2-stateB');
  page3.classList.remove('page-3-stateB');
  page1.classList.remove('page-1-stateA');
  page2.classList.remove('page-2-stateA');
  page3.classList.remove('page-3-stateA');
  progress1.innerHTML = 'GENERAL CUSTOMIZATION';
  progress3.innerHTML = '3';
  progress1.classList.add('active-progress');
  progress3.classList.remove('active-progress');

  //RESET ALL OF THE INPUT

  //FIRST PAGE OF THE FORM
  event_name.value = '';
  location_name.value = '';
  address.value = '';
  option_selected_region.innerHTML = 'Choose a region';
  region_value = '';

  //SECOND PAGE OF THE FORM
  myCalender.month = new Date().getMonth();
  myCalender._updateCalendar('ok');

  myCalender.previousMonthArrow.style.visibility = 'hidden';
  myCalender.previousMonthArrow.style.pointerEvents = 'none';
  myCalender.nextMonthArrow.style.pointerEvents = 'unset';
  myCalender.nextMonthArrow.style.visibility = 'visible';

  myCalender.value = new Date();

  time_06_00.checked = true;
  date_calender = new Date().toDateString();
  monthSelector.select(new Date().getMonth() + 1);

  //THIRD PAGE OF THE FORM
  basketball_input.checked = true;
  sport_value = 'basketball';
  basketball_html.innerHTML = 'Basketball';
  sex_input.checked = true;
  sex_value = 'anyone';
  sex_html.innerHTML = 'Anyone can join';
  checkboxDisclaimer.checked = false;
  publishButton.style.opacity = 0.5;
  publishButton.style.pointerEvents = 'none';
  publishButton.disabled = true;

  //SET SUCCESS NOTIFICATION
  successBox.style.display = 'block';
  successBox.style.transform = 'scale(1)';
  successBox.style.opacity = '1';
});

let publishButton = document.querySelector('.publish');
let labelDisclaimer = document.querySelector('.agreement');
let checkboxDisclaimer = document.querySelector('.agreement-checkbox');

publishButton.disabled = true;

labelDisclaimer.addEventListener('click', () => {
  if (checkboxDisclaimer.checked === true) {
    publishButton.disabled = false;
    publishButton.style.opacity = 1;
    publishButton.style.pointerEvents = 'unset';
  } else {
    publishButton.disabled = true;
    publishButton.style.opacity = 0.5;
    publishButton.style.pointerEvents = 'none';
  }
});

$(document).keypress(function (event) {
  if (event.which == '13') {
    event.preventDefault();
  }
});
