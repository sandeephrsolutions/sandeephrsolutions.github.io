Sandeep HR Solutions — Step 3.6 Contact & Employer UX
======================================================

This is a focused manual patch. GitHub API write access is still blocked, so it
has NOT been published automatically.

CURRENT CHECK
-------------
contact.html:
- already has WhatsApp and email contact actions
- already uses Pan-India / All India wording
- no Firebase form logic was detected

employers.html:
- has an existing Firebase-backed employer requirement form
- already has a post-submit process section
- does not currently contain the Pan-India / All India coverage wording consistently

PATCH
-----
1. Add contact-routing-section.html to contact.html before the main contact details/form.
2. Add employer-process-section.html ONLY if the existing employer process section is absent.
   The current repository already appears to contain a process section, so do not duplicate it.
3. Apply step3_6.css to the existing stylesheet if desired.
4. Apply coverage-consistency.txt to employers.html footer/service-coverage wording.

DO NOT
------
- replace contact.html or employers.html wholesale
- alter Firebase imports, Firestore collection names, addDoc logic, or submit handlers
- remove existing WhatsApp/email actions
- move Candidate Login into the global navigation
- describe Bengaluru/Electronic City as service coverage
- invent response times, fees, SLAs, licences, guarantees, or client claims

USER-FACING ROUTING
------------------
Employer -> Employer Enquiry
Candidate -> Jobs & Candidate Registration
General enquiry -> existing contact options

The candidate path is intentionally linked to jobs.html because Candidate Login
is intended to remain inside the Jobs page.
