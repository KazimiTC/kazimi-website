# KAZIMI Website 🎵

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyour-username%2Fkazimi-website)
[![Powered by Vercel](https://img.shields.io/badge/Powered%20by-Vercel-black.svg?style=flat-square)](https://vercel.com)
[![Analytics by Plausible](https://img.shields.io/badge/Analytics%20by-Plausible-green.svg?style=flat-square)](https://plausible.io)

Electronic-Jazz fusion band website built with React + Vite + TypeScript + Tailwind CSS.

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer)
- [pnpm](https://pnpm.io/) (v8 or newer)

### Development

1. Clone the repository:
```bash
git clone https://github.com/your-username/kazimi-website.git
cd kazimi-website
```

2. Install dependencies:
```bash
pnpm install
```

3. Create a `.env` file in the root directory:
```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# Optional Analytics
VITE_PLAUSIBLE_DOMAIN=your_domain
```

4. Start the development server:
```bash
pnpm dev
```

The site will be available at `http://localhost:5173`

## 🔧 Environment Variables

Required Firebase configuration for the newsletter functionality:

| Variable | Description |
|----------|-------------|
| `VITE_FIREBASE_API_KEY` | Firebase API Key |
| `VITE_FIREBASE_AUTH_DOMAIN` | Firebase Auth Domain |
| `VITE_FIREBASE_PROJECT_ID` | Firebase Project ID |
| `VITE_FIREBASE_STORAGE_BUCKET` | Firebase Storage Bucket |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Firebase Messaging Sender ID |
| `VITE_FIREBASE_APP_ID` | Firebase App ID |

## 🚀 Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy to production:
```bash
vercel --prod
```

Vercel will automatically:
- Detect the React + Vite configuration
- Install dependencies using pnpm
- Build the project
- Deploy to their global edge network

### Build Locally

To build the site for production:
```bash
pnpm build
pnpm preview # Preview the build locally
```

## 📊 Analytics

This site uses [Plausible Analytics](https://plausible.io) for privacy-friendly analytics. No cookies are used and no personal data is collected.

## 🛠 Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Firebase](https://firebase.google.com/) (Newsletter Storage)

## 📝 License

MIT © KAZIMI
