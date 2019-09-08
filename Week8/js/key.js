
  // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyAgLr-fQE63RA-X22MbhFzEk4iq4_Hyqng",
      authDomain: "the-f2e-week-8.firebaseapp.com",
      databaseURL: "https://the-f2e-week-8.firebaseio.com",
      projectId: "the-f2e-week-8",
      storageBucket: "the-f2e-week-8.appspot.com",
      messagingSenderId: "408327575128",
      appId: "1:408327575128:web:58a61000163534be"
    };

    // firebase.initializeApp(firebaseConfig);


// ***********************create reference*************************
//    // Points to the root reference
//    var storageRef = firebase.storage().ref();

//    // Points to 'images'
//    var imagesRef = storageRef.child('images');

//    // Points to 'images/space.jpg'
//    // Note that you can use variables to create child values
//    var fileName = 'space.jpg';
//    var spaceRef = imagesRef.child(fileName);

//    // File path is 'images/space.jpg'
//    var path = spaceRef.fullPath

//    // File name is 'space.jpg'
//    var name = spaceRef.name

//    // Points to 'images'
//    var imagesRef = spaceRef.parent;


// *******************upload file**************
// // Create a root reference
// var storageRef = firebase.storage().ref();

// // Create a reference to 'mountains.jpg'
// var mountainsRef = storageRef.child('mountains.jpg');

// // Create a reference to 'images/mountains.jpg'
// var mountainImagesRef = storageRef.child('images/mountains.jpg');

// // While the file names are the same, the references point to different files
// mountainsRef.name === mountainImagesRef.name            // true
// mountainsRef.fullPath === mountainImagesRef.fullPath    // false

// file = 指定input
// storageRef.child('images/mountains.jpg').put(file)
//
//
//
//
// *******************download*********************
// // Create a reference to the file we want to download
//    // Points to the root reference
// test = $('#file')[0].files;
// var storageRef = firebase.storage().ref();
// var starsRef = storageRef.child('images/mountains.jpg');

// // Get the download URL
// starsRef.getDownloadURL().then(function(url) {
//   // Insert url into an <img> tag to "download"
//  fetch(url)
//      .then(res => res.blob())
//      .then(blob => {
//          let a = document.createElement("a");
//          let url = window.URL.createObjectURL(blob);
//          a.href = url;
//          a.download = name;

//          // Firefox 需要將 JS 建立出的 element appendChild 到 DOM 上才可以 work
//          a.style.display = "none";
//          document.body.appendChild(a);

//          a.click();

//          // 刪除多餘的 DOM 與 釋放記憶體
//          document.body.removeChild(a);
//          window.URL.revokeObjectURL(url);
//        });

// });
