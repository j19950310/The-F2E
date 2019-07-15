$(document).ready(function() {
  min = 25;
  sec = 0;
  Min = 25;
  Sec = 0;
  StartOff = true;



// TimeCountdownArea

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


// ToDoArea
ToDate = new Date();

Tyear =ToDate.getFullYear();
Tdate = ToDate.getDate();
Tmonth = ToDate.getMonth() + 1;

if (Tdate < 10) {Tdate = "0" + Tdate}
if (Tmonth < 10) {Tmonth = "0" + Tmonth}


// 2019 / 07 / 10

$(".Date").html(Tyear + " / " + Tmonth + " / " + Tdate);

// 新增任務
AddToDoList = function(text){

    console.log(text)
    var node = document.createElement("LI");
    var textnode = document.createTextNode(text);
    node.appendChild(textnode);
    $("#ToDoForm")[0].appendChild(node);
    $("li:last-child").prepend('<img class="selectMission">');

}
$('li').prepend('<img class="selectMission">')




// 選擇任務
// 建立圖案
onlyoneselect = true;

$(".selectMission").click(function(event) {
  /* Act on the event */
  if (onlyoneselect) {

    $(this).css('content', "url('UIdata/pause button.svg')");
    onlyoneselect = false;

  }else if ( $(this)[0].style.content == 'url("UIdata/pause button.svg")' )
  {
    $(this).css('content', "url('UIdata/PlayButtonLittle.svg')");
    onlyoneselect = true;
  }






});

$("li").click(function(event) {
  /* Act on the event */
    console.log( $(this)[0].textContent);
    if (onlyoneselect) {
      $('#TCAText')[0].textContent =  $(this)[0].textContent;
    }

});





PickMission = function(){


}












  });



