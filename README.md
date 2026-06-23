<div align="center">
  <h1>✨ Modern Portfolio & Landing Page</h1>

  **A sleek, animated, CMS-driven personal website.**

  [![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)]()
  [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)]()
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)]()
  [![Sanity](https://img.shields.io/badge/Sanity-F36458?style=for-the-badge&logo=sanity&logoColor=white)]()

  [English](#english) • [Русский](#русский)
</div>

---

<a id="english"></a>
## 🇬🇧 English

Your portfolio is your digital handshake. This project is a highly-polished, responsive personal landing page engineered for performance, aesthetics, and ease of content management.

Built with **Next.js App Router** and powered by **Sanity CMS**, it allows you to update your projects, skills, and bio directly from an embedded studio interface, without ever touching the code.

### 💎 The Highlights

- 🎨 **Premium Aesthetics**: Glassmorphism UI elements, smooth scroll, and fluid micro-animations powered by `Framer Motion`.
- 📝 **Headless CMS Integration**: Content is fully decoupled. Log into `/studio` to add new projects or update your resume instantly.
- ⚡ **Blazing Fast**: Leverages Next.js server components and optimized image loading.
- 🛡️ **Bulletproof**: Written in strict TypeScript. If you haven't set up Sanity yet, the app gracefully falls back to local mock data.

<br>

<div align="center">
  <!-- TODO: Replace with actual screenshot -->
  <img src="https://placehold.co/800x400/1e1e1e/ffffff?text=Drop+your+awesome+screenshot+here" alt="Portfolio Screenshot" style="border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);" />
</div>

<br>

### 🚀 Getting Started

1. **Clone & Install**
   ```bash
   git clone https://github.com/nimalekyt-bit/visitka-site.git
   cd visitka-site
   npm install
   ```

2. **Environment Variables**
   Copy `.env.example` to `.env.local` and add your Sanity credentials.
   ```bash
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

3. **Run the Magic**
   ```bash
   npm run dev
   ```
   - View site: `http://localhost:3000`
   - Access CMS: `http://localhost:3000/studio`

<br><br>

---

<a id="русский"></a>
## 🇷🇺 Русский

Стильный, быстрый и современный сайт-визитка, разработанный для того, чтобы производить впечатление. 

Проект построен на передовом стеке (**Next.js + Tailwind + Framer Motion**) и использует **Sanity CMS**, чтобы вы могли редактировать текст и добавлять новые проекты прямо через удобную встроенную админку, не трогая код.

### 💎 Ключевые особенности

- 🎨 **Премиальный дизайн**: Плавные анимации, эффекты матового стекла и адаптивная верстка (Mobile First).
- 📝 **Встроенная CMS**: Редактируйте контент через роут `/studio` прямо на вашем сайте.
- ⚡ **Оптимизация**: Использование серверных компонентов Next.js для молниеносной загрузки.
- 🛡️ **Надежность**: Строгая типизация (TypeScript) и умная система `fallback-данных` — если CMS не настроена, сайт покажет тестовые данные, а не упадет с ошибкой.

### 🚀 Установка

```bash
git clone https://github.com/nimalekyt-bit/visitka-site.git
cd visitka-site
npm install
copy .env.example .env.local  # Укажите свои данные Sanity
npm run dev
```
