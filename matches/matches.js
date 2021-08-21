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

// Initialized Firebase Realtime Database
const dbf = firebase.database();

let firebase_room_id = sessionStorage.getItem('room_id');

// HEADER BEHAVIOR
let menuToggle = document.querySelector('.navigation-toggle');
let rightTab = document.querySelector('.right-header-tab');
let darkBackground = document.querySelector('.dark-background');

let headerLogo = document.querySelector('.header-logo');
let leftTab = document.querySelector('.left-header-tab');

headerLogo.addEventListener('click', () => {
  if (leftTab.classList.contains('active')) {
    leftTab.classList.remove('active');
    darkBackground.classList.remove('active');
    headerLogo.classList.remove('active');
    rightTab.classList.remove('active');
  } else {
    leftTab.classList.add('active');
    darkBackground.classList.add('active');
    headerLogo.classList.add('active');
  }
});

darkBackground.addEventListener('click', () => {
  leftTab.classList.remove('active');
  darkBackground.classList.remove('active');
  headerLogo.classList.remove('active');

  rightTab.classList.remove('active');
});

menuToggle.addEventListener('click', () => {
  rightTab.classList.add('active');
  darkBackground.classList.add('active');
});

function toggleFilter() {
  var filterToggle = document.querySelector('.filter-trigger');
  var filter = document.querySelector('.filter');
  filterToggle.classList.toggle('active');
  filter.classList.toggle('active');
}

// ERRORS
let error = document.querySelector('.error');
let error_text = document.querySelector('.error-text');
let errorClose = document.querySelectorAll('.error-circle');
let errorBox = document.querySelectorAll('.error');

for (let i = 0; i < errorClose.length; i++) {
  errorClose[i].addEventListener('click', () => {
    errorBox[i].style.display = 'none';
  });
}

/*
//Date
*/
var options_box_date = document.getElementById('options_box_date');

var today_date = new Date().getDate();
var year = new Date().getFullYear();
var month = new Date().getMonth();
var lastDay = new Date(year, month + 1, 0).getDate();
var nextMonthFirstDay = new Date(year, month + 2, 1).getDate();
var nextMonthLastDay = new Date(year, month + 2, 0).getDate();

for (today_date; today_date <= lastDay; today_date++) {
  var date = new Date(year, month, today_date);
  date.setDate(date.getDate());
  date_string = String(date);
  var words = date_string.split(' ');
  var words_date = words.slice(0, 3);
  var date_modified = words_date.join(' ');

  let div = document.createElement('div');
  let input = document.createElement('input');
  let label = document.createElement('label');
  div.className = 'option';
  input.className = 'radio';
  input.setAttribute('type', 'radio');
  input.setAttribute('name', 'date');
  input.value = date.toDateString();
  label.innerHTML = date_modified;

  div.appendChild(input);
  div.appendChild(label);

  options_box_date.appendChild(div);
}

for (
  nextMonthFirstDay;
  nextMonthFirstDay <= nextMonthLastDay;
  nextMonthFirstDay++
) {
  var date = new Date(year, month + 1, nextMonthFirstDay);
  date.setDate(date.getDate());
  date_string = String(date);
  var words = date_string.split(' ');
  var words_date = words.slice(0, 3);
  var date_modified = words_date.join(' ');

  let div = document.createElement('div');
  let input = document.createElement('input');
  let label = document.createElement('label');
  div.className = 'option';
  input.className = 'radio';
  input.setAttribute('type', 'radio');
  input.setAttribute('name', 'date');
  input.value = date.toDateString();
  label.innerHTML = date_modified;

  div.appendChild(input);
  div.appendChild(label);

  options_box_date.appendChild(div);
}

function hour_check(date, time) {
  const current_month = new Date().getMonth();
  const current_date = new Date().getDate();
  let current_hour = new Date().getHours();

  let calender_month = new Date(date).getMonth();
  let calender_date = new Date(date).getDate();
  const input_time = parseInt(time.slice(0, 2));

  // CHECK HOUR
  if (
    calender_month == current_month &&
    calender_date == current_date &&
    input_time <= current_hour
  ) {
    return false;
  } else {
    return true;
  }
}

/*
// HTML
*/
const selectedAll = document.querySelectorAll('.selected');

const options_box_sport = document.getElementById('options_box_sport');
const optionsListSport = options_box_sport.querySelectorAll('.option');
let sport_value = 'all sport';
optionsListSport.forEach((o) => {
  o.addEventListener('click', () => {
    sport_value = o.querySelector('input').value;
  });
});

const optionsListDate = options_box_date.querySelectorAll('.option');
let date_value = '';
optionsListDate.forEach((o) => {
  o.addEventListener('click', () => {
    date_value = o.querySelector('input').value;
  });
});

const options_box_time = document.getElementById('options_box_time');
const optionsListTime = options_box_time.querySelectorAll('.option');
let time_value = '';
optionsListTime.forEach((o) => {
  o.addEventListener('click', () => {
    time_value = o.querySelector('input').value;
  });
});

const options_box_sex = document.getElementById('options_box_sex');
const optionsListSex = options_box_sex.querySelectorAll('.option');
let sex_value = 'anyone';
optionsListSex.forEach((o) => {
  o.addEventListener('click', () => {
    sex_value = o.querySelector('input').value;
  });
});

const options_box_region = document.getElementById('options_box_region');
const optionsListRegion = options_box_region.querySelectorAll('.option');
let region_value = 'all region';
optionsListRegion.forEach((o) => {
  o.addEventListener('click', () => {
    region_value = o.querySelector('input').value;
  });
});

const selected_sport = document.getElementById('selected_sport');
const selected_time = document.getElementById('selected_time');
const selected_date = document.getElementById('selected_date');
const selected_sex = document.getElementById('selected_sex');
const selected_region = document.getElementById('selected_region');

selected_date.innerHTML = 'All Date';
selected_time.innerHTML = 'All Time';
selected_sex.innerHTML = 'Anyone';
selected_region.innerHTML = 'All Region';

