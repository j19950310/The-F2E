app = new Vue({
    el: '.main',
    data:{
        mode:'todo',
        todolist:[
        {text:'Prepare the presentation',active:false},
        {text:'Complete the keynote',active:false},
        {text:'Complete the Studio logo',active:false},
        {text:'Learn German',active:false},
        {text:'Learn Adobe XD',active:false},
        ],
    }
})

Vue.component('input-part',{
    template: "#input"
})
