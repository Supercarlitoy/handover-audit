# Ward Handover Audit (PWA)

Mobile-first, offline-capable PWA to run Level-1 PDSA handover audits (NSQHS Std 6).

## Use
1) Open https://supercarlitoy.github.io/handover-audit/
2) Install: Safari "Add to Home Screen" / Chrome "Install app".
3) On iPhone/iPad: Safari → Share → Add to Home Screen (no auto-prompt).
4) Settings: set baseline %, target (85%), cycle dates.
5) Do one audit per shift (AM/PM/ND). Notes ≤10 words, no identifiers.
6) Exports: RAW, SUMMARY, CHANGEPOINTS, DEBRIEFS; filenames `SRF_<MMDDYYYY>_<TYPE>.csv`.

## Build
Static site. Files in repo root:
- index.html
- sw.js
- manifest.webmanifest
- .nojekyll (optional)

Service worker scope requires `sw.js` next to `index.html`.
