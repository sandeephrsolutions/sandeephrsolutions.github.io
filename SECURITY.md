# Security Policy — Sandeep HR Solutions Website

## Scope

This policy covers the public website source and its website-facing functionality. Firebase Authentication, Firestore, hosting, and third-party services also have separate project settings that must be reviewed in their respective consoles.

## Reporting a security concern

Please report suspected vulnerabilities privately to **sandeep.hr.solutions.shr@gmail.com**. Include the affected page or feature, a concise description, the potential impact, and steps to reproduce the issue. Do not include real candidate resumes, passwords, access tokens, or other personal or secret information in the report.

Please do not publicly disclose a suspected issue before giving us a reasonable opportunity to investigate it. Do not access, modify, download, or delete information belonging to other people, and do not perform testing that could disrupt the website or services.

We will review reports and, where practical, respond by email. A response or fix timeline cannot be guaranteed.

## Important security boundaries

- Administrator-only pages being hidden from search engines is not access control. Firebase Authentication and deployed Firestore rules must enforce authorization.
- Firebase web configuration values may appear in browser code; never publish service-account private keys or server-side secrets.
- Public enquiry forms can be abused. Keep validation, abuse prevention, monitoring, and Firebase project settings under review.
- This source repository has not been independently penetration-tested or security-certified.
