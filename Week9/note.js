var port = Vue.component('note',{
   // 声明 props
   props: ['noteTitle','date','tag','star','trashed','tagged','data','nightMode'],
   // prop 可以用在模板内
   // 可以用 `this.msg` 设置
   template: ' \
   <div class="note">\
     <img class="thum" @click="page" src="img/noteTest.png" alt="">\
     <div style="display: flex;width: 100%;" @click="mark">\
     <img v-if="star" src="img/starTrue.svg" alt="">\
     <img v-if="!star" src="img/starFalse.svg" alt="">\
     <div class="title">{{noteTitle}}</div></div>\
     <div style="display: flex;"><div class="date">\
     {{date.getFullYear()}}/\
     {{date.getMonth()>10?date.getMonth():"0"+date.getMonth()}}/\
     {{date.getDate()>10?date.getDate():"0"+date.getDate()}}\
     </div>\
     <div class="tag" v-if="tag">{{tag}}</div></div>\
   </div>\
   ',
   data: ()=>{
    return{
    }
    },
    methods:{
      mark(){
         this.$emit('star');
      },
      page(){
         this.$emit('page');

      }
    }

 });
export default port
