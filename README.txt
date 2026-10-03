Sandeep HR Solutions — Step 3.3 FAQ & Content UX
===================================================

STATUS
------
GitHub writes are currently blocked by the integration's HTTP 403 response.
No existing page was overwritten.

CURRENT REVIEW
--------------
- services.html already has FAQ content and FAQPage schema.
- jobs.html has a working candidate form and Firebase/Candidate Portal flow.
- employers.html has a working Firebase employer request form and WhatsApp handoff.
- contact.html already presents Pan-India coverage.
- No internal-draft wording was detected on these pages.

RECOMMENDED CONTENT CHANGES
---------------------------
1. Keep the existing Services FAQ. Do not create duplicate FAQ blocks.
2. Add a short visible FAQ section to Jobs only if desired, covering:
   - Is candidate registration free?
   - How does candidate registration work?
   - Where should candidates log in?
   Answers must match the site's actual workflow.
3. Add a short Employer FAQ covering:
   - What services can employers request?
   - Can employers submit recruitment requirements online?
   - How is the submitted information handled?
   Avoid promising turnaround times or outcomes that are not documented.
4. Keep the existing forms and Firebase functionality unchanged.
5. Do not add fake job vacancies or JobPosting schema.
6. Do not claim guaranteed placement, guaranteed interviews, guaranteed hiring,
   or guaranteed compliance outcomes.

IMPORTANT CURRENT ISSUE
-----------------------
jobs.html still visibly contains "Service Area: Bengaluru • Electronic City"
in its footer. The project's approved service coverage is Pan-India / All India.
Before publishing any Step 3.3 content package, update that footer wording to:
"Service Coverage: Pan-India / All India"
while preserving any job-specific location fields.

This note is intentionally an implementation guide rather than a blind full-page
replacement, so your latest manually uploaded Firebase code is not overwritten.
