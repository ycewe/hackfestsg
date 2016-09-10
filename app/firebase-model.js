import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyABPrzTPqb236zg8pXapXkhVu2xX3_WNXc",
    authDomain: "recraft-fefda.firebaseapp.com",
    databaseURL: "https://recraft-fefda.firebaseio.com",
    storageBucket: "",
};

class FirebaseModel {
  constructor() {
    firebase.initializeApp(config);
    this.provider = new firebase.auth.GoogleAuthProvider();
  }
  onAuthStateChanged(authCallback) {
    firebase.auth().onAuthStateChanged(authCallback);
  }
  login() {
    firebase.auth().signInWithPopup(this.provider);
  }
  logout() {
    firebase.auth().signOut();
  }
  getUser() {
    return firebase.auth().currentUser;
  }
}

export default new FirebaseModel();
