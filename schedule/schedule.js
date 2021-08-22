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

var dbf = firebase.database();

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

let empty_content = document.querySelector('.empty-content');
let main_content = document.querySelector('.content');

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

db.collection('account')
  .where(
    firebase.firestore.FieldPath.documentId(),
    '==',
    'Wf1bl64tzXIKmO97D2ry'
  )
  .onSnapshot((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.data().matches_created_join.length > 0) {
        empty_content.style.display = 'none';
        main_content.style.display = 'flex';
      } else {
        main_content.style.display = 'none';
        empty_content.style.display = 'flex';
      }
    });
  });

setTimeout(() => {
  const modalReason = document.querySelectorAll('.display-delete');
  for (var i = 0; i < modalReason.length; i++) {
    modalReason[i].addEventListener('click', function () {
      document.querySelector('.modal-reason').style.display = 'flex';
    });
  }

  document
    .querySelector('.modal-close-reason')
    .addEventListener('click', function () {
      document.querySelector('.modal-reason').style.display = 'none';
    });

  // ERRORS
  let error = document.querySelector('.error');
  let error_text = document.querySelector('.error-text');
  let errorClose = document.querySelector('.error-circle');
  let errorBox = document.querySelector('.error-box');

  for (let i = 0; i < errorClose.length; i++) {
    errorClose[i].addEventListener('click', () => {
      errorBox[i].style.display = 'none';
    });
  }

  /* 
    // FIREBASE
    */

  db.collection('account')
    .doc('Wf1bl64tzXIKmO97D2ry')
    .get()
    .then(function (doc) {
      let matches_join_created = doc.data().matches_created_join;

      db.collection('match')
        .where(
          firebase.firestore.FieldPath.documentId(),
          'in',
          matches_join_created
        )
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((dok) => {
            if (dok.data().owner) {
              renderMatch3(dok.data(), dok.id);
            }
          });
        });
    });

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
      let split_data = data_pending.split(',');
      split_data.forEach((data) => {
        pending_list_data.push(data);
      });
    });

    if (doc.owner == 'Wf1bl64tzXIKmO97D2ry') {
      //owner
      button.className = 'display-delete';
      button_p.innerHTML = 'Delete';
      button_image.src = './images/Trash.svg';
    } else if (doc.matches_join.includes('Wf1bl64tzXIKmO97D2ry')) {
      //leave
      button.className = 'display-leave';
      button_p.innerHTML = 'Leave';
      button_image.src = './images/Leave.svg';
    } else if (pending_list_data.includes('Wf1bl64tzXIKmO97D2ry')) {
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
      // DISPLAY APPLICATION FOR LEAVE AND DELETE
      */

    let buttons_leave = document.querySelectorAll('.display-leave');
    buttons_leave.forEach((but) => {
      but.addEventListener('click', () => {
        let button_parent_data_id = but.parentNode.getAttribute('data-id');

        let li_selected = but.parentNode;
        let ul_selected = li_selected.parentNode;
        let ul_selected_child = li_selected.parentNode.childElementCount;
        let div_selected = ul_selected.parentNode;

        db.collection('match')
          .doc(button_parent_data_id)
          .update({
            matches_join: firebase.firestore.FieldValue.arrayRemove(
              'Wf1bl64tzXIKmO97D2ry'
            ),
          });

        if (ul_selected_child < 2) {
          display_container.removeChild(div_selected);
        } else {
          ul_selected.removeChild(li_selected);
        }
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

  document.addEventListener('click', () => {
    // DISPLAY APPLICATION FOR REQUEST, DELETE, AND WITHDRAW

    // LEAVE
    let buttons_leave = document.querySelectorAll('.display-leave');
    buttons_leave.forEach((but) => {
      but.addEventListener('click', () => {
        let button_parent_data_id = but.parentNode.getAttribute('data-id');

        db.collection('match')
          .doc(button_parent_data_id)
          .update({
            matches_join: firebase.firestore.FieldValue.arrayRemove(
              'Wf1bl64tzXIKmO97D2ry'
            ),
          });

        but.className = 'display-request';
        but.querySelector('.button_p').innerHTML = 'Request';
        but.querySelector('.button_image').src = './images/Right arrow.svg';
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
          console.log('Enter 20 CHARACTERS');
        } else {
          let button_chosen = document.getElementById('selected_button');
          let button_parent_data_id =
            button_chosen.parentNode.getAttribute('data-id');

          // // DELETE OWNER FIELD AND ADD STATUS FIELD
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
                  'all_chats' +
                    `/${button_parent_data_id}` +
                    `/message_${index}`
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
}, 2000);
