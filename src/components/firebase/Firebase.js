import { initializeApp } from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyByknxeZaXXFnus86eXljrlvTH6VPMwdUI",
    authDomain: "front-end-project-83223.firebaseapp.com",
    projectId: "front-end-project-83223",
    storageBucket: "front-end-project-83223.appspot.com",
    messagingSenderId: "214919572146",
    appId: "1:214919572146:web:a1dbc3427b480f3ebcb7ab",
    measurementId: "G-QH8GGZVZ94"
  };

  const app = initializeApp(firebaseConfig);

  export default app