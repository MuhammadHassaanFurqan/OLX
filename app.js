import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyDMKA_iMmPIw3NgzImKhc34tgA6m9RIRhc",
    authDomain: "olxy-e4f17.firebaseapp.com",
    projectId: "olxy-e4f17",
    storageBucket: "olxy-e4f17.appspot.com",
    messagingSenderId: "692607672007",
    appId: "1:692607672007:web:2be36e6f5d7200499b28e2",
    measurementId: "G-V6Q0KTBPNJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let btn = document.getElementById('btn')
if (btn) {
    btn.addEventListener('click', () => {
        let email = document.getElementById('email')
        let password = document.getElementById('password')

        createUserWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
                const user = userCredential.user;
                location.href = 'emailSi.html'
            })
            .catch((error) => {
                console.log(error);
            });
    })
}

let btn2 = document.getElementById('Signin')
if (btn2) {
    let email2 = document.getElementById('email2')
    let password2 = document.getElementById('password2')
    btn2.addEventListener('click', () => {
        signInWithEmailAndPassword(auth, email2, password2)
            .then((userCredential) => {
                const user = userCredential.user;
                location.href='home.html'
            })
            .catch((error) => {
                console.log(error)
            });
    })
}