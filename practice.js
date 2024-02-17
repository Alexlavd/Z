const config = {
  apiKey: "AIzaSyDJ_5p4m8cf55jHxeuignCkPO_7OrLBDkw",
  authDomain: "messages-9ffd1.firebaseapp.com",
  databaseURL: "https://messages-9ffd1-default-rtdb.firebaseio.com/",
  projectId: "messages-9ffd1",
  storageBucket: "messages-9ffd1.appspot.com",
  messagingSenderId: "91281398626",
  appId: "1:91281398626:web:3c9b752599586d3b31aa3b",
}
firebase.initializeApp(config);
function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });}