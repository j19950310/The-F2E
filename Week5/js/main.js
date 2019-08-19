var mainFlower = new Vue({
    el: '#main',
    data:{
        flower_main:{
        }
    }


})

var port = $('#flower_main')[0].children;


for (var i = 0; i < port.length; i++) {

    // 動態連續
    $(port[i]).css('transition-duration','3s')
    attr = port[i].attributes;
    name = port[i].id;
    mainFlower.flower_main[name] = attr;

}

// WIGGLE SETTING START
wigglemood = 1;

// 來或回
function wiggle() {
    if (wigglemood==1) {
        leafWiggle1();
        wigglemood = 2;
    }
    else{
        leafWiggle2();
        wigglemood = 1;
    }
}

// 監聽播完時，倒撥
var element = $("#leaf4")[0]
element.addEventListener("transitionend", wiggle, false);

leafWiggle1 = function(){
    mainFlower.flower_main.leaf1.transform.value =
     "translate(450 175) rotate(-65 106 580)";
     mainFlower.flower_main.leaf2.transform.value =
      "translate(480 351) rotate(-35 75.5 410)";
    mainFlower.flower_main.leaf3.transform.value =
     "translate(480 351) rotate(35 75.5 410)";
     mainFlower.flower_main.leaf4.transform.value =
      "translate(450 175) rotate(65 106 580)";
}

leafWiggle2 = function(){
    mainFlower.flower_main.leaf1.transform.value =
     "translate(450 175) rotate(-60 106 580)";
     mainFlower.flower_main.leaf2.transform.value =
      "translate(480 351) rotate(-30 75.5 410)";
    mainFlower.flower_main.leaf3.transform.value =
     "translate(480 351) rotate(30 75.5 410)";
     mainFlower.flower_main.leaf4.transform.value =
      "translate(450 175) rotate(60 106 580)";
}

$(function() {
  wiggle();
});

// WIGGLE SETTING END
