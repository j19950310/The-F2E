$(document).ready(function() {
  min = 25;
  sec = 0;
  Min = 25;
  Sec = 0;
  StartOff = true;


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

    timeCount = window.setInterval(
          function(){
            // 每秒執行一次的函數
              sec -= 1;
              // 減少一分鐘
              if (sec==-1){ sec = 59; min -= 1}
              // 轉型成可讀文字
              Sec = sec
              Min = min
              if (sec < 10){ Sec = "0" + sec}
              if (Min < 10){ Min = "0" + min}

            $('#TCACount').text(Min+":"+Sec);

            }, 1000);

    StartOff = false; //關閉以避免重複
    }}


// 時間計時暫停
  TimeStop = function(){if ( !StartOff ) {

    window.clearInterval(timeCount);
    StartOff = true;

  }




  }



























  });



