Sandeep HR Solutions — Step 4.3 Security Package
================================================

WHAT CHANGED
------------
The package contains a strengthened firestore.rules file and a review/checklist.

The main concrete rule improvement is the applications collection:
- create is restricted to the authenticated candidate's own UID;
- read is restricted to that candidate's own applications or the admin UID;
- update/delete remain admin-only.

WHY
---
The candidate dashboard already creates application documents using the signed-in
user's UID and reads applications filtered by that UID. The previous rule did not
enforce the candidateId relationship on create and did not grant candidates read
access to their own applications.

HOW TO APPLY
------------
1. Open Firebase Console for the production Firebase project.
2. Open Firestore Database -> Rules.
3. Review the supplied firestore.rules carefully.
4. Publish the rules.
5. Test candidate A / candidate B isolation and admin access using test accounts.

Do not assume that uploading firestore.rules to GitHub automatically deploys it.
The repository currently does not contain firebase.json, so a Firebase CLI deploy
pipeline was not verified.

IMPORTANT
---------
- Do not expose service-account credentials.
- Do not weaken rules to "allow read, write: if true".
- Public employer/job enquiry creation is intentionally preserved.
- This package is not a penetration test or security certification.
- Firebase Console settings must be verified separately.
