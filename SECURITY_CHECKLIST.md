# Security Checklist

## ✅ Pre-Deployment Security

Before going live, verify these security measures:

### Repository Security

- [ ] This repository is set to **Private** on GitHub
- [ ] Public repository contains **only** built files (no source code)
- [ ] `.gitignore` is configured properly
- [ ] No secrets or API keys in any committed files
- [ ] `DEPLOY_TOKEN` stored in GitHub Secrets (not in code)

### Access Control

- [ ] Limit who has write access to this private repository
- [ ] Limit who has admin access to Decap CMS
- [ ] Use strong passwords for all GitHub accounts
- [ ] Enable 2FA (Two-Factor Authentication) on all admin accounts
- [ ] Review collaborators regularly

### Configuration Files

- [ ] `admin/config.yml` - Verify repo name is correct
- [ ] `.github/workflows/deploy.yml` - Verify external_repository is correct
- [ ] No hardcoded credentials anywhere in the codebase

### OAuth & Authentication

- [ ] GitHub OAuth is properly configured for Decap CMS
- [ ] OAuth application is set to the correct callback URL
- [ ] Only authorized users can access `/admin/`

### Deployment Pipeline

- [ ] GitHub Action only deploys to the public repo
- [ ] Personal access token has minimal required permissions
- [ ] Token expiration is set (or plan to rotate annually)
- [ ] Build process doesn't expose sensitive data

## 🔍 Regular Security Audits

### Monthly Checks

- [ ] Review who has access to both repositories
- [ ] Check GitHub Actions logs for suspicious activity
- [ ] Verify all team members still need their access level
- [ ] Ensure 2FA is enabled for all admins

### Quarterly Checks

- [ ] Rotate GitHub Personal Access Token if needed
- [ ] Review and update dependencies (`bundle update`)
- [ ] Check for security advisories on dependencies
- [ ] Audit commit history for accidentally committed secrets

### Annual Checks

- [ ] Review entire security setup
- [ ] Update all credentials and tokens
- [ ] Remove access for former team members
- [ ] Update documentation

## 🚨 Incident Response

### If a Secret is Accidentally Committed

1. **Immediately revoke** the exposed credential
2. Generate a new credential/token
3. Update GitHub Secrets with new credential
4. Use `git filter-branch` or BFG Repo-Cleaner to remove from history
5. Force push to overwrite history (coordinate with team first!)
6. Document the incident

### If Unauthorized Access is Detected

1. Immediately revoke all tokens and credentials
2. Review all recent commits and changes
3. Check GitHub audit log
4. Remove unauthorized users
5. Change all passwords
6. Enable additional security measures
7. Document the incident

## 📋 Common Security Mistakes to Avoid

❌ **Never do this:**
- Commit `.env` files
- Hardcode API keys or tokens
- Share credentials via chat/email
- Use the same password everywhere
- Leave default credentials unchanged
- Give everyone admin access
- Skip 2FA

✅ **Always do this:**
- Use GitHub Secrets for sensitive data
- Rotate credentials regularly
- Use principle of least privilege
- Enable 2FA on all accounts
- Review access permissions regularly
- Keep dependencies updated
- Document security procedures

## 🔐 Files That Should NEVER Be Committed

- `.env`
- `secrets.yml`
- `credentials.json`
- Private keys (`.pem`, `.key`)
- Database credentials
- API keys or tokens
- Personal information

These files are already in `.gitignore`, but always double-check!

## 🛡️ Additional Security Measures (Optional)

Consider these for enhanced security:

- [ ] Set up Dependabot for automated dependency updates
- [ ] Enable GitHub Security Advisories
- [ ] Use branch protection rules on main branch
- [ ] Require pull request reviews before merging
- [ ] Set up automated security scanning
- [ ] Use signed commits (GPG)

## 📞 Who to Contact

**Security Issues**: [Your security contact email]
**Repository Owner**: [Owner name and contact]
**Technical Lead**: [Tech lead name and contact]

## 📚 Resources

- [GitHub Security Best Practices](https://docs.github.com/en/code-security)
- [Decap CMS Security](https://decapcms.org/docs/)
- [Jekyll Security](https://jekyllrb.com/)

---

**Last Updated**: [Add date when you complete setup]
**Next Audit Due**: [Add date 3 months from setup]
