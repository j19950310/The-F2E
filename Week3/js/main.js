var mp3 = new Vue({
    el: ".mainPlay",
    data:{
        song:[
        { name: 'Down',long: 110},
        { name: 'Images_of_Tomorrow',long: 389},
        { name: 'Jazz_Mango',long: 131},
        { name: 'Jungle_Intrigue',long: 160},
        { name: 'Miles_to_Go',long: 96},
        { name: 'Song_of_Mirrors',long: 377},
        { name: 'Ice_Cream',long: 122},
        { name: 'Flutey_Sting',long: 25},
        { name: 'Piano_March',long: 20},
        { name: 'Glitch',long: 16},
        ],
        random: [Math.floor(Math.random()*10000)+2000,
                 Math.floor(Math.random()*10000)+2000,
                 Math.floor(Math.random()*10000)+2000,
                 Math.floor(Math.random()*10000)+2000,
                 Math.floor(Math.random()*10000)+2000,
                 Math.floor(Math.random()*10000)+2000,
                 Math.floor(Math.random()*10000)+2000,
                 Math.floor(Math.random()*10000)+2000,
                 Math.floor(Math.random()*10000)+2000,
                 Math.floor(Math.random()*10000)+2000,
                 ],
        // 音樂播放設定
        // 第幾首歌
        NowPlayingSong: 1,
        // 進度條的%
        LoadBar: 0,
        //現在撥放音樂的總長度
        dura: 1,
        //現在撥放音樂播到哪
        now: 0,
        // 現在是什麼模式 repeat,NoRepeat,shuffle
        mode:"NoRepeat",
        modeIconControl:{
          repeat:{
            shuffle:"main/shuffle.svg",
            repeat:"main/repeat_on.svg",
            RepeatTittle:'循環撥放'
          },
          SingleRepeat:{
            shuffle:"main/shuffle.svg",
            repeat:"main/repeat_onlyone.svg",
            RepeatTittle:'單曲撥放'
          },
          shuffle:{
            shuffle:"main/shuffle_on.svg",
            repeat:"main/repeat.svg",
            RepeatTittle:'循環撥放'
          },
          NoRepeat:{
            shuffle:"main/shuffle.svg",
            repeat:"main/repeat.svg",
            RepeatTittle:''
          },
        },



        // 音量控制
        voMax: 0,
        voNow: 1,



        Song: {},
        songName: [],
        Duration: [],

        // 聲音控制
         sound: function(src) {
          this.sound = document.createElement("audio");
          this.sound.src ='song/' + src + '.mp3' ;
          this.sound.setAttribute("preload", "auto");
          this.sound.setAttribute("controls", "none");
          this.sound.style.display = "none";
          document.body.appendChild(this.sound);
          this.play = function(){
            this.sound.play();
          }
          this.stop = function(){
            this.sound.pause();
          }
          this.to = function(sec){
            this.sound.currentTime = sec;
          }
        },
        // 廣告
        Adshow: false,





    },
    methods: {
         TimeCount: function(long){
          min = Math.floor( long / 60);
          sec = Math.floor( long % 60);
          sec = (sec<10) ? ("0" + sec) : sec
          return min+ ":" + sec;
        },
        LoadBarNow: function(){

          mp3.dura = mp3.Song[mp3.NowPlayingSong].sound.duration;
          mp3.now = mp3.Song[mp3.NowPlayingSong].sound.currentTime;
          mp3.LoadBar = (mp3.now/mp3.dura) * 100

          if (mp3.now == mp3.dura) {
            // 當下的歌歸讀條0
            mp3.Song[mp3.NowPlayingSong].sound.currentTime
            = mp3.now
            = 0;

            // 記錄點
            // 單曲重複播放 / 隨機播放 / 重複播放
            // SingleRepeat,shuffle,repeat,NoRepeat
            // 筆記: 放在每10毫秒監測項目
          AdRandom();

          switch (mp3.mode){
            case 'SingleRepeat':
                  mp3.Song[mp3.NowPlayingSong].play();
                  break;
            case 'shuffle':

                  ShuffleNext = mp3.NowPlayingSong;

                  while(ShuffleNext == mp3.NowPlayingSong)
                  {
                    ShuffleNext =
                    Math.round(Math.random()*(mp3.song.length));
                  }
                    mp3.Song[mp3.NowPlayingSong].stop();
                    mp3.Song[mp3.NowPlayingSong].sound.currentTime = 0;
                    mp3.NowPlayingSong = ShuffleNext;
                    mp3.Song[mp3.NowPlayingSong].play();
                    break;

            case 'repeat':

                  mp3.Song[mp3.NowPlayingSong].stop();
                  mp3.Song[mp3.NowPlayingSong].sound.currentTime = 0;
                  NextSong();
                  mp3.Song[mp3.NowPlayingSong].play();
                  break;

            case 'NoRepeat':
                  $('#bar_info_playAndpause>img').toggle();
                  PPtoggle();
                  break;

            }


          }
        },
        // click換歌
        ClickSong: function(index){

         mp3.Song[mp3.NowPlayingSong].stop();
         mp3.Song[mp3.NowPlayingSong].sound.currentTime = 0;
         mp3.NowPlayingSong = index;
         mp3.Song[mp3.NowPlayingSong].play();
         if (PlayOrPause == 'play') {
           $('#bar_info_playAndpause>img').toggle();
           PlayOrPause = 'pause';
         }

        }
      },
    computed:{

    }



})

