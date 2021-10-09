// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDViJPtX7q9U-ge1j9MNEYfOUyZ2OhJui4",
    authDomain: "kwitter-3046d.firebaseapp.com",
    projectId: "kwitter-3046d",
    storageBucket: "kwitter-3046d.appspot.com",
    messagingSenderId: "51685617062",
    appId: "1:51685617062:web:070224d9691eddacccb367"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function logout(){
      window.location="index.html";
  }
