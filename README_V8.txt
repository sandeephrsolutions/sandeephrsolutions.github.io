Sandeep HR Solutions — V8 Candidate Portal

New files:
- firebase-config.js
- candidate-login.html
- candidate-register.html
- candidate-dashboard.html
- firestore.rules.txt

Updated V7 pages:
- index.html
- about.html
- services.html
- employers.html
- jobs.html
- contact.html

Firebase setup required:
1. Firebase Authentication -> Email/Password must be Enabled.
2. Cloud Firestore database must be created.
3. In Firestore Rules, paste the contents of firestore.rules.txt and Publish.
4. Upload all files to the GitHub Pages repository root.
5. Do NOT upload Firebase Admin SDK/service-account private keys.

Candidate data is stored under candidates/{Firebase Auth UID}. The rules only allow a signed-in user to read/write their own document.

Note: V8 currently stores a Resume/LinkedIn URL, not an actual file upload. File upload can be added later with Firebase Storage.
