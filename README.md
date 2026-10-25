# Renderly.AI (design + security base)

Next.js 15.5.18 (App Router) + TypeScript. No extra UI libraries.

Pages: /  /login  /signup  /verify  /dashboard  /admin  /admin/abuse

IMPORTANT
- This is a DESIGN PREVIEW. No real login, payments or video generation yet.
- Admin pages show dummy data only.
- Prices and credits are placeholders in lib/plans.ts.

## Run locally
npm install
npm run dev

## Before real launch
Set the environment variable DEMO_MODE=false on Vercel. Then /dashboard and /admin are locked
until real login (Supabase) is built in the backend phase.
