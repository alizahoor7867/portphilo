# 🚀 AI-Powered Portfolio

A modern, premium portfolio website built with React, Three.js, Framer Motion, and featuring an intelligent AI assistant.

## ✨ Features

- **3D Hero Section** with animated Three.js sphere
- **Smooth Animations** using Framer Motion
- **AI Assistant** with context-aware responses
- **Interactive Skills Display** with progress bars
- **Project Carousel** with Swiper.js
- **Responsive Design** with Tailwind CSS
- **Smooth Scrolling** with Lenis
- **SEO Optimized** with React Helmet
- **Premium UI** with glassmorphism effects

## 🛠️ Tech Stack

### Frontend
- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Three.js & React Three Fiber
- Swiper
- React Icons
- Zustand (State Management)

### Animations & Effects
- Type Animation
- React CountUp
- Lenis Smooth Scroll
- Custom CSS animations

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Customization

### Personal Information

Update the following files with your information:

1. **src/components/Hero.jsx** - Name, title, social links
2. **src/components/About.jsx** - Story, stats, tech stack
3. **src/components/Skills.jsx** - Your skills and proficiency levels
4. **src/components/Projects.jsx** - Your projects with images and descriptions
5. **src/components/Contact.jsx** - Contact information

### AI Assistant

The AI assistant in `src/components/AIAssistant.jsx` uses mock responses. To integrate a real AI:

1. Create a backend API endpoint
2. Update `getAIResponse()` function to call your API
3. Add environment variables for API keys

### Colors & Theme

Edit `tailwind.config.js` to customize:
- Color palette
- Fonts
- Animations
- Spacing

## 🚀 Deployment

### Frontend (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Environment Variables

Create `.env` file:

```env
VITE_API_URL=your_backend_url
```

## 📁 Project Structure

```
Portfolio/
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── AIAssistant.jsx
│   ├── store/
│   │   └── chatStore.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
└── README.md
```

## 🎯 Features Breakdown

### Hero Section
- 3D animated sphere using Three.js
- Typing animation for dynamic text
- Smooth fade-in animations
- Social media links

### About Section
- Animated counters for statistics
- Tech stack showcase
- Scroll-triggered animations

### Skills Section
- Interactive skill cards
- Progress bars with animations
- Technology icons from react-icons

### Projects Section
- Swiper carousel for project showcase
- Modal for detailed project view
- Tech stack badges
- Live demo and GitHub links

### AI Assistant
- Floating chat button
- Real-time messaging interface
- Context-aware responses
- Markdown support for rich messages

## 🔧 Advanced Features

### Smooth Scroll
Uses Lenis for buttery-smooth scrolling experience.

### Glassmorphism
Custom glass effect utility class for modern UI.

### Responsive Design
Mobile-first approach with Tailwind breakpoints.

### Performance
- Lazy loading components
- Code splitting
- Optimized images
- Minimal bundle size

## 📝 License

MIT License - feel free to use this for your own portfolio!

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize!

## 💬 Contact

- Email: your.email@example.com
- LinkedIn: your-linkedin
- GitHub: your-github

---

Built with ❤️ using React and modern web technologies
# portphilo
