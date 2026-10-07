import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";
const firebaseConfig={apiKey:"AIzaSyCANVvzqqQpnMdMsZXkedNgaUIYC7OkaZ4",authDomain:"sandeep-hr-solutions.firebaseapp.com",projectId:"sandeep-hr-solutions",storageBucket:"sandeep-hr-solutions.firebasestorage.app",messagingSenderId:"947883553603",appId:"1:947883553603:web:5d893e58a8091d7b3e75f6",measurementId:"G-TTF3H5G00V"};
const app=initializeApp(firebaseConfig);export const auth=getAuth(app);export const db=getFirestore(app);
