import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDmCUEUBI-r9-tz2cXhhaejq0ykjImsYTk",
    authDomain: "imessage-clone-96c3f.firebaseapp.com",
    databaseURL: "https://imessage-clone-96c3f.firebaseio.com",
    projectId: "imessage-clone-96c3f",
    storageBucket: "imessage-clone-96c3f.appspot.com",
    messagingSenderId: "349061692732",
    appId: "1:349061692732:web:36124c8f231bf886ff7239",
    measurementId: "G-9ZSX5050YB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
