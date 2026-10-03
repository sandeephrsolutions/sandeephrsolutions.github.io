Sandeep HR Solutions — Step 4.2 Accessibility
=============================================

Basis:
Step 4 of the Website Review is the technical/accessibility/legal phase.
This package focuses on practical accessibility improvements without changing
business logic.

FILES
-----
1. accessibility.css
   Add after existing site CSS.

2. accessible-page-pattern.html
   Reference pattern for the skip link and main-content landmark.

3. form-accessibility-pattern.html
   Reference pattern for labelled fields and accessible status messages.

4. accessibility-checklist.txt
   Page-by-page testing checklist.

IMPLEMENTATION ORDER
--------------------
A. Add accessibility.css to the public pages.
B. Add the skip link as the first focusable element in the body.
C. Give each public page's <main> element id="main-content".
D. Review headings so each page has a clear H1 and logical H2/H3 structure.
E. Review image alt text.
F. Review Jobs and Employers form labels/required states.
G. Ensure dynamic status/error messages are announced.
H. Test keyboard focus and mobile navigation.

IMPORTANT
---------
- Do NOT replace existing Firebase/Auth/Firestore code.
- Do NOT replace existing WhatsApp submission handlers.
- Do NOT remove candidate consent.
- Do NOT change the Jobs-only candidate login requirement.
- Do NOT add unsupported accessibility certification claims.
- The package is an implementation aid, not a WCAG compliance certificate.
