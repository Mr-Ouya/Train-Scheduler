

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

  database.ref('/train').on("child_added",function(snapshot){
    var trainName = snapshot.val().trainName;
   var destination = snapshot.val().destination;
   var frequency = snapshot.val().frequency;
   var firstTrain = snapshot.val().firstTrain;
    var currentTime = 
    console.log(trainName)
    
    
   
  
    
  
        // Add each train's data into the table
   $("#trainTable").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + firstTrain + "</td><td>" + "15 minutes" + "</td></tr>");
   


  });
  $("#go").on("click", function(event) {
    event.preventDefault();
    var fTrainName = $("#train-name").val().trim();
    var fDestination = $("#destination").val().trim();
    var fFirstTrainTime = $("#first-train-time").val().trim();
    var fFrequency = $("#frequency").val().trim();
    $('#train-name').empty();
    $('#destination').empty();
    $('#first-train-time').empty();
    $('#frequency').empty();
   

    database.ref('/train').push({
      trainName: fTrainName,
      destination: fDestination,
      firstTrainTime: fFirstTrainTime,
      frequency: fFrequency,
     

    });
  


  });

