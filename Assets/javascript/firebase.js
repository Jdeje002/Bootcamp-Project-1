// var config = {
//     apiKey: "AIzaSyAcCsp_1wcbimGlS4lKAtxlNz55p5-HbX4",
//     authDomain: "bootcamp-project-1-47c35.firebaseapp.com",
//     databaseURL: "https://bootcamp-project-1-47c35.firebaseio.com",
//     projectId: "bootcamp-project-1-47c35",
//     storageBucket: "bootcamp-project-1-47c35.appspot.com",
//     messagingSenderId: "692503538126"
// };
// firebase.initializeApp(config);

<<<<<<< HEAD
=======

>>>>>>> d04d7d103ed5fa5fcd64dfe8ac7bbc47c9690aeb
// datebase Var
var userDatabase = firebase.database()

// $("#login").on("click", function (event) {
//     event.preventDefault()
//     var input = $("#loginUser").val()
//     console.log(input)
// })

// $("#singUpBtn").on("click", function () {
//     // event.preventDefault()
//     var input = $("#registerUser").val()
//     console.log(input)
// })
<<<<<<< HEAD
// // datebase Var
// var database = firebase.database()

//register button, need to upload to firebase.
$("#signUpBtn").on("click", function () {
var user = $("#registerUser").val()

console.log(user)

var newUser = {
    user: user,
    // myEvents:{

    // }
}

})
=======


//register button, need to upload to firebase.
$("#signUpBtn").on("click", function () {

    var user = $("#registerUser").val()
    
    console.log(user)
    
    userDatabase.ref('/'+user)
    
    var newUser = {
        user: user,
        // myEvents:{
    
        // }
    }
    
    })

>>>>>>> d04d7d103ed5fa5fcd64dfe8ac7bbc47c9690aeb
