
📡 STV Digital Control Center

A multi-tenant digital music and content scheduling platform built for businesses, restaurants, and media environments. STV allows clients to control in-store audio experiences through curated DJ channels, scheduled playlists, and live streaming integrations.

⸻

🚀 Live Demo

https://fairefaretravels.github.io/STVDigital-controlcenter/

(Note: GitHub Pages version is static. Full platform runs on Vercel.)

⸻

⚙️ Tech Stack
	•	Next.js – Frontend framework
	•	TypeScript – Type safety
	•	Supabase – Authentication + Database
	•	Tailwind CSS – UI styling
	•	Vercel – Deployment
	•	Edge Middleware – Route protection & session handling

⸻

🧠 Core Concept

STV is designed to replace traditional in-store radio with a controlled, branded audio experience.

Each business can:
	•	Log in to their dashboard
	•	Select DJ channels
	•	Schedule music by time of day
	•	Switch between playlists
	•	Stream live audio feeds

⸻

🎧 Key Features

👤 Authentication System
	•	Email-based login via Supabase
	•	Secure session handling
	•	Protected dashboard routes

🎚️ DJ Channel System
	•	Multiple DJs with unique styles
	•	Genre-based categorization
	•	Time-based rotation (Morning / Lunch / Evening)

🏪 Multi-Business Support
	•	Each business has its own account
	•	Independent scheduling
	•	Custom branding potential

📅 Scheduling Engine
	•	Assign DJs to time blocks
	•	Automate playlist switching
	•	Daily or weekly rotation support

📡 Live Stream Integration
	•	External stream support
	•	Example stream:

https://listen.streamaudio.co/proxy/stvradio/stream



⸻

🧩 Project Structure

/app            # Next.js app routes
/components     # UI components
/lib            # Supabase client + utilities
/middleware.ts  # Route protection logic
/pages          # Legacy or hybrid routes (if used)


⸻

🗄️ Supabase Schema (Recommended)

users
	•	id
	•	email
	•	role (admin / client)

businesses
	•	id
	•	name
	•	owner_id

djs
	•	id
	•	name
	•	genre
	•	stream_url

schedules
	•	id
	•	business_id
	•	dj_id
	•	start_time
	•	end_time
	•	day

⸻

🔐 Environment Variables

Create a .env.local file:

NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key


⸻

🛠️ Setup Instructions

1. Clone the repository

git clone https://github.com/YOUR_USERNAME/STVDigital-controlcenter.git
cd STVDigital-controlcenter

2. Install dependencies

npm install

3. Add environment variables

Create .env.local and add Supabase credentials.

4. Run development server

npm run dev


⸻

🚀 Deploy on Vercel
	1.	Push repo to GitHub
	2.	Import into Vercel
	3.	Add environment variables
	4.	Deploy

⸻

⚠️ Known Issues
	•	GitHub Pages deployment is static only (no backend support)
	•	Middleware requires correct Supabase SSR configuration
	•	Environment variables must be set in Vercel for production builds

⸻

🔮 Future Upgrades
	•	AI DJ scheduling engine
	•	Real-time playlist switching
	•	Mobile app version (iOS/Android)
	•	Analytics dashboard for businesses
	•	Payment/subscription system
	•	White-label branding for clients

⸻

🧠 Vision

STV is built as a next-generation in-store audio OS — allowing businesses to fully control their sound identity the same way they control lighting or decor.

⸻

👤 Creator

STV Digital Systems

⸻

For information on how to use or create for your project email sanecatv@gmail.com