selectedAll.forEach((selected) => {
  const optionsContainer = selected.previousElementSibling;
  const optionsList = optionsContainer.querySelectorAll('.option');
  const select_box1 = document.getElementById('select-box1');
  const select_box2 = document.getElementById('select-box2');
  const option_date = document.getElementById('option_date');
  const date_time = document.querySelector('.date_time');
  const date_time_error = date_time.querySelector('.error');
  let previous_word = '';
  let previous_time = 'all time';

  selected.addEventListener('click', () => {
    if (optionsContainer.classList.contains('active')) {
      optionsContainer.classList.remove('active');
    } else {
      let currentActive = document.querySelector('.options-box.active');

      if (currentActive) {
        currentActive.classList.remove('active');
        // time_value = previous_time;
      }

      optionsContainer.classList.add('active');
    }
  });

  select_box1.addEventListener('click', () => {
    if (selected_date.innerHTML === 'All Date') {
      select_box2.style.pointerEvents = 'none';
      selected_time.innerHTML = 'All Time';
      select_box2.style.opacity = '0.7';
    } else {
      select_box2.style.pointerEvents = 'unset';
      select_box2.style.opacity = '1';
    }
  });

  select_box2.addEventListener('click', () => {
    if (selected_date.innerHTML === 'All Date') {
      select_box2.style.pointerEvents = 'none';
      selected_time.innerHTML = 'All Time';
      select_box2.style.opacity = '0.7';
    } else {
      select_box2.style.pointerEvents = 'unset';
      select_box2.style.opacity = '1';
    }
  });

  optionsList.forEach((o) => {
    o.addEventListener('click', () => {
      if (previous_word != o.querySelector('label').innerHTML) {
        if (sport_value == 'all sport') {
          if (
            selected_date.innerHTML == 'All Date' &&
            region_value == 'all region'
          ) {
            selected.innerHTML = o.querySelector('label').innerHTML;
            optionsContainer.classList.remove('active');
            date_time_error.style.display = 'none';

            var child = display_container.lastElementChild;
            while (child) {
              display_container.removeChild(child);
              child = display_container.lastElementChild;
            }
            db.collection('match')
              .where('sex', '==', sex_value)
              .orderBy('date')
              .orderBy('time')
              .onSnapshot((snapshot) => {
                let changes = snapshot.docChanges();
                changes.forEach((change) => {
                  if (change.type == 'added') {
                    let realtime_date_time = new Date();
                    let firebase_date = new Date(
                      change.doc.data().date + ' ' + change.doc.data().time
                    );
                    let firebase_size =
                      change.doc.data().matches_join.length + 1;
                    let firebase_limit = change.doc.data().limit;
                    if (
                      change.doc.data().owner &&
                      firebase_date > realtime_date_time &&
                      firebase_size < firebase_limit
                    ) {
                      renderMatch3(change.doc.data(), change.doc.id);
                    }
                  } else if (change.type === 'modified') {
                    updateMatch(change.doc.data(), change.doc.id);
                  } else if (change.type == 'removed') {
                    let li = display_container.querySelector(
                      '[data-id=' + change.doc.id + ']'
                    );
                    display_container.removeChild(li);
                  }
                });
              });
          } else if (
            selected_date.innerHTML == 'All Date' &&
            region_value != 'all region'
          ) {
            selected.innerHTML = o.querySelector('label').innerHTML;
            optionsContainer.classList.remove('active');
            date_time_error.style.display = 'none';

            var child = display_container.lastElementChild;
            while (child) {
              display_container.removeChild(child);
              child = display_container.lastElementChild;
            }
            db.collection('match')
              .where('sex', '==', sex_value)
              .where('region', '==', region_value)
              .orderBy('date')
              .orderBy('time')
              .onSnapshot((snapshot) => {
                let changes = snapshot.docChanges();
                changes.forEach((change) => {
                  if (change.type == 'added') {
                    let realtime_date_time = new Date();
                    let firebase_date = new Date(
                      change.doc.data().date + ' ' + change.doc.data().time
                    );
                    let firebase_size =
                      change.doc.data().matches_join.length + 1;
                    let firebase_limit = change.doc.data().limit;
                    if (
                      change.doc.data().owner &&
                      firebase_date > realtime_date_time &&
                      firebase_size < firebase_limit
                    ) {
                      renderMatch3(change.doc.data(), change.doc.id);
                    }
                  } else if (change.type === 'modified') {
                    updateMatch(change.doc.data(), change.doc.id);
                  } else if (change.type == 'removed') {
                    let li = display_container.querySelector(
                      '[data-id=' + change.doc.id + ']'
                    );
                    display_container.removeChild(li);
                  }
                });
              });
          } else if (
            selected_date.innerHTML != 'All Date' &&
            time_value == 'all time' &&
            region_value == 'all region'
          ) {
            selected.innerHTML = o.querySelector('label').innerHTML;
            optionsContainer.classList.remove('active');
            date_time_error.style.display = 'none';

            var child = display_container.lastElementChild;
            while (child) {
              display_container.removeChild(child);
              child = display_container.lastElementChild;
            }
            db.collection('match')
              .where('sex', '==', sex_value)
              .where('date', '==', date_value)
              .orderBy('time')
              .onSnapshot((snapshot) => {
                let changes = snapshot.docChanges();
                changes.forEach((change) => {
                  if (change.type == 'added') {
                    let realtime_date_time = new Date();
                    let firebase_date = new Date(
                      change.doc.data().date + ' ' + change.doc.data().time
                    );
                    let firebase_size =
                      change.doc.data().matches_join.length + 1;
                    let firebase_limit = change.doc.data().limit;
                    if (
                      change.doc.data().owner &&
                      firebase_date > realtime_date_time &&
                      firebase_size < firebase_limit
                    ) {
                      renderMatch3(change.doc.data(), change.doc.id);
                    }
                  } else if (change.type === 'modified') {
                    updateMatch(change.doc.data(), change.doc.id);
                  } else if (change.type == 'removed') {
                    let li = display_container.querySelector(
                      '[data-id=' + change.doc.id + ']'
                    );
                    display_container.removeChild(li);
                  }
                });
              });
          } else if (
            selected_date.innerHTML != 'All Date' &&
            time_value == 'all time' &&
            region_value != 'all region'
          ) {
            selected.innerHTML = o.querySelector('label').innerHTML;
            optionsContainer.classList.remove('active');
            date_time_error.style.display = 'none';

            var child = display_container.lastElementChild;
            while (child) {
              display_container.removeChild(child);
              child = display_container.lastElementChild;
            }
            db.collection('match')
              .where('sex', '==', sex_value)
              .where('region', '==', region_value)
              .where('date', '==', date_value)
              .orderBy('time')
              .onSnapshot((snapshot) => {
                let changes = snapshot.docChanges();
                changes.forEach((change) => {
                  if (change.type == 'added') {
                    let realtime_date_time = new Date();
                    let firebase_date = new Date(
                      change.doc.data().date + ' ' + change.doc.data().time
                    );
                    let firebase_size =
                      change.doc.data().matches_join.length + 1;
                    let firebase_limit = change.doc.data().limit;
                    if (
                      change.doc.data().owner &&
                      firebase_date > realtime_date_time &&
                      firebase_size < firebase_limit
                    ) {
                      renderMatch3(change.doc.data(), change.doc.id);
                    }
                  } else if (change.type === 'modified') {
                    updateMatch(change.doc.data(), change.doc.id);
                  } else if (change.type == 'removed') {
                    let li = display_container.querySelector(
                      '[data-id=' + change.doc.id + ']'
                    );
                    display_container.removeChild(li);
                  }
                });
              });
          } else if (
            selected_date.innerHTML != 'All Date' &&
            time_value != 'all time' &&
            region_value == 'all region'
          ) {
            let check_hour = hour_check(date_value, time_value);
            if (check_hour) {
              selected.innerHTML = o.querySelector('label').innerHTML;
              optionsContainer.classList.remove('active');
              date_time_error.style.display = 'none';

              var child = display_container.lastElementChild;
              while (child) {
                display_container.removeChild(child);
                child = display_container.lastElementChild;
              }
              db.collection('match')
                .where('sex', '==', sex_value)
                .where('date', '==', date_value)
                .where('time', '==', time_value)
                .onSnapshot((snapshot) => {
                  let changes = snapshot.docChanges();
                  changes.forEach((change) => {
                    if (change.type == 'added') {
                      let realtime_date_time = new Date();
                      let firebase_date = new Date(
                        change.doc.data().date + ' ' + change.doc.data().time
                      );
                      let firebase_size =
                        change.doc.data().matches_join.length + 1;
                      let firebase_limit = change.doc.data().limit;
                      if (
                        change.doc.data().owner &&
                        firebase_date > realtime_date_time &&
                        firebase_size < firebase_limit
                      ) {
                        renderMatch3(change.doc.data(), change.doc.id);
                      }
                    } else if (change.type === 'modified') {
                      updateMatch(change.doc.data(), change.doc.id);
                    } else if (change.type == 'removed') {
                      let li = display_container.querySelector(
                        '[data-id=' + change.doc.id + ']'
                      );
                      display_container.removeChild(li);
                    }
                  });
                });
            } else {
              date_time_error.style.display = 'flex';
            }
          } else if (
            selected_date.innerHTML != 'All Date' &&
            time_value != 'all time' &&
            region_value != 'all region'
          ) {
            let check_hour = hour_check(date_value, time_value);
            if (check_hour) {
              selected.innerHTML = o.querySelector('label').innerHTML;
              optionsContainer.classList.remove('active');
              date_time_error.style.display = 'none';

              var child = display_container.lastElementChild;
              while (child) {
                display_container.removeChild(child);
                child = display_container.lastElementChild;
              }
              db.collection('match')
                .where('sex', '==', sex_value)
                .where('region', '==', region_value)
                .where('date', '==', date_value)
                .where('time', '==', time_value)
                .onSnapshot((snapshot) => {
                  let changes = snapshot.docChanges();
                  changes.forEach((change) => {
                    if (change.type == 'added') {
                      let realtime_date_time = new Date();
                      let firebase_date = new Date(
                        change.doc.data().date + ' ' + change.doc.data().time
                      );
                      let firebase_size =
                        change.doc.data().matches_join.length + 1;
                      let firebase_limit = change.doc.data().limit;
                      if (
                        change.doc.data().owner &&
                        firebase_date > realtime_date_time &&
                        firebase_size < firebase_limit
                      ) {
                        renderMatch3(change.doc.data(), change.doc.id);
                      }
                    } else if (change.type === 'modified') {
                      updateMatch(change.doc.data(), change.doc.id);
                    } else if (change.type == 'removed') {
                      let li = display_container.querySelector(
                        '[data-id=' + change.doc.id + ']'
                      );
                      display_container.removeChild(li);
                    }
                  });
                });
            } else {
              date_time_error.style.display = 'flex';
            }
          }
        } else {
          if (
            selected_date.innerHTML == 'All Date' &&
            region_value == 'all region'
          ) {
            selected.innerHTML = o.querySelector('label').innerHTML;
            optionsContainer.classList.remove('active');

            var child = display_container.lastElementChild;
            while (child) {
              display_container.removeChild(child);
              child = display_container.lastElementChild;
            }
            db.collection('match')
              .where('sport', '==', sport_value)
              .where('sex', '==', sex_value)
              .orderBy('date')
              .orderBy('time')
              .onSnapshot((snapshot) => {
                let changes = snapshot.docChanges();
                changes.forEach((change) => {
                  if (change.type == 'added') {
                    let realtime_date_time = new Date();
                    let firebase_date = new Date(
                      change.doc.data().date + ' ' + change.doc.data().time
                    );
                    let firebase_size =
                      change.doc.data().matches_join.length + 1;
                    let firebase_limit = change.doc.data().limit;
                    if (
                      change.doc.data().owner &&
                      firebase_date > realtime_date_time &&
                      firebase_size < firebase_limit
                    ) {
                      renderMatch3(change.doc.data(), change.doc.id);
                    }
                  } else if (change.type === 'modified') {
                    updateMatch(change.doc.data(), change.doc.id);
                  } else if (change.type == 'removed') {
                    let li = display_container.querySelector(
                      '[data-id=' + change.doc.id + ']'
                    );
                    display_container.removeChild(li);
                  }
                });
              });
          } else if (
            selected_date.innerHTML == 'All Date' &&
            region_value != 'all region'
          ) {
            selected.innerHTML = o.querySelector('label').innerHTML;
            optionsContainer.classList.remove('active');

            var child = display_container.lastElementChild;
            while (child) {
              display_container.removeChild(child);
              child = display_container.lastElementChild;
            }
            db.collection('match')
              .where('sport', '==', sport_value)
              .where('sex', '==', sex_value)
              .where('region', '==', region_value)
              .orderBy('date')
              .orderBy('time')
              .onSnapshot((snapshot) => {
                let changes = snapshot.docChanges();
                changes.forEach((change) => {
                  if (change.type == 'added') {
                    let realtime_date_time = new Date();
                    let firebase_date = new Date(
                      change.doc.data().date + ' ' + change.doc.data().time
                    );
                    let firebase_size =
                      change.doc.data().matches_join.length + 1;
                    let firebase_limit = change.doc.data().limit;
                    if (
                      change.doc.data().owner &&
                      firebase_date > realtime_date_time &&
                      firebase_size < firebase_limit
                    ) {
                      renderMatch3(change.doc.data(), change.doc.id);
                    }
                  } else if (change.type === 'modified') {
                    updateMatch(change.doc.data(), change.doc.id);
                  } else if (change.type == 'removed') {
                    let li = display_container.querySelector(
                      '[data-id=' + change.doc.id + ']'
                    );
                    display_container.removeChild(li);
                  }
                });
              });
          } else if (
            selected_date.innerHTML != 'All Date' &&
            time_value == 'all time' &&
            region_value == 'all region'
          ) {
            selected.innerHTML = o.querySelector('label').innerHTML;
            optionsContainer.classList.remove('active');

            var child = display_container.lastElementChild;
            while (child) {
              display_container.removeChild(child);
              child = display_container.lastElementChild;
            }
            db.collection('match')
              .where('sport', '==', sport_value)
              .where('sex', '==', sex_value)
              .where('date', '==', date_value)
              .orderBy('time')
              .onSnapshot((snapshot) => {
                let changes = snapshot.docChanges();
                changes.forEach((change) => {
                  if (change.type == 'added') {
                    let realtime_date_time = new Date();
                    let firebase_date = new Date(
                      change.doc.data().date + ' ' + change.doc.data().time
                    );
                    let firebase_size =
                      change.doc.data().matches_join.length + 1;
                    let firebase_limit = change.doc.data().limit;
                    if (
                      change.doc.data().owner &&
                      firebase_date > realtime_date_time &&
                      firebase_size < firebase_limit
                    ) {
                      renderMatch3(change.doc.data(), change.doc.id);
                    }
                  } else if (change.type === 'modified') {
                    updateMatch(change.doc.data(), change.doc.id);
                  } else if (change.type == 'removed') {
                    let li = display_container.querySelector(
                      '[data-id=' + change.doc.id + ']'
                    );
                    display_container.removeChild(li);
                  }
                });
              });
          } else if (
            selected_date.innerHTML != 'All Date' &&
            time_value == 'all time' &&
            region_value != 'all region'
          ) {
            selected.innerHTML = o.querySelector('label').innerHTML;
            optionsContainer.classList.remove('active');

            var child = display_container.lastElementChild;
            while (child) {
              display_container.removeChild(child);
              child = display_container.lastElementChild;
            }

            db.collection('match')
              .where('sport', '==', sport_value)
              .where('sex', '==', sex_value)
              .where('region', '==', region_value)
              .where('date', '==', date_value)
              .orderBy('time')
              .onSnapshot((snapshot) => {
                let changes = snapshot.docChanges();
                changes.forEach((change) => {
                  if (change.type == 'added') {
                    let realtime_date_time = new Date();
                    let firebase_date = new Date(
                      change.doc.data().date + ' ' + change.doc.data().time
                    );
                    let firebase_size =
                      change.doc.data().matches_join.length + 1;
                    let firebase_limit = change.doc.data().limit;
                    if (
                      change.doc.data().owner &&
                      firebase_date > realtime_date_time &&
                      firebase_size < firebase_limit
                    ) {
                      renderMatch3(change.doc.data(), change.doc.id);
                    }
                  } else if (change.type === 'modified') {
                    updateMatch(change.doc.data(), change.doc.id);
                  } else if (change.type == 'removed') {
                    let li = display_container.querySelector(
                      '[data-id=' + change.doc.id + ']'
                    );
                    display_container.removeChild(li);
                  }
                });
              });
          } else if (
            selected_date.innerHTML != 'All Date' &&
            time_value != 'all time' &&
            region_value == 'all region'
          ) {
            let check_hour = hour_check(date_value, time_value);
            if (check_hour) {
              selected.innerHTML = o.querySelector('label').innerHTML;
              optionsContainer.classList.remove('active');
              date_time_error.style.display = 'none';

              var child = display_container.lastElementChild;
              while (child) {
                display_container.removeChild(child);
                child = display_container.lastElementChild;
              }
              db.collection('match')
                .where('sport', '==', sport_value)
                .where('sex', '==', sex_value)
                .where('date', '==', date_value)
                .where('time', '==', time_value)
                .onSnapshot((snapshot) => {
                  let changes = snapshot.docChanges();
                  changes.forEach((change) => {
                    if (change.type == 'added') {
                      let realtime_date_time = new Date();
                      let firebase_date = new Date(
                        change.doc.data().date + ' ' + change.doc.data().time
                      );
                      let firebase_size =
                        change.doc.data().matches_join.length + 1;
                      let firebase_limit = change.doc.data().limit;
                      if (
                        change.doc.data().owner &&
                        firebase_date > realtime_date_time &&
                        firebase_size < firebase_limit
                      ) {
                        renderMatch3(change.doc.data(), change.doc.id);
                      }
                    } else if (change.type === 'modified') {
                      updateMatch(change.doc.data(), change.doc.id);
                    } else if (change.type == 'removed') {
                      let li = display_container.querySelector(
                        '[data-id=' + change.doc.id + ']'
                      );
                      display_container.removeChild(li);
                    }
                  });
                });
            } else {
              date_time_error.style.display = 'flex';
            }
          } else if (
            selected_date.innerHTML != 'All Date' &&
            time_value != 'all time' &&
            region_value != 'all region'
          ) {
            let check_hour = hour_check(date_value, time_value);
            if (check_hour) {
              selected.innerHTML = o.querySelector('label').innerHTML;
              optionsContainer.classList.remove('active');
              date_time_error.style.display = 'none';

              var child = display_container.lastElementChild;
              while (child) {
                display_container.removeChild(child);
                child = display_container.lastElementChild;
              }
              db.collection('match')
                .where('sport', '==', sport_value)
                .where('sex', '==', sex_value)
                .where('region', '==', region_value)
                .where('date', '==', date_value)
                .where('time', '==', time_value)
                .onSnapshot((snapshot) => {
                  let changes = snapshot.docChanges();
                  changes.forEach((change) => {
                    if (change.type == 'added') {
                      let realtime_date_time = new Date();
                      let firebase_date = new Date(
                        change.doc.data().date + ' ' + change.doc.data().time
                      );
                      let firebase_size =
                        change.doc.data().matches_join.length + 1;
                      let firebase_limit = change.doc.data().limit;
                      if (
                        change.doc.data().owner &&
                        firebase_date > realtime_date_time &&
                        firebase_size < firebase_limit
                      ) {
                        renderMatch3(change.doc.data(), change.doc.id);
                      }
                    } else if (change.type === 'modified') {
                      updateMatch(change.doc.data(), change.doc.id);
                    } else if (change.type == 'removed') {
                      let li = display_container.querySelector(
                        '[data-id=' + change.doc.id + ']'
                      );
                      display_container.removeChild(li);
                    }
                  });
                });
            } else {
              date_time_error.style.display = 'flex';
            }
          }
        }
        previous_word = o.querySelector('label').innerHTML;
      }
    });
  });
});

