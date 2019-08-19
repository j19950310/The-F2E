var game = new Vue({
    el: '#play_layer',
    data:{
        index:0,
        move:[
        "img/move/moving2.svg",
        "img/move/moving3.svg",
        "img/move/moving4.svg",
        "img/move/moving5.svg",
        "img/move/moving6.svg",
        "img/move/moving7.svg",
        "img/move/moving8.svg",
        "img/move/moving7.svg",
        "img/move/moving6.svg",
        "img/move/moving5.svg",
        "img/move/moving4.svg",
        "img/move/moving3.svg",
        "img/move/moving2.svg",
        "img/move/moving1.svg",
        "img/move/moving0.svg",
        "img/move/moving-1.svg",

                ],

        Smove:[
        "img/move/super1.svg",
        "img/move/super2.svg",
        "img/move/super3.svg",
        "img/move/super4.svg",
                       ],
        superindex:0,

        superball:[
        'img/move/skill_ball1.svg',
        'img/move/skill_ball2.svg',
        'img/move/skill_ball3.svg',
        'img/move/skill_ball4.svg',
        ],
        indexS:0,
                // 高度100，底邊在600，判定位置+-50
        positionY: 550,
        positionX: 116,
        rotate: 0,
        dropSpeed: 400,
        gameover: false,
        supermode: false,
        winmode: false,
        time:90,
        MIN:'01',
        SEC:'30',



        // 阻礙物開始
        monster:[
        {
            lv:1,
            show: true,
            type:'branch',
            imgsrc:'img/source/item-level-1-branch.svg',
            positionY: 0,
            positionX: 1280,
            stuck: [200, 300],
            long: 250

        },
        {
            lv:1,
            show: true,
            type:'rock',
            imgsrc:'img/source/item-level-1-rock.svg',
            positionY: 410,
            positionX: 900,
            stuck: [450, 600],
            long: 368
        },
        {
            lv:2,
            show: true,
            type:'smokeSM',
            imgsrc:'img/source/item-level-2-smoke-sm.svg',
            positionY: 300,
            positionX: 1980,
            stuck: [300,490],
            long: 288
        },
        {
            lv:2,
            show: true,
            type:'smokeLG',
            imgsrc:'img/source/item-level-2-smoke-lg.svg',
            positionY: 250,
            positionX: 1520,
            stuck: [280,500],
            long: 368
        },
        {
            lv:3,
            show: true,
            type:'fireLG',
            imgsrc:'img/source/item-level-3-fire-lg.svg',
            positionY: 100,
            positionX: 1600,
            stuck: [100,350],
            long: 192
        },
        {
            lv:3,
            show: true,
            type:'fireSM',
            imgsrc:'img/source/item-level-3-fire-sm.svg',
            positionY: 300,
            positionX: 1920,
            stuck:[300,450],
            long: 152
        },
        {
            lv:0,
            show: true,
            type:'super',
            imgsrc:'img/move/skill_ball1.svg',
            positionY: 500,
            positionX: 5000,
            stuck:[400,600],
            long: 200
        },
        ],
        level: 1,
        check_time:[],
    },

    methods: {
       Jump() {if (!this.gameover&!this.supermode&!this.winmode) {

        setTimeout(function(){
        // 400ms moving1 to moving8 to moving1
            if (game.positionY >= 150) {

                 game.positionY -= 35;
                 game.rotate = -45

                 if (game.positionY < 150) {game.positionY = 150;}
                }
            else{game.positionY = 150;};
            game.JumpAn();
                },200);
       }},
       JumpAn(){

                this.index++;
                if (this.index != 13 & this.index<13) {
                setTimeout(game.JumpAn,25)
                }else if(this.index >= 13){this.index = 0}
       },
       drop() {


        if (this.positionY < 550) {

            // 無敵不要掉
            if(!this.supermode){
              this.positionY += 50;
              this.rotate = 0;
              this.positionY =
              this.positionY > 550 ? 550 : this.positionY;
          }

        }else if( this.positionY > 550){
            this.positionY = 550;
        }

        if (!this.gameover) {
        setTimeout(this.drop, this.dropSpeed);
        }


       },

       Lv1run(){

           game.level = 1;
           game.dropSpeed = 400;
            $('#level_cover').css('opacity','0');
            $('#bg-front_move,#bg-middle,#bg-back').css('animation-duration','5s')
           $('#bg-front_move,#bg-middle,#bg-back').css('animation-play-state','running')

           Mon0Time = window.setInterval(
                function(){
                    game.monster[0].positionX -= game.level

                   if ( (game.monster[0].positionX < 200)&
                     (game.monster[0].positionX > 200 - game.monster[0].long))
                      {
                           game.check(0);
                      };
                    if (game.monster[0].positionX < -600) {
                        if(!game.monster[0].show){game.monster[0].show = true;};

                        game.monster[0].positionX =
                        1280+ Math.floor(Math.random()*game.level)*800;
                    };

                },5);

           Mon1Time = window.setInterval(
                function(){
                    game.monster[1].positionX -= game.level
                    if ( (game.monster[1].positionX < 200)&
                      (game.monster[1].positionX > 200-game.monster[1].long))
                       {
                           game.check(1);
                       };
                    if (game.monster[1].positionX < -600) {
                        if(!game.monster[1].show){game.monster[1].show = true;};

                        game.monster[1].positionX =
                         game.monster[0].positionX + 1280 + Math.floor(Math.random()*game.level)*800;
                    };
                }
                ,5);

        superTime = window.setInterval(
             function(){
                 game.monster[6].positionX -= game.level

                if ( (game.monster[6].positionX < 200)&
                  (game.monster[6].positionX > 200 - game.monster[6].long))
                   {
                        game.check(6);
                   };
                 if (game.monster[6].positionX < -600) {

                     game.monster[6].positionX =
                      10000 ;
                 };

             },5);

           LEVEL2 = window.setTimeout(game.Lv2run,30000);
       },

       Lv2run(){

           game.level = 2;
           game.dropSpeed = 300;
$('#level_cover').css('opacity','0.15');
$('#bg-front_move,#bg-middle,#bg-back').css('animation-duration','3s')

           Mon2Time = window.setInterval(
                function(){
                    game.monster[2].positionX -= game.level;

                   if ( (game.monster[2].positionX < 200)&
                     (game.monster[2].positionX > 200 - game.monster[2].long))
                      {
                           game.check(2);

                      };

                    if (game.monster[2].positionX < -400) {
                        if(!game.monster[2].show){game.monster[2].show = true;};

                        game.monster[2].positionX =
                         1920 + game.monster[1].positionX;

                         game.monster[2].positionY = Math.round(Math.random()*3)*100 +200;
                         game.monster[2].stuck[0] = game.monster[2].positionY+0;
                         game.monster[2].stuck[1] = game.monster[2].positionY+190;
                    };
                }
                ,5);

           Mon3Time = window.setInterval(
                function(){
                    game.monster[3].positionX -= game.level

                    if ( (game.monster[3].positionX < 200)&
                      (game.monster[3].positionX > 200-game.monster[3].long))
                       {
                           game.check(3);
                       };
                    if (game.monster[3].positionX < -400) {
                        if(!game.monster[3].show){game.monster[3].show = true;};

                        game.monster[3].positionX =
                         1920 + game.monster[2].positionX ;
                         game.monster[3].positionY = Math.round(Math.random()*3)*100 +200;
                         game.monster[3].stuck[0] = game.monster[3].positionY+30;
                         game.monster[3].stuck[1] = game.monster[3].positionY+250;
                    };

                }
                ,5);
           LEVEL3 = window.setTimeout(game.Lv3run,30000);

       },

       Lv3run(){
           game.level = 2.5;
           game.dropSpeed = 250;

$('#bg-front_move,#bg-middle,#bg-back').css('animation-duration','1.5s')
$('#level_cover').css('opacity','0.30');

           Mon4Time = window.setInterval(
                function(){
                    game.monster[4].positionX -= game.level;

                   if ( (game.monster[4].positionX < 200)&
                     (game.monster[4].positionX > 200 - game.monster[4].long))
                      {
                           game.check(4);

                      };

                    if (game.monster[4].positionX < -400) {
                        if(!game.monster[4].show){game.monster[4].show = true;};

                        game.monster[4].positionX =
                         1920 + game.monster[3].positionX;
                    };
                }
                ,5);

           Mon5Time = window.setInterval(
                function(){
                    game.monster[5].positionX -= game.level

                    if ( (game.monster[5].positionX < 200)&
                      (game.monster[5].positionX > 200-game.monster[5].long))
                       {
                           game.check(5);
                       };
                    if (game.monster[5].positionX < -400) {
                        if(!game.monster[5].show){game.monster[5].show = true;};

                        game.monster[5].positionX =
                         1920 + game.monster[4].positionX;
                    };

                }
                ,5);
       },

        gameoverAn(){

            window.setTimeout(function(){

            if (game.index!=15) {

                game.index++;
                game.gameoverAn();
            }else if(game.index > 15){game.index=15;};

            if(game.index < 13){
                game.index = 13;
                game.gameoverAn();
            }

            },500)

        },


       check(num){
            if ( (this.positionY < this.monster[num].stuck[1]) &
                   (this.positionY > this.monster[num].stuck[0])
               ) {
                if (num != 6) {

                    // 沒有無敵
                    if (!this.supermode&this.monster[num].show) {
                        clearInterval(Ctime);
                        this.gameover = true;
                        this.gameoverAn();
                        clearInterval(window.LEVEL2);
                        clearInterval(window.LEVEL3);
                        clearInterval(window.Mon0Time);
                        clearInterval(window.Mon1Time);
                        clearInterval(window.Mon2Time);
                        clearInterval(window.Mon3Time);
                        clearInterval(window.Mon4Time);
                        clearInterval(window.Mon5Time);
                        clearInterval(window.superTime);
$('#bg-front_move,#bg-middle,#bg-back').css('animation-play-state','paused')

                    }else{
                        // 有無敵撞到
                        this.monster[num].show = false;
                    }

                }
                // 吃到無敵
                else if (num == 6){
                    this.supermode = true;
                    this.monster[6].show = false;
                    this.rotate = 45;
                    this.positionX = 291;
                    window.setTimeout(function(){
                        game.supermode = false;
                        game.monster[6].show = true;
                        game.monster[6].positionY = Math.round(Math.random()*3)*100 +200
                        game.monster[6].stuck[0] = game.monster[6].positionY-100;
                        game.monster[6].stuck[1] = game.monster[6].positionY+100;
                        game.rotate = 0;
                        game.positionX = 116;

                    },5000)
                }


                  }},
        restart(){
            this.time = 90;
            this.gameover = false;
            this.index = 0;
            this.drop();
            posx = [1280,900,1980,1520,1600,1920,5000]
            for (var i = 0; i < this.monster.length; i++) {
                this.monster[i].positionX = posx[i];
            }
            this.Lv1run();
            this.timecount();
            this.MIN = '01';
            this.SEC = '30';
        },
        timecount(){

            Ctime = window.setInterval(function(){
                game.time--;

                game.SEC = game.time%60;
                game.MIN = '0' + Math.floor(game.time/60);
                game.SEC  =
                game.SEC < 10? '0' + game.SEC:game.SEC;

                if (game.time == 0) {
                    clearInterval(Ctime);
                    game.win();
                }

            },1000)
        },
        win(){
            this.winmode = true;
            clearInterval(Ctime);
            clearInterval(window.LEVEL2);
            clearInterval(window.LEVEL3);
            clearInterval(window.Mon0Time);
            clearInterval(window.Mon1Time);
            clearInterval(window.Mon2Time);
            clearInterval(window.Mon3Time);
            clearInterval(window.Mon4Time);
            clearInterval(window.Mon5Time);
            clearInterval(window.superTime);
            for (var i = 0; i < this.monster.length; i++) {
                this.monster[i].show = false;
            }
            $('#bg-front_move,#bg-middle,#bg-back').css('animation-duration','5s')
            $('#bg-front_move,#bg-middle,#bg-back').css('animation-iteration-count','1')
            $('#bg-front_move,#bg-middle,#bg-back').css('animation-timing-function','ease-out')
            $('#level_cover').css('opacity','0');
            $('#moving').css('animation-duration','5s')
                        .animate({top: '600px', left: '600px'},5000,).delay(1000)
                        .animate({top: '627px'},500,
                            function() {
                                $('#moving').css('transform','translateY(-100%) rotate(-45deg)');
                                $('.light').show();
                                $('#game').css('filter', 'brightness(2.5)');
                              })
                        .animate({top: '-100px'},2500,function(){
                                $('#game').css('filter', 'brightness(1)');
                                $('.light').hide();
                                $('#winflower').show().animate({top: '278px',opacity: 1}, 3000,function(){

                                    $('#winText').show('fast', function() {
                                        $('.sunlight').show();
                                    });
                                })

                        })
        }
    }

})









FirstStart = true;



$(window).keypress(function(event) {

    if (FirstStart) {
    $('#main').hide();
    /* Act on the event */
    game.Lv1run();
    game.timecount();
    FirstStart = false;
    }

    $('#moving').stop(true);
    if (event.code=="Space")
    {
        game.Jump();
        event.stopPropagation();
    }
});

$(function() {

    game.drop();

    superballAn = window.setInterval(
         function(){
            switch(game.indexS){
                case 0:
                game.indexS=1;
                break;
                case 1:
                game.indexS=2;
                break;
                case 2:
                game.indexS=3;
                break;
                case 3:
                game.indexS=0;
                break;
            }
                        game.monster[6].imgsrc = game.superball[game.indexS]
         }
         ,1000);

    supertime = window.setInterval(

        function(){
           switch(game.superindex){
               case 0:
               game.superindex=1;
               break;
               case 1:
               game.superindex=2;
               break;
               case 2:
               game.superindex=3;
               break;
               case 3:
               game.superindex=0;
               break;
           }
        }
         ,100);

    $('#tryagain').click(function(event) {
        /* Act on the event */
        game.restart();
    });

    $('#playagain').click(function(event) {
        /* Act on the event */
        location.reload(true);
    });

});
