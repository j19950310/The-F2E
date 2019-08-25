var page = new Vue({
    el: '#all',
    data:{
        web:{
        url:'web/home/0.HOME.html',
        logo:"web/home/0.HOME.html",
        nav_ABOUT:"web/about/1.1ABOUT.html" ,
        nav_ROOMS:"web/rooms/1.2ROOMS.html" ,
        nav_CONTACT:"web/contact/1.3CONTACT.html" ,
        booking:"web/booking/3.1Booking.html"
        },
        room:[],
        delay: false,
        CheckInDate:"",
        CheckOutDate:"",
        BanDate:["2019-08-25","2019-08-29","2019-08-30"],
        adult:0,
        kid:0,
        indexpic:0,
        // 最後選擇
        bookindex:0,
    },
    methods:{
        toRoom: function(num){

            setTimeout(function(){
            $('#frame')[0].contentWindow.$('#booking').toggleClass('collap');
            $('#frame')[0].contentWindow.rooms.bookingWhich = num;
            },500)

        }
    }
})


$('#menu').click(function(event) {
    /* Act on the event */
    $('#navigation').addClass('show');
     setTimeout(function(){page.delay = true},100);
});

$('body').click(function(event) {
    /* Act on the event */
    if (page.delay) {
        $('#navigation').removeClass('show');
        page.delay = false;
    }
});

$('#nav_ABOUT').click(function(event) {
    /* Act on the event */
    window.scrollTo(0,2000);
});

// myHeaders = {
// 'Accept':'application/json',
// 'Authorization':'Bearer qX5ptgkF1hDKy8I4UKdo42SDwsqZCNAKoi1cOUMFy8Njc8Fg4H7mH4l21oQ7',
// 'Content-Type': 'application/json'
// };
// file = fetch('https://challenge.thef2e.com/api/thef2e2019/stage6/rooms',{headers:myHeaders}).then(response => response.json())
// file.then(function (result) { file = result.items })


var requestURL = '../json/all.json'
var response;
var request = new XMLHttpRequest();
request.addEventListener("loadend", transferComplete);
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    page.item = request.response;
};


function transferComplete(evt) {
    NAME = [];
    DATA = [];

    for (var i = 0; i < 6; i++) {
        NAME.push(page.item.items[i].name);
        };

  RQURL = [];

    for (var i = 0; i < 6; i++) {
        RQURL.push('../../json/'+NAME[i]+'.json');
        }
    RSP = [];

    RQ = [];

    for (var i = 0; i < 6; i++) {
        RQ.push(request = new XMLHttpRequest());
        RQ[i].open('GET', RQURL[i]);
        RQ[i].responseType = 'json';
        RQ[i].send();
        };
        RQ[5].addEventListener("loadend", RSPUSH);
}


function RSPUSH(i) {
    for (var i = 0; i < 6; i++) {
        RSP.push(RQ[i].response);
    }
    for (var i = 0; i < 6; i++) {
        page.room.push( RSP[i].room[0] );
    }
}


setTimeout(function(){

    $(".more,.search").hover(function() {
        /* Stuff to do when the mouse enters the element */
        $(this).css('transform',' scale(1.05)');
    }, function() {
        /* Stuff to do when the mouse leaves the element */
        $(this).css('transform',' scale(1)');
    });
},1000);