/*
//FIREBASE 
*/
const display_container = document.querySelector('.display-container');

const objectOfDays = {
  Mon: 'Monday',
  Tue: 'Tuesday',
  Wed: 'Wednesday',
  Thu: 'Thursday',
  Fri: 'Friday',
  Sat: 'Saturday',
  Sun: 'Sunday',
};

// CALL DATA TO FIREBASE
db.collection('match')
  .where('sex', '==', sex_value)
  .orderBy('date')
  .orderBy('time')
  .onSnapshot((snapshot) => {
    let changes = snapshot.docChanges();
    changes.forEach((change) => {
      if (change.type == 'added') {
        // CHECK IF THE OWNER FIELD EXISTS
        console.log('executed');
        let realtime_date_time = new Date();
        let firebase_date = new Date(
          change.doc.data().date + ' ' + change.doc.data().time
        );
        let firebase_size = change.doc.data().matches_join.length + 1;
        let firebase_limit = change.doc.data().limit;
        if (
          change.doc.data().owner &&
          firebase_date > realtime_date_time &&
          firebase_size < firebase_limit
        ) {
          renderMatch3(change.doc.data(), change.doc.id);
        }
      } else if (change.type === 'modified') {
        console.log('executed');
        updateMatch(change.doc.data(), change.doc.id);
      } else if (change.type == 'removed') {
        console.log('executed');
        let li = display_container.querySelector(
          '[data-id=' + change.doc.id + ']'
        );
        display_container.removeChild(li);
      }
    });
  });