// 進度條隨時更新(畫面部分)
setInterval(mp3.LoadBarNow, 10);


// 音樂控制
// 切換下一首
NextSong = function(){
  num =  mp3.NowPlayingSong;
  if (num != mp3.songName.length) {
    mp3.NowPlayingSong += 1
  }
}
  $('#bar_info_next').click(function(event) {
    /* Act on the event */
    mp3.Song[mp3.NowPlayingSong].stop();
    // 關起來歸零，不然下次來會發現
    mp3.Song[mp3.NowPlayingSong].sound.currentTime = 0;
    NextSong();
    mp3.Song[mp3.NowPlayingSong].sound.currentTime = 0;

    // 連續撥放判定
    if (PlayOrPause=='pause') {
      mp3.Song[mp3.NowPlayingSong].play();}
  });

// 切換上一首
PreSong = function(){
  num =  mp3.NowPlayingSong;
  if (num != 1) {
    mp3.NowPlayingSong -= 1
  }
}

  $('#bar_info_back').click(function(event) {
    /* Act on the event */
    mp3.Song[mp3.NowPlayingSong].stop();
    // 關起來歸零，不然下次來會發現
    mp3.Song[mp3.NowPlayingSong].sound.currentTime = 0;
    PreSong();
    mp3.Song[mp3.NowPlayingSong].sound.currentTime = 0;

    // 連續撥放判定
    if (PlayOrPause=='pause') {
      mp3.Song[mp3.NowPlayingSong].play();}


  });




// 拖動音樂時間軸
 $('.load_bar')
 .mousemove(function(event){
    total = $(this).css('width').replace('px','');
    how = event.pageX;
    percent = how / total ;

    if (event.which == 1) {

      mp3.LoadBar = percent * 100;

      mp3.Song[mp3.NowPlayingSong].sound.currentTime
      = mp3.dura * percent

    }

  })
 .mousedown(function(event) {

     mp3.LoadBar = percent * 100;

     mp3.Song[mp3.NowPlayingSong].sound.currentTime
     = mp3.dura * percent

 });


// 暫停/開始切換
PlayOrPause = 'play';

PPtoggle = function(){
  if (PlayOrPause == 'play') {
    mp3.Song[mp3.NowPlayingSong].play();
    PlayOrPause = 'pause';
  }
  else if(PlayOrPause == 'pause'){
    mp3.Song[mp3.NowPlayingSong].stop();
    PlayOrPause = 'play';
  }
}


$('#bar_info_playAndpause').click(function(event) {
  /* Act on the event */
  $('#bar_info_playAndpause>img').toggle();
    PPtoggle();
});
// 音量控制

$('#bar_info_voice_bar')
.mousemove(function(event){
   total = $(this).css('width').replace('px','');
   how = event.pageX - $(this).offset().left
   percent = how / total ;


   if (event.which == 1) {

     mp3.voNow
     = mp3.Song[mp3.NowPlayingSong].sound.volume
     = percent;

   }

 })
.mousedown(function(event) {

  mp3.voNow
  = mp3.Song[mp3.NowPlayingSong].sound.volume
  = percent;

});


// 模式切換
$("#bar_info_replayMode").click(function(event) {
  /* Act on the event */

  if (mp3.mode == 'repeat') {
    mp3.mode = 'SingleRepeat';
  }
  else if (mp3.mode == 'SingleRepeat') {
    mp3.mode = 'NoRepeat';
  }
  else{ mp3.mode = 'repeat' }
});

$('#bar_info_shuffle').click(function(event) {
  /* Act on the event */
  mp3.mode = 'shuffle'
});



// 廣告

ad_random_risk = 0;
AdRandom = function(){

  if (ad_random_risk > 1) {
      $('#advertisement,#ad_backboard').show('300');
      mp3.Adshow = true;
      ad_random_risk = 0;
  }else{
    ad_random_risk += Math.random()*0.5;

  }

}







// RankSong
    for (var i = 0; i < mp3.song.length; i++ ) {
         mp3.songName[i] =  mp3.song[i].name;
         mp3.Song[i+1] = new mp3.sound(mp3.songName[i]);
         mp3.Song[i+1].name = mp3.songName[i];
        }




