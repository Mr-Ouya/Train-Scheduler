

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAVL2EZqTzxrJA9VrZJTaG7zKOrWX0YGZ8",
    authDomain: "test-project-17c5c.firebaseapp.com",
    databaseURL: "https://test-project-17c5c.firebaseio.com",
    projectId: "test-project-17c5c",
    storageBucket: "test-project-17c5c.appspot.com",
    messagingSenderId: "505118219828"
  };
  firebase.initializeApp(config);
  var database=firebase.database();


  fMinutesAway = 0;
  var nextArrival = new Date();

  $("#go").on("click", function(event) {
    event.preventDefault();
    var fTrainName = $("#train-name").val().trim();
    var fDestination = $("#destination").val().trim();
    var fFirstTrainTime = $("#first-train-time").val().trim();
    var fFrequency = $("#frequency").val().trim();
    console.log("Employee Name "+fTrainName);
    console.log("Role "+fDestination);
    console.log("Start Date "+fFirstTrainTime);
    console.log("Monthly Rate "+fFrequency);




  });

