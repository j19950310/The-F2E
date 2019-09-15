var port = Vue.component('index',{
     // 声明 props
     props: ['msg','nightMode'],
     // prop 可以用在模板内
     // 可以用 `this.msg` 设置
     template: '      \
      <div class="button">\
          <div class="brand">MARKDOWN</div>\
          <div @click="add" class="add">建立筆記</div>\
          <div  @click="all" class="btn-class">所有筆記</div>\
          <div  @click="star" class="btn-class">已加星號</div>\
          <div  @click="trash" class="btn-class">垃圾桶</div>\
          <div class="DandN"><div id="day" \
           :class={active:!nightMode} @click="day()"\
          ><img src="img/day.svg" alt=""></div>\
          <div id="night":class={active:nightMode}  @click="night"\
          ><img src="img/night.svg" alt=""></div></div>\
        </div>',
        methods:{
          add(){this.$emit('btn-click','add')},
          all(){this.$emit('btn-click','all')},
          star(){this.$emit('btn-click','star')},
          trash(){this.$emit('btn-click', 'trash')},
          night(){this.$emit('btn-click', 'night')},
          day(){this.$emit('btn-click', 'day')},

        }
   });

export default port
