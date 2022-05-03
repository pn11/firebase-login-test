<template>
  <div class="login">
    <h2>Login</h2>
    <p v-if="!isLoggedIn">You are {{loginMessage}}.</p>
    <p v-if="isLoggedIn">Welcome, {{userName}}!</p>
    <img v-if="isLoggedIn" v-bind:src="userImageURL">
    <button v-if="!isLoggedIn" @click="login">Login</button>
  </div>
</template>

<script>
//import firebase from 'firebase'
import { getAuth, signInWithPopup, TwitterAuthProvider } from "firebase/auth";

export default {
  name: 'Login',
  computed: {
    loginMessage(){
      if (this.isLoggedIn){
        return 'logged in'
      }
      else {
        return 'logged out'
      }
    }
  },
  data (){
    return {
      isLoggedIn: false,
      userName: '',
      userImageURL: '',
    }
  },
  methods: {
    login() {
      const auth = getAuth();
      const provider = new TwitterAuthProvider()
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
          // You can use these server side with your app's credentials to access the Twitter API.
          const credential = TwitterAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const secret = credential.secret;

          // The signed-in user info.
          const user = result.user;
          // ...
          console.log(token, secret, user)
          this.isLoggedIn = true
          this.userName = user.displayName
          this.userImageURL = user.photoURL

        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The AuthCredential type that was used.
          const credential = TwitterAuthProvider.credentialFromError(error);
          // ...
          console.log(errorCode, errorMessage, email, credential)
        });
      }
  }
}
</script>
