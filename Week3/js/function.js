$(document).ready(function() {

    Song = {};
    songName = [];
    Duration = [];

    // 聲音控制
    function sound(src) {
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
    }

// RankSong
    for (var i = 0; i < mp3.song.length; i++ ) {
         songName[i] =  mp3.song[i].name;
         Song[i+1] = new sound(songName[i]);
         Song[i+1].name = songName[i];
        }




    Song.PlayAndPause = function(num){
      // 播
      this[num].play();

      // 除了這首其他都停，所有歌時間歸零
      for (var i = 1; i <= songName.length; i++) {
        if (i != num) {
          this[i].stop();
          this[i].to(0);
        }
      }

    }




});

