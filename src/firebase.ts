// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8RnQUih_32ECX7NPzOhib5JNIceUdv0M",
  authDomain: "fir-auth-a8172.firebaseapp.com",
  projectId: "fir-auth-a8172",
  storageBucket: "fir-auth-a8172.appspot.com",
  messagingSenderId: "834764213222",
  appId: "1:834764213222:web:00c6da16b06d84bbd0a427"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;