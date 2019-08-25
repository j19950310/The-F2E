    var rooms = new Vue({
        el:'#ROOM',
        data:{
            item:{},
            room:[],
            bookingWhich:0,
            indexpic:0,
            kid:0,
            adult:0,
            bookindex:0,
            CheckInDate:'',
            CheckOutDate:'',
            searchShow:[true,true,true,true,true,true],
        },
        methods:{
            thousand: function(num){
                test = num.toString().split('');
                test.reverse();
                test.splice(3,0,',');
                test.reverse();
                test = test.join("");
                return test

            },
            footMeter: function(foot){
                var meter = Math.round(foot*0.3048)
                return meter
            },
            searching: function(){
                        console.log('test')



            }
        }
});

// 從父元素取

    rooms.room = window.parent.page.room;
    var page = window.parent.page;
    rooms.kid = page.kid;
    rooms.adult = page.adult;
    rooms.CheckInDate = page.CheckInDate;
    rooms.CheckOutDate = page.CheckOutDate;
$(function() {



    $('.more,#close').click(function(event) {
        /* Act on the event */
        $('#booking').toggleClass('collap');
    });

    BanDate = page.BanDate;

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
         rooms[id] = new Date($('#'+id)[0].value);
         if ($('#CheckInDate')[0].value>$('#CheckOutDate')[0].value) {
            $('#CheckInDate,#CheckOutDate').addClass('alert');
         }else{$('#CheckInDate,#CheckOutDate').removeClass('alert')}

        },500);

    })




});
