# Deployment

## Detected Stack

- Package manager: pnpm workspace
- Frontend: `artifacts/palm-grove`, Vite + React
- Backend/API: `artifacts/api-server`, Express
- Shared packages: `lib/api-client-react`, `lib/api-zod`, `lib/api-spec`, `lib/db`

## Frontend: Vercel

- Vercel root directory: repository root
- Build command: `pnpm --filter @workspace/palm-grove run build`
- Install command: `pnpm install --frozen-lockfile`
- Output directory: `artifacts/palm-grove/dist/public`
- Config file: `vercel.json`

Required Vercel environment variables:

- `VITE_API_URL`: Railway API public URL, for example `https://your-api.up.railway.app`
- `BASE_PATH`: optional; use `/` unless deploying under a subpath

## Backend: Railway

- Railway root directory: repository root
- Build command: `pnpm --filter @workspace/api-server run build`
- Start command: `pnpm --filter @workspace/api-server run start`
- Health check path: `/health`
- Config file: `railway.json`

Required Railway environment variables:

- `PORT`: set automatically by Railway
- `CORS_ORIGINS`: comma-separated allowed frontend origins, for example `https://your-vercel-app.vercel.app,https://www.your-domain.com`
- `DATABASE_URL`: required when database-backed routes are enabled or when importing `@workspace/db`

## Local Development

Install dependencies:

```sh
pnpm install
```

Run the frontend:

```sh
pnpm --filter @workspace/palm-grove run dev
```

Run the backend:

```sh
pnpm --filter @workspace/api-server run dev
```

Build all packages:

```sh
pnpm run build
```

Build individual apps:

```sh
pnpm --filter @workspace/palm-grove run build
pnpm --filter @workspace/api-server run build
```

## Production Checklist

- Create the Railway service from the repository root.
- Set Railway build/start commands from this document or rely on `railway.json`.
- Deploy Railway and confirm `/health` returns `{ "status": "ok" }`.
- Create the Vercel project from the repository root.
- Set `VITE_API_URL` in Vercel to the Railway public service URL.
- Set `CORS_ORIGINS` in Railway to the Vercel production domain and any custom domains.
- Deploy Vercel and confirm the app loads from `artifacts/palm-grove/dist/public`.
- Do not commit real `.env` files or secrets.
