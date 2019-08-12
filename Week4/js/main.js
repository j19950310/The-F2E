var VO = new Vue({
    el: '#main',
    data:{
        step:'shipping',
        howSend:'超商取貨',
        inputNum: [],
        inputTest: true,

    },
    methods:{},
    computed:{}

    })


$(function() {


$('#next_step').click(function(event) {
    /* Act on the event */
    VO.step = 'payment';
});

$('#check_pay').click(function(event) {
    /* Act on the event */
    VO.step = 'ordercomplete';
});

$('#complete').click(function(event) {
    /* Act on the event */
    VO.step = 'shipping';
});


$('#how_send').click(function(event) {
    /* Act on the event */
    VO.howSend = this.value;
});

$('#previous_pay').click(function(event) {
    /* Act on the event */
    VO.step = 'shipping';
});


$('#card_num1,#card_num2,#card_num3,#card_num4').blur(function(event) {
    /* Act on the event */
   VO.inputTest = CCNtest( VO.inputNum[0], VO.inputNum[1], VO.inputNum[2], VO.inputNum[3]);
});



});
