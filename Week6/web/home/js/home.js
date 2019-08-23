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
    /* Act on the event */
    document.location.href = '../single room/2.1Single Room.html'
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
    document.location.href = '../duluxe single room/2.2Deluxe Single Room.html'
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
    document.location.href = '../double room/2.3Double Room.html'
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
    document.location.href = '../deluxe double room/2.4Deluxe Double Room.html'
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
    document.location.href = '../twin room/2.5Twin Room.html'
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
    document.location.href = '../deluxe twin room/2.6Deluxe Twin Room.html'
});

$(function() {

    var array = ["2019-08-25","2019-08-29","2019-08-30"];



    $('#CheckInDate,#CheckOutDate')
    .datepicker({
        minDate: 0,
        maxDate: "+90D" ,
        beforeShowDay: function(date){
        //轉換日期格式
        var string = jQuery.datepicker.formatDate('yy-mm-dd', date);
        return [ array.indexOf(string) == -1 ]
       }
    });

    $('#CheckInDate,#CheckOutDate')
    .blur(function(event) {
        /* Act on the event */
         var id = this.id;

        setTimeout(function(){
         test = new Date($('#'+id)[0].value);
        },1000);

    })
    ;
});
