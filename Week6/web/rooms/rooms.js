    var rooms = new Vue({
        el:'#ROOM',
        data:{
            item:{},
            room:[],
        },
        methods:{
            thousand: function(num){
                test = num.toString().split('');
                test.reverse();
                test.splice(3,0,',');
                test.reverse();
                test = test.join("");
                return test

            }
        }
});






var requestURL = '../../json/all.json'
var response;
var request = new XMLHttpRequest();
request.addEventListener("loadend", transferComplete);
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    rooms.item = request.response;
};


function transferComplete(evt) {
    NAME = [];
    DATA = [];

    for (var i = 0; i < 6; i++) {
        NAME.push(rooms.item.items[i].name);
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
        rooms.room.push( RSP[i].room[0] );
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


