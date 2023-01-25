//AJAX
let userList = [];
$.ajax({
    url: "data.json",
    data: "{}",
    dataType: "json",
    success: function (data) {
        console.log(Object.keys(data.users).length);
            $.each(data.users, function(){

                userList.push(this);
            
            });
            console.log(userList);
    },
    error: function (result) {
        console.log("hata");
    }
});

//NEW MESSAGE
let messages = [
    'Hi how are you people ?',
    'Todays meal was delicious i cant wait for another one',
    'Pyramids and Egypt are synonymous as this is the country that pops into our mind but let us tell you other interesting things about the world. It is that Sudan has the most pyramids in the world, even more than Egypt. While 138 pyramids have been located in Egypt, Sudan has over 255. Isn’t it amazing? ',
    'Will you marry me ?',
    'I hate all of you but i have no idea where is the leave button in this app!!!',
    'Sometimes i feel like my cat is going to murder me. Its scary.',
    'I cant feel may legs, i think i should go for a walk to stretch them',
    'My doctor said that he would sew my mouth if i drink soda again, what a lovely man',
    'This is so boring',
    'LoL you should go to sleep',
    'Im happy to hear that'
];

newMessage = "";

let userElement = "";
$(document).ready(function (){

    //SINGLE DELETE BUTTON
    deleteFunction();
    function deleteFunction(){
    $('.message-row').mouseover(function(){
        let rowContainer = this;
        $(this).children('.box-cover').children('.message-delete-container').click(function(){
            $(rowContainer).animate({marginLeft: '500px'}, function(){
                $(this).remove();
            });
        });

        $(this).children('.box-cover').children('.message-delete-container').css({
            'height': '30px',
            'width': '30px'
        });
    }).mouseout(function(){
        $(this).children('.box-cover').children('.message-delete-container').css({
            'height': '0px',
            'width': '0px'
        });
    });}

    //SCROLL ANIMATON
    function scrollAnim (sHeight){
        $('.message-scroll').animate({ scrollTop : sHeight}, 200);
    }

    //NEW MESSAGE BUTTON
    $(document).on('click', '.text-button', function(){
        console.log('buton logu');
        randomMsgNumber();
        randomUserNumber();
        newMessage = `
        <div class="message-row">
        <div class="avatar-cover">
            <div class="user-avatar" style="background-color:${userList[randomUser].color}">
                <img src="${userList[randomUser].image}" class="avatar">
            </div>
        </div>
        <div class="box-cover">
            <div class="message-delete-container">
                <button class="delete-button-single">X</button>
            </div>
            <div class="text-box">
                ${messages[randomMsg]}
            </div>
        </div>
    </div>
        `;

        $(".message-scroll").append(newMessage);
        newMessage = "";
        deleteFunction();
        scrollAnim($('.message-scroll').prop("scrollHeight"));
        
    });

    let randomMsgLast = 999;
    let randomMsg = 1;
    function randomMsgNumber (){
        randomMsg = Math.floor((Math.random() * messages.length));
        if(randomMsg == randomMsgLast) {
            randomMsgNumber();
        } else {
            randomMsgLast = randomMsg;
        }
    }
    let randomUserLast = 999;
    let randomUser = 1;
    function randomUserNumber (){
        randomUser = Math.floor((Math.random() * userList.length));
        if(randomUser == randomUserLast) {
            randomUserNumber();
        } else {
            randomUserLast = randomUser;
        }
    }
});