let div = document.querySelector('.display-container');

// SORTING FUNCTION
function sortDiv() {
  var div, i, switching, b, shouldSwitch;
  div = document.querySelector('.display-container');
  switching = true;
  /* Make a loop that will continue until
    no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    b = div.childNodes;

    // Loop through all div items:
    for (i = 1; i < div.childElementCount; i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Check if the next item should
            switch place with the current item: */
      let date1 = new Date(b[i].id);
      let date2 = new Date(b[i + 1].id);

      if (date1 > date2) {
        /* If next item is alphabetically lower than current item,
                mark as a switch and break the loop: */
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
            and mark the switch as done: */
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}

// FUNCTION TO RENDER ELEMENT
function renderMatch3(doc, id) {
  //MAIN DIV
  let display_content_per_date = document.createElement('div');
  display_content_per_date.className = 'display-content-per-date';
  display_content_per_date.id = doc.date + ' ' + doc.time;

  //DATE AND UL
  let date = document.createElement('h4');
  let display_list = document.createElement('ul');

  date.className = 'display-date';
  display_list.className = 'display-list';
  let date_text = doc.date;
  let date_split = date_text.split(' ');
  let full_day = objectOfDays[date_split[0]];
  let date_final = date_split.splice(1, 2);
  let date_join = date_final.join(' ');
  date.innerHTML = full_day + ' ' + date_join + ', ' + doc.time + ' WIB';
  display_list.id = full_day + ' ' + date_join + ', ' + doc.time + ' WIB';

  //LI
  let display_item = document.createElement('li');
  display_item.className = 'display-item';

  //SPORT'S ICON
  let display_color_identifier = document.createElement('div');
  let icon = document.createElement('img');
  display_color_identifier.className = 'display-color-identifier';

  if (doc.sport == 'basketball') {
    icon.src = './images/basketball2.svg';
    display_item.id = 'display-basketball';
  } else if (doc.sport == 'soccer') {
    icon.src = './images/soccer2.svg';
    display_item.id = 'display-soccer';
  } else if (doc.sport == 'badminton') {
    icon.src = './images/badminton2.svg';
    display_item.id = 'display-badminton';
  } else if (doc.sport == 'volleyball') {
    icon.src = './images/volleyball2.svg';
    display_item.id = 'display-volleyball';
  }

  //EVENT NAME, AMOUNT OF PLAYERS, GENDER
  let display_text = document.createElement('div');
  let display_title = document.createElement('h2');
  let display_amount = document.createElement('div');
  let img = document.createElement('img');
  let p = document.createElement('p');
  let display_peoplepref2 = document.createElement('p');

  display_text.className = 'display-text';
  display_title.className = 'display-title';
  display_amount.className = 'display-amount';

  img.src = './images/group.svg';
  display_title.innerHTML = doc.event_name;
  p.innerHTML = `${doc.matches_join.length + 1} / ${parseInt(doc.limit)}`;

  //DISPLAY BAR
  let display_bar = document.createElement('div');
  display_bar.className = 'display-bar';

  //DISPLAY LOCATION
  let display_location = document.createElement('div');
  let display_place = document.createElement('p');
  let display_address = document.createElement('p');

  display_location.className = 'display-location';
  display_place.className = 'display-place';
  display_place.style.textOverflow = 'ellipsis';
  display_address.className = 'display-address';

  display_place.innerHTML = doc.location;
  display_address.innerHTML = doc.address;

  //GENDER ICON
  let display_peoplepref = document.createElement('div');
  let display_sex_icon = document.createElement('div');
  let img_gender = document.createElement('img');
  let display_sex_text = document.createElement('p');

  display_sex_icon.className = 'display-sex-icon';
  display_sex_text.className = 'display-sex-text';

  //BUTTON
  let button = document.createElement('button');
  let button_p = document.createElement('p');
  let button_image = document.createElement('img');

  button_p.className = 'button_p';
  button_image.className = 'button_image';

  //CLASS BUTTON TERGANTUNG ACTION
  button.setAttribute('type', 'submit');

  //SET ID FIREBASE KE LI
  display_item.setAttribute('data-id', id);

  if (doc.sex == 'male') {
    display_peoplepref2.className = 'display-peoplepref2 display-male2';
    display_peoplepref2.innerHTML = 'male only';
    img_gender.src = './images/male.svg';
    img_gender.alt = 'malesign';
    display_peoplepref.className = 'display-peoplepref display-male';
    display_sex_text.innerHTML = 'male only';
  } else if (doc.sex == 'female') {
    display_peoplepref2.className = 'display-peoplepref2 display-female2';
    display_peoplepref2.innerHTML = 'female only';
    img_gender.src = './images/female.svg';
    img_gender.alt = 'femalesign';
    display_peoplepref.className = 'display-peoplepref display-female';
    display_sex_text.innerHTML = 'female only';
  } else if (doc.sex == 'anyone') {
    display_peoplepref2.className = 'display-peoplepref2 display-anysex2';
    display_peoplepref2.innerHTML = 'anyone can join';
    img_gender.src = './images/anysex.svg';
    img_gender.alt = 'unisex';
    display_peoplepref.className = 'display-peoplepref display-anysex';
    display_sex_text.innerHTML = 'anyone';
  }

  // DETERMINE THE BUTTON TYPE

  let doc_pending_data = doc.pending;
  let pending_list_data = [];

  doc_pending_data.forEach((data_pending) => {
    let split_data = data_pending.split('~~');
    split_data.forEach((data) => {
      pending_list_data.push(data);
    });
  });

  if (doc.owner == firebase_room_id) {
    //owner
    button.className = 'display-delete';
    button_p.innerHTML = 'Delete';
    button_image.src = './images/Trash.svg';
  } else if (doc.matches_join.includes(firebase_room_id)) {
    //leave
    button.className = 'display-leave';
    button_p.innerHTML = 'Leave';
    button_image.src = './images/Leave.svg';
  } else if (pending_list_data.includes(firebase_room_id)) {
    //withdraw
    button.className = 'display-withdraw';
    button_p.innerHTML = 'Withdraw';
    button_image.src = './images/withdraw.svg';
  } else {
    //request
    button.className = 'display-request';
    button_p.innerHTML = 'Request';
    button_image.src = './images/Right arrow.svg';
  }

  //display-color-identifier
  display_color_identifier.appendChild(icon);
  display_item.appendChild(display_color_identifier);

  //display-text
  display_amount.appendChild(img);
  display_amount.appendChild(p);
  display_text.appendChild(display_title);
  display_text.appendChild(display_amount);
  display_text.appendChild(display_peoplepref2);

  //display-location
  display_location.appendChild(display_place);
  display_location.appendChild(display_address);

  //display-peoplepref
  display_sex_icon.appendChild(img_gender);
  display_peoplepref.appendChild(display_sex_icon);
  display_peoplepref.appendChild(display_sex_text);

  //display button
  button.appendChild(button_p);
  button.appendChild(button_image);

  //APPEND TO DISPLAY-ITEM
  display_item.appendChild(display_color_identifier);
  display_item.appendChild(display_text);
  display_item.appendChild(display_bar);
  display_item.appendChild(display_location);
  display_item.appendChild(display_peoplepref);
  display_item.appendChild(button);

  //CHECK IF THERE IS DUPLICATE
  let ul_id = full_day + ' ' + date_join + ', ' + doc.time + ' WIB';
  var find_duplicate = document.getElementById(ul_id);
  if (find_duplicate) {
    //APPEND TO EXISTING UL
    find_duplicate.appendChild(display_item);
  } else {
    //APPEND TO MAIN DIV
    display_list.appendChild(display_item);
    display_content_per_date.appendChild(date);
    display_content_per_date.appendChild(display_list);
    display_container.appendChild(display_content_per_date);
  }

  /*
    // DISPLAY APPLICATION FOR REQUEST AND DELETE
    */

  let modalApplication = document.querySelectorAll('.display-request');
  for (var i = 0; i < modalApplication.length; i++) {
    modalApplication[i].addEventListener('click', function () {
      this.id = 'selected_button';
      document.querySelector('.modal-application').style.display = 'flex';
    });
  }

  let buttons_leave = document.querySelectorAll('.display-leave');
  buttons_leave.forEach((but) => {
    but.addEventListener('click', () => {
      let button_parent_data_id = but.parentNode.getAttribute('data-id');

      db.collection('match')
        .doc(button_parent_data_id)
        .update({
          matches_join:
            firebase.firestore.FieldValue.arrayRemove(firebase_room_id),
        });

      but.className = 'display-request';
      but.querySelector('.button_p').innerHTML = 'Request';
      but.querySelector('.button_image').src = './images/Right arrow.svg';
    });
  });

  let button_withdraw = document.querySelectorAll('.display-withdraw');
  button_withdraw.forEach((but) => {
    but.addEventListener('click', () => {
      let button_parent_data_id = but.parentNode.getAttribute('data-id');

      db.collection('match')
        .doc(button_parent_data_id)
        .get()
        .then(function (doc) {
          let doc_pending = doc.data().pending;
          let data_want_delete = '';

          doc_pending.forEach((data) => {
            var regex = new RegExp(firebase_room_id, 'g');
            let match = data.match(regex);
            if (match) {
              data_want_delete = match.input;
            }
          });

          db.collection('match')
            .doc(button_parent_data_id)
            .update({
              pending:
                firebase.firestore.FieldValue.arrayRemove(data_want_delete),
            });
        });

      but.className = 'display-request';
      but.querySelector('.button_p').innerHTML = 'Request';
      but.querySelector('.button_image').src = './images/Right arrow.svg';
    });
  });

  let modalReason = document.querySelectorAll('.display-delete');
  for (var i = 0; i < modalReason.length; i++) {
    modalReason[i].addEventListener('click', function () {
      this.id = 'selected_button';
      document.querySelector('.modal-reason').style.display = 'flex';
    });
  }

  sortDiv();
}

// FUNCTION TO MODIFY ELEMENT
function updateMatch(doc, id) {
  // TRANSFORM DATA TO ID
  if (!doc.status) {
    let date_text = doc.date;
    let date_split = date_text.split(' ');
    let full_day = objectOfDays[date_split[0]];
    let date_final = date_split.splice(1, 2);
    let date_join = date_final.join(' ');
    let id_to_find = full_day + ' ' + date_join + ', ' + doc.time + ' WIB';

    // FIND THE ELEMENT TO BE MODIFIED
    let ul_to_search = document.getElementById(id_to_find);
    let li_to_search = document.querySelector(`[data-id=${id}]`);
    if (ul_to_search && li_to_search) {
      let li_display_amount = li_to_search.querySelector('.display-amount');
      let display_amount_p = li_display_amount.querySelector('p');
      display_amount_p.innerHTML = `${doc.matches_join.length + 1} / ${parseInt(
        doc.limit
      )}`;
    }
  }
}

document.addEventListener('click', () => {
  // DISPLAY APPLICATION FOR REQUEST, DELETE, AND WITHDRAW

  // REQUEST
  let modalApplication = document.querySelectorAll('.display-request');
  modalApplication.forEach((modal) => {
    modal.addEventListener('click', (e) => {
      e.preventDefault();
      modal.id = 'selected_button';
      document.querySelector('.modal-application').style.display = 'flex';
    });
  });

  // LEAVE
  let buttons_leave = document.querySelectorAll('.display-leave');
  buttons_leave.forEach((but) => {
    but.addEventListener('click', () => {
      let button_parent_data_id = but.parentNode.getAttribute('data-id');

      db.collection('match')
        .doc(button_parent_data_id)
        .update({
          matches_join:
            firebase.firestore.FieldValue.arrayRemove(firebase_room_id),
        });

      but.className = 'display-request';
      but.querySelector('.button_p').innerHTML = 'Request';
      but.querySelector('.button_image').src = './images/Right arrow.svg';
    });
  });

  // WITHDRAW
  let button_withdraw = document.querySelectorAll('.display-withdraw');
  button_withdraw.forEach((but) => {
    but.addEventListener('click', (e) => {
      // REMOVE USER FROM PENDING
      let button_parent_data_id = but.parentNode.getAttribute('data-id');

      db.collection('match')
        .doc(button_parent_data_id)
        .get()
        .then(function (doc) {
          let doc_pending = doc.data().pending;
          let data_want_delete = '';

          doc_pending.forEach((data) => {
            // let match = data.match(/1fj3C0p3vowY8tCrpHNa/);
            var regex = new RegExp(firebase_room_id, 'g');
            let match = data.match(regex);
            if (match) {
              data_want_delete = match.input;
            }
          });

          db.collection('match')
            .doc(button_parent_data_id)
            .update({
              pending:
                firebase.firestore.FieldValue.arrayRemove(data_want_delete),
            });
        });

      but.className = 'display-request';
      but.querySelector('.button_p').innerHTML = 'Request';
      but.querySelector('.button_image').src = './images/Right arrow.svg';
      document.querySelector('.modal-application').style.display = 'none';
      let selected_button = document.querySelectorAll('#selected_button');
      selected_button.forEach((button) => {
        button.removeAttribute('id');
      });
    });
  });

  // DELETE
  let modalReason = document.querySelectorAll('.display-delete');
  for (var i = 0; i < modalReason.length; i++) {
    modalReason[i].addEventListener('click', function () {
      this.id = 'selected_button';
      document.querySelector('.modal-reason').style.display = 'flex';
    });
  }

  let text_area_application = document.querySelectorAll('#modal-textarea');

  // FORM APPLICATION
  document
    .querySelector('.modal-close-application')
    .addEventListener('click', function () {
      let selected_button = document.querySelectorAll('#selected_button');
      selected_button.forEach((button) => {
        button.removeAttribute('id');
      });
      document.querySelector('.modal-application').style.display = 'none';
      text_area_application.forEach((text_area) => {
        text_area.value = '';
      });
    });

  let modal_application_submit = document.querySelectorAll(
    '.modal-application-submit'
  );
  modal_application_submit.forEach((reason) => {
    reason.addEventListener('click', (e) => {
      e.preventDefault();
      let textarea = reason.parentNode.querySelector('textarea');
      if (textarea.value.length < 20) {
        let errorBox = document.querySelector('.error');
        errorBox.style.display = 'flex';
      } else {
        let button_change = document.getElementById('selected_button');
        let button_parent = button_change.parentNode;
        let data = textarea.value.trim() + '~~' + firebase_room_id;

        // GET THE NEW VALUE OF PLAYERS (buat chat)
        let amountPlayers = button_parent
          .querySelector('.display-amount')
          .querySelector('p').innerHTML;
        let numOfPlayers = parseInt(amountPlayers.split('/')[0]) + 1;

        // UPDATE DATA TO FIRESTORE
        db.collection('match')
          .doc(button_parent.getAttribute('data-id'))
          .update({
            pending: firebase.firestore.FieldValue.arrayUnion(data),
          });

        button_change.className = 'display-withdraw';
        button_change.querySelector('p').innerHTML = 'Withdraw';
        button_change.querySelector('img').src = './images/withdraw.svg';
        document.querySelector('.modal-application').style.display = 'none';
        let selected_button = document.querySelectorAll('#selected_button');
        selected_button.forEach((button) => {
          button.removeAttribute('id');
        });
        text_area_application.forEach((text_area) => {
          text_area.value = '';
        });
      }
    });
  });

  // FORM DELETE
  document
    .querySelector('.modal-close-reason')
    .addEventListener('click', function () {
      let selected_button = document.querySelectorAll('#selected_button');
      selected_button.forEach((button) => {
        button.removeAttribute('id');
      });
      document.querySelector('.modal-reason').style.display = 'none';
      text_area_application.forEach((text_area) => {
        text_area.value = '';
      });
    });

  let modal_reason_submit = document.querySelectorAll('.modal-reason-submit');
  modal_reason_submit.forEach((reason) => {
    reason.addEventListener('click', (e) => {
      e.preventDefault();
      let textarea = reason.parentNode.querySelector('textarea');
      if (textarea.value.length < 20) {
      } else {
        let button_chosen = document.getElementById('selected_button');
        let button_parent_data_id =
          button_chosen.parentNode.getAttribute('data-id');

        // DELETE OWNER FIELD AND ADD STATUS FIELD
        db.collection('match').doc(button_parent_data_id).set(
          {
            reason: textarea.value.trim(),
          },
          {
            merge: true,
          }
        );

        let reason = textarea.value.trim();
        let reason_final = `***************************************************************************\n\nTHE OWNER HAS CANCELLED THE EVENT!\n\nThe owner's reason: ${reason}\n\n***************************************************************************`;

        //APPEND MESSAGE TO THE DATABASE
        dbf
          .ref('all_chats' + `/${button_parent_data_id}`)
          .once('value', function (message_object) {
            // This index is mortant. It will help organize the chat in order
            var index = parseFloat(message_object.numChildren()) + 1;
            dbf
              .ref(
                'all_chats' + `/${button_parent_data_id}` + `/message_${index}`
              )
              .set({
                name: 'SYSTEM',
                message: `${reason_final}`,
                index: index,
              });
          });

        // GET DATE + 1 FROM TODAY
        let current_full_date = new Date();
        let updatedtime = current_full_date.setDate(
          current_full_date.getDate() + 1
        );
        let finaltime = new Date(updatedtime);

        db.collection('match').doc(button_parent_data_id).update({
          owner: firebase.firestore.FieldValue.delete(),
          status: 'deleted',
          date: finaltime,
        });

        // REMOVE ELEMENT FROM PARENT
        let button_selected = document.getElementById('selected_button');
        let li_selected = button_selected.parentNode;
        let ul_selected = li_selected.parentNode;
        let ul_selected_child = li_selected.parentNode.childElementCount;
        let div_selected = ul_selected.parentNode;

        if (ul_selected_child < 2) {
          display_container.removeChild(div_selected);
        } else {
          ul_selected.removeChild(li_selected);
        }

        let selected_button = document.querySelectorAll('#selected_button');
        selected_button.forEach((button) => {
          button.removeAttribute('id');
        });
        text_area_application.forEach((text_area) => {
          text_area.value = '';
        });

        document.querySelector('.modal-reason').style.display = 'none';
      }
    });
  });
});

/*
// AUTOMATIC DATA DELETION FOR FIREBASE
*/
let current_seconds = new Date().getSeconds();
let difference_seconds = 60 - current_seconds;

setTimeout(function () {
  var d = new Date();
  var myVar = setInterval(deleteChild, 60000);

  // DELETE DOCUMENT IN FIRESTORE AND REALTIME DATABASE FOR SUCCESS
  db.collection('match')
    .where('status', '==', 'success')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let current_time = new Date();

        if (doc.data().date < current_time) {
          db.collection('match').doc(doc.id).delete();
          dbf.ref('all_chats' + `/${doc.id}`).remove();
          db.collection('match')
            .doc(doc.id)
            .delete()
            .then(() => {});
        }
      });
    });

  // DELETE DOCUMENT IN FIRESTORE AND REALTIME DATABASE FOR DELETED
  db.collection('match')
    .where('status', '==', 'deleted')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let current_time = new Date();

        if (doc.data().date < current_time) {
          db.collection('match').doc(doc.id).delete();
          dbf.ref('all_chats' + `/${doc.id}`).remove();
          db.collection('match')
            .doc(doc.id)
            .delete()
            .then(() => {});
        }
      });
    });

  // DELETE DOCUMENT IN FIRESTORE AND REALTIME DATABASE BASED ON TIME
  let dateToString = new Date();
  db.collection('match')
    .where('event_name', '!=', null)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let docDateAndTime = new Date(doc.data().date + ' ' + doc.data().time);
        if (docDateAndTime < dateToString) {
          db.collection('match').doc(doc.id).delete();
          dbf.ref('all_chats' + `/${doc.id}`).remove();
          db.collection('match')
            .doc(doc.id)
            .delete()
            .then(() => {});
        }
      });
    });

  //DELETE CHILD AND CHECK IF THERE IS STILL A CHILD
  var div_top = document.querySelector('.display-container').childNodes;
  if (div_top[1]) {
    var ul_top = div_top[1].querySelector('ul');
    var date_current = new Date();
    var top_on_the_list = new Date(div_top[1].id);

    if (top_on_the_list < date_current) {
      var child = ul_top.lastElementChild;
      // REMOVE LI
      while (child) {
        // DELETE OWNER FIELD
        var child_room_id = child.getAttribute('data-id');

        // GET DATE + 2 HOURS FROM TODAY
        let current_full_date = new Date();
        let updatedtime = current_full_date.setHours(
          current_full_date.getHours() + 2
        );
        let finaltime = new Date(updatedtime);

        db.collection('match').doc(child_room_id).update({
          owner: firebase.firestore.FieldValue.delete(),
          status: 'success',
          date: finaltime,
        });

        // ADD MESSAGE TO THE DATABASE
        let room_id = child.getAttribute('data-id');
        dbf
          .ref('all_chats' + `/${room_id}`)
          .once('value', function (message_object) {
            // This index is mortant. It will help organize the chat in order
            var index = parseFloat(message_object.numChildren()) + 1;
            dbf.ref('all_chats' + `/${room_id}` + `/message_${index}`).set({
              name: 'SYSTEM',
              message: `***************************************************************************\n\nThank you for using our services. This chat will be deleted in 2 more hours. We hope that you have a great experience using our service!\n\n***************************************************************************`,
              index: index,
            });
          });

        // DELETE ROOM IN WEB CLIENT
        ul_top.removeChild(child);
        child = ul_top.lastElementChild;

        // // REMOVE DIV
        document.querySelector('.display-container').removeChild(div_top[1]);
      }
    }
  }
}, difference_seconds * 1000);

