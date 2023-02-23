import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjOoIFtCa0YmDmwkFH3hIAGyXlKV6hd7I",
  authDomain: "miniblog-9cc8a.firebaseapp.com",
  projectId: "miniblog-9cc8a",
  storageBucket: "miniblog-9cc8a.appspot.com",
  messagingSenderId: "121185036819",
  appId: "1:121185036819:web:1471a1c04ed8906f526de6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };