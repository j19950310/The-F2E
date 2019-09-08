const store = new Vue({
    el:'.main',
    data:{
        SearchText:'',
        folder:[],
        folderCheck:[false,false,false,false,false,false,false,false,false],
        files:[],
        filesCheck:[false,false,false,false,false,false,false,false,false],
        updateFiles:{},
        updateShow:false,
    },
    methods:{
        download(){
                var ref;
                var name;
                for (var i = 0; i < this.filesCheck.length; i++) {

                    if(this.filesCheck[i]){
                        ref = this.files[i].fullPath;
                        name = this.files[i].name;
                    }
                }
                downloadRef = firebase.storage().ref(ref);
                downloadRef.getDownloadURL().then(function(url) {
                  // Insert url into an <img> tag to "download"
                 fetch(url)
                     .then(res => res.blob())
                     .then(blob => {
                         let a = document.createElement("a");
                         let url = window.URL.createObjectURL(blob);
                         a.href = url;
                         a.download = name;

                         // Firefox 需要將 JS 建立出的 element appendChild 到 DOM 上才可以 work
                         a.style.display = "none";
                         document.body.appendChild(a);

                         a.click();

                         // 刪除多餘的 DOM 與 釋放記憶體
                         document.body.removeChild(a);
                         window.URL.revokeObjectURL(url);
                       });

                });
        },
        DataDelete(){
            var ref;
            var name;
            for (var i = 0; i < this.filesCheck.length; i++) {

                if(this.filesCheck[i]){
                    ref = this.files[i].fullPath;
                    name = this.files[i].name;
                }
            }
            deleteData = firebase.storage().ref(ref);
            deleteData.delete();
            window.setTimeout(()=>{location.reload();},1000);

        },
        UpData(){
            var file = $('#file')[0].files[0];
            var name = file.name;
            ref = firebase.storage().ref();
            ref.child(name).put(file)
            .then(()=>{window.setTimeout(()=>{location.reload();},100)});
            // window.setTimeout(()=>{location.reload();},1000);

        }
    },
    mounted() {
        // 使用key
        firebase.initializeApp(firebaseConfig);
        // root路徑
        const storageReference = firebase.storage().ref();
        // 列出所有root下的內容
        storageReference.listAll().then( res => {
            // 名字有差異，匯入Vue > data 中



            this.folder = res.prefixes
            this.files = res.items

        })
      }
})
