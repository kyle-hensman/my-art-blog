# My Art Blog

A modern, content-rich blogging platform showcasing art and creative work. Built with Next.js, TypeScript, and Sanity CMS for seamless content management.

## Overview

My Art Blog is a personal blogging platform designed for artists and creatives to publish and showcase their work. It combines a fast, responsive Next.js frontend with Sanity CMS for flexible content management, allowing you to create and publish blog posts with rich text, images, and metadata.

## Tech Stack

- **Frontend Framework**: [Next.js 16](https://nextjs.org) – React framework with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com)
- **CMS**: [Sanity](https://www.sanity.io) – Headless CMS for content management
- **Icons**: [Lucide React](https://lucide.dev)
- **UI Components**: Radix UI, class-variance-authority (CVA)

## Features

- 📝 **Blog Management**: Create, edit, and publish blog posts with rich content
- 🖼️ **Image Support**: Integrated image hosting and optimization through Sanity
- 🎨 **Responsive Design**: Mobile-first design with Tailwind CSS
- 📱 **Modern UI**: Built with shadcn/ui components for a polished look
- 🖥️ **Admin Dashboard**: Sanity Studio at `/admin` for content management
- ⚡ **Fast Performance**: Optimized with Next.js Image and modern web practices
- 🌓 **Dark Mode Ready**: Tailwind CSS dark mode support

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd my-art-blog
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory with your Sanity credentials:
   ```bash
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2026-02-25
   ```
   
   Get these values from your [Sanity project dashboard](https://manage.sanity.io)

4. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Access Sanity Studio** (Content Management)
   
   Navigate to [http://localhost:3000/admin](http://localhost:3000/admin) to manage your blog posts.

## Project Structure

```text
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Homepage
│   ├── blog/
│   │   ├── page.tsx             # Blog listing page
│   │   └── [slug]/
│   │       └── page.tsx         # Individual blog post page
│   └── admin/
│       └── [[...tool]]/
│           └── page.tsx         # Sanity Studio admin interface
├── lib/                          # Utility functions
│   ├── utils.ts                 # Helper utilities
│   └── ...
├── public/                       # Static assets
├── sanity/                       # Sanity CMS configuration
│   ├── env.ts                   # Environment configuration
│   ├── structure.ts             # Studio structure
│   ├── lib/
│   │   ├── client.ts            # Client utilities
│   │   ├── image.ts             # Image URL generation
│   │   └── live.ts              # Live preview setup
│   └── schemaTypes/
│       ├── index.ts             # Schema index
│       └── postType.ts          # Post document type definition
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies and scripts
```

## Available Scripts

- **`npm run dev`** – Start development server with hot reload
- **`npm run build`** – Build for production
- **`npm start`** – Start production server
- **`npm run lint`** – Run ESLint to check code quality

## Content Model

### Post Document

Posts are structured with the following fields:

| Field | Type | Description |
|-------|------|-------------|
| `title` | String *(required)* | Post title |
| `slug` | Slug *(required)* | URL-friendly identifier (auto-generated from title) |
| `publishedAt` | DateTime *(required)* | Publication timestamp |
| `image` | Image | Featured image |
| `body` | Rich Text | Post content with formatting |

## Environment Variables

Create a `.env.local` file with these variables:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=<your-project-id>
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-02-25
```

**Note:** Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.

## Deployment

### Deploy on Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub (or GitLab/Bitbucket)
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

**[Deploy Now](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fkyle-hensman%2Fmy-art-blog)**

### Other Hosting Options

- **Netlify** – [Deploy guide](https://docs.netlify.com/integrations/frameworks/next-js/)
- **AWS** – [Deploy guide](https://docs.aws.amazon.com/amplify/latest/userguide/deploy-nextjs.html)
- **Self-hosted** – Use `npm run build && npm start`

## Development Tips

- **Hot Reload**: Changes to files in `app/` and `sanity/` automatically refresh
- **Sanity Vision**: Use Vision plugin in Sanity Studio to write and test GROQ queries
- **Dark Mode**: Test components with Tailwind's dark mode: add `dark:` prefix to classes
- **Type Safety**: TypeScript catches errors before runtime – enable strict mode in `tsconfig.json`

## Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity CMS Documentation](https://www.sanity.io/docs)
- [Tailwind CSS Guide](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

## License

This project is private. Modify as needed for your personal use.

## Support

For issues or questions:
1. Check the [Next.js docs](https://nextjs.org/docs)
2. Review [Sanity documentation](https://www.sanity.io/docs)
3. Refer to this README for setup instructions
