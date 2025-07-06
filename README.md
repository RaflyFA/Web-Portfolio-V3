# Rafly FA Portfolio

*Automatically synced with your [v0.dev](https://v0.dev) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/rflyfas-projects/v0-rafly-fa-portfolio)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/LvBFhxmipht)

## Overview

Portfolio website untuk Rafly FA - Web Developer & UI/UX Designer. Website ini dibangun menggunakan Next.js 15, React 19, TypeScript, dan Tailwind CSS dengan animasi Framer Motion.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Animations**: Framer Motion
- **Icons**: Lucide React & React Icons
- **Package Manager**: npm

## Getting Started

### Prerequisites

Pastikan Anda memiliki Node.js versi 18 atau lebih baru dan npm versi 8 atau lebih baru.

\`\`\`bash
node --version  # Should be >= 18.0.0
npm --version   # Should be >= 8.0.0
\`\`\`

### Installation

1. Clone repository ini:
\`\`\`bash
git clone <repository-url>
cd rafly-portfolio
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Jalankan development server:
\`\`\`bash
npm run dev
\`\`\`

4. Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

## Available Scripts

- `npm run dev` - Menjalankan development server
- `npm run build` - Build aplikasi untuk production
- `npm run start` - Menjalankan production server
- `npm run lint` - Menjalankan ESLint untuk code linting
- `npm run clean` - Membersihkan cache dan dependencies
- `npm run reinstall` - Clean install dependencies

## Project Structure

\`\`\`
rafly-portfolio/
├── app/                    # Next.js App Router
│   ├── components/         # React components
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable UI components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── public/                # Static assets
├── styles/                # Additional styles
└── ...config files
\`\`\`

## Features

- ✅ Responsive design untuk semua device
- ✅ Dark/Light mode toggle
- ✅ Smooth scrolling navigation
- ✅ Animated components dengan Framer Motion
- ✅ Contact form dengan WhatsApp integration
- ✅ Project showcase dengan tech stack icons
- ✅ Certificate gallery
- ✅ SEO optimized
- ✅ TypeScript untuk type safety
- ✅ Modern UI dengan Tailwind CSS

## Deployment

Project ini dapat di-deploy ke berbagai platform:

### Vercel (Recommended)
\`\`\`bash
npm run build
# Deploy ke Vercel
\`\`\`

### Netlify
\`\`\`bash
npm run build
# Upload folder 'out' ke Netlify
\`\`\`

### Manual Deployment
\`\`\`bash
npm run build
npm run start
\`\`\`

## Contributing

1. Fork repository ini
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## Contact

Rafly FA - [rfl.yfa@gmail.com](mailto:rfl.yfa@gmail.com)

Project Link: [https://github.com/RaflyFA/portfolio](https://github.com/RaflyFA/portfolio)

## License

Distributed under the MIT License. See `LICENSE` for more information.
