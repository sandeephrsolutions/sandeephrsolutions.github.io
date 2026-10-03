Sandeep HR Solutions — Step 3.8 Forms, Validation & User Feedback
================================================================

GitHub write access remains blocked, so this is a manual patch.

CURRENT CHECK
-------------
jobs.html:
- 1 form
- native required validation present
- existing submit handling with preventDefault
- Firebase-related candidate operation present
- WhatsApp workflow present

employers.html:
- 1 form
- native required validation present
- existing submit handling with preventDefault
- Firestore jobRequests-related logic present
- WhatsApp workflow present
- existing alert feedback present

contact.html:
- no HTML form was detected
- Firebase/WhatsApp references are present, so preserve its current implementation

PATCH
-----
1. Add validation-ux.css to the existing stylesheet.
2. Add one status-markup.html block immediately before the submit button in
   jobs.html and employers.html, if a status element is not already present.
3. Use safe-submit-pattern.js as a pattern for the EXISTING async submit handlers.

IMPORTANT
---------
Do NOT:
- replace sendCandidate() or the employer submit handler wholesale
- change Firebase Auth, Firestore collection names, security rules, or imports
- change WhatsApp destinations
- remove the candidate consent checkbox
- remove native required validation
- add fake success messages before Firebase has actually succeeded
- add invented response times or guarantees
- add a contact form if the current contact page intentionally uses direct contact actions

SAFE USER FEEDBACK
------------------
For candidate submission:
- Validate normally.
- Disable the submit button while the existing async action is running.
- Show success only after the existing operation succeeds.
- Restore the button if an error occurs.

For employer submission:
- Same pattern around the existing Firestore + WhatsApp flow.
- Do not create a duplicate Firestore record on double-click.

ACCESSIBILITY
-------------
Keep visible labels, native validation, keyboard focus, and aria-live status.
Do not rely only on color to communicate errors.
