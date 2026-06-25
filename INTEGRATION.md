# Website Engine — Integration Guide

This document is for developers merging the new Next.js 14 App Router scaffold
into the existing local codebase at
`C:\Users\trueh\mcs-repos\Website System\Website Engine\`.

---

## Full Repo File Tree (main branch)

```
website-engine/
├── app/
│   ├── layout.js
│   └── _tenants/
│       └── [tenant]/
│           ├── (home)/
│           │   └── page.js
│           ├── about/
│           │   └── page.js
│           ├── contact/
│           │   └── page.js
│           └── services/
│               └── page.js
├── components/
│   └── templates/
│       ├── index.js
│       ├── Apex.jsx
│       ├── apex.css
│       └── sub-pages/
│           ├── ApexAbout.jsx
│           ├── ApexContact.jsx
│           └── ApexServices.jsx
├── lib/
│   └── tenant.js
├── next.config.js
├── package.json
├── INTEGRATION.md         ← this file
```

---

## Build Status

```
npx next build  →  ✓ Compiled successfully  (no errors, no warnings)
```

---

## Git Commands — Pull Only the Template Files

Run these from inside your existing local repo root
(`C:\Users\trueh\mcs-repos\Website System\Website Engine\`).

```bash
# 1. Add the GitHub repo as a remote (one-time)
git remote add engine https://github.com/truj0e/website-engine.git

# 2. Fetch the main branch metadata (no checkout)
git fetch engine main

# 3. Pull specific template files into your working tree
git checkout engine/main -- components/templates/index.js
git checkout engine/main -- components/templates/Apex.jsx
git checkout engine/main -- components/templates/apex.css
git checkout engine/main -- components/templates/sub-pages/ApexAbout.jsx
git checkout engine/main -- components/templates/sub-pages/ApexContact.jsx
git checkout engine/main -- components/templates/sub-pages/ApexServices.jsx

# 4. Also pull the app routes and lib if you want the full scaffold
git checkout engine/main -- app/_tenants/
git checkout engine/main -- lib/tenant.js
```

> **Note:** `git checkout <remote>/<branch> -- <path>` writes files directly
> into your working tree without touching your branch history. Stage and commit
> them as part of your normal workflow.

---

## PowerShell One-Liner — Copy Template Files from a Fresh Clone

Open PowerShell in any scratch directory, then run:

```powershell
git clone --depth 1 https://github.com/truj0e/website-engine.git _engine_tmp; `
$dest = "C:\Users\trueh\mcs-repos\Website System\Website Engine"; `
$src  = ".\_engine_tmp"; `
$files = @( `
  "components\templates\index.js", `
  "components\templates\Apex.jsx", `
  "components\templates\apex.css", `
  "components\templates\sub-pages\ApexAbout.jsx", `
  "components\templates\sub-pages\ApexContact.jsx", `
  "components\templates\sub-pages\ApexServices.jsx" `
); `
foreach ($f in $files) { `
  $target = Join-Path $dest $f; `
  New-Item -ItemType Directory -Force -Path (Split-Path $target) | Out-Null; `
  Copy-Item (Join-Path $src $f) $target -Force `
}; `
Remove-Item $src -Recurse -Force; `
Write-Host "Done — template files copied."
```

---

## Acceptance Checklist

- [ ] `npm install` completes without errors
- [ ] `npx next build` reports **✓ Compiled successfully** with no errors
- [ ] `/app/_tenants/[tenant]/(home)/page.js` routes to the correct template component
- [ ] `/app/_tenants/[tenant]/services/page.js` renders `ApexServices`
- [ ] `/app/_tenants/[tenant]/about/page.js` renders `ApexAbout`
- [ ] `/app/_tenants/[tenant]/contact/page.js` renders `ApexContact`
- [ ] `lib/tenant.js` → `getTenantData()` is wired to a real data source (DB/CMS)
- [ ] `components/templates/index.js` exports resolve without import errors
- [ ] No `404` on any of the 20 test URLs below
- [ ] Tenant-specific business name, phone, and address appear on the home page
- [ ] Services list matches the tenant's actual service offerings
- [ ] CSS (`apex.css`) loads without FOUC or missing styles
- [ ] `<head>` title is populated per-tenant (update `app/layout.js` metadata)
- [ ] No console errors in the browser on any page
- [ ] Mobile viewport renders correctly on all 4 page types

---

## 20 Test URLs

Replace `{host}` with `http://localhost:3000` during local testing or your
staging domain after deployment.

### Home (5)
| # | URL |
|---|-----|
| 1 | `{host}/_tenants/apex-demo` |
| 2 | `{host}/_tenants/apex-austin` |
| 3 | `{host}/_tenants/apex-houston` |
| 4 | `{host}/_tenants/apex-dallas` |
| 5 | `{host}/_tenants/apex-sa` |

### Services (5)
| # | URL |
|---|-----|
| 6  | `{host}/_tenants/apex-demo/services` |
| 7  | `{host}/_tenants/apex-austin/services` |
| 8  | `{host}/_tenants/apex-houston/services` |
| 9  | `{host}/_tenants/apex-dallas/services` |
| 10 | `{host}/_tenants/apex-sa/services` |

### About (5)
| # | URL |
|---|-----|
| 11 | `{host}/_tenants/apex-demo/about` |
| 12 | `{host}/_tenants/apex-austin/about` |
| 13 | `{host}/_tenants/apex-houston/about` |
| 14 | `{host}/_tenants/apex-dallas/about` |
| 15 | `{host}/_tenants/apex-sa/about` |

### Contact (5)
| # | URL |
|---|-----|
| 16 | `{host}/_tenants/apex-demo/contact` |
| 17 | `{host}/_tenants/apex-austin/contact` |
| 18 | `{host}/_tenants/apex-houston/contact` |
| 19 | `{host}/_tenants/apex-dallas/contact` |
| 20 | `{host}/_tenants/apex-sa/contact` |

> Once `getTenantData()` is wired to real data, swap the slugs above for your
> actual tenant identifiers.
