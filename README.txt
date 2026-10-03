Sandeep HR Solutions — Step 3.9 Accessibility & SEO Final Pass
=================================================================

GitHub API write access is still blocked, so this package is for manual application.

CURRENT FINDINGS
----------------
Jobs:
- title, description and canonical already present
- robots directive was missing
- OG metadata was incomplete

Employers:
- title, description and canonical already present
- robots directive was missing
- OG metadata was incomplete

Privacy:
- title/description present
- canonical and robots were missing

Disclaimer:
- title/description present
- canonical and robots were missing
- standardized navigation was addressed separately in Step 3.7

Admin Login:
- title present
- canonical, description and robots were missing
- recommended robots directive is noindex,nofollow,noarchive because this is an
  administrative login page, not public search content

Images:
- main-page logo images already have alt text
- the small decorative Admin logo uses alt="", which is acceptable for decorative imagery

STRUCTURED DATA
---------------
A ProfilePage/Person schema is supplied for About.
A WebSite schema is supplied as a fallback for Home.

IMPORTANT:
- Do not duplicate an identical WebSite schema if it is already present.
- Do not create fake reviews, ratings, certifications, licences, clients or JobPosting data.
- Keep the existing Organization schema where already present.
- If a structured-data block already exists, merge carefully rather than adding duplicates.

CANONICAL URLS
--------------
Use the existing GitHub Pages domain:
https://sandeephrsolutions.github.io/

This package intentionally does not modify sitemap.xml or robots.txt because those
files already exist and should be changed only if their contents are actually wrong.

AFTER APPLYING
--------------
Validate:
- page source contains exactly one canonical URL on each public page
- no accidental duplicate robots meta
- Admin Login is noindex
- JSON-LD parses without errors
- each main content page has one H1
- all meaningful images have alt text
- forms retain native labels/required validation
