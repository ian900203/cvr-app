# CVR Apps — `app.cvrgroup.co`

Independent static web workspace for CVR Group, hosted on **GitHub Pages** and completely
separate from the marketing site at `cvrgroup.co` (GoDaddy Websites + Marketing).

The two only share the `cvrgroup.co` domain family. Nothing here depends on the main
site's theme, header, footer, or navigation.

## Architecture (one-time infrastructure)

```
DNS:  app.cvrgroup.co  --CNAME-->  ian900203.github.io
Host: GitHub Pages (repo: ian900203/cvr-app, branch main, root /)
TLS:  auto-provisioned by GitHub Pages for the custom domain
```

- `index.html` → `https://app.cvrgroup.co/` (minimal landing, no nav)
- `2026-us-real-estate-conference/` → `https://app.cvrgroup.co/2026-us-real-estate-conference/`
- `CNAME` → binds the Pages site to `app.cvrgroup.co` (do not delete)
- `robots.txt` + per-page `<meta name="robots" content="noindex,nofollow">` → keep everything unlisted
- `.nojekyll` → serve files as-is (no Jekyll build)

## Adding a new route (no DNS / SSL / hosting changes needed)

1. Create a folder named after the URL path, e.g. `dashboard/`.
2. Put an `index.html` (and any assets) inside it.
3. Add `<meta name="robots" content="noindex,nofollow">` in its `<head>`.
4. Commit and push to `main`.

It goes live at `https://app.cvrgroup.co/<folder>/` within ~1 minute. Use **relative**
asset paths (`assets/...`) so pages work at any depth.

## Deploy

```
git add -A && git commit -m "..." && git push
```

GitHub Pages redeploys automatically on push to `main`.
