class todo {
    constructor(text='', active=false,done=false) {
          this.text = text;
          this.active = active;
          this.done = done;
      };
}

app = new Vue({
    el: '.main',
    data:{
        mode:'normal',
        todoIndex:0,
        todolist:[
        {text:'Prepare the presentation',active:false,done:false},
        {text:'Complete the keynote',active:false,done:false},
        {text:'Complete the Studio logo',active:false,done:false},
        {text:'Learn German',active:false,done:false},
        {text:'Learn Adobe XD',active:false,done:false},
        ],
        PlanText:"",
        filter: 0,

    },
    methods:{
        sendPlan:()=>{
            if (app.PlanText)
            {
                app.todolist.push({text:app.PlanText,active:false});
                $("#AddMissionTop,#TwoBar")
                .animate({top:34, left: 34})
                .animate({top: 0, left: 0})
            }
            app.PlanText="";
        },
        rest:()=>{
            time = 300;
            rest = window.setInterval(
                  function(){
                    // 每秒執行一次的函數
                      time -= 1;
                     var min = Math.floor(time/60);
                     var sec = time%60
                      if (sec < 10){ sec = "0" + sec}
                      if (min < 10){ min = "0" + min}
                    $('#TCACount').text(min+":"+sec);
                    if (time==0) {
                        window.clearInterval(rest);
                    }
                },1000);
        }

    }
})

Vue.component('input-part',{
    template: "#input"
})
