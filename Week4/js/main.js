var VO = new Vue({
    el: '#main',
    data:{
        step:'shipping',
        howSend:'超商取貨',

        HowPay:'how_pay1',

        inputNum: [],
        inputTest: true,

        NameValue: '',
        NameTest: true,

        dateValue: [],
        dateTest: true,

        cvvValue:'',
        cvvTest:true,

        acceptTest:false,

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

    // 在驗一次，因為預設都TRUE，不讓版面紅通通
   VO.inputTest = CCNtest( VO.inputNum[0], VO.inputNum[1], VO.inputNum[2], VO.inputNum[3]);
    VO.NameTest = NameTest(VO.NameValue);
    VO.cvvTest = cvvTest(VO.cvvValue);
    VO.dateTest = dateTest(VO.dateValue[0],VO.dateValue[1]);



    if (VO.cvvTest&VO.NameTest&VO.inputTest&VO.acceptTest) {
    VO.step = 'ordercomplete';
    }else if(!VO.acceptTest)
    {window.alert('請勾選服務條款及隱私權政策!')}
    else{ window.alert('資料尚有錯誤!') }


});

$('#complete').click(function(event) {
    /* Act on the event */
    location.reload();
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

$("#card_owner_input").blur(function(event) {
    /* Act on the event */
    VO.NameTest = NameTest(VO.NameValue);
});

$('#date_MM,#date_YY').blur(function(event) {
    /* Act on the event */
    VO.dateTest = dateTest(VO.dateValue[0],VO.dateValue[1]);
});

$('#card_num_sc').blur(function(event) {
    /* Act on the event */
        VO.cvvTest = cvvTest(VO.cvvValue);
});

$('.how_pay_block').click(function(event) {
    /* Act on the event */
   VO.HowPay = this.id;

});

$('.checkbox').click(function(event) {
    /* Act on the event */
    $(this).toggleClass('checkbox_on');
});

$('#acceptCheck').click(function(event) {
    /* Act on the event */
    if (VO.acceptTest) {VO.acceptTest = false;}
        else{VO.acceptTest = true;}

});



});
