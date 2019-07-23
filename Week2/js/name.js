// 傳入檔名可以分辨它是什麼牌
NameIt = function(src){

    NpC = src.replace(".png","").split('_');
    // ex.  2_Diamonds ==>  [2,'Diamonds']
    if (NpC[0] == 'A') {
        NpC[0] = 1;
    }
    else if( NpC[0] == 'Q') {
        NpC[0] = 12;
    }
    else if( NpC[0] == 'J') {
        NpC[0] = 11;
    }
    else if( NpC[0] == 'K') {
        NpC[0] = 13;
    }


    Num = NpC[0];
    Color = NpC[1];




    return [Num,Color];

}
// 轉成檔案名
SrcIt = function(NameMatrix){
    NameNum = NameMatrix[0];
    NameColor = NameMatrix[1];

     if (NameNum == 1) {
         NameNum = 'A';
     }
     else if( NameNum == 12) {
         NameNum = 'Q';
     }
     else if( NameNum == 11) {
         NameNum = "J";
     }
     else if( NameNum == 13) {
         NameNum = 'K';
     }

     return NameNum + "_" + NameColor +".png"

}

CardDeck = [];
ColorType = ['Spades','Hearts','Diamonds','Clubs']

for (var j = 0; j < ColorType.length; j++) {

    for (var i = 1; i <= 13 ; i++) {

        CardDeck.push([ i, ColorType[j]])
    }

}

