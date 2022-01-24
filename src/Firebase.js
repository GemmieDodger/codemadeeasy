import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const settings = {
    timestampsInSnapshots: true, 
    merge: true 
};


// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyBXzSi0RoymOqYJ783ZJD2k1h1ervB1DII",
  authDomain: "codemadeeasy-41c38.firebaseapp.com",
  projectId: "codemadeeasy-41c38",
  storageBucket: "codemadeeasy-41c38.appspot.com",
  messagingSenderId: "558952146402",
  appId: "1:558952146402:web:5fd0fdd2a43f1654b605bb"
};

// Initialize Firebase
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;