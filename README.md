# SK Events: starter

```bash
cp .env.example .env
docker compose up -d        # local Postgres (or use Neon/Supabase)
npm install
npm run db:push             # creates the Enquiry table
npm run dev                 # http://localhost:3000
npm run db:studio           # view enquiries
```

- Copy, phone, email, Instagram: `lib/content.ts`
- Photos: `public/images` (sk-12 and sk-18 are in `public/extra` because they have text and logos baked in)
- Gallery order and crops: `GALLERY` in `lib/content.ts`
- The page is set to noindex while it is a sample (`app/layout.tsx`)
- Deploy: Vercel + Neon, set `DATABASE_URL`
