import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCANVvzqqQpnMdMsZXkedNgaUIYC7OkaZ4",
  authDomain: "sandeep-hr-solutions.firebaseapp.com",
  projectId: "sandeep-hr-solutions",
  storageBucket: "sandeep-hr-solutions.firebasestorage.app",
  messagingSenderId: "947883553603",
  appId: "1:947883553603:web:5d893e58a8091d7b3e75f6",
  measurementId: "G-TTF3H5G00V"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

(() => {
  const privatePage = /^(admin-|candidate-)/i.test(location.pathname.split("/").pop() || "");
  const run = () => {
    if (privatePage) {
      let m = document.querySelector('meta[name="robots"]');
      if (!m) { m = document.createElement("meta"); m.name = "robots"; document.head.appendChild(m); }
      m.content = "noindex,nofollow";
      document.title = document.title.replaceAll("Sandeep HR Solutions", "Sandeep Solutions").replaceAll("SANDEEP HR SOLUTIONS", "SANDEEP SOLUTIONS");
    }
    const root = document.body; if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes=[]; while(walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(n => { if(n.nodeValue) n.nodeValue=n.nodeValue.replaceAll("Sandeep HR Solutions","Sandeep Solutions").replaceAll("SANDEEP HR SOLUTIONS","SANDEEP SOLUTIONS").replaceAll("HR · RECRUITMENT · CONSULTING","BUSINESS SOLUTIONS · HR · RECRUITMENT"); });
    root.querySelectorAll("img[alt*='Sandeep HR Solutions']").forEach(img=>img.alt=img.alt.replaceAll("Sandeep HR Solutions","Sandeep Solutions"));
  };
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",run,{once:true}); else run();
  if(privatePage) new MutationObserver(run).observe(document.documentElement,{subtree:true,childList:true});
})();
