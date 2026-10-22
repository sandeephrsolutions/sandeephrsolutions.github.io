# Second repair batch — Sandeep HR Solutions

## Applied in this ZIP
- Standardized active-site business/admin email to `sandeep.hr.solutions.shr@gmail.com` across HTML, JavaScript, Firestore rules, and active documentation. Archived historical files were left unchanged.
- Added canonical URLs and Open Graph metadata to the 11 public pages listed in `sitemap.xml`.
- Marked `home-alternative.html` as `noindex,follow` to reduce duplicate-homepage indexing.
- Preserved the existing Firestore authorization rules; no unverified permission changes were deployed or substituted.

## Security verification status
- The current rules keep candidate records UID-restricted, job publishing admin-only, application reads restricted to the candidate/admin, and public enquiry writes enabled.
- Public `employers` and `jobRequests` writes remain a spam/abuse risk. Strong field validation must be based on the exact payloads produced by each live form and tested against current Firestore data. This batch intentionally does not tighten those rules without schema/form compatibility testing.
- The configured admin UID remains `A5y0cl3ZvRdlzFgDuQsYUjVCeNq2`; confirm that this is the intended current Firebase Authentication UID in Firebase Console.
- Client-side Firebase web configuration is expected to be visible; it is not a server secret. Do not add service-account credentials to the website.
- Firebase Console settings (deployed rules, authorized domains, App Check, account recovery and password policies) cannot be verified from the ZIP alone.

## Before publishing
1. Confirm the admin UID and official email in Firebase Authentication.
2. Deploy and test rules in Firebase Emulator or a staging project before changing public-write validation.
3. Test candidate registration/login, profile edits, applications, public employer enquiries, and admin review/publish flows.
4. Run live mobile, accessibility and Lighthouse checks after deployment.
