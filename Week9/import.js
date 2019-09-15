import button from './button.js';
import note from './note.js'

// // Vue.component('index',button);
// Vue.component('note',note);

class noteObj {

    constructor(title='', tag='') {
          this.title = title;
          this.tag = tag;
      };

            date= new Date();
            data='';
            show={
                star: false,
                trashed: false,
                tag: true,
                };
            };


var main = new Vue({
    el:'.main',
    data:{
        // 現在打開的是哪個
        noteNow:0,

        // 關燈模式
        nightMode:false,

        // 新增note
        AddBlockShow: false,
        title:'',
        tag:'',

        // 編輯模式
        compile:false,

        // 篩選模式 star all trash tag

        // 乘載data
        notes:[
        ],
    },
    methods:{
        btnClick:(msg)=>{
            switch(msg){
                case 'add':
                main.AddBlockShow = true;
                break;
                case 'all':
                main.compile = false;
                break;
                case 'star':
                main.compile = true;
                break;
                case 'trash':
                console.log(main.noteNow)
                break;
                case 'day':
                main.nightMode = false;
                break;
                case 'night':
                main.nightMode = true;
                break;
                    }
            },
            // 存檔到陣列.data中
        save:()=>{
            main.notes[main.noteNow].data =
            document.querySelector('.ql-editor').innerHTML;
        },
        // 讀取第幾個檔案，放到寫入欄中
        load:()=>{
            document.querySelector('.ql-editor').innerHTML =
            main.notes[main.noteNow].data;
        },
        newNote:()=>{
            // 新增物件
            var note = new noteObj(main.title,main.tag);
            main.notes.push(note);
            main.title = '';
            main.tag = '';
            main.AddBlockShow = false;
        },
        cancel:()=>{
            main.AddBlockShow = false;
            main.title = '';
            main.tag = '';
        },
        page:(num)=>{
           main.save();
           main.noteNow = num;
           main.load();
           main.compile = true;
        },
        star:(num)=>{
            main.notes[num].show.star = !main.notes[num].show.star;
        },
        lightMode:(torf)=>{
            console.log(123);
            main.nightMode = torf;
        },
        show:(index)=>{
            return true;
        },
    },

});
















  var quill = new Quill( "#example", {
  theme: "snow", // 模板
  modules: {
    toolbar: [
      // 工具列列表[註1]
      [{ 'font': [] }], // 字體
      [{ 'size': [] }], // 文字大小
      ['bold', 'italic', 'strike'], // 粗體、斜體、底線和刪節線
      [{ 'align': [] }], // 文字方向
      ['image','link']
    ]
  }
});
