
// AddMission
$('#AddMissionTop').hover(function() {
    console.log(23)
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

$('#AddMissionTop').mousedown(function(event) {
    /* Act on the event */
    console.log(23)
    $("#AddMissionTop,#TwoBar").stop().animate({
        left: "34",
        top: "34"},
        100
        );
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
    console.log(event.target.id)
    PageChange(event.target.id);
});


PageChange = function(where){
    if(where=='TodoList'){ToDOlist()};
    if(where=='Analysis'){Analysis()};
    if(where=='Ring'){Ring()};

}

ToDOlist = function(){

    console.log("1")

}


Analysis = function(){


    console.log("2")


}


Ring = function(){


    console.log("3")


}


