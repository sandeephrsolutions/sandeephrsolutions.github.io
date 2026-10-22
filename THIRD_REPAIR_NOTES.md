# Third Repair Batch — Trust, Privacy, Accessibility

Date: 22 October 2026

## Changes
- Expanded the privacy notice to describe candidate/employer information, recruitment-related sharing, Firebase processing, retention, user requests, and external services. This is general website wording, not legal advice; confirm it matches actual operations before publishing.
- Replaced generic template text in SECURITY.md with a practical private reporting process and scope limitations.
- Added explicit label/input associations on candidate login and registration forms.
- Standardized the known business Instagram link and replaced generic Facebook/YouTube home links with relevant search links where those placeholders appeared.

## Not changed
- Firestore rules and administrator UID/email authorization were not changed in this batch.
- No deployment was performed.
- No live Firebase, browser, or performance test was possible from source files alone.

## Before deployment
- Confirm the privacy notice matches actual data retention, employer sharing, Firebase settings, and the services currently in use.
- Confirm the linked social pages are the intended official profiles.
- Test candidate login/registration and all enquiry flows in a browser.
- Review deployed Firestore rules and Firebase Console settings.
