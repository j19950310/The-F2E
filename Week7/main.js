home = new Vue({
    el:'.home',
    data:{
        myName:'',
        pair: false,
        pairName: '',

    },
    methods:{
        btnClick(){
            if (this.pair) {
                document.location.href="chat.html"
            }
            this.pair = true;
        },
    }
})

room = new Vue({
    el:'.room',
    data:{
        typtext:'',
        dialog:[
        {
            profile:'user photo/woman_1.svg',
            name:'Julia',
            Ncolor:'#AA0445',
            context:'Hey, how’s going today?',
            heart: false,
            fill: false,
        },
        {
            profile:'user photo/man_1.svg',
            name:'Aaron',
            Ncolor:'#04AA9D',
            context:'Not bad, you? ',
            heart: false,
            fill: false,
        },
        {
            profile:'user photo/woman_1.svg',
            name:'Julia',
            Ncolor:'#AA0445',
            context:'Good, btw the sky is awesome :D',
            heart: false,
            fill: false,
        },
        {
            profile:'user photo/man_1.svg',
            name:'Aaron',
            Ncolor:'#04AA9D',
            context:'Cool, Did you take picture?',
            heart: false,
            fill: false,
        },
        ]},
        methods:{
            typin(){
            var text ={
                profile:'user photo/woman_1.svg',
                name:'Julia',
                Ncolor:'#AA0445',
                context: this.typtext,
                heart: false,
                fill: false,
                };

                this.dialog.push(text);
                this.typtext = '';
                setTimeout(()=>{
                $(".ChatSlid").scrollTop(room.dialog.length*100);
                },100)
            },
        },
    computed:{
        today(){
            var day = new Date();
            var Hr = day.getHours();
            var Min = day.getMinutes();
            time = ' '+ Hr + ':' + Min;
            switch( day.getDay() ){
             case 1:
             return 'Monday' + time;
             break;
             case 2:
             return 'Tuesday' + time;
             break;
             case 3:
             return 'Wendnesday' + time;
             break;
             case 4:
             return 'Thursday' + time;
             break;
             case 5:
             return 'Friday' + time;
             break;
             case 6:
             return 'Saturday' + time;
             break;
             case 7:
             return 'Sunday' + time;
             break;
            }

        }
    },
})
