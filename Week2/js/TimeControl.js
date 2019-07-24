min = 0;
sec = 0;
Min = '';
Sec = '';
JustOneCount = true;
WhatState = true;

TimeCountStart = function(){

    if (JustOneCount) {
       countSec = setInterval( function(){ secCount();} ,1000);
        JustOneCount = false;
    }


}

// toggle stop play
TimeCountPlayAndStop = function(){

    if (!WhatState) {TimeCountContinue();}
    else{TimeCountStop()};

}

// 暫停
TimeCountStop = function(){

    WhatState = false;
    clearInterval(countSec);

}

// 繼續撥放
TimeCountContinue = function(){
    WhatState = true;
    JustOneCount = true;
    TimeCountStart();
}

TimeCountReset = function(){

        sec = 0;
        min = 0;
        $('#TimeCount').text("00:00");
        clearInterval(countSec);
        JustOneCount = true;

}


// 秒分
secCount = function(){

    sec += 1;
    if (sec == 60) {
        min += 1;
        sec = 0;
    }

    Sec = sec;
    Min = min;

    if (sec < 10) {
        Sec = '0' + sec;
    }

    if (min < 10) {
        Min = '0' + min;
    }
    showTimeNow();
}

showTimeNow = function(){
    $('#TimeCount').text(Min+":"+Sec);
}
