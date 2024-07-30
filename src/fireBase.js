import { getAnalytics } from '@firebase/analytics';
import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyACnq81WNm3AuFcEZJWIq4qstEvvQNT1eE",
    authDomain: "minly-4bfc5.firebaseapp.com",
    projectId: "minly-4bfc5",
    storageBucket: "minly-4bfc5.appspot.com",
    messagingSenderId: "599839095765",
    appId: "1:599839095765:web:48db508787e790b8839b5c",
    measurementId: "G-PCMRGJ04GH"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);