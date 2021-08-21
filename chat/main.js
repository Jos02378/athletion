var chat_others_toggle = document.createElement('div')
chat_others_toggle.setAttribute('id', 'chat_others_toggle')
chat_others_toggle.classList.add('chat_toggle')

var chat_members_toggle = document.createElement('div')
chat_members_toggle.setAttribute('id', 'chat_members_toggle')
chat_members_toggle.classList.add('chat_toggle')

let menuToggle = document.querySelector('.navigation-toggle');
let rightTab = document.querySelector('.right-header-tab');
let darkBackground = document.querySelector('.dark-background');
let darkBackground2 = document.querySelector('.dark-background-2');

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

// REQUEST APPLICATION
let acceptButton = document.querySelectorAll('.accept-button');
let rejectButton = document.querySelectorAll('.reject-button');
let pendingMembers = document.querySelectorAll('.members-pending-group');
let requestApplication = document.querySelector('.request-application');
let applicationClose = document.querySelector('.application-close')

for (let i = 0; i < acceptButton.length; i++) {
    acceptButton[i].addEventListener('click', () => {
        requestApplication.style.display = "unset";
    });
}

for (let i = 0; i < rejectButton.length; i++) {
    rejectButton[i].addEventListener('click', () => {
        pendingMembers[i].style.display = "none"
    });
}

applicationClose.addEventListener('click', () => {
    requestApplication.style.display = "none";
});

let roomslistTab = document.querySelector('.roomslist-tab');
let membersTab = document.querySelector('.members-tab')

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

const disabledWindow = document.querySelector('.disabled');
const eventMembersSwitch = document.querySelector('.members-event-switch');
const pendingMembersSwitch = document.querySelector('.members-pending-switch');
const eventMembersWindow = document.querySelector('.event-members');
const pendingMembersWindow = document.querySelector('.pending-members');

pendingMembersSwitch.addEventListener('click', () => {
    if (pendingMembersSwitch.classList.contains("disabled")) {
        pendingMembersSwitch.classList.remove("disabled");
        eventMembersSwitch.classList.add("disabled");
        eventMembersWindow.style.display = "none";
        pendingMembersWindow.style.display = "unset";
    }
});


eventMembersSwitch.addEventListener('click', () => {
    if (eventMembersSwitch.classList.contains("disabled")) {
        eventMembersSwitch.classList.remove("disabled");
        pendingMembersSwitch.classList.add("disabled");
        pendingMembersWindow.style.display = "none";
        eventMembersWindow.style.display = "unset";
    }
});

/* 
// CHATROOM 
*/

let chatroom = document.querySelector(".chatroom");

