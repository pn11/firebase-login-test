import { createApp } from 'vue'
import App from './App.vue'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIGjKAnfRD4BmgDikl0eLszMCfWs_hJ28",
  authDomain: "login-demo-50466.firebaseapp.com",
  projectId: "login-demo-50466",
  storageBucket: "login-demo-50466.appspot.com",
  messagingSenderId: "244198088584",
  appId: "1:244198088584:web:d07d76821af00eb445643d"
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App).mount('#app')

