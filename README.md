
# 🚀 Alex Morgan — Premium Developer Portfolio

A world-class, production-ready developer portfolio built with **React + Vite + Tailwind CSS + Framer Motion**.

---

## 📁 Folder Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Cursor.jsx          ← Custom cursor follower
│   │   ├── Navbar.jsx          ← Sticky nav + scroll progress bar
│   │   ├── Hero.jsx            ← Fullscreen hero with typing effect
│   │   ├── About.jsx           ← About + animated skill bars
│   │   ├── Skills.jsx          ← Skill category cards
│   │   ├── Projects.jsx        ← Filterable project grid
│   │   ├── Experience.jsx      ← Vertical timeline
│   │   ├── Stats.jsx           ← Animated counter stats
│   │   ├── Testimonials.jsx    ← Auto-sliding testimonials
│   │   ├── Contact.jsx         ← EmailJS contact form
│   │   └── Footer.jsx
│   ├── data/
│   │   └── config.js           ← ✏️ ALL YOUR CONTENT LIVES HERE
│   ├── hooks/
│   │   ├── useCursor.js
│   │   ├── useScrollProgress.js
│   │   ├── useInView.js
│   │   └── useCounter.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── vercel.json
```

---

## ✏️ How to Customize Your Info

**Everything is in one file: `src/data/config.js`**

Open it and edit:
- `personalInfo` — your name, email, GitHub, LinkedIn, location, etc.
- `typingRoles` — the roles that cycle in the hero
- `skillBars` — your top skills with percentages
- `skillCategories` — your frontend/backend/tools categories
- `projects` — your project cards
- `experience` — your work history / education
- `stats` — your achievement numbers
- `testimonials` — client reviews

No need to touch any component files!

---

## 🔧 Dependencies

| Package | Purpose |
|---|---|
| `react` + `react-dom` | UI framework |
| `framer-motion` | Animations (scroll reveal, counters, transitions) |
| `react-type-animation` | Typing effect in hero |
| `react-router-dom` | Routing (ready to use if you add pages) |
| `@emailjs/browser` | Contact form email sending |
| `vite` | Fast build tool |
| `tailwindcss` | Utility CSS |
| `autoprefixer` + `postcss` | CSS processing |

---

## 💻 How to Run Locally

### Step 1: Install Node.js
Download from https://nodejs.org (LTS version recommended, 18+)

### Step 2: Clone or download this project
```bash
# If you have git:
git clone <your-repo-url>
cd portfolio

# Or just unzip the folder and cd into it
cd portfolio
```

### Step 3: Install dependencies
```bash
npm install
```

### Step 4: Start the dev server
```bash
npm run dev
```

Open your browser at **http://localhost:5173** 🎉

### Step 5: Build for production
```bash
npm run build
```
This creates a `dist/` folder ready to deploy.

---

## 📧 Setting Up Contact Form (EmailJS)

1. Go to https://www.emailjs.com and create a **free account**
2. Click **Add New Service** → connect your Gmail or any email
3. Click **Email Templates** → Create a new template
   - Use these variables in your template: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
4. Go to **Account → API Keys** and copy your **Public Key**
5. Open `src/data/config.js` and fill in:
```js
export const emailjsConfig = {
  serviceId: 'service_xxxxxxx',   // From EmailJS dashboard
  templateId: 'template_xxxxxxx', // From EmailJS dashboard
  publicKey: 'xxxxxxxxxxxxxxx',   // From EmailJS Account > API Keys
}
```

---

## 🌐 How to Deploy on Vercel (Step by Step)

### Option A: Deploy via GitHub (Recommended)

**Step 1:** Push your code to GitHub
```bash
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

**Step 2:** Go to https://vercel.com and sign up (free)

**Step 3:** Click **"Add New Project"**

**Step 4:** Click **"Import Git Repository"** → select your GitHub repo

**Step 5:** Vercel auto-detects Vite. Leave all settings as default.

**Step 6:** Click **"Deploy"** — done in ~30 seconds! 🚀

Your site will be live at `https://your-project-name.vercel.app`

---

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Build the project
npm run build

# Deploy
vercel

# Follow the prompts — answer Yes to all defaults
```

---

### Option C: Deploy to Netlify

```bash
npm run build
```
Then drag the `dist/` folder to https://app.netlify.com/drop

---

## 🎨 Adding Your Real Photo

In `src/components/About.jsx`, find this block:
```jsx
{/* Replace with actual <img> when you have a photo */}
<div className="w-full h-full flex items-center justify-center text-8xl"...>
  👨‍💻
</div>
```

Replace with:
```jsx
<img
  src="/your-photo.jpg"
  alt="Alex Morgan"
  className="w-full h-full object-cover"
/>
```
Put your photo in the `public/` folder.

---

## 🔧 Common Issues

**Cursor not showing?**
— Custom cursor only shows on desktop. It's hidden on touch/mobile automatically.

**Fonts loading slow?**
— They're loaded from Google Fonts. Add `<link rel="preconnect">` tags (already included in `index.html`).

**EmailJS not working?**
— Double-check your Service ID, Template ID, and Public Key in `config.js`. Make sure your EmailJS template uses the correct variable names.

**Build fails?**
— Run `npm install` again, then `npm run build`.

---

## 📄 License

MIT — free to use for personal and commercial projects.

---

Built with ❤️ using React + Vite + Framer Motion
=======
