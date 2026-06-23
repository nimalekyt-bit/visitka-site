"use client";

import {
  ArrowUpRight,
  Bot,
  Code2,
  Database,
  Gauge,
  GitBranch,
  Layers3,
  Mail,
  Menu,
  MessageCircle,
  MonitorCog,
  Network,
  PackageCheck,
  PanelTop,
  Rocket,
  Server,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { motion } from "framer-motion";

import type { SiteContent } from "@/types/site-content";

const stats = [
  { value: "solo", label: "разработка с нуля" },
  { value: "2", label: "private production кейса" },
  { value: "end-to-end", label: "архитектура, код, деплой" },
];

const capabilityIcons = [Rocket, MonitorCog, Server, ShieldCheck];

const proofPoints = [
  {
    icon: Layers3,
    title: "Архитектура",
    text: "Сразу думаю о ролях, данных, релизах и том, как продукт будет жить после первого запуска.",
  },
  {
    icon: PanelTop,
    title: "Интерфейс",
    text: "Делаю не просто экран, а удобную точку управления: админки, кабинеты, панели и сценарии.",
  },
  {
    icon: Gauge,
    title: "Операционка",
    text: "Добавляю деплой, мониторинг и автоматизацию, чтобы проект не держался на ручных действиях.",
  },
];

const serviceDetails = [
  "MVP, SaaS, internal tools, сервисы для команд и клиентов.",
  "RBAC, таблицы, статусы, управление пользователями, контентом и процессами.",
  "FastAPI, интеграции, очереди, базы данных, кеш и надежные API-контракты.",
  "Рефакторинг, инфраструктура, мониторинг, новые фичи и спокойный рост проекта.",
];

const systemNodes = [
  { icon: Code2, label: "frontend", value: "Next.js / TS" },
  { icon: Server, label: "backend", value: "FastAPI / API" },
  { icon: Database, label: "data", value: "PostgreSQL / Redis" },
  { icon: Network, label: "ops", value: "Docker / CI" },
  { icon: Workflow, label: "flow", value: "roles / releases" },
  { icon: PackageCheck, label: "result", value: "production" },
];

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function OpsScene() {
  return (
    <div className="ops-scene" aria-hidden="true">
      <div className="scene-ruler scene-ruler-bottom" />

      <motion.div
        className="terminal-window terminal-window-main"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="terminal-bar">
          <span />
          <span />
          <span />
        </div>
        <div className="terminal-lines">
          <p>$ deploy woodsland --prod</p>
          <p className="ok">build: stable</p>
          <p>api: fastapi / postgres / redis</p>
          <p className="warn">observability: online</p>
        </div>
      </motion.div>

      <motion.div
        className="terminal-window terminal-window-bot"
        animate={{ x: [0, 9, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="mini-title">
          <Bot size={16} />
          bot ecosystem
        </div>
        <div className="node-map">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </motion.div>

      <div className="portrait-frame">
        <div>
          <p>PHOTO</p>
          <span>портрет Никиты добавим здесь</span>
        </div>
      </div>

      <div className="data-strip">
        <span>Next.js</span>
        <span>FastAPI</span>
        <span>Docker</span>
        <span>RBAC</span>
      </div>
    </div>
  );
}

export function LandingPage({ content }: { content: SiteContent }) {
  return (
    <div className="site-shell min-h-screen overflow-x-hidden">
      <header className="site-nav">
        <a href="#top" className="brand-lockup">
          <span className="brand-mark">woodskilla</span>
          <span className="brand-role">solo fullstack / production systems</span>
        </a>
        <div className="nav-status">
          <span />
          Available for build
        </div>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#projects">Кейсы</a>
          <a href="#services">Услуги</a>
          <a href="#contact">Контакты</a>
        </nav>
        <a className="nav-cta" href="#contact">
          <MessageCircle size={16} />
          Start
        </a>
        <button className="nav-menu" aria-label="Открыть меню">
          <Menu size={21} />
        </button>
      </header>

      <main>
        <section id="top" className="hero-section">
          <OpsScene />
          <div className="hero-content">
            <motion.p
              className="hero-kicker"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              {content.heroTag}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1 }}
            >
              woodskilla
            </motion.h1>
            <motion.p
              className="hero-offer"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.18 }}
            >
              {content.heroTitle} <span>{content.heroAccent}</span>
            </motion.p>
            <motion.p
              className="hero-copy"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.26 }}
            >
              {content.heroText}
            </motion.p>
            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.34 }}
            >
              <a className="action-button action-button-primary" href="#contact">
                <MessageCircle size={18} />
                Обсудить проект
              </a>
              <a className="action-button action-button-secondary" href="#projects">
                <ArrowUpRight size={18} />
                Смотреть кейсы
              </a>
            </motion.div>
          </div>
        </section>

        <section className="stats-band" aria-label="Ключевые факты">
          {stats.map((item) => (
            <div key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </section>

        <section className="proof-band">
          {proofPoints.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 0.06}>
                <article className="proof-item">
                  <Icon size={24} />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </Reveal>
            );
          })}
        </section>

        <section className="content-band about-band">
          <Reveal>
            <div className="section-heading">
              <p>Позиционирование</p>
              <h2>{content.aboutTitle}</h2>
            </div>
            <p className="lead-text">{content.aboutText}</p>
            <div className="tech-marquee">
              {content.tech.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </Reveal>
        </section>

        <section id="projects" className="content-band projects-band">
          <Reveal>
            <div className="section-heading">
              <p>Selected work</p>
              <h2>Проекты, которые показывают уровень</h2>
            </div>
          </Reveal>

          <div className="case-grid">
            {content.projects.map((project, index) => {
              const Icon = index === 0 ? Database : Bot;
              const tags =
                index === 0
                  ? ["launcher", "admin-panel", "monitoring"]
                  : ["telegram bots", "rbac", "ops automation"];

              return (
                <Reveal key={project.title} delay={index * 0.08}>
                  <article className="case-card">
                    <div className="case-card-top">
                      <Icon size={24} />
                      <span>{project.label}</span>
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                    <ul>
                      {project.bullets.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                    <div className="case-tags">
                      {tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section id="services" className="content-band services-band">
          <Reveal>
            <div className="section-heading">
              <p>Как могу помочь</p>
              <h2>Беру не только экран, а весь путь до рабочего продукта</h2>
            </div>
          </Reveal>

          <div className="service-grid">
            {content.services.map((service, index) => {
              const Icon = capabilityIcons[index % capabilityIcons.length];

              return (
                <Reveal key={service.title} delay={index * 0.06}>
                  <article className="service-card">
                    <Icon size={22} />
                    <h3>{service.title}</h3>
                    <p>
                      {serviceDetails[index] ??
                        "Соберу понятный план работ и доведу до рабочего результата."}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section className="content-band system-band">
          <Reveal>
            <div className="system-layout">
              <div className="section-heading">
                <p>Почему это цепляет</p>
                <h2>Показываем не список технологий, а способность собрать систему</h2>
              </div>
              <div className="system-board">
                {systemNodes.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.label} className="system-node">
                      <Icon size={20} />
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </section>

        <section id="contact" className="contact-band">
          <Reveal>
            <div className="contact-inner">
              <div>
                <p className="contact-label">Let&apos;s build</p>
                <h2>{content.contactTitle}</h2>
                <p>{content.contactText}</p>
              </div>
              <div className="contact-actions">
                <a className="action-button action-button-primary" href={content.telegramUrl}>
                  <MessageCircle size={18} />
                  Telegram
                </a>
                <a className="action-button action-button-secondary" href={`mailto:${content.email}`}>
                  <Mail size={18} />
                  {content.email}
                </a>
                <a className="icon-link" href="https://github.com/woodskilla" aria-label="GitHub">
                  <GitBranch size={22} />
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="site-footer">
        <span>woodskilla / Nikita</span>
        <span>Next.js / FastAPI / DevOps</span>
      </footer>
    </div>
  );
}
