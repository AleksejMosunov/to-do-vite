# To-Do Vite App

A task management Single Page Application built with React, TypeScript, Vite, React Router, and Zustand.

The app includes authentication, protected routes, and CRUD operations for todos through a backend API.

## Main Features

- Login with backend token and token storage in `localStorage`
- Protected pages (`/` and `/profile`) via route guard
- Create new todos (title + description)
- Toggle todo completion
- Delete todos
- Split todo lists by state (active/archive behavior in list component)
- Responsive app layout with shared header/footer

## Tech Stack

- React 19
- TypeScript
- Vite
- React Router DOM
- Zustand
- ESLint

## Prerequisites

- Node.js 18+ (recommended: latest LTS)
- npm 9+
- Running backend API

## Environment Variables

Create or update environment files in the project root:

`.env.development`

```env
VITE_BACK_URL=http://localhost:3000
```

`.env.production`

```env
VITE_BACK_URL=https://your-api-url
```

The frontend expects:

- `POST {VITE_BACK_URL}/auth/login`
- `GET {VITE_BACK_URL}/todos`
- `POST {VITE_BACK_URL}/todos`
- `DELETE {VITE_BACK_URL}/todos/:id`
- `PATCH {VITE_BACK_URL}/todos/:id/toggle`

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open app in browser:

```text
http://localhost:5173
```

## Available Scripts

- `npm run dev` - start Vite dev server
- `npm run build` - type-check and build production bundle
- `npm run preview` - preview production build locally
- `npm run lint` - run ESLint

## App Routes

- `/` - Home page (protected)
- `/login` - Login page
- `/about` - About page
- `/register` - Register page (currently placeholder)
- `/profile` - Profile page (protected)

## Project Structure

- `src/pages` - route pages
- `src/components` - reusable UI and app components
- `src/store` - Zustand store
- `src/services` - API communication layer
- `src/models` - TypeScript models/types

## Notes

- If no token is available, protected routes redirect to login.
- The app currently relies on backend availability for todo data.
