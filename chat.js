const firebaseConfig = {
    apiKey: "AIzaSyAY3aVTbzsCFYYzlK2RGvxc-rUg-zh2u4Q",
    authDomain: "kwitter-5bef8.firebaseapp.com",
    projectId: "kwitter-5bef8",
    storageBucket: "kwitter-5bef8.appspot.com",
    messagingSenderId: "746156506600",
    appId: "1:746156506600:web:e4229d548e48c34985b85d"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({ 
          purpose : "adding room name" 
    });
    localStorage.setItem("room_name, room_name");
    window.location = "kwiiter_page.html";
  }     
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " +Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
  }