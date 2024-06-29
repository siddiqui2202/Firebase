// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
 } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJyNXjYwYthj8muNa2Dy-O3eA6pOLwI2M",
  authDomain: "corded-sunlight-387311.firebaseapp.com",
  projectId: "corded-sunlight-387311",
  storageBucket: "corded-sunlight-387311.appspot.com",
  messagingSenderId: "703106421463",
  appId: "1:703106421463:web:579faa30bf9aba1ab91692",
  measurementId: "G-9BMH41MT12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app)
const analytics = getAnalytics(app);

const auth = getAuth(app);
console.log(auth)

const signup_email = document.getElementById("signup_email")
const signup_password = document.getElementById("signup_password")
const signup_btn = document.getElementById("signup_btn")

const signIn_email = document.getElementById("signIn_email")
const signIn_password = document.getElementById("signIn_password")
const signIn_btn = document.getElementById("signIn_btn")

const user_email = document.getElementById("user_email");
const logout_btn = document.getElementById("Logout_btn")


const auth_container = document.getElementById("auth_container")
const user_container = document.getElementById("user_container")

signup_btn.addEventListener("click",createUserAccount);
signIn_btn.addEventListener("click",signIn);
Logout_btn.addEventListener("click",logOut)

function createUserAccount(){
    // console.log(signup_email.value)
    // console.log(signup_password.value)
    createUserWithEmailAndPassword(auth, signup_email.value, signup_password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert (errorMessage)
    // ..
  });
}




onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      auth_container.style.display="none";
      user_container.style.display="block"
      user_email.innerText=user.email;
      // ...
      } else {
          auth_container.style.display="block";
          user_container.style.display="none";
          
          // User is signed out
      // ...
    }
  });
  
  function signIn(){
    // console.log(signIn_email.value)
    // console.log(signIn_password.value)
    signInWithEmailAndPassword(auth, signIn_email.value, signIn_password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("user")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
  }

  function logOut(){
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
  }