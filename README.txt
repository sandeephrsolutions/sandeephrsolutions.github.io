Sandeep HR Solutions — Step 3.4 Employer & Contact UX
========================================================

STATUS
------
GitHub write access is currently returning HTTP 403, so these are implementation
snippets and have NOT been published automatically.

EMPLOYERS PAGE
--------------
Add employer-process-snippet.html immediately before the employer service form.

Add the form-note text immediately before the submit button.

Keep the existing:
- Firebase Firestore submission
- WhatsApp handoff
- service selection
- recruitment conditional fields
- existing validation
- Admin navigation

CONTACT PAGE
------------
Add contact-cta-snippet.html in the main content area after the primary contact
information and before the footer/legal section.

The CTA goes to employers.html so business requirements remain separate from
candidate registration.

STYLING
--------
Add step3_4.css to the existing page stylesheet, or copy its rules into the
existing <style> block.

IMPORTANT
---------
Do not add:
- guaranteed response times
- guaranteed placement/hiring claims
- invented office hours
- a private exact address
- candidate registration into the employer form

The approved service coverage remains Pan-India / All India.
