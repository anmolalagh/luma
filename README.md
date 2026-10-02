# Luma

A personal guidance platform: chat with distinct virtual guides that share one privacy-controlled memory.
Stack: Next.js 14 (App Router), React, TypeScript, Tailwind CSS. Later phases add Supabase and OpenAI.

**Status: Phase 1** (design system, homepage, navigation, responsive layout). Other routes are placeholders.

## 1. Run it locally

You need [Node.js 20 LTS](https://nodejs.org) and [Git](https://git-scm.com).

```bash
cd luma
npm install
npm run dev
```

Open http://localhost:3000. Check it on a phone-sized window too (browser dev tools, device mode).
Before committing, run `npm run typecheck && npm run lint && npm run build`.

## 2. Put it on GitHub (free)

1. Create an account at github.com, then click **New repository**. Name it `luma`, keep it **Private**, do not add a README.
2. In the project folder:
   ```bash
   git init
   git add .
   git commit -m "Phase 1: design system and homepage"
   git branch -M main
   git remote add origin https://github.com/<your-username>/luma.git
   git push -u origin main
   ```

## 3. Deploy on Vercel (free Hobby plan)

1. Sign up at vercel.com with your GitHub account.
2. **Add New > Project**, import the `luma` repo, keep the defaults (Framework: Next.js), click **Deploy**.
3. Every push to `main` redeploys automatically. Pull requests get preview URLs.

Note: Vercel's Hobby plan is for personal, non-commercial use. Move to Pro when Luma launches publicly or earns money.

## 4. Supabase (needed from Phase 3; set up now or later)

1. Sign up at supabase.com, click **New project**, choose a region near your users (for example Mumbai or Singapore), set a strong database password and save it.
2. Open **Project Settings > API**. Copy the Project URL and the `anon` key.
3. Copy `.env.example` to `.env.local` and fill `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
4. In Vercel: **Project > Settings > Environment Variables**, add the same variables, then redeploy.
5. The service-role key (same API page) is secret. Only ever put it in `.env.local` and Vercel, never in code or chat.

Free-tier caveat: Supabase pauses free projects after about a week of no activity. Fine for development; upgrade before launch.

## 5. OpenAI (needed from Phase 6)

1. Create an API key at platform.openai.com. API usage is **not free**; you add prepaid credit (a few dollars is enough for testing).
2. Set a monthly usage limit in the dashboard.
3. Put the key in `.env.local` and Vercel as `OPENAI_API_KEY`. It is read only on the server.

## Project structure

```
src/app                routes (App Router)
src/components/layout  nav, footer, bottom tab bar
src/components/home    homepage sections
src/components/ui      buttons, avatar, badges
src/data               guides and categories (move to Supabase in Phase 4)
```

## Replacing guide portraits

Portraits are generated placeholder illustrations. To use a real image, set `avatarUrl` on a guide in `src/data/guides.ts` (in Phase 4, the `avatar_url` column). Nothing else changes.
