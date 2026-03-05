# Voltamp — Telegram Mini App

Мобильное приложение для компании по электромонтажу и системам умного дома. Работает как Telegram Mini App.

## Стек

- **Nuxt 3** — фреймворк
- **Vue 3** — Composition API, `<script setup>`
- **Tailwind CSS** — стилизация
- **Swiper** — слайдеры
- **@vueuse/motion** — анимации
- **@nuxt/icon** — иконки

## Страницы

| Маршрут | Описание |
|---|---|
| `/` | Главная: герой, услуги, портфолио, цены, CTA |
| `/services` | Полный список услуг |
| `/portfolio` | Портфолио выполненных работ |
| `/brief` | Бриф-форма для заявки |
| `/privacy` | Политика конфиденциальности |

## Запуск

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
npm run preview
```

## Генерация статики

```bash
npm run generate
```