window.onload = function () {

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
        apiKey: "AIzaSyCVQiH2DSjYOiRrsmgaSRTObEWkGpHm1sA",
        authDomain: "kebantai2020.firebaseapp.com",
        databaseURL: "https://kebantai2020-default-rtdb.firebaseio.com",
        projectId: "kebantai2020",
        storageBucket: "kebantai2020.appspot.com",
        messagingSenderId: "290266641346",
        appId: "1:290266641346:web:85b99043fe87f7795a1c5b",
        measurementId: "G-M3H7QJBJGQ"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    // This is very IMPORTANT!! We're going to use "db" a lot.
    var db = firebase.database()


    // We're going to use oBjEcT OrIeNtEd PrOgRaMmInG. Lol
    class MEME_CHAT {
        // Home() is used to create the home page
        home() {
            // First clear the body before adding in
            // a title and the join form
            document.body.innerHTML = ''
            this.create_join_form()
        }
        // chat() is used to create the chat page
        chat() {
            this.create_chat()
        }
        // create_join_form() creates the join form
        create_join_form() {
            // YOU MUST HAVE (PARENT = THIS). OR NOT. I'M NOT YOUR BOSS!😂
            var parent = this;

            parent.save_name("lol");
            parent.create_chat();

            // var join_container = document.createElement('div')
            // join_container.setAttribute('id', 'join_container')
            // var join_inner_container = document.createElement('div')
            // join_inner_container.setAttribute('id', 'join_inner_container')

            // var join_button_container = document.createElement('div')
            // join_button_container.setAttribute('id', 'join_button_container')

            // var join_button = document.createElement('button')
            // join_button.setAttribute('id', 'join_button')
            // join_button.innerHTML = 'Join <i class="fas fa-sign-in-alt"></i>'

            // var join_input_container = document.createElement('div')
            // join_input_container.setAttribute('id', 'join_input_container')

            // var join_input = document.createElement('input')
            // join_input.setAttribute('id', 'join_input')
            // join_input.setAttribute('maxlength', 15)
            // join_input.placeholder = 'Please Enter Your Name:'
            // // Every time we type into the join_input

            // join_input.onkeyup = function () {
            //     // If the input we have is longer that 0 letters
            //     if (join_input.value.length > 0) {
            //         // Make the button light up
            //         join_button.classList.add('enabled')
            //         // Allow the user to click the button
            //         join_button.onclick = function () {
            //             // Save the name to local storage. Passing in
            //             // the join_input.value
            //             parent.save_name(join_input.value)
            //             // Remove the join_container. So the site doesn't look weird.
            //             join_container.remove()
            //             // parent = this. But it is not the join_button
            //             // It is (MEME_CHAT = this).

            //             /*
            //             // CREATE CHATNYA
            //             */
            //             parent.create_chat()
            //             /*-------------------------*/
            //         }
            //     } else {
            //         // If the join_input is empty then turn off the
            //         // join button
            //         join_button.classList.remove('enabled')
            //     }
            // }

            // // Append everything to the body
            // join_button_container.append(join_button)
            // join_input_container.append(join_input)
            // join_inner_container.append(join_input_container, join_button_container)
            // join_container.append(join_inner_container)
            // document.body.append(join_container)
        }
        // create_load() creates a loading circle that is used in the chat container
        create_load(container_id) {
            // YOU ALSO MUST HAVE (PARENT = THIS). BUT IT'S WHATEVER THO.
            var parent = this;

            // This is a loading function. Something cool to have.
            var container = document.getElementById(container_id)
            container.innerHTML = ''

            /*
            // UNCOMMENT
            */

            // var loader_container = document.createElement('div')
            // loader_container.setAttribute('class', 'loader_container')

            // var loader = document.createElement('div')
            // loader.setAttribute('class', 'loader')

            // loader_container.append(loader)
            // container.append(loader_container)

            //

        }
        // create_chat() creates the chat container and stuff
        create_chat() {
            // Again! You need to have (parent = this)
            var parent = this;
            // GET THAT MEMECHAT HEADER OUTTA HERE

            var chat_container = document.createElement('div')
            chat_container.setAttribute('id', 'chat_container')

            var chat_inner_container = document.createElement('div')
            chat_inner_container.setAttribute('id', 'chat_inner_container')

            // TAMBAHAN

            var chat_title = document.createElement('div');
            var chat_title_h2 = document.createElement('h4');
            chat_title.setAttribute('id', 'chat_title')
            chat_title_h2.innerHTML = 'Latihan Basket';

            var chat_others_text = document.createElement('p')
            var chat_others_logo = document.createElement('span')
            var chat_members_text = document.createElement('p')
            var chat_members_logo = document.createElement('span')

            chat_others_text.innerHTML = 'Other Rooms'
            chat_members_text.innerHTML = 'Members'

            chat_title.append(chat_others_toggle, chat_title_h2, chat_members_toggle)
            chat_others_toggle.append(chat_others_logo, chat_others_text)
            chat_members_toggle.append(chat_members_logo, chat_members_text)

            var chat_content_container = document.createElement('div')
            chat_content_container.setAttribute('id', 'chat_content_container')

            var chat_input_container = document.createElement('div')
            chat_input_container.setAttribute('id', 'chat_input_container')

            var chat_input_send = document.createElement('button')
            chat_input_send.setAttribute('id', 'chat_input_send')
            chat_input_send.setAttribute('disabled', true)
            chat_input_send.innerHTML = `<i class="far fa-paper-plane"></i>`

            var chat_input = document.createElement('input')
            chat_input.setAttribute('id', 'chat_input')
            // Only a max message length of 1000

            /* 
            // KASIH LIMIT KE INPUT BUAT CHAT
            */
            chat_input.setAttribute('maxlength', 120)

            /*-----------------------------------------*/

            // Get the name of the user
            // chat_input.placeholder = `${parent.get_name()}. Say something...`
            chat_input.placeholder = 'Enter your messages';
            chat_input.onkeyup = function () {
                if (chat_input.value.length > 0) {
                    chat_input_send.removeAttribute('disabled')
                    chat_input_send.classList.add('enabled')
                    chat_input_send.onclick = function () {
                        chat_input_send.setAttribute('disabled', true)
                        chat_input_send.classList.remove('enabled')
                        if (chat_input.value.length <= 0) {
                            return
                        }
                        // Enable the loading circle in the 'chat_content_container'
                        parent.create_load('chat_content_container')
                        // Send the message. Pass in the chat_input.value
                        parent.send_message(chat_input.value)
                        // Clear the chat input box
                        chat_input.value = ''
                        // Focus on the input just after
                        chat_input.focus()
                    }
                } else {
                    chat_input_send.classList.remove('enabled')
                }
            }

            // LOGOUT

            // var chat_logout_container = document.createElement('div')
            // chat_logout_container.setAttribute('id', 'chat_logout_container')

            // var chat_logout = document.createElement('button')
            // chat_logout.setAttribute('id', 'chat_logout')
            // chat_logout.textContent = `${parent.get_name()} • logout`
            // // "Logout" is really just deleting the name from the localStorage
            // chat_logout.onclick = function () {
            //     localStorage.clear()
            //     // Go back to home page
            //     parent.home()
            // }
            // chat_logout_container.append(chat_logout)

            chat_input_container.append(chat_input, chat_input_send)
            chat_inner_container.append(chat_title, chat_content_container, chat_input_container)
            chat_container.append(chat_inner_container)
            chatroom.append(chat_container)
            // After creating the chat. We immediatly create a loading circle in the 'chat_content_container'
            parent.create_load('chat_content_container')
            // then we "refresh" and get the chat data from Firebase
            parent.refresh_chat()
        }
        // Save name. It literally saves the name to localStorage
        save_name(name) {
            // Save name to localStorage
            localStorage.setItem('name', name)
        }
        // Sends message/saves the message to firebase database
        send_message(message) {
            var parent = this
            // if the local storage name is null and there is no message
            // then return/don't send the message. The user is somehow hacking
            // to send messages. Or they just deleted the
            // localstorage themselves. But hacking sounds cooler!!
            if (parent.get_name() == null && message == null) {
                return
            }

            /*
            // PUSH DATA KE REALTIME DATABASE
            */
            let room_id_new_2 = room_id + "/"

            if (message != null) {
                // Get the firebase database value
                db.ref('all_chats' + room_id).once('value', function (message_object) {
                    // This index is mortant. It will help organize the chat in order
                    var index = parseFloat(message_object.numChildren()) + 1
                    db.ref('all_chats' + room_id_new_2 + `message_${index}`).set({
                            name: parent.get_name(),
                            message: message,
                            index: index
                        })
                        .then(function () {
                            // After we send the chat refresh to get the new messages
                            parent.refresh_chat(room_id)
                        })
                })
            }
            /*-------------------------------------------------------*/
        }
        // Get name. Gets the username from localStorage
        get_name() {
            // Get the name from localstorage
            if (localStorage.getItem('name') != null) {
                return localStorage.getItem('name')
            } else {
                this.home()
                return null
            }
        }
        // Refresh chat gets the message/chat data from firebase
        refresh_chat(room_id_new) {
            var chat_content_container = document.getElementById('chat_content_container')

            var announcementBox = document.createElement('div')
            var announcementTitle = document.createElement('h4')
            var announcementDesc = document.createElement('div');
            var announcementSubtitle = document.createElement('span')
            var announcementReason = document.createElement('p');

            announcementBox.append(announcementTitle, announcementDesc);
            announcementDesc.append(announcementSubtitle, announcementReason);
            announcementBox.setAttribute('class', 'announcement-box');
            announcementTitle.setAttribute('class', 'announcement-title');
            announcementDesc.setAttribute('class', 'announcement-desc');
            announcementSubtitle.setAttribute('class', 'announcement-subtitle');
            announcementReason.setAttribute('class', 'announcement-reason');

            announcementTitle.innerHTML = "Ernest has cancelled the event";
            announcementSubtitle.innerHTML = "The owner's reason:  ";
            announcementReason.innerHTML = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu."

            chat_content_container.append(announcementBox)

            if (room_id_new == undefined) {
                room_id_new = "/chats_1";
            }
            console.log(room_id_new)

            var chat_content_container = document.getElementById('chat_content_container')

            // Get the chats from firebase
            db.ref('all_chats' + room_id_new).on('value', function (messages_object) {
                // When we get the data clear chat_content_container
                chat_content_container.innerHTML = ''
                // if there are no messages in the chat. Retrun . Don't load anything
                if (messages_object.numChildren() == 0) {
                    return
                }

                // OK! SO IF YOU'RE A ROOKIE CODER. THIS IS GOING TO BE
                // SUPER EASY-ISH! I THINK. MAYBE NOT. WE'LL SEE!

                // convert the message object values to an array.
                var messages = Object.values(messages_object.val());
                var guide = [] // this will be our guide to organizing the messages
                var unordered = [] // unordered messages
                var ordered = [] // we're going to order these messages

                for (var i, i = 0; i < messages.length; i++) {
                    // The guide is simply an array from 0 to the messages.length
                    guide.push(i + 1)
                    // unordered is the [message, index_of_the_message]
                    unordered.push([messages[i], messages[i].index]);
                }

                // Now this is straight up from stack overflow 🤣
                // Sort the unordered messages by the guide
                guide.forEach(function (key) {
                    var found = false
                    unordered = unordered.filter(function (item) {
                        if (!found && item[1] == key) {
                            // Now push the ordered messages to ordered array
                            ordered.push(item[0])
                            found = true
                            return false
                        } else {
                            return true
                        }
                    })
                })

                // Now we're done. Simply display the ordered messages
                ordered.forEach(function (data) {
                    var name = data.name
                    var message = data.message

                    var message_container = document.createElement('div')
                    message_container.setAttribute('class', 'message_container')

                    var message_inner_container = document.createElement('div')
                    message_inner_container.setAttribute('class', 'message_inner_container')

                    var message_user_container = document.createElement('div')
                    message_user_container.setAttribute('class', 'message_user_container')

                    var message_user = document.createElement('p')
                    message_user.setAttribute('class', 'message_user')
                    message_user.textContent = `${name}`

                    var message_content_container = document.createElement('div')
                    message_content_container.setAttribute('class', 'message_content_container')

                    var message_content = document.createElement('p')
                    message_content.setAttribute('class', 'message_content')
                    message_content.textContent = `${message}`

                    message_user_container.append(message_user)
                    message_content_container.append(message_content)
                    message_inner_container.append(message_user_container, message_content_container)
                    message_container.append(message_inner_container)

                    chat_content_container.append(message_container)
                });
                // Go to the recent message at the bottom of the container
                chat_content_container.scrollTop = chat_content_container.scrollHeight;
            })
        }
    }

    // So we've "built" our app. Let's make it work!!
    var app = new MEME_CHAT()
    // If we have a name stored in localStorage.
    // Then use that name. Otherwise , if not.
    // Go to home.
    if (app.get_name() != null) {
        app.chat()
    }

    // GET ROOM ID
    let room_id = "/chats_1";
    let roomlist = document.querySelectorAll(".roomslist-room");

    roomlist.forEach(room => {
        room.addEventListener("click", () => {
            let input_id = room.querySelector("input").id;
            if (room_id !== input_id) {
                room_id = input_id;
                console.log(room_id);
                app.refresh_chat(room_id);
                // app.send_message(null, room_id);

                // GANTI TITLE CHATNYA
                let chat_title_html = document.getElementById("chat_title");
                let title_chat = document.getElementById("chat_title").querySelector("h4");
                let label_room = room.querySelector("label");
                let span_room = label_room.querySelector("span");
                title_chat.innerHTML = span_room.innerHTML;

                // GANTI WARNA TITLE CHATNYA
                console.log(room.className.split(" ")[0]);
                let class_room = room.className.split(" ")[0];
                if (class_room == "basketball-room") {
                    chat_title_html.style.background = "#fd8725";
                    chat_title_html.style["box-shadow"] = "0px 0px 15px rgba(254, 188, 47, 0.4)";
                } else if (class_room == "soccer-room") {
                    chat_title_html.style.background = "#51c759";
                    chat_title_html.style["box-shadow"] = "0px 0px 15px rgba(167, 255, 201, 0.3)";
                } else if (class_room == "badminton-room") {
                    chat_title_html.style.background = "#7600db";
                    chat_title_html.style["box-shadow"] = "0px 0px 15px rgba(255, 125, 255, 0.3)";
                } else {
                    chat_title_html.style.background = "#ff4778";
                    chat_title_html.style["box-shadow"] = "0px 0px 15px rgba(255, 160, 184, 0.3)";
                }
            }
        })
    })

}

// let otherRooms_toggle = document.getElementById('chat_others_toggle');
// let members_toggle = document.querySelector('#chat_members_toggle');