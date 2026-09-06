# Image assets — preferred location

For issue #22 (higher-quality images):

## Where to save

Prefer **`Assets/`** at the repo root (already used by the site).

## Naming

Match existing patterns when replacing web-optimized files, e.g.:

- `Assets/*_web.jpg` for product shots used on the homepage
- `Assets/swo_logo.svg` for the logo
- `Assets/about.jpg` on the about-page PR branch (`issue-15-add-about-page`)

## Workflow

1. Loretta exports high-quality masters (local/OneDrive — keep masters out of git if huge).
2. Mark (or reviewer) exports web-sized JPEG/WebP and replaces the matching `Assets/*` path used in HTML.
3. Keep file names stable so `index.html` / about page paths do not break.

## Current homepage Asset references

See `index.html` and (on PR #24) `about/index.html` for the live path list when reviewing replacements.
