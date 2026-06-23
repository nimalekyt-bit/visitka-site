import type { SiteContent } from "@/types/site-content";

export const defaultContent: SiteContent = {
  heroTag: "Никита / Fullstack Developer",
  heroTitle: "Production-системы с нуля:",
  heroAccent: "архитектура, код, запуск, поддержка.",
  heroText:
    "Я беру проект целиком: интерфейс, backend, админ-панель, автоматизацию, инфраструктуру и контроль релизов. Делаю продукты, которые можно показывать, развивать и спокойно поддерживать.",
  tech: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Redis", "Docker", "DevOps", "RBAC"],
  aboutTitle: "Обо мне",
  aboutText:
    "Я Никита, работаю под ником woodskilla. В одиночку собираю сложные продукты с нуля и довожу их до рабочего продакшена: от первой архитектурной схемы до деплоя, мониторинга и развития.",
  contactTitle: "Готов обсудить проект",
  contactText:
    "Подхожу и большим задачам, и маленьким командам: можно начать с понятного MVP, админки, бота, backend-сервиса или поддержки существующего продукта.",
  telegramUrl: "#",
  email: "your@email.com",
  projects: [
    {
      title: "Woodsland Launcher Platform",
      label: "Private project",
      summary:
        "Solo-разработка полноценной launcher-платформы: клиентская часть, backend, admin-panel, devtools, документация и инфраструктурный мониторинг.",
      bullets: [
        "Собран полный контур продукта от интерфейса до инфраструктуры",
        "Продуман процесс релизов, запуска и сопровождения",
        "Сделан фундамент для администрирования и дальнейшего развития",
      ],
    },
    {
      title: "Telegram Bot Ecosystem",
      label: "Private production repo",
      summary:
        "Экосистема пользовательских и админских Telegram-ботов с FastAPI, Next.js admin panel, RBAC, PostgreSQL, Redis, Docker Compose и ops automation.",
      bullets: [
        "Единая система управления ботами, ролями и операционными задачами",
        "Backend и админка собраны как production-ready платформа",
        "Автоматизированы рутинные процессы поддержки и деплоя",
      ],
    },
  ],
  services: [
    { title: "Веб-платформа под ключ" },
    { title: "Админ-панели и личные кабинеты" },
    { title: "Backend API и интеграции" },
    { title: "Поддержка и развитие продукта" },
  ],
};
