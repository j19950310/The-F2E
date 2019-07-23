// <embed type="image/svg+xml"  src="UI/Main/Back button.svg"></embed>
$(document).ready(function() {

    // 檔案名稱
    SrcText = [];
    // 設定常用ID
    IdText = [];
    // 設定顏色
    ColClass = [];
    // 設定卡片所在parent(debug)
    CardLocation = {};

    //
    // IdText 設定ID名稱
        for (var i = 0; i < CardDeck.length; i++) {

          SrcText[i] = SrcIt(CardDeck[i]);

          IdText[i] = CardDeck[i].join('_');

            if ((CardDeck[i][1] == 'Hearts') || (CardDeck[i][1] == 'Diamonds')) {

                ColClass[i] = 'red';
            }else{ColClass[i] = 'black';}

        IdText[i] = 'Card' + '_' + ColClass[i]+ '_' + CardDeck[i].join('_');

        // Location建立
        CardLocation[ IdText[i] ] = '';

        };

        // 設定位置可以放進的卡(debug)
            LocationAccept = {};
            for (var i = 0; i < 4; i++) {
                LocationAccept['#PlaceHold_'+i]
                =LocationAccept['#PlaceHold_'+(i+4)]
                // Debug用
                ="#" + IdText.join(',#');
                // 只能接受AAAA
                 LocationAccept['#MainHold_'+i] =
                 "#Card_red_1_Hearts,#Card_red_1_Diamonds,#Card_black_1_Clubs,#Card_black_1_Spades";
                // 所有牌都可以放
                 LocationAccept['#FreeHold_'+i] = "#" + IdText.join(',#')
            }
    // 建立訊息快照，每個位置當下有哪些卡，用來回朔
    Location_Card = {};
    for (var i = 0; i <= 4; i++) {
        Location_Card['#PlaceHold_'+i]
        = Location_Card['#FreeHold_'+i]
        = Location_Card['#MainHold'+i]
        =''
    }

// CardDeck 是卡排庫
// SrcIt是可以將排庫名稱轉為對應檔名



CardDeckMatrix = [];


    // 牌庫
    for (var i = 0; i < 52; i++) {
        CardDeckMatrix.push([ IdText[i], ColClass[i], SrcText[i] ]);
    };
    // 洗牌
        CardDeckMatrix = _.shuffle(CardDeckMatrix);

    // 放入
    for (var k = 0; k < 52; k++) {
        Card = '<div  id = ' + CardDeckMatrix[k][0]
                + ' class ="CardSize Card ' + CardDeckMatrix[k][1] +'" '
              + '><img src="UI/Main/'+ CardDeckMatrix[k][2] +  '"></div>'
        deliver = k;
        switch(deliver%8){
            case 0:
            $('#PlaceHold_0').append(Card);
            break;
            case 1:
            $('#PlaceHold_1').append(Card);
            break;
            case 2:
            $('#PlaceHold_2').append(Card);
            break;
            case 3:
            $('#PlaceHold_3').append(Card);
            break;
            case 4:
            $('#PlaceHold_4').append(Card);
            break;
            case 5:
            $('#PlaceHold_5').append(Card);
            break;
            case 6:
            $('#PlaceHold_6').append(Card);
            break;
            case 7:
            $('#PlaceHold_7').append(Card);
            break;
        }
        };


$(document).ready(function() {
            // 排版
        for (var i = 0; i < 8; i++) {
            HowManyCard = $('#PlaceHold_'+i+">div").length;

            for (var j = HowManyCard; j > 0 ; j--) {
             $('#PlaceHold_'+i+">div:nth-child("+j+")").css({top: -33 + j*33 + 'px',left: 0, zIndex: j});
              }

                 }

        RefreshMovable();
        PlaceHoldRefresh();
});

















// 拖曳功能設定開始
// 容器
DropContent = '';
DivContent = '<div class="CardSize InvisDiv"></div>'
AcceptID = ''

    $('.Card').draggable({
        // 裝到容器前拖曳回原位，拖曳drop到容器之後，拖曳出容器會回到原位
        revert: "invalid",
        scroll: false,
        stack: '.Card',
        // 因為物件設定Position absolute,將他放置進div中自動對其0,0


        cursorAt: {top: 50,left: 50},
        start: function(){
                // 照張相
                Location_snap();
                // 清空紀錄
                console.log("清空前Stat-DropContent="+DropContent);
                DropContent = '';
                FreeHoldHaveAnyCard();

            switch (CardLocation[this.id].split('_')[0]){
                // 當拔起卡片時所對應事件
                //
                //
                // 1.隨地可以放卡的地方
                case '#FreeHold':
                // 太容易當了改寫
                     // FreeHoldHaveAnyCard();

                break;






                // 2.主要放卡區
                case '#PlaceHold':
                    PlaceHoldRefresh();
                    // !important使移動有問題
                    $(this).removeClass('offset');
                    // 剩一張，還拿起來的時候
                    if ($(CardLocation[this.id])[0].children.length == 1) {
                                        // 更新資訊，全部都可以放
                    LocationAccept[CardLocation[this.id]] = "#" + IdText.join(',#')

                    // 所有牌都可以放
                    $(CardLocation[this.id]).droppable({
                        accept: "#" + IdText.join(',#')
                    });
                    // 一張以上
                }else if( $(CardLocation[this.id])[0].children.length > 0 ){
                    // 上一張牌的規則
                    CalculateDroppable_PlaceHold($(CardLocation[this.id]+' div:nth-last-child(2)')[0].id);
                    LocationAccept[CardLocation[this.id]] = AcceptID;
                    AcceptID = "";
                }
                break;




                    // 3.收集總和區
                case '#MainHold':
                // 要是沒有牌
                ItsParent =  $('#'+$(this).parent()[0].id);
                NuminMain = ItsParent.children().length;
                if (NuminMain == 1) {
                    LocationAccept[CardLocation[this.id]] =
                    "#Card_red_1_Hearts,#Card_red_1_Diamonds,#Card_black_1_Clubs,#Card_black_1_Spades";
                    console.log("card=1")

                }
                else if( NuminMain > 1){
                    console.log('card>1')
                    LocationAccept[CardLocation[this.id]] = '#' + this.id;
                    console.log(CardLocation[this.id]);
                    RefreshDroppable();

                }


                break;
            }
            CardLocation[this.id] = '';
        },


        stop: function(){

            // 調整到框內
            RefreshDroppable();
            $(this).appendTo(DropContent).css({top: '0',left: '0'});
            console.log("應該是放進這"+DropContent);
            // 如果是placehold，卡可以放入卡內，放入之後放到上一層
            if ( DropContent.split("_")[0] == "#Card") {
               $(this).appendTo($(DropContent).parent()).css({top: '0',left: '0'});
               // 改放置位置為父母ID
               DropContent =  "#" +$(DropContent).parent()[0].id;
               // 父母規則需先改變
               RefreshDroppable();
                     }
            // *********PlaceHold區可見度
               HowManyCard = $(DropContent).length;
              if ( DropContent.split('_')[0]=="#PlaceHold" ) {
                $(this).css({top: -33 +HowManyCard*33 + 'px'});
              }


            // 更改紀錄位置
            CardLocation[this.id] = DropContent;


            // 更改AcceptID的值
            switch (DropContent.split('_')[0]){
                case '#FreeHold':
                    LocationAccept[CardLocation[this.id]] = 'disable';
                    CalculateDroppable_FreeHold(this.id);
                    RefreshDroppable();
                break;

                case '#PlaceHold':
                // 增加位移量
                $(this).addClass('offset');
                PlaceHoldRefresh();
                break;

                case '#MainHold':
                CalculateDroppable_MainHold(this.id);
                LocationAccept[CardLocation[this.id]] = AcceptID;
                console.log("程式內容器:"+DropContent+"  此時能接受的:" +AcceptID);
                RefreshDroppable();
                break;

            }

            // 更新可移動卡片
            RefreshMovable();
            PlaceHoldRefresh();
            // // 放置的時候儲存可以放至的卡
            // LocationAccept[DropContent] = AcceptID;

        }
    });
// 拖曳功能設定結束

//容器功能開始
    $('.FirstHold').droppable({
        drop: function(){
            // 更新一下這個位置可以放卡的資訊
            RefreshDroppable();
            // 丟給物件自己ID，裝進去
            DropContent = '#' + this.id;
            console.log("Drop內改dropContent="+DropContent);
                },

        });

    $('[id*= "MainHold_"]').droppable({
        accept: "#Card_red_1_Hearts,#Card_red_1_Diamonds,#Card_black_1_Clubs,#Card_black_1_Spades"
    });

//容器功能結束

// 重新刷容器用的方程式
RefreshDroppable = function(){

    for (var i = 0; i < 4; i++) {

        $('#FreeHold_'+i).droppable({
            drop: function(){

                // 更新一下這個位置可以放卡的資訊
                RefreshDroppable();
                // 丟給物件自己ID，裝進去
                DropContent = '#' + this.id;
                console.log("Drop內改dropContent="+DropContent);
                // 丟給物件自己ID，裝進去
                    console.log(   $("#"+$(this)[0].id + ">div") );
                    },
            accept: LocationAccept['#FreeHold_'+i],
            });

        if ($('#PlaceHold_'+i+'>div').length == 0) {
                $('#PlaceHold_'+i+',#PlaceHold_'+i+'>div:last-child').droppable({
                 drop: function(){

                     // 更新一下這個位置可以放卡的資訊
                     RefreshDroppable();
                     // 丟給物件自己ID，裝進去
                     DropContent = '#' + this.id;
                     console.log("Drop內改dropContent="+DropContent);
                     // 丟給物件自己ID，裝進去
                          console.log(   $("#"+$(this)[0].id + ">div:last-child") );
                         },
                 accept: "#" + IdText.join(',#')
                 });
            }else{
              $('#PlaceHold_'+i+',#PlaceHold_'+i+'>div:last-child').droppable({
               drop: function(){

                   // 更新一下這個位置可以放卡的資訊
                   RefreshDroppable();
                   // 丟給物件自己ID，裝進去
                   DropContent = '#' + this.id;
                   console.log("Drop內改dropContent="+DropContent);
                   // 丟給物件自己ID，裝進去
                        console.log(   $("#"+$(this)[0].id + ">div:last-child") );
                       },
               accept: LocationAccept['#PlaceHold_'+i],
               });}

        $('#MainHold_'+i).droppable({
            drop: function(){

                // 更新一下這個位置可以放卡的資訊
                RefreshDroppable();
                // 丟給物件自己ID，裝進去
                DropContent = '#' + this.id;
                console.log("Drop內改dropContent="+DropContent);
                // 丟給物件自己ID，裝進去
                    console.log(   $("#"+$(this)[0].id + ">div") );
                    },
            accept: LocationAccept['#MainHold_'+i],
            });
    }

    for (var i = 4; i < 8; i++) {

        if ($('#PlaceHold_'+i+'>div').length == 0) {
            $('#PlaceHold_'+i+',#PlaceHold_'+i+'>div:last-child').droppable({
             drop: function(){

                 // 更新一下這個位置可以放卡的資訊
                 RefreshDroppable();
                 // 丟給物件自己ID，裝進去
                 DropContent = '#' + this.id;
                 console.log("Drop內改dropContent="+DropContent);
                 // 丟給物件自己ID，裝進去
                      console.log(   $("#"+$(this)[0].id + ">div:last-child") );
                     },
             accept: "#" + IdText.join(',#')
             });
        }else{
          $('#PlaceHold_'+i+',#PlaceHold_'+i+'>div:last-child').droppable({
           drop: function(){

               // 更新一下這個位置可以放卡的資訊
               RefreshDroppable();
               // 丟給物件自己ID，裝進去
               DropContent = '#' + this.id;
               console.log("Drop內改dropContent="+DropContent);
               // 丟給物件自己ID，裝進去
                    console.log(   $("#"+$(this)[0].id + ">div:last-child") );
                   },
           accept: LocationAccept['#PlaceHold_'+i],
           });}
    }

    console.log('刷新Accept');
}



// 用來計算可以放進的方程式,回傳可放置的ID選擇器
CalculateDroppable_PlaceHold = function(id){
    console.log(id)
    IdMatrix = id.split('_');
    Before = 0;
    ColorAccess ='';
    C1 = 0;
    C2 = 0;
    C3 = 0;
    C4 = 0;
    // ex:["Card", "black", "13", "Clubs"]
    if ( IdMatrix[1] == "red"){
        ColorAccess = "black";
    }else{ColorAccess = "red";}

    Before = IdMatrix[2] - 1;

    if (ColorAccess == "red") {
        // ex:["Card", "black", "13", "Clubs"]
        C1 = "#Card_" + ColorAccess + "_" + Before + "_Diamonds";
        C3 = "#Card_" + ColorAccess + "_" + Before + "_Hearts";
        return  C1 + ',' + C3;
    }

    if (ColorAccess == "black") {
        // ex:["Card", "black", "13", "Clubs"]
        C1 = "#Card_" + ColorAccess + "_" + Before + "_Clubs";
        C3 = "#Card_" + ColorAccess + "_" + Before + "_Spades";
        return  C1 + ',' + C3;
    }

        };

CalculateDroppable_FreeHold = function(sth){

    IdMatrix = sth.split('_');
    // ex:["Card", "black", "13", "Clubs"]
    // 這地方只能放一張，所以空白
    AcceptID = LocationAccept[CardLocation[sth.id]];
        };

CalculateDroppable_MainHold = function(id){

    IdMatrix = id.split('_');
    // ex:["Card", "black", "13", "Clubs"]
    // 這地方只能放一張，所以空白
    IdMatrix[2] = Number(IdMatrix[2]) + 1;
    AcceptID = '#' + IdMatrix.join('_');
    // AcceptID = LocationAccept[id];

        };


num = 0;

RefreshMovable = function(){

    for (var i = 1; i <= 4; i++) {
       num = $(".PlaceHold1>div:nth-child("+i+")>div").length;
        $(".PlaceHold1>div:nth-child("+i+")>:nth-child("+num+")").draggable('enable' );
       for (var j = 1; j < num ; j++) {
           $(".PlaceHold1>div:nth-child("+i+")>:nth-child("+j+")").draggable('disable' );
       }
    }
    for (var i = 1; i <= 4; i++) {
       num = $(".PlaceHold2>div:nth-child("+i+")>div").length;
        $(".PlaceHold2>div:nth-child("+i+")>:nth-child("+num+")").draggable('enable' );
       for (var j = 1; j < num ; j++) {
           $(".PlaceHold2>div:nth-child("+i+")>:nth-child("+j+")").draggable('disable' );


       }
    }


}

// 照相系統，紀錄每個位置當下有什麼牌
Location_snap = function(){

    Keys = _.keys(Location_Card);
    Values = [];

    for (var i = 0; i < 16; i++) {
        Values.push([]);
    }

    for (var i = 0; i < Keys.length; i++) {

        j = $(Keys[i]+">div").length;

        for (var k = 0; k < j; k++) {
            Values[i].push( "#" + $(Keys[i]+">div")[k].id );
        }

        Location_Card[Keys[i]] = Values[i];
    }
};


Reverse = function(){

    for (var i = 0; i < Keys.length; i++) {
        for (var j = 0; j < Values[i].length; j++) {
            $(Values[i][j]).appendTo( Keys[i] );
        }
    }



}


FreeHoldHaveAnyCard = function(){

    for (var i = 0; i < 4; i++) {

        if ($("#FreeHold_"+i+">div").length == 0) {
            LocationAccept["#FreeHold_" + i] = "#" + IdText.join(',#');
            console.log(i+"v");
        }
        else{
            LocationAccept["#FreeHold_" + i] = "dis";
            console.log(i+"x");
        }

         }
         RefreshDroppable();
}


PlaceHoldRefresh = function(){

    for (var i = 0; i < 8; i++) {
            // 長度
           CardLong =  $("#PlaceHold_"+i+">div").length
            // 有牌的話
            if(CardLong > 0){
                text2long = CalculateDroppable_PlaceHold($("#PlaceHold_"+i+">div:last-child")[0].id);
                LocationAccept["#PlaceHold_"+i] = text2long;

                }
         }
         RefreshDroppable();
}









});

