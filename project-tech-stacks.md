# Project Tech Stacks

Read from the project folders on this computer (package.json, requirements.txt, settings, config and .env.example key names only; no secrets were read).

## Compupartz (compupartz.com)
Laptop and device repair business, Kumasi, Ghana. Repair booking and tracking, client dashboard, optional parts store.

- **Backend:** Python, Django (apps: core, repair, store, parts, customer_orders, cart, blog, media_hub)
- **Auth:** django-allauth with Google and Microsoft sign-in
- **Front end:** Django templates, Tailwind CSS 3 (CLI build, class-based dark mode), custom brand theme, Outfit / Inter / Caveat fonts
- **Payments:** Paystack
- **Email:** SMTP
- **Serving:** Gunicorn, WhiteNoise (static files), Pillow (images)
- **Other libraries:** Requests, PyJWT, cryptography, python-dotenv
- **Database in repo config:** SQLite  (CONFIRM what production uses)
- **Deployment:** GitHub Actions deploying over SSH to a Hostinger VPS
- **Feature flag:** ENABLE_STORE switches the site between repair-only and full store mode
- **Repo:** https://github.com/El-viktoh/Compupartz

## Top Reasons (Topreasonsco.com)
Car rental, airport transfer, apartments and travel services, Accra, Ghana. Booking, user accounts, admin area, blog and careers.

- **Framework:** Next.js 16 (App Router), React 19, TypeScript 5
- **Styling and UI:** Tailwind CSS 3, tailwindcss-animate, Typography plugin, Radix UI primitives (shadcn/ui-style setup), class-variance-authority, Lucide icons, next-themes, Sonner toasts, Embla carousel, Vaul drawers
- **Backend and data:** Supabase (database and migrations, auth, file storage, edge function `send-renter-notification`)
- **Payments:** Flutterwave
- **Email:** Resend
- **Forms and validation:** React Hook Form, Zod
- **Data fetching and state:** TanStack Query
- **Content and admin:** Tiptap rich-text editor, Recharts charts
- **Tooling:** ESLint, Puppeteer
- **Features seen in the app folders:** booking, cars, rental, apartments, services, wishlist, my-bookings, profile, driver-application, careers, blog, admin, rate limiting
- **Repo:** https://github.com/El-viktoh/topreasons-web

## Wastle (wastleghana.com)
Smart waste pickup service, Ghana.

- **Website source code:** not on this Desktop. The `wastle` folder holds brand and video production files only. (CONFIRM the web stack and your part in it.)
- **Creative work found in the folder:** brand logos (PNG/SVG), a commercial storyboard, many video clips (street, fleet and app scenes), and ElevenLabs voice-over audio files
- **Video and audio tools (CONFIRM):** Adobe Premiere Pro, Filmora, AI-assisted video generation, ElevenLabs voice-overs

## Other projects found (not requested, not included above)
- **EPCL** (Vite project, repo El-viktoh/EPBCL)
- **Blackstone_Developers/web** (Next.js)
