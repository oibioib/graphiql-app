import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

//TO DO with .env
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID,
//   measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: 'AIzaSyBsWPst_XA3sWiyGkEtjiiEajMGVhKGLH0',
  authDomain: 'graphiql-app-596d2.firebaseapp.com',
  projectId: 'graphiql-app-596d2',
  storageBucket: 'graphiql-app-596d2.appspot.com',
  messagingSenderId: '119287809900',
  appId: '1:119287809900:web:6aa08dc0e59e9941b21549',
  measurementId: 'G-348M5X654B',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
