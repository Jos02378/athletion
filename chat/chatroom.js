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
const dbf = firebase.firestore();
dbf.settings({
  timestampsInSnapshots: true,
});

/**********************************************************************************************/

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

// LOAD CONTENT AND CHAT
let empty_content = document.querySelector('.empty-content');

dbf
  .collection('account')
  .where(
    firebase.firestore.FieldPath.documentId(),
    '==',
    'Wf1bl64tzXIKmO97D2ry'
  )
  .onSnapshot((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.data().username);
      localStorage.setItem('name', doc.data().username);
      if (doc.data().matches_created_join.length > 0) {
        empty_content.style.display = 'none';
      } else {
        empty_content.style.display = 'flex';
      }
    });
  });

setTimeout(() => {
  var chat_others_toggle = document.createElement('div');
  chat_others_toggle.setAttribute('id', 'chat_others_toggle');
  chat_others_toggle.classList.add('chat_toggle');

  var chat_members_toggle = document.createElement('div');
  chat_members_toggle.setAttribute('id', 'chat_members_toggle');
  chat_members_toggle.classList.add('chat_toggle');

  let menuToggle = document.querySelector('.navigation-toggle');
  let rightTab = document.querySelector('.right-header-tab');
  let darkBackground = document.querySelector('.dark-background');
  let darkBackground2 = document.querySelector('.dark-background-2');

  let headerLogo = document.querySelector('.header-logo');
  let leftTab = document.querySelector('.left-header-tab');

  /* 
      // CONTENT AND CHATROOM 
      */
  let div_wrapper = document.querySelector('.wrapper');

  function loadContent() {
    // CREATE DIV CONTENT
    let div_content = document.createElement('div');
    div_content.className = 'content';

    /*-------------------------------------------------*/

    // CREATE SECTION roomslist-tab edge-tab
    let section_roomlist_tab = document.createElement('section');
    section_roomlist_tab.className = 'roomslist-tab edge-tab';

    // CREATE DIV ROOMLIST-TITLE
    let div_roomlist_title = document.createElement('div');
    div_roomlist_title.className = 'roomslist-title';

    let span_div_roomlist_title = document.createElement('span');
    span_div_roomlist_title.className = 'roomslist-logo';

    let img_span_roomlist = document.createElement('img');
    img_span_roomlist.src = './images/Header images/chatroom.svg';

    let h3_div_roomlist = document.createElement('h3');
    h3_div_roomlist.innerHTML = 'Chatrooms';

    span_div_roomlist_title.appendChild(img_span_roomlist);
    div_roomlist_title.appendChild(span_div_roomlist_title);
    div_roomlist_title.appendChild(h3_div_roomlist);

    // CREATE FORM ROOMLIST
    let form_roomlist = document.createElement('form');
    form_roomlist.className = 'roomslist';

    // // CREATE ROOM 1
    // let div_basketball_room = document.createElement('div');
    // div_basketball_room.className = "deleted-room roomslist-room";
    // // div_basketball_room.className = "basketball-room roomslist-room";

    // let input_basket = document.createElement('input');
    // input_basket.setAttribute('type', 'radio');
    // input_basket.setAttribute('name', 'room');
    // input_basket.className = "room-radio";
    // input_basket.id = "/chats_1";
    // input_basket.checked = true;

    // let label_basket = document.createElement('label');
    // label_basket.setAttribute('for', "/chats_1");
    // let span_basket = document.createElement('span');
    // span_basket.innerHTML = 'Latihan Basket';

    // label_basket.appendChild(span_basket);
    // div_basketball_room.appendChild(input_basket);
    // div_basketball_room.appendChild(label_basket);

    // // CREATE ROOM 2
    // let div_soccer_room = document.createElement('div');
    // div_soccer_room.className = "soccer-room roomslist-room";

    // let input_soccer = document.createElement('input');
    // input_soccer.setAttribute('type', 'radio');
    // input_soccer.setAttribute('name', 'room');
    // input_soccer.className = "room-radio";
    // input_soccer.id = "/chats_2";

    // let label_soccer = document.createElement('label');
    // label_soccer.setAttribute('for', "/chats_2");
    // let span_soccer = document.createElement('span');
    // span_soccer.innerHTML = 'Latihan Futsal';

    // label_soccer.appendChild(span_soccer);
    // div_soccer_room.appendChild(input_soccer);
    // div_soccer_room.appendChild(label_soccer);

    // form_roomlist.appendChild(div_basketball_room);
    // form_roomlist.appendChild(div_soccer_room);

    // APPEND ROOMLIST_TITLE
    section_roomlist_tab.appendChild(div_roomlist_title);
    section_roomlist_tab.appendChild(form_roomlist);

    /*-------------------------------------------------*/

    // CREATE SECTION CHATROOM
    let section_chatroom = document.createElement('section');
    section_chatroom.className = 'chatroom';

    /*-------------------------------------------------*/

    // CREATE SECTION members-tab edge-tab
    let section_members_tab = document.createElement('section');
    section_members_tab.className = 'members-tab edge-tab';

    // CREATE DIV MEMBERS TITLE
    let div_members_title = document.createElement('div');
    div_members_title.className = 'members-title';

    let h3_members_title = document.createElement('h3');
    h3_members_title.innerHTML = 'Members';

    let span_members_amount = document.createElement('span');
    span_members_amount.className = 'members-amount';
    span_members_amount.innerHTML = '0 / 10';

    let span_roomslist_logo = document.createElement('span');
    span_roomslist_logo.className = 'roomslist-logo';

    let img_roomlist_logo = document.createElement('img');
    img_roomlist_logo.src = './images/Header images/profile.svg';

    span_roomslist_logo.appendChild(img_roomlist_logo);
    h3_members_title.appendChild(span_members_amount);
    div_members_title.appendChild(h3_members_title);
    div_members_title.appendChild(span_roomslist_logo);

    // CREATE DIV MEMBER SWITCH
    let div_member_switch = document.createElement('div');
    div_member_switch.className = 'members-switch';

    let div_members_event_switch = document.createElement('div');
    div_members_event_switch.className = 'members-event-switch';
    div_members_event_switch.innerHTML = 'MEMBERS';

    let div_members_pending_switch = document.createElement('div');
    div_members_pending_switch.className = 'members-pending-switch disabled';
    div_members_pending_switch.innerHTML = 'PENDING';

    div_member_switch.appendChild(div_members_event_switch);
    div_member_switch.appendChild(div_members_pending_switch);

    // CREATE DIV MEMBERS
    let div_members = document.createElement('div');
    div_members.className = 'members';

    let div_event_members = document.createElement('div');
    div_event_members.className = 'event-members';

    let div_pending_members = document.createElement('div');
    div_pending_members.className = 'pending-members';

    div_members.appendChild(div_event_members);
    div_members.appendChild(div_pending_members);

    section_members_tab.appendChild(div_members_title);
    section_members_tab.appendChild(div_member_switch);
    section_members_tab.appendChild(div_members);

    /*-------------------------------------------------*/

    div_content.appendChild(section_roomlist_tab);
    div_content.appendChild(section_chatroom);
    div_content.appendChild(section_members_tab);

    div_wrapper.appendChild(div_content);
  }

  function loadChat() {
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

    // This is very IMPORTANT!! We're going to use "db" a lot.
    var db = firebase.database();

    let chatroom = document.querySelector('.chatroom');

    // We're going to use oBjEcT OrIeNtEd PrOgRaMmInG. Lol
    class MEME_CHAT {
      // Home() is used to create the home page
      home() {
        // First clear the body before adding in
        // a title and the join form
        document.body.innerHTML = '';
        this.create_join_form();
      }
      // chat() is used to create the chat page
      chat() {
        this.create_chat();
      }
      // create_join_form() creates the join form
      create_join_form() {
        // YOU MUST HAVE (PARENT = THIS). OR NOT. I'M NOT YOUR BOSS!😂
        var parent = this;

        parent.save_name('lol');
        parent.create_chat();
      }
      // create_load() creates a loading circle that is used in the chat container
      create_load(container_id) {
        // YOU ALSO MUST HAVE (PARENT = THIS). BUT IT'S WHATEVER THO.
        var parent = this;

        // This is a loading function. Something cool to have.
        var container = document.getElementById(container_id);
        container.innerHTML = '';
      }
      // create_chat() creates the chat container and stuff
      create_chat() {
        // Again! You need to have (parent = this)
        var parent = this;
        // GET THAT MEMECHAT HEADER OUTTA HERE

        var chat_container = document.createElement('div');
        chat_container.setAttribute('id', 'chat_container');

        var chat_inner_container = document.createElement('div');
        chat_inner_container.setAttribute('id', 'chat_inner_container');

        // TAMBAHAN

        var chat_title = document.createElement('div');
        var chat_title_h2 = document.createElement('h4');
        chat_title.setAttribute('id', 'chat_title');
        chat_title_h2.innerHTML = '';

        var chat_others_text = document.createElement('p');
        var chat_others_logo = document.createElement('span');
        var chat_members_text = document.createElement('p');
        var chat_members_logo = document.createElement('span');

        chat_others_text.innerHTML = 'Other Rooms';
        chat_members_text.innerHTML = 'Members';

        chat_title.append(
          chat_others_toggle,
          chat_title_h2,
          chat_members_toggle
        );
        chat_others_toggle.append(chat_others_logo, chat_others_text);
        chat_members_toggle.append(chat_members_logo, chat_members_text);

        var chat_content_container = document.createElement('div');
        chat_content_container.setAttribute('id', 'chat_content_container');

        var chat_input_container = document.createElement('div');
        chat_input_container.setAttribute('id', 'chat_input_container');

        var chat_input_send = document.createElement('button');
        chat_input_send.setAttribute('id', 'chat_input_send');
        chat_input_send.setAttribute('disabled', true);
        chat_input_send.innerHTML = `<i class="far fa-paper-plane"></i>`;

        var chat_input = document.createElement('input');
        chat_input.setAttribute('id', 'chat_input');
        // Only a max message length of 1000

        /* 
            // KASIH LIMIT KE INPUT BUAT CHAT
            */
        chat_input.setAttribute('maxlength', 120);

        /*-----------------------------------------*/

        // Get the name of the user
        // chat_input.placeholder = `${parent.get_name()}. Say something...`
        chat_input.placeholder = 'Enter your messages';
        chat_input.onkeyup = function () {
          if (chat_input.value.length > 0) {
            chat_input_send.removeAttribute('disabled');
            chat_input_send.classList.add('enabled');
            chat_input_send.onclick = function () {
              chat_input_send.setAttribute('disabled', true);
              chat_input_send.classList.remove('enabled');
              if (chat_input.value.length <= 0) {
                return;
              }
              // Enable the loading circle in the 'chat_content_container'
              parent.create_load('chat_content_container');
              // Send the message. Pass in the chat_input.value
              parent.send_message(chat_input.value);
              // Clear the chat input box
              chat_input.value = '';
              // Focus on the input just after
              chat_input.focus();
            };
          } else {
            chat_input_send.classList.remove('enabled');
          }
        };

        chat_input_container.append(chat_input, chat_input_send);
        chat_inner_container.append(
          chat_title,
          chat_content_container,
          chat_input_container
        );
        chat_container.append(chat_inner_container);
        chatroom.append(chat_container);
        // After creating the chat. We immediatly create a loading circle in the 'chat_content_container'
        parent.create_load('chat_content_container');
        // then we "refresh" and get the chat data from Firebase
        parent.refresh_chat();
      }
      // Save name. It literally saves the name to localStorage
      save_name(name) {
        // Save name to localStorage
        localStorage.setItem('name', name);
      }
      // Sends message/saves the message to firebase database
      send_message(message) {
        var parent = this;
        // if the local storage name is null and there is no message
        // then return/don't send the message. The user is somehow hacking
        // to send messages. Or they just deleted the
        // localstorage themselves. But hacking sounds cooler!!
        if (parent.get_name() == null && message == null) {
          return;
        }

        /*
            // PUSH DATA KE REALTIME DATABASE
            */
        let room_id_new_2 = room_id + '/';

        if (message != null) {
          // Get the firebase database value
          db.ref('all_chats' + room_id).once(
            'value',
            function (message_object) {
              // This index is mortant. It will help organize the chat in order
              var index = parseFloat(message_object.numChildren()) + 1;
              db.ref('all_chats' + room_id_new_2 + `message_${index}`)
                .set({
                  name: parent.get_name(),
                  message: message,
                  index: index,
                })
                .then(function () {
                  // After we send the chat refresh to get the new messages
                  parent.refresh_chat(room_id);
                });
            }
          );
        }
        /*-------------------------------------------------------*/
      }
      // Get name. Gets the username from localStorage
      get_name() {
        // Get the name from localstorage

        return localStorage.getItem('name');
        // if (localStorage.getItem('name') != null) {
        //   return localStorage.getItem('name');
        // } else {
        //   this.home();
        //   return null;
        // }
      }
      // Refresh chat gets the message/chat data from firebase
      refresh_chat(room_id_new) {
        var chat_content_container = document.getElementById(
          'chat_content_container'
        );

        // ANNOUNCEMENT FOR DELETE
        var announcementBox = document.createElement('div');
        var announcementTitle = document.createElement('h4');
        var announcementDesc = document.createElement('div');
        var announcementSubtitle = document.createElement('span');
        var announcementReason = document.createElement('p');

        announcementBox.append(announcementTitle, announcementDesc);
        announcementDesc.append(announcementSubtitle, announcementReason);
        announcementBox.setAttribute('class', 'announcement-box');
        announcementTitle.setAttribute('class', 'announcement-title');
        announcementDesc.setAttribute('class', 'announcement-desc');
        announcementSubtitle.setAttribute('class', 'announcement-subtitle');
        announcementReason.setAttribute('class', 'announcement-reason');

        announcementTitle.innerHTML = 'The Owner has cancelled the event';
        announcementSubtitle.innerHTML = "The owner's reason:  ";
        announcementReason.innerHTML =
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu.';

        /*
         *********************************************************\n\nTHE OWNER HAS CANCELLED THE EVENT\n\nThe owner's reason: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu.\n\n*********************************************************
         */
        chat_content_container.append(announcementBox);

        if (room_id_new == undefined) {
          room_id_new = '/chats_1';
        }

        var chat_content_container = document.getElementById(
          'chat_content_container'
        );

        // Get the chats from firebase
        db.ref('all_chats' + room_id_new).on(
          'value',
          function (messages_object) {
            // When we get the data clear chat_content_container
            chat_content_container.innerHTML = '';
            // if there are no messages in the chat. Retrun . Don't load anything
            if (messages_object.numChildren() == 0) {
              return;
            }

            // OK! SO IF YOU'RE A ROOKIE CODER. THIS IS GOING TO BE
            // SUPER EASY-ISH! I THINK. MAYBE NOT. WE'LL SEE!

            // convert the message object values to an array.
            var messages = Object.values(messages_object.val());
            var guide = []; // this will be our guide to organizing the messages
            var unordered = []; // unordered messages
            var ordered = []; // we're going to order these messages

            for (var i, i = 0; i < messages.length; i++) {
              // The guide is simply an array from 0 to the messages.length
              guide.push(i + 1);
              // unordered is the [message, index_of_the_message]
              unordered.push([messages[i], messages[i].index]);
            }

            // Now this is straight up from stack overflow 🤣
            // Sort the unordered messages by the guide
            guide.forEach(function (key) {
              var found = false;
              unordered = unordered.filter(function (item) {
                if (!found && item[1] == key) {
                  // Now push the ordered messages to ordered array
                  ordered.push(item[0]);
                  found = true;
                  return false;
                } else {
                  return true;
                }
              });
            });

            // Now we're done. Simply display the ordered messages
            ordered.forEach(function (data) {
              var name = data.name;
              var message = data.message;

              var message_container = document.createElement('div');
              message_container.setAttribute('class', 'message_container');

              var message_inner_container = document.createElement('div');
              message_inner_container.setAttribute(
                'class',
                'message_inner_container'
              );

              var message_user_container = document.createElement('div');
              message_user_container.setAttribute(
                'class',
                'message_user_container'
              );

              var message_user = document.createElement('p');
              message_user.setAttribute('class', 'message_user');
              message_user.textContent = `${name}`;

              var message_content_container = document.createElement('div');
              message_content_container.setAttribute(
                'class',
                'message_content_container'
              );

              var message_content = document.createElement('p');
              message_content.setAttribute('class', 'message_content');
              message_content.textContent = `${message}`;

              message_user_container.append(message_user);
              message_content_container.append(message_content);
              message_inner_container.append(
                message_user_container,
                message_content_container
              );
              message_container.append(message_inner_container);

              chat_content_container.append(message_container);
            });
            // Go to the recent message at the bottom of the container
            chat_content_container.scrollTop =
              chat_content_container.scrollHeight;
          }
        );
      }
    }

    // So we've "built" our app. Let's make it work!!
    var app = new MEME_CHAT();
    // If we have a name stored in localStorage.
    // Then use that name. Otherwise , if not.
    // Go to home.
    if (app.get_name() != null) {
      app.chat();
    }

    // GET ROOM ID
    let room_id = '/chats_1';
    let roomlist = document.querySelectorAll('.roomslist-room');

    document.addEventListener('click', () => {
      // GET ROOM ID
      let roomlist = document.querySelectorAll('.roomslist-room');
      let event_members = document.querySelector('.event-members');
      let pending_members = document.querySelector('.pending-members');
      let members_amount = document.querySelector('.members-amount');

      // REQUEST APPLICATION
      let acceptButton = document.querySelectorAll('.accept-button');
      let application_accept = document.querySelectorAll('.application-accept');
      let rejectButton = document.querySelectorAll('.reject-button');
      let pendingMembers = document.querySelectorAll('.members-pending-group');

      for (let i = 0; i < acceptButton.length; i++) {
        acceptButton[i].addEventListener('click', () => {
          let selected_button = document.querySelectorAll('#selected_button');
          selected_button.forEach((button) => {
            button.removeAttribute('id');
          });
          acceptButton[i].id = 'selected_button';
          let requestApplicationId = acceptButton[i].value;
          let requestApplication =
            document.getElementById(requestApplicationId);
          requestApplication.style.display = 'unset';
        });
      }

      for (let i = 0; i < rejectButton.length; i++) {
        rejectButton[i].addEventListener('click', () => {
          let account_id = rejectButton[i].id;
          let match_id_room = document.querySelector('#selected_room');
          let match_id = match_id_room.querySelector('input').id.slice(1);
          var re = new RegExp(account_id);

          dbf
            .collection('match')
            .doc(match_id)
            .get()
            .then(function (doc) {
              let doc_pending = doc.data().pending;
              let data_want_delete = '';

              doc_pending.forEach((data) => {
                let match = data.match(re);
                if (match) {
                  data_want_delete = match.input;
                }
              });

              dbf
                .collection('match')
                .doc(match_id)
                .update({
                  pending:
                    firebase.firestore.FieldValue.arrayRemove(data_want_delete),
                });
            });

          let pending_members = document.querySelector('.pending-members');
          let button_parent = rejectButton[i].parentNode.parentNode;
          pending_members.removeChild(button_parent);
        });
      }

      application_accept.forEach((button) => {
        button.addEventListener('click', (e) => {
          e.preventDefault;
          deletePending();
        });
      });

      // ROOM
      roomlist.forEach((room) => {
        room.addEventListener('click', (e) => {
          e.preventDefault();

          //DELETE ELEMENTS IN PENDING SECTION
          var child = pending_members.lastElementChild;
          while (child) {
            pending_members.removeChild(child);
            child = pending_members.lastElementChild;
          }

          //DELETE ELEMENTS IN MEMBER SECTION
          var child = event_members.lastElementChild;
          while (child) {
            event_members.removeChild(child);
            child = event_members.lastElementChild;
          }

          let selected_room = document.querySelectorAll('#selected_room');
          selected_room.forEach((room) => {
            room.removeAttribute('id');
          });

          room.id = 'selected_room';
          let input = room.querySelector('input');
          let input_id = input.id;
          let label = room.querySelector('label');
          let label_for = label.getAttribute('for');

          if (label_for == 'deleted') {
            document.querySelector('#chat_input').disabled = true;
          } else {
            document.querySelector('#chat_input').disabled = false;
          }

          input.checked = true;

          if (room_id !== input_id) {
            room_id = input_id;
            let room_id_firebase = input_id.slice(1);

            renderMemberAndPending(room_id_firebase);
            app.refresh_chat(room_id);

            // GANTI TITLE CHATNYA
            let chat_title_html = document.getElementById('chat_title');
            let title_chat = document
              .getElementById('chat_title')
              .querySelector('h4');
            let label_room = room.querySelector('label');
            let span_room = label_room.querySelector('span');
            title_chat.innerHTML = span_room.innerHTML;

            // GANTI WARNA TITLE CHATNYA
            let class_room = room.className.split(' ')[0];
            if (class_room == 'basketball-room') {
              chat_title_html.style.background = '#fd8725';
              chat_title_html.style['box-shadow'] =
                '0px 0px 15px rgba(254, 188, 47, 0.4)';
            } else if (class_room == 'soccer-room') {
              chat_title_html.style.background = '#51c759';
              chat_title_html.style['box-shadow'] =
                '0px 0px 15px rgba(167, 255, 201, 0.3)';
            } else if (class_room == 'badminton-room') {
              chat_title_html.style.background = '#7600db';
              chat_title_html.style['box-shadow'] =
                '0px 0px 15px rgba(255, 125, 255, 0.3)';
            } else if (class_room == 'volleyball-room') {
              chat_title_html.style.background = '#ff4778';
              chat_title_html.style['box-shadow'] =
                '0px 0px 15px rgba(255, 160, 184, 0.3)';
            } else {
              chat_title_html.style.background = '#ff3b3b';
              chat_title_html.style['box-shadow'] =
                '0px 0px 15px rgba(252, 59, 59, 0.5)';
            }
          }
        });
      });
    });
  }

  loadContent();
  loadChat();

  document.querySelector('#chat_input').disabled = true;

  chat_others_toggle.addEventListener('click', () => {
    roomslistTab.classList.toggle('active');
    darkBackground2.classList.toggle('active');
  });

  chat_members_toggle.addEventListener('click', () => {
    membersTab.classList.toggle('active');
    darkBackground2.classList.toggle('active');
  });

  darkBackground2.addEventListener('click', () => {
    roomslistTab.classList.remove('active');
    membersTab.classList.remove('active');
    darkBackground2.classList.remove('active');
  });

  dbf
    .collection('account')
    .doc('Wf1bl64tzXIKmO97D2ry')
    .get()
    .then(function (doc) {
      let matches_join_created = doc.data().matches_created_join;

      dbf
        .collection('match')
        .where(
          firebase.firestore.FieldPath.documentId(),
          'in',
          matches_join_created
        )
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((dok) => {
            let owner = true;
            if (!dok.data().owner) {
              owner = false;
            }
            renderRoom(dok.data(), dok.id, owner);
          });
        });
    });

  function renderRoom(data, id, owner_state) {
    let form_room = document.querySelector('.roomslist');
    // CREATE DIV
    let roomslist_room = document.createElement('div');

    if (owner_state) {
      if (data.sport == 'basketball') {
        roomslist_room.className = 'basketball-room roomslist-room';
      } else if (data.sport == 'soccer') {
        roomslist_room.className = 'soccer-room roomslist-room';
      } else if (data.sport == 'badminton') {
        roomslist_room.className = 'badminton-room roomslist-room';
      } else if (data.sport == 'volleyball') {
        roomslist_room.className = 'volleyball-room roomslist-room';
      }
    } else {
      roomslist_room.className = 'deleted-room roomslist-room';
    }

    // CREATE INPUT
    let input = document.createElement('input');
    input.setAttribute('type', 'radio');
    input.setAttribute('name', 'room');
    input.className = 'room-radio';
    let id_input = '/' + id;
    input.id = id_input;

    // CREATE LABEL
    let label = document.createElement('label');
    label.setAttribute('for', id_input);

    if (data.status) {
      if (data.status == 'deleted') {
        label.setAttribute('for', 'deleted');
      }
    }

    // CREATE SPAN
    let span = document.createElement('span');
    span.innerHTML = data.event_name;

    // APPEND TO FORM
    label.appendChild(span);
    roomslist_room.appendChild(input);
    roomslist_room.appendChild(label);
    form_room.appendChild(roomslist_room);
  }

  function arr_diff(a1, a2) {
    var a = [],
      diff = [];

    for (var i = 0; i < a1.length; i++) {
      a[a1[i]] = true;
    }

    for (var i = 0; i < a2.length; i++) {
      if (a[a2[i]]) {
        delete a[a2[i]];
      } else {
        a[a2[i]] = true;
      }
    }

    for (var k in a) {
      diff.push(k);
    }

    return diff;
  }

  // PREVENT BOUNCE
  let lastClick2 = 0;
  const delay = 500;
  const delay2 = 1000;

  function renderMember(member) {
    if (lastClick2 + delay < Date.now()) {
      dbf
        .collection('account')
        .where(firebase.firestore.FieldPath.documentId(), 'in', member)
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((document) => {
            renderMember2(document.data(), document.id);
          });
        });
      lastClick2 = Date.now();
    }
  }

  function renderMember2(data, id) {
    let event_members = document.querySelector('.event-members');
    // CREATE P TAG
    let p = document.createElement('p');
    p.id = id;

    if (data.sex == 'male') {
      p.className = 'members-event-list male';
    } else {
      p.className = 'members-event-list female';
    }

    p.innerHTML = data.username;

    // CREATE SPAN
    let span = document.createElement('span');
    span.className = 'members-age';
    span.innerHTML = ', ' + data.age;

    // APPEND TO EVENT_MEMBERS
    p.appendChild(span);
    event_members.appendChild(p);
  }

  // PREVENT BOUNCE
  let lastClick = 0;
  var first_member = [];
  var first_pending = [];
  var last_accept_button_id_deleted = '';

  function renderMemberAndPending(room_id_firebase) {
    let form_room = document.querySelector('.roomslist');
    let event_members = document.querySelector('.event-members');
    let pending_members = document.querySelector('.pending-members');
    let members_amount = document.querySelector('.members-amount');

    if (lastClick + delay2 < Date.now()) {
      dbf
        .collection('match')
        .where(
          firebase.firestore.FieldPath.documentId(),
          '==',
          room_id_firebase
        )
        .onSnapshot((snapshot) => {
          snapshot.docChanges().forEach((change) => {
            if (change.type === 'added') {
              if (change.doc.data().owner) {
                let member = [change.doc.data().owner];
                member = member.concat(change.doc.data().matches_join);
                member.forEach((id) => {
                  let check_member_in_first_member = first_member.includes(id);
                  if (!check_member_in_first_member) {
                    first_member.push(id);
                  }
                  let check_member = document.getElementById(id);
                  if (check_member) {
                    let index_member = member.indexOf(id);
                    member.splice(index_member, 1);
                  }
                });
                renderMember(member);

                // AMOUNT OF MEMBERS
                let total_member = 1 + change.doc.data().matches_join.length;
                members_amount.innerHTML =
                  total_member + ' / ' + change.doc.data().limit;

                if (change.doc.data().owner == 'Wf1bl64tzXIKmO97D2ry') {
                  let doc_pending_data = change.doc.data().pending;
                  let pending_list_member = [];
                  let pending_list_reason = [];

                  doc_pending_data.forEach((data_pending) => {
                    let split_data = data_pending.split('~~');
                    let pending_member_id_to_check = split_data[1];
                    let check_pending_member = document.getElementById(
                      `${pending_member_id_to_check}`
                    );
                    if (!check_pending_member) {
                      pending_list_reason.push(split_data[0]);
                      pending_list_member.push(split_data[1]);
                    }
                    if (doc_pending_data.length > 0) {
                      pending_list_member.forEach((pending) => {
                        let pending_and_reason = [pending];
                        pending_and_reason.push(data_pending);
                        let check_pending_in_first_pending =
                          first_pending.includes(pending_and_reason);
                        if (!pending_and_reason) {
                          first_pending.push(pending_and_reason);
                        }
                      });
                    }
                  });

                  if (pending_list_member.length > 0) {
                    renderPending(pending_list_member, pending_list_reason);
                  }
                } else {
                  var child = pending_members.lastElementChild;
                  while (child) {
                    pending_members.removeChild(child);
                    child = pending_members.lastElementChild;
                  }
                  renderPendingDisabled();
                }
              }
            } else if (change.type === 'modified') {
              if (change.doc.data().owner) {
                // ADD USER TO MEMBER SECTION
                let member = [change.doc.data().owner];
                member = member.concat(change.doc.data().matches_join);
                let new_array = [];
                member.forEach((id) => {
                  let check_member = document.getElementById(id);
                  if (!check_member) {
                    new_array.push(id);
                    let check_member_in_first_member =
                      first_member.includes(id);
                    if (!check_member_in_first_member) {
                      first_member.push(id);
                    }
                  }
                });
                if (new_array.length > 0) {
                  renderMember(new_array);
                }
                checkMemberAndPending(room_id_firebase);

                // AMOUNT OF MEMBERS
                let total_member = 1 + change.doc.data().matches_join.length;
                members_amount.innerHTML =
                  total_member + ' / ' + change.doc.data().limit;

                delete_pending_2(change.doc.data());
              } else if (
                !change.doc.data().owner &&
                change.doc.data().status == 'deleted'
              ) {
                let selected_input = document.getElementById(
                  `/${change.doc.id}`
                );
                let input_parent_div = selected_input.parentNode;
                let label = input_parent_div.querySelector('label');

                // CHANGE ROOM COLOR
                let selected_room = document.getElementById('selected_room');
                let input_to_check = selected_room.querySelector('input');
                input_parent_div.className = 'deleted-room roomslist-room';
                label.setAttribute('for', 'deleted');

                if (input_to_check.id === `/${change.doc.id}`) {
                  let chat_title_html = document.getElementById('chat_title');
                  document.querySelector('#chat_input').disabled = true;

                  chat_title_html.style.background = '#ff4778';
                  chat_title_html.style['box-shadow'] =
                    '0px 0px 15px rgba(255, 160, 184, 0.3)';

                  // DELETE MEMBER, PENDING, AND MESSAGE
                  var event_child = event_members.lastElementChild;
                  var pending_child = pending_members.lastElementChild;

                  while (event_child) {
                    event_members.removeChild(event_child);
                    event_child = event_members.lastElementChild;
                  }
                  while (pending_child) {
                    pending_members.removeChild(pending_child);
                    pending_child = pending_members.lastElementChild;
                  }
                }
              }
            } else if (change.type === 'removed') {
              let selected_input = document.getElementById(`/${change.doc.id}`);
              let input_parent_div = selected_input.parentNode;
              let selected_room = document.getElementById('selected_room');
              let input_to_check = selected_room.querySelector('input');
              let rooms_list = document.querySelector('.roomslist');

              rooms_list.removeChild(div_to_delete);

              if (input_to_check.id === `/${change.doc.id}`) {
                let chat_title_html = document.getElementById('chat_title');
                let chat_title_h4 = chat_title_html.querySelector('h4');
                chat_title_h4.innerHTML = 'The previous room was deleted.';
                chat_title_html.style.background = '#ff4778';
                chat_title_html.style['box-shadow'] =
                  '0px 0px 15px rgba(255, 160, 184, 0.3)';

                document.querySelector('#chat_input').disabled = true;

                // DELETE MEMBER, PENDING, AND MESSAGE.
                var event_child = event_members.lastElementChild;
                var pending_child = pending_members.lastElementChild;

                var chat_content_container = document.getElementById(
                  'chat_content_container'
                );
                var chat_child = chat_content_container.lastElementChild;

                while (event_child) {
                  event_members.removeChild(event_child);
                  event_child = event_members.lastElementChild;
                }
                while (pending_child) {
                  pending_members.removeChild(pending_child);
                  pending_child = pending_members.lastElementChild;
                }

                while (chat_child) {
                  chat_content_container.removeChild(chat_child);
                  chat_child = chat_content_container.lastElementChild;
                }
              }
            }
          });
        });
      lastClick = Date.now();
    }
  }

  var lastClick5 = 0;

  function delete_pending_2(data) {
    if (lastClick5 + delay2 < Date.now()) {
      if (data.owner == 'Wf1bl64tzXIKmO97D2ry') {
        let doc_pending_data = data.pending;
        let pending_list_member = [];
        let pending_list_reason = [];

        doc_pending_data.forEach((data_pending) => {
          let split_data = data_pending.split('~~');
          let pending_member_id_to_check = split_data[1];
          let count = 0;
          let check_pending_member = document.getElementById(
            `${pending_member_id_to_check}`
          );
          if (
            !check_pending_member &&
            pending_member_id_to_check != last_accept_button_id_deleted
          ) {
            pending_list_reason.push(split_data[0]);
            pending_list_member.push(split_data[1]);
          }
          if (doc_pending_data.length > 0) {
            pending_list_member.forEach((pending) => {
              let pending_and_reason = [pending];
              pending_and_reason.push(data_pending);
              let check_pending_in_first_pending =
                first_pending.includes(pending_and_reason);
              if (!pending_and_reason) {
                first_pending.push(pending_and_reason);
              }
            });
          }
          count += 1;
        });
        last_accept_button_id_deleted = '';

        if (pending_list_member.length > 0) {
          renderPending(pending_list_member, pending_list_reason);
        }
      } else {
        let pending_members = document.querySelector('.pending-members');
        var child = pending_members.lastElementChild;
        while (child) {
          pending_members.removeChild(child);
          child = pending_members.lastElementChild;
        }
        renderPendingDisabled();
      }
      lastClick5 = Date.now();
    }
  }

  // PREVENT BOUNCE
  let lastClick4 = 0;

  function checkMemberAndPending(room_id) {
    if (lastClick4 + delay < Date.now()) {
      dbf
        .collection('match')
        .where(firebase.firestore.FieldPath.documentId(), '==', room_id)
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((dok) => {
            let current_member_database = dok.data().matches_join;
            let current_pending_database = dok.data().pending;
            current_member_database.push(dok.data().owner);

            // FOR MEMBER (CHECK IF THERE IS MORE PEOPLE AT DATABASE)
            if (current_member_database.length < first_member.length) {
              let name_to_delete = arr_diff(
                current_member_database,
                first_member
              );
              let element_to_delete = document.getElementById(name_to_delete);
              // FIND ELEMENT THEN DELETE IT
              if (element_to_delete) {
                document.getElementById(name_to_delete).remove();
                name_to_delete.forEach((name) => {
                  let index_of_name_to_delete = first_member.indexOf(name);
                  first_member.splice(index_of_name_to_delete, 1);
                });
              }
            }

            /*******************************************************************************************/
            // DELETE PENDING

            if (current_pending_database.length < first_pending.length) {
              let temp_reason_array = [];
              first_pending.forEach((outer_array) => {
                let checkReason = temp_reason_array.includes(outer_array[1]);
                if (!checkReason) {
                  temp_reason_array.push(outer_array[1]);
                }
              });
              let pending_to_delete = arr_diff(
                current_pending_database,
                temp_reason_array
              );

              pending_to_delete.forEach((member) => {
                let split_data = member.split('~~');
                let pending_member_id_to_delete = split_data[1];
                let pending_element_to_delete = document.getElementById(
                  pending_member_id_to_delete
                );

                // // FIND ELEMENT THEN DELETE IT
                if (pending_element_to_delete) {
                  let pending_parent_to_delete = document.getElementById(
                    pending_member_id_to_delete
                  ).parentNode.parentNode;
                  pending_parent_to_delete.remove();

                  let array_to_delete = [pending_member_id_to_delete, member];
                  let index_of_pending_to_delete =
                    first_pending.indexOf(array_to_delete);
                  first_pending.splice(index_of_pending_to_delete, 1);
                }
              });
            }
          });
        });
      lastClick4 = Date.now();
    }
  }

  function renderPending(pending, reason) {
    var x = pending.length - 1;
    dbf
      .collection('account')
      .where(firebase.firestore.FieldPath.documentId(), 'in', pending)
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((document) => {
          renderPending2(document.data(), reason[x], pending[x]);
          x -= 1;
        });
      });
  }

  function renderPending2(data, reason, id) {
    let pending_members = document.querySelector('.pending-members');
    // CREATE DIV WRAPPER
    let div = document.createElement('div');
    div.className = 'members-pending-group';

    // CREATE P TAG
    let p = document.createElement('p');

    if (data.sex == 'male') {
      p.className = 'members-pending-list male';
    } else {
      p.className = 'members-pending-list female';
    }

    p.innerHTML = data.username;

    // CREATE SPAN
    let span = document.createElement('span');
    span.className = 'members-age';
    span.innerHTML = ', ' + data.age;

    // CREATE DIV BUTTON
    let div_button = document.createElement('div');
    div_button.className = 'buttons';

    // CREATE ACCEPT BUTTON
    let accept_button = document.createElement('div');
    accept_button.className = 'accept-button';
    accept_button.setAttribute('data-id', id);
    accept_button.value = data.username;
    let img_accept = document.createElement('img');
    img_accept.src = './images/accept-button.svg';

    // CREATE REJECT BUTTON
    let reject_button = document.createElement('div');
    reject_button.className = 'reject-button';
    reject_button.id = id;
    let img_reject = document.createElement('img');
    img_reject.src = './images/reject-button.svg';

    /*-------------------------------------------------*/

    // CREATE DIV REQUEST APPLICATION
    let div_request_application = document.createElement('div');
    div_request_application.className = 'request-application';
    div_request_application.id = data.username;

    let div_application_box = document.createElement('div');
    div_application_box.className = 'application-box';

    let div_application_close = document.createElement('div');
    div_application_close.className = 'application-close';
    div_application_close.innerHTML = '+';

    let h4_application_title = document.createElement('h4');
    h4_application_title.className = 'application-title';
    h4_application_title.innerHTML = 'Request Application';

    let span_application_title = document.createElement('span');
    span_application_title.innerHTML = ' ' + data.username + "'s ";

    let div_application_text = document.createElement('div');
    div_application_text.className = 'application-text';
    div_application_text.innerHTML = reason;

    let div_application_acccept = document.createElement('div');
    div_application_acccept.className = 'application-accept';
    div_application_acccept.innerHTML = 'ACCEPT';
    div_application_acccept.id = id;

    h4_application_title.appendChild(span_application_title);
    div_application_box.appendChild(div_application_close);
    div_application_box.appendChild(h4_application_title);
    div_application_box.appendChild(div_application_text);
    div_application_box.appendChild(div_application_acccept);
    div_request_application.appendChild(div_application_box);

    /*-------------------------------------------------*/

    // APPEND TO PENDING_MEMBERS
    reject_button.appendChild(img_reject);
    accept_button.appendChild(img_accept);
    div_button.appendChild(accept_button);
    div_button.appendChild(reject_button);
    p.appendChild(span);
    div.appendChild(p);
    div.appendChild(div_button);
    div.appendChild(div_request_application);
    pending_members.appendChild(div);

    document.addEventListener('click', () => {
      let applicationClose = document.querySelectorAll('.application-close');

      for (let i = 0; i < applicationClose.length; i++) {
        applicationClose[i].addEventListener('click', () => {
          let applicationCloseParent = applicationClose[i].parentNode;
          let requestApplication = applicationCloseParent.parentNode;
          requestApplication.style.display = 'none';
        });
      }
    });
  }

  function renderPendingDisabled() {
    let pending_members = document.querySelector('.pending-members');
    // CREATE DIV WRAP
    let div = document.createElement('div');
    div.className = 'members-pending-disabled';

    // CREATE DIV ICON
    let div_icon = document.createElement('div');
    div_icon.className = 'members-pending-disabled-icon';

    let img = document.createElement('img');
    img.src = './images/notallowed.svg';

    // CREATE P TAG
    let p = document.createElement('p');
    p.className = 'members-pending-disabled-text';
    p.innerHTML = 'Only the owner can access this tab...';

    // APPEND TO PENDING MEMBERS
    div_icon.appendChild(img);
    div.appendChild(div_icon);
    div.appendChild(p);
    pending_members.appendChild(div);
  }

  // PREVENT BOUNCE
  let lastClick3 = 0;

  function deletePending() {
    if (lastClick3 + delay < Date.now()) {
      let account_id = document
        .querySelector('#selected_button')
        .getAttribute('data-id');
      let match_id_room = document.querySelector('#selected_room');
      let match_id = match_id_room.querySelector('input').id.slice(1);
      var re = new RegExp(account_id);
      last_accept_button_id_deleted = account_id;

      dbf
        .collection('match')
        .doc(match_id)
        .get()
        .then(function (doc) {
          let doc_pending = doc.data().pending;
          let data_want_delete = '';

          doc_pending.forEach((data) => {
            let match = data.match(re);
            if (match) {
              data_want_delete = match.input;
            }
          });

          dbf
            .collection('match')
            .doc(match_id)
            .update({
              pending:
                firebase.firestore.FieldValue.arrayRemove(data_want_delete),
            });
        });

      dbf
        .collection('match')
        .doc(match_id)
        .update({
          matches_join: firebase.firestore.FieldValue.arrayUnion(account_id),
        });

      let pending_members = document.querySelector('.pending-members');
      let button_parent =
        document.querySelector('#selected_button').parentNode.parentNode;
      pending_members.removeChild(button_parent);
    }
    lastClick3 = Date.now();
  }

  /*
      // PENDING AND MEMBER SWITCH  
      */
  const disabledWindow = document.querySelector('.disabled');
  const eventMembersSwitch = document.querySelector('.members-event-switch');
  const pendingMembersSwitch = document.querySelector(
    '.members-pending-switch'
  );
  const eventMembersWindow = document.querySelector('.event-members');
  const pendingMembersWindow = document.querySelector('.pending-members');

  pendingMembersSwitch.addEventListener('click', () => {
    if (pendingMembersSwitch.classList.contains('disabled')) {
      pendingMembersSwitch.classList.remove('disabled');
      eventMembersSwitch.classList.add('disabled');
      eventMembersWindow.style.display = 'none';
      pendingMembersWindow.style.display = 'unset';
    }
  });

  eventMembersSwitch.addEventListener('click', () => {
    if (eventMembersSwitch.classList.contains('disabled')) {
      eventMembersSwitch.classList.remove('disabled');
      pendingMembersSwitch.classList.add('disabled');
      pendingMembersWindow.style.display = 'none';
      eventMembersWindow.style.display = 'unset';
    }
  });

  let roomslistTab = document.querySelector('.roomslist-tab');
  let membersTab = document.querySelector('.members-tab');
}, 2000);
