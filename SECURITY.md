# 🔐 Security policy

## Scope
Reports are welcome for the main branch. This is a learning-oriented CRUD application and is not production-hardened.

## Known critical exposure
A credential-bearing MongoDB URI exists in tracked backend configuration. Treat it as compromised. Rotate and revoke the database credential immediately, inspect provider access logs, and remove the secret from active source in a dedicated change. Do not reproduce the URI in issues, PRs, logs, or messages. Removing it from the latest source does not erase Git history.

## Reporting
Report vulnerabilities privately to the maintainer through the contact details on [GitHub @Brajesh31](https://github.com/Brajesh31). Do not publish working exploits or secrets in public issues. Include impact, affected route/module/dependency, safe reproduction steps, and redacted evidence. Never send credentials or production records. No guaranteed response/remediation SLA is currently published.
