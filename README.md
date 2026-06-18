# Wanderlux

A premium travel experience demo UI built with **React** + **Vite**.

This is a frontend-only demo designed for client presentations. No database, no backend, no real booking system — just a beautiful, interactive UI showcase.

### 🔗 Live Demo
[View Live Site →](https://wanderlux-nquwocxr3-mahn00rmj2004-3697s-projects.vercel.app/)

---

## 🌟 What This Is

Wanderlux is a conceptual luxury travel platform demo. It demonstrates how a premium travel booking experience could look and feel — complete with animated hero sections, destination cards, trip planning flows, and authentication screens.

> ⚠️ **Important:** This is purely a UI/UX demo. All data is hardcoded, images are from Unsplash, and no real bookings or user accounts are processed.

---

## 📦 What's Inside

### Pages & Routes

| Route | Page | Description |
| :--- | :--- | :--- |
| `/` | Homepage | Full landing page with all sections |
| `/signin` | Sign In | Login page with social auth buttons |
| `/plan` | Plan a Trip | 4-step trip planning wizard |

### Homepage Sections

| Section | Features |
| :--- | :--- |
| **Navbar** | Fixed header with scroll effects, mobile hamburger menu |
| **Hero** | Auto-rotating background slideshow, animated destination ticker, search card, floating trust badge |
| **Stats Bar** | Animated counters (180+ destinations, 94K travelers, etc.) |
| **Destinations** | Filterable grid of 6 destination cards with hover effects, ratings, pricing |
| **Experiences** | 4 feature cards (Flights, Stays, Guides, Dining) with hover animations |
| **Testimonials** | Carousel of 3 traveler reviews with dot navigation |
| **Gallery** | Masonry-style image grid with zoom hover effects |
| **CTA** | Gradient call-to-action with dual buttons |
| **Footer** | 4-column layout with links, social icons, copyright |

### Plan a Trip Wizard (4 Steps)
1. **Choose Destination** — 8 curated locations with image cards
2. **Trip Type** — 6 experience categories (Beach, Mountain, Cultural, etc.)
3. **Trip Details** — Date picker, traveler counter, budget selector
4. **Contact** — Email input with animated success confirmation

---

## 🎨 Design System

*   **Primary:** Deep Teal (`#1A6B5A`)
*   **Accent:** Warm Coral (`#E8622A`)
*   **Typography:** Playfair Display (headings) + Inter (body)
*   **Animations:** CSS transitions, hover lifts, gradient shifts, floating badges
*   **Responsive:** Mobile-first with breakpoints at 860px and 560px

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 18** | UI library |
| **Vite** | Build tool & dev server |
| **React Router DOM** | Client-side routing (`/`, `/signin`, `/plan`) |
| **CSS-in-JS** | Inline styles (no external CSS files) |
| **Unsplash** | All images via hotlinked CDN URLs |

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone [https://github.com/mahn00rmj2004/Wanderlux.git](https://github.com/mahn00rmj2004/Wanderlux.git)
cd Wanderlux

# Install dependencies
npm install

# Run locally
npm run dev

# Build for production
npm run build


