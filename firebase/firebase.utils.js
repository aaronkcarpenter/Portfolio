import firebase from 'firebase/app';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyDN6DWeizyuF-cCs8F8ot2wRp5yr81FaKY",
  authDomain: "portfolio-site-dd75d.firebaseapp.com",
  databaseURL: "https://portfolio-site-dd75d.firebaseio.com",
  projectId: "portfolio-site-dd75d",
  storageBucket: "portfolio-site-dd75d.appspot.com",
  messagingSenderId: "171166354072",
  appId: "1:171166354072:web:1a570755c0a601a4495eed",
  measurementId: "G-L77Z9FGVPY"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();