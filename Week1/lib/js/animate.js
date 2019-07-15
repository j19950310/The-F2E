
// AddMission

$('#AddMissionTop').hover(function() {
    $("#AddMissionTop,#TwoBar").stop().animate({
        left: "5",
        top: "5"},
        300
        );
}, function() {
    /* Stuff to do when the mouse leaves the element */
    $("#AddMissionTop,#TwoBar").stop().animate({
        left: "0",
        top: "0"},
        300
        );
});

$('#AddMissionMid').mousedown(function(event) {
    /* Act on the event */
    someTextInSide =  !($('#missionInput')[0].value == "" )

    if ( someTextInSide ) {
        $("#AddMissionTop,#TwoBar").stop().animate({
            left: "34",
            top: "34"},
            100
            );
         AddToDoList( $('#missionInput')[0].value );
        $('#missionInput')[0].value = "";
    }


});



$('#AddMissionTop').mouseup(function(event) {

    /* Stuff to do when the mouse leaves the element */
    $("#AddMissionTop,#TwoBar").stop().animate({
        left: "0",
        top: "0"},
        100
        );
});



// PageButtonArea
$(".PageButtonArea img").click(function(event) {
    /* Act on the event */
    PageChange(event.target.id);
});


PageChange = function(where){
    if(where=='TodoList'){ToDolist()};
    if(where=='Analysis'){Analysis()};
    if(where=='Ring'){Ring()};

}

ToDolist = function(){

    $(".LogoArea,.LA_ToDo").removeClass('LA_Anal')
    .removeClass('LA_Ring').toggleClass('LA_ToDo');

    $(".TimeCountdownArea").removeClass('TCA_Anal')
    .removeClass('TCA_Ring').toggleClass('TCA_ToDo');

    $(".ToDoArea").removeClass('TD_Anal')
    .removeClass('TD_Ring').toggleClass('TD_ToDo');

    $("#ToDoImg").attr('src', 'UIdata/ToDo.svg');


}


Analysis = function(){

    $(".LogoArea,.LA_ToDo").removeClass('LA_ToDo')
    .removeClass('LA_Ring').toggleClass('LA_Anal');

    $(".TimeCountdownArea").removeClass('TCA_ToDo')
    .removeClass('TCA_Ring').toggleClass('TCA_Anal');

    $(".ToDoArea").removeClass('TD_ToDo')
    .removeClass('TD_Ring').toggleClass('TD_Anal');

    $("#ToDoImg").attr('src', 'UIdata/Analysis-logo.svg');



}


Ring = function(){


    $(".LogoArea,.LA_ToDo").removeClass('LA_ToDo')
    .removeClass('LA_Anal').toggleClass('LA_Ring');

    $(".TimeCountdownArea").removeClass('TCA_Anal')
    .removeClass('TCA_ToDo').toggleClass('TCA_Ring');

    $(".ToDoArea").removeClass('TD_Anal')
    .removeClass('TD_ToDo').toggleClass('TD_Ring');

    $("#ToDoImg").attr('src', 'UIdata/Ring-logo.svg');

}




// Play
