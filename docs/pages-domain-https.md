# smallwiseone.com — GitHub Pages domain + HTTPS checklist

**Status (as of issue #25):** GitHub reported domain unverified and `https_enforced: false` while the site still returned HTTP 200. **Do not apply irreversible DNS or Enforce HTTPS until Mark approves.**

## In-repo

- `CNAME` should contain `smallwiseone.com`. Do not delete it.

## Cloudflare DNS Mark must approve

| Type | Name | Target / value | Notes |
|------|------|----------------|-------|
| `A` / flattening | `@` | GitHub Pages IPs or `smallwiseonedesign.github.io` per current GitHub docs | Confirm live Cloudflare config first |
| `CNAME` | `www` | `smallwiseonedesign.github.io` | www → Pages |
| `TXT` | `_github-pages-challenge-…` from GitHub UI | value from **Settings → Pages → Verify** | Do not invent |

Reference: [Managing a custom domain for your GitHub Pages site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## GitHub UI steps (Mark)

1. **Settings → Pages → Custom domain**: `smallwiseone.com`
2. **Verify** + Cloudflare TXT (Mark-approved)
3. After **Verified**, enable **Enforce HTTPS**
4. Confirm `https://smallwiseone.com` is clean

## Related Issues (do not duplicate)

- #15 About page — open PR https://github.com/SmallWiseOneDesign/smallwiseone.github.io/pull/24
- #21 Printful / webstore — no overnight spend; marketplace-first until Mark picks API path
- #22 Higher-quality images — preferred drop folder is `Assets/` (existing `*_web.jpg` pattern)

## Acceptance for #25

Verified domain + HTTPS enforced; `https://smallwiseone.com` clean.
