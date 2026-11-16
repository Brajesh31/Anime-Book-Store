# 🔐 Security policy

## 1. Project security status
Anime Book Store is a learning-oriented CRUD application. It is not a production-hardened commerce platform. The API currently has no user authentication or authorization. Do not expose write operations to untrusted users until the required controls have been implemented and reviewed.

## 2. Supported reporting scope
Report vulnerabilities affecting the current default branch, including:
- Express routes and request validation.
- MongoDB configuration and access.
- Frontend handling of API responses.
- Dependency and build configuration.
- CI workflows and repository automation.

## 3. Known credential exposure
A MongoDB URI containing embedded credentials was previously committed to backend source. Treat that credential as compromised. The active configuration has been changed to require environment-based configuration, but source cleanup alone does not invalidate the old database user or erase Git history.

Required action for the database owner:
1. Rotate or replace the password/user at the database provider.
2. Revoke the old credential.
3. Inspect provider access logs.
4. Update authorized runtime environments with the new value.
5. Review repository history and decide whether coordinated history rewriting is appropriate.

Do not copy the old or replacement URI into issues, pull requests, documentation, screenshots, or chat.

## 4. Reporting a vulnerability
Report privately to the maintainer using the contact route available through [GitHub @Brajesh31](https://github.com/Brajesh31). Do not publish a working exploit or secret in a public issue.

Include:
- A concise impact statement.
- Affected route, file, or dependency.
- Safe reproduction steps.
- Expected and observed behavior.
- Redacted logs or screenshots.
- Any known mitigation.

Never include passwords, access tokens, database exports, personal data, or private records.

## 5. Response expectations
No formal response or remediation SLA is currently published. The maintainer should acknowledge the report, assess impact, coordinate a fix, and communicate when public disclosure is safe. Do not assume a specific response time.

## 6. Secure development requirements
- Validate all request data on the server.
- Reject unknown fields and prevent mass assignment.
- Use least-privilege database credentials.
- Keep secrets out of source and browser bundles.
- Restrict CORS to intended browser origins.
- Avoid returning stack traces or database errors to clients.
- Review dependency audit findings.
- Use HTTPS and host-managed secrets in production.
- Add authentication, authorization, rate limiting, and monitoring before public write access.

## 7. Responsible disclosure
Give the maintainer reasonable time to investigate and remediate before public disclosure. Avoid accessing, modifying, or retaining data that does not belong to you.
