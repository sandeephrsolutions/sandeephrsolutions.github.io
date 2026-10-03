Sandeep HR Solutions — Step 3.7 Mobile UX & Navigation
==========================================================

GitHub API write access remains blocked, so this package is for manual application.

CURRENT CHECK
-------------
Main pages generally use:
Home About Services Employers Jobs Contact Admin

Two consistency gaps were found:
1. employers.html does not currently include the Admin tab.
2. disclaimer.html does not currently contain the standardized site navigation.

Jobs has more overflow-sensitive CSS than most other pages.

PATCH
-----
A) employers-nav.html
   Replace only the existing Employers page navigation with this standardized nav,
   preserving the page's existing header/brand wrapper and CSS classes where possible.

B) disclaimer-header.html
   Add/replace the Disclaimer page's header/navigation with the standardized shell.
   Preserve the existing disclaimer content.

C) step3_7_mobile.css
   Add after existing CSS. It:
   - prevents horizontal page overflow
   - keeps images/media within viewport
   - gives navigation links 44px mobile tap height
   - stacks navigation on small screens
   - keeps buttons usable on touch screens

D) step3_7_mobile_nav.js
   OPTIONAL. Only use if a page does not already have a working mobile nav toggle.
   Do not add a second toggle script to a page that already has one.

IMPORTANT
---------
- Candidate Login remains only on jobs.html.
- Admin remains a normal navigation link to admin-login.html.
- Do not add Candidate Login to global navigation.
- Do not alter Firebase/Auth/Firestore code.
- Do not change employer form fields or submit handlers.
- Do not change individual job locations.
- Do not remove existing SEO metadata/schema.
- Do not replace complete pages unless necessary.

FINAL MOBILE CHECK
------------------
After applying:
1. Test Home, About, Services, Employers, Jobs, Contact, Privacy, Terms and Disclaimer
   at a narrow mobile viewport.
2. Confirm no horizontal scrolling.
3. Confirm all navigation links are tappable.
4. Confirm Admin is present on Employers and Disclaimer.
5. Confirm Candidate Login appears only inside Jobs.
6. Confirm existing Firebase forms still submit normally.
