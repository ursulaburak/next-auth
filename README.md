## Next.js + NextAuth + Auth0 Authentication System

This project implements an authentication and authorization system using Next.js (App Router), NextAuth.js, and Auth0, following SOLID principles and 12-Factor App methodology.

Users can log in via Auth0 OAuth, sessions are handled via JWT, and pages are protected with middleware.
It also includes role-based access control (RBAC) and Playwright E2E tests for authentication flows.

🛡 Features

*Next.js 14+ (App Router)
*Auth0 OAuth integration via NextAuth
*JWT-based session handling
*Role-based access control (RBAC)
*Middleware-protected routes
*TypeScript for type safety
*TailwindCSS (UI styling)
*12-Factor compliance via .env configuration
*Playwright E2E tests for login flows

📂 Branching Strategy

dev/v1.0.0 → development branch

prod/v1.0.0 → production branch

⚙️ Installation
1. Clone the Repo (git clone https://github.com/ursulaburak/next-auth.git)
2. Install Dependencies (npm install)
3. Setup Environment Variables

Create a .env.local file in the root:
  AUTH0_CLIENT_ID=your_auth0_client_id
  AUTH0_CLIENT_SECRET=your_auth0_client_secret
  AUTH0_ISSUER_BASE_URL=https://your-tenant.auth0.com
  NEXTAUTH_SECRET=your_random_secret
  NEXTAUTH_URL=http://localhost:3000


Testing with Playwright

This project includes end-to-end (E2E) tests for authentication.

npm install -D @playwright/test
npx playwright install

Add Test Script (package.json)
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "test:e2e": "playwright test"
}


