var page = window.parent.page;
var home = new Vue({
    el:"#Carousel",
    data:{
        adult:0,
        kid:0
    }
})

rolldelay = true
$('#roll').click(function(event) {
    /* Act on the event */
    if (rolldelay) {
    $('.display5').addClass('display').removeClass('display5');
    $('.display4').addClass('display5').removeClass('display4');
    $('.display3').addClass('display4').removeClass('display3');
    $('.display2').addClass('display3').removeClass('display2');
    $('.display1').addClass('display2').removeClass('display1');
    $('.display0').addClass('display1').removeClass('display0');
    $('.display').addClass('display0').removeClass('display');
    rolldelay = false;
    setTimeout(function(){rolldelay = true},700);

    }
});


$('#SR').hover(function() {
    /* Stuff to do when the mouse enters the element */
    $(this.children[0]).animate({top: '-100%'},300)
    $(this.children[2]).toggleClass('hover');
}, function() {
    /* Stuff to do when the mouse leaves the element */
    $(this.children[0]).animate({top: '0%'},100);
    $(this.children[2]).toggleClass('hover');
}).click(function(event) {
    page.web.url = page.web.nav_ROOMS
    page.toRoom(0);
});

$('#DSR').hover(function() {
    /* Stuff to do when the mouse enters the element */
    $(this.children[0]).animate({top: '-100%'},300)
    $(this.children[2]).toggleClass('hover');
}, function() {
    /* Stuff to do when the mouse leaves the element */
    $(this.children[0]).animate({top: '0%'},100);
    $(this.children[2]).toggleClass('hover');
}).click(function(event) {
    /* Act on the event */
    page.web.url = page.web.nav_ROOMS
    page.toRoom(1);
});

$('#DR').hover(function() {
    /* Stuff to do when the mouse enters the element */
    $(this.children[0]).animate({top: '-100%'},300)
    $(this.children[2]).toggleClass('hover');
}, function() {
    /* Stuff to do when the mouse leaves the element */
    $(this.children[0]).animate({top: '0%'},100);
    $(this.children[2]).toggleClass('hover');
}).click(function(event) {
    /* Act on the event */
    page.web.url = page.web.nav_ROOMS
    page.toRoom(2);
});

$('#DDR').hover(function() {
    /* Stuff to do when the mouse enters the element */
    $(this.children[0]).animate({top: '-100%'},300)
    $(this.children[2]).toggleClass('hover');
}, function() {
    /* Stuff to do when the mouse leaves the element */
    $(this.children[0]).animate({top: '0%'},100);
    $(this.children[2]).toggleClass('hover');
}).click(function(event) {
    /* Act on the event */
    page.web.url = page.web.nav_ROOMS
    page.toRoom(3);
});

$('#TR').hover(function() {
    /* Stuff to do when the mouse enters the element */
    $(this.children[0]).animate({top: '-100%'},300)
    $(this.children[2]).toggleClass('hover');
}, function() {
    /* Stuff to do when the mouse leaves the element */
    $(this.children[0]).animate({top: '0%'},100);
    $(this.children[2]).toggleClass('hover');
}).click(function(event) {
    /* Act on the event */
    page.web.url = page.web.nav_ROOMS
    page.toRoom(4);
});

$('#DTR').hover(function() {
    /* Stuff to do when the mouse enters the element */
    $(this.children[0]).animate({top: '-100%'},300)
    $(this.children[2]).toggleClass('hover');
}, function() {
    /* Stuff to do when the mouse leaves the element */
    $(this.children[0]).animate({top: '0%'},100);
    $(this.children[2]).toggleClass('hover');
}).click(function(event) {
    /* Act on the event */
    page.web.url = page.web.nav_ROOMS
    page.toRoom(5);
});

$(function() {

    BanDate = page.BanDate;
    home.adult = page.adult
    home.kid = page.kid;



    $('#CheckInDate,#CheckOutDate')
    .datepicker({
        minDate: 0,
        maxDate: "+90D" ,
        beforeShowDay: function(date){
        //轉換日期格式
        var string = jQuery.datepicker.formatDate('yy-mm-dd', date);
        return [ BanDate.indexOf(string) == -1 ]
       }
    });

    $('#CheckInDate,#CheckOutDate')
    .blur(function(event) {
        /* Act on the event */
         var id = this.id;

        setTimeout(function(){
         window.parent.page[id] = new Date($('#'+id)[0].value);
         if ($('#CheckInDate')[0].value>$('#CheckOutDate')[0].value) {
            $('#CheckInDate,#CheckOutDate').addClass('alert');
         }else{$('#CheckInDate,#CheckOutDate').removeClass('alert')}

        },100);

    })

    $('#search').click(function(event) {
        /* Act on the event */
        BanDate = page.BanDate;
        page.adult = home.adult
        page.kid = home.kid;
        page.web.url = page.web.nav_ROOMS;
    });

});
