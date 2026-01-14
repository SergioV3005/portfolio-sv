# Sergio Verga Portfolio

Production-ready portfolio site built with Next.js (App Router), TypeScript, and Tailwind.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run start
```

## Lint, typecheck, format

```bash
npm run lint
npm run typecheck
npm run format
```

## Deploy on Vercel

1. Push this repository to GitHub.
2. Sign in to https://vercel.com and click "New Project".
3. Import the GitHub repository and keep the default settings (Framework: Next.js).
4. Click "Deploy". Vercel will run `npm install` and `npm run build` automatically.
5. After deployment, open the production URL or connect a custom domain in the Vercel project settings.

## Content updates

- Site metadata and bio: `content/site.ts`
- Projects list: `content/projects.ts`
- Experience: `content/experience.ts`
- Education: `content/education.ts`
- Writing: `content/writing.ts`

Static assets live in `public/` and `public/images/`.
