# Portfolio Setup Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Customize Your Information**
   
   Edit the following files in the `/data` directory:
   - `personalInfo.ts` - Update with your personal information
   - `experience.ts` - Add your work experience
   - `projects.ts` - Add your projects
   - `skills.ts` - Update your skills

3. **Add Your Images** (Optional)
   - Place your profile picture at `/public/avatar.jpg`
   - Add project images to `/public/projects/` folder

4. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

5. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## Customization Guide

### Personal Information
Edit `/data/personalInfo.ts`:
- Name, title, location
- Contact information (email, phone)
- Social media links (GitHub, LinkedIn, Twitter)
- Bio/description

### Experience
Edit `/data/experience.ts`:
- Add your work experience entries
- Include company, position, duration, location
- List responsibilities and achievements
- Add technologies used

### Projects
Edit `/data/projects.ts`:
- Add your projects with descriptions
- Include technologies used
- Add GitHub and live demo URLs
- Mark featured projects

### Skills
Edit `/data/skills.ts`:
- Organize skills by category
- Add or remove skill categories
- Update skill lists

### Styling
- Colors: Edit `tailwind.config.ts` to change the primary color scheme
- Global styles: Edit `app/globals.css` for custom styles
- Component styles: Each component uses Tailwind classes

## Deployment on Vercel

### Option 1: GitHub Integration (Recommended)
1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

### Option 2: Vercel CLI
```bash
npm i -g vercel
vercel
```

The `vercel.json` file is already configured for optimal deployment.

## Future AI Agent Integration

The portfolio includes a placeholder AI Agent component (`components/AIAgent.tsx`) ready for integration.

### Implementation Steps:
1. **Choose an LLM Provider**
   - OpenAI (GPT-4)
   - Anthropic (Claude)
   - Other providers

2. **Create API Route**
   - Add `/app/api/chat/route.ts` for handling AI requests
   - Use your project/experience data as context

3. **Update AIAgent Component**
   - Replace placeholder with chat interface
   - Add message handling and state management
   - Integrate with your API route

4. **Optional: Vector Database**
   - Use Pinecone, Weaviate, or similar
   - Store project descriptions for RAG
   - Improve context retrieval

### Example API Route Structure:
```typescript
// app/api/chat/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { projects } from '@/data/projects'
import { experiences } from '@/data/experience'

export async function POST(req: NextRequest) {
  const { message } = await req.json()
  
  // Use projects and experiences as context
  const context = {
    projects,
    experiences,
    // ... other data
  }
  
  // Call your LLM API
  // Return response
}
```

## Features

✅ Responsive design (mobile, tablet, desktop)
✅ Smooth animations with Framer Motion
✅ Modern UI with Tailwind CSS
✅ SEO optimized
✅ Fast loading with Next.js
✅ TypeScript for type safety
✅ Ready for AI agent integration
✅ Vercel deployment ready

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## Support

For issues or questions, check the main README.md file or open an issue in your repository.

