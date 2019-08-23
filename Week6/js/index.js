var page = new Vue({
    el: '#all',
    data:{
        web:{
        url:'web/home/0.HOME.html',
        logo:"web/home/0.HOME.html",
        nav_ABOUT:"web/about/1.1ABOUT.html" ,
        nav_ROOMS:"web/rooms/1.2ROOMS.html" ,
        nav_CONTACT:"web/contact/1.3CONTACT.html" ,
        search:"web/search/1.4搜尋結果.html" ,
        test1:"web/single room/2.1Single Room.html" ,
        test2:"web/deluxe single room/2.2Deluxe Single Room.html" ,
        test3:"web/double room/2.3Double Room.html" ,
        test4:"web/deluxe double room/2.4Deluxe Double Room.html" ,
        test5:"web/twin room/2.5Twin Room.html" ,
        test6:"web/deluxe twin room/2.6Deluxe Twin Room.html" ,
        test7:"web/booking/3.1Booking.html"
        },
        delay: false,
        checkin:"",
        checkout:"",
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
