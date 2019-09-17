$(document).ready(function() {
  time = 25*60;
  StartOff = true
// 點擊開始
$('.TCAPlay').click(function(event) {



  if ( StartOff ) {
    Start();
    $(this).attr('src', "UIdata/Time button - stop.svg");
  }

  else if( !StartOff ) {
    TimeStop();
    $(this).attr('src', "UIdata/Time button - play.svg");

  }

});





// 開始計時，可重複
  Start = function() {if ( StartOff ) {
    app.filter = 0;
    timeCount = window.setInterval(
          function(){
            // 每秒執行一次的函數
              time -= 1;


             var min = Math.floor(time/60);
             var sec = time%60


              if (sec < 10){ sec = "0" + sec}
              if (min < 10){ min = "0" + min}

            $('#TCACount').text(min+":"+sec);

              if(time==0){
                app.filter = 1;
                TimeStop();
                app.rest();
              }

            }, 1000);

    StartOff = false; //關閉以避免重複
    }}


// 時間計時暫停
  TimeStop = function(){if ( !StartOff ) {

    window.clearInterval(timeCount);
    StartOff = true;

  }




  }


// ToDoArea
ToDate = new Date();

Tyear =ToDate.getFullYear();
Tdate = ToDate.getDate();
Tmonth = ToDate.getMonth() + 1;

if (Tdate < 10) {Tdate = "0" + Tdate}
if (Tmonth < 10) {Tmonth = "0" + Tmonth}


// 2019 / 07 / 10

$(".Date").html(Tyear + " / " + Tmonth + " / " + Tdate);













  });



