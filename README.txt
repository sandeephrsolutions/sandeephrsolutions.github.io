Sandeep HR Solutions — Step 3.2 Structured Data
=================================================

STATUS
------
GitHub writes are still blocked by HTTP 403, so apply these snippets manually.

1) ABOUT PAGE
-------------
Open about.html and place the contents of about-profile-schema.html inside <head>,
before </head>.

This uses ProfilePage + Person because the About page's primary focus is the founder.
It uses only information already presented on the page.

2) HOME PAGE
------------
Open index.html and place website-schema.html inside <head>, before </head>.

The home page already has Organization JSON-LD. Keep that existing Organization
schema; do not create a second Organization block.

3) SAME-AS CLEANUP
------------------
In the existing Organization JSON-LD on index.html (and any duplicate Organization
blocks you keep), change the Instagram URL from the tracking-parameter version:

https://www.instagram.com/sandeep_hr_solutions?stkn=MXd6aW4wdnhsZTNkMA==

to:

https://www.instagram.com/sandeep_hr_solutions/

Do not add social accounts that are not actually controlled by Sandeep HR Solutions.

4) DO NOT ADD
-------------
- Review/AggregateRating schema
- fake testimonials or client ratings
- JobPosting schema without real individual live vacancies
- licence/certification claims
- private exact address

5) VALIDATION
-------------
After publishing, validate the Home and About URLs with Google's Rich Results Test
and inspect them in Google Search Console.