function deleteChild() {
  var d = new Date();

  // DELETE CHILD AND CHECK IF THERE IS STILL A CHILD
  var div_top = document.querySelector('.display-container').childNodes;
  if (div_top[1]) {
    var ul_top = div_top[1].querySelector('ul');
    var date_current = new Date();
    var top_on_the_list = new Date(div_top[1].id);

    if (top_on_the_list < date_current) {
      var child = ul_top.lastElementChild;

      // REMOVE LI
      while (child) {
        // DELETE OWNER FIELD
        var child_room_id = child.getAttribute('data-id');

        db.collection('match').doc(child_room_id).update({
          owner: firebase.firestore.FieldValue.delete(),
        });

        // DELETE ROOM IN WEB CLIENT
        ul_top.removeChild(child);
        child = ul_top.lastElementChild;
      }
      // // REMOVE DIV
      document.querySelector('.display-container').removeChild(div_top[1]);
    }
  }
}

// DELETE DOCUMENT IN FIRESTORE AND REALTIME DATABASE
function deleteDocument() {
  var d = new Date();

  db.collection('match')
    .where('status', '==', 'success')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let current_time = new Date();

        if (doc.data().date < current_time) {
          db.collection('match')
            .doc(doc.id)
            .delete()
            .then(() => {});
          dbf.ref('all_chats' + `/${doc.id}`).remove();
        }
      });
    });
}
