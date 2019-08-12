CCNtest = function(input1,input2,input3,input4){

if (input1 == undefined|
    input2 == undefined|
    input3 == undefined|
    input4 == undefined)
    {   console.log(1)
    return false}
else{
    Number = [];
    Number.push(input1,input2,input3,input4);
    Number = Number.join('');
    NumberL = Number.split('');
    // test 長度16
if (NumberL.length != 16) {console.log(2);return false}
else{
    // test 前4碼卡號認證
switch(NumberL[0]){
case '1':
if (Number.slice(0,4) != 1800) {console.log(3);return false}
break;

case '2':
if (Number.slice(0,4) != 2131) {console.log(4);return false}
break;

case '3':
if ( (3300 > Number.slice(0,4)) | (Number.slice(0,4) > 3399) ) {console.log(4);return false}
break;

case '4':
break;

case '5':
if ( (NumberL[1] > 5) | (NumberL[1] == 0) ) {console.log(5);return false}
break;
}

// test合法卡號
for (var i = 0; i < NumberL.length; i+=2) {
    NumberL[i] *=2;
    if ( NumberL[i]>= 10) {
        SUM = NumberL[i].toString().split('')
        NumberL[i] = parseInt(SUM[1])+parseInt(SUM[0]);
    }
}
SUM1 = 0
for (var i = 0; i < NumberL.length; i++) {
    SUM1 += parseInt(NumberL[i]);
}
if ( SUM1%10 != 0) {console.log(6);return false}
    else{return true}


}
}
}
