$(document).ready(function() {


    // Menu 伸縮
    Menu_back_off = function(){

        $("#Close").toggleClass('hide');
        $("#ClickMenu,#MainHint,#MainBack").toggleClass('hide');
        $('#MainMenu').toggleClass('noBorder');
        $(".Menu").toggleClass('Menu_hide');
        // 計時暫停
        TimeCountPlayAndStop();

    }

    $("#MainMenu").click(function(event) {
        Menu_back_off()
    });

    // 回朔
    $("#MainBack").click(function(event) {
        Reverse();
    });

    $(".Restart").click(function(event) {

        Count = 0;
        $('#MoveCount').text(Count);
        Reverse_This_Level();
        Menu_back_off();
        TimeCountReset();

    });

    $(".EndGame").click(function(event) {

        Menu_back_off();
        TimeCountPlayAndStop();
        $(".End").toggleClass('End_hide');
        $(".TimeCost_time").text($("#TimeCount").text());
        $(".Step").text($("#MoveCount").text());


    });

    $(".End_restart").click(function(event) {


        Menu_back_off();
        TimeCountPlayAndStop();
        $(".End").toggleClass('End_hide');
        TimeCountReset();
        JustOneCount = true;

    });



    $(".Newgame").click(function(event) {
        /* Act on the event */
        location.reload();
    });

    $('#MainHint').click(function(event) {
        window.open('https://zh.wikipedia.org/wiki/%E6%96%B0%E6%8E%A5%E9%BE%8D');
    });


});

