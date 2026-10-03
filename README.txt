Sandeep HR Solutions — Step 3.5 Jobs UX
==========================================

STATUS
------
GitHub write access remains blocked by HTTP 403, so these are manual-application
snippets and have NOT been published automatically.

CURRENT REPOSITORY CHECK
------------------------
The readable Jobs page currently:
- has Candidate Login on the Jobs page
- contains the candidate consent check
- does not use the old "secure profile" wording
- does not currently contain a visible no-candidate-fee notice
- does not currently contain an explicit current-openings status block
- still has a footer saying "Service Area: Bengaluru • Electronic City"

PATCHES
-------
1. Add candidate-policy-notice.html near the top of the candidate section.
2. Add candidate-flow-note.html near the Candidate Portal/registration heading.
3. Add opening-status.html to clarify that verified openings are published when available.
4. Add step3_5.css to the existing stylesheet.
5. Change the Jobs footer only:
   "Service Area" -> "Service Coverage"
   "Bengaluru • Electronic City" -> "Pan-India / All India"

IMPORTANT
---------
Do NOT:
- replace jobs.html wholesale
- alter Firebase/Auth/Firestore code
- remove Candidate Login from Jobs
- add Candidate Login to Home or the global navigation
- invent current vacancies
- add JobPosting schema without a specific verified job opening
- change a real job's location field
- change the existing candidate consent logic

The "verified openings" wording is intentionally neutral and does not claim that
openings currently exist.
