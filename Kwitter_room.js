
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA3qQlGMToX96PupW4FbkVlUwMg4aG8TLs",
    authDomain: "kwitter-ab85b.firebaseapp.com",
    databaseURL: "https://kwitter-ab85b-default-rtdb.firebaseio.com",
    projectId: "kwitter-ab85b",
    storageBucket: "kwitter-ab85b.appspot.com",
    messagingSenderId: "810821640262",
    appId: "1:810821640262:web:208e596ded360093f72a47"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
  
    user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  
  
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "Kwitter_msg.html";
  }
  
  
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = "";
   snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "Kwitter_msg.html";
  }
  
  
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "kwitter_login.html";
  }
  