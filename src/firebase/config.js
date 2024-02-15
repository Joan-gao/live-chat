import { initializeApp } from 'firebase/app'
import { getFirestore, serverTimestamp } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDtMkn6WYKhR2P0-ufuIK5aLkwpHS8Hodg",
    authDomain: "udemy-vue-firebase-edbd4.firebaseapp.com",
    projectId: "udemy-vue-firebase-edbd4",
    storageBucket: "udemy-vue-firebase-edbd4.appspot.com",
    messagingSenderId: "659659449578",
    appId: "1:659659449578:web:269b819bcedadf4dc6a393",
    measurementId: "G-R59Q0W2WNM"
  };

  // init firebase
  const app = initializeApp(firebaseConfig)  // 使用imported initializeApp
  
  const projectFirestore = getFirestore(app)  // 使用getFirestore初始化Firestore
  const projectAuth = getAuth(app)

  const timestamp = serverTimestamp

  // export firestore
  export { projectFirestore, projectAuth, timestamp }
  