var firebaseConfig = 
{
    apiKey: "AIzaSyDejmidl7GbFGDpoaoz2OQB24eH1nIYyE8",
    authDomain: "fir-webapp-f9445.firebaseapp.com",
    projectId: "fir-webapp-f9445",
    storageBucket: "fir-webapp-f9445.appspot.com",
    messagingSenderId: "862360001220",
    appId: "1:862360001220:web:e30fe0d92879cdbca5c791",
    measurementId: "G-0XTXKB0TD6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.auth.Auth.Persistence.LOCAL;
  firebase.auth.Auth.Persistence.SESSION;
  
  $("#btn-login").click(function(){
      var email = $("#email").val();
      var password = $("#password").val();

      if(email != "" && password != null)
      {
        var result = firebase.auth().signInWithEmailAndPassword(email.value, password.value);

        result.catch(function(error)
        {
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode);
            console.log(errorMessage);
            window.alert("Message : " + errorMessage);
        });
      }
      else
      {
        window.alert("Please fill out all fields.");
      }

  });
$("#btn-resetPassword").click(function(){
    var auth = firebase.auth();
    var email = $("#btn-resetPassword")
});
