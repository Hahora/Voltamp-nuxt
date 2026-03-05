<template>
  <div class="sv-page">
    <!-- Header -->
    <div class="sv-header">
      <button @click="$router.back()" class="sv-back">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
          />
        </svg>
        <span>Назад</span>
      </button>
      <div class="sv-label">Что мы делаем</div>
      <h1 class="sv-title">Наши услуги</h1>
      <p class="sv-sub">
        Специализируемся на электромонтаже премиум-класса и системах умного дома
      </p>
    </div>

    <div class="sv-content">
      <div
        v-for="(service, i) in services"
        :key="i"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible="{
          opacity: 1,
          y: 0,
          transition: { duration: 350, delay: i * 80 },
        }"
        class="sv-card"
      >
        <div class="sv-card-head">
          <div class="sv-card-icon">
            <Icon :name="service.icon" size="26" class="sv-icon" />
          </div>
          <h2 class="sv-card-title">{{ service.title }}</h2>
        </div>

        <p class="sv-card-desc">{{ service.description }}</p>

        <div class="sv-checklist">
          <div v-for="item in service.items" :key="item" class="sv-check">
            <span class="sv-check-dot" />
            <span class="sv-check-text">{{ item }}</span>
          </div>
        </div>

        <div v-if="service.tags" class="sv-tags">
          <span v-for="tag in service.tags" :key="tag" class="sv-tag">{{
            tag
          }}</span>
        </div>
      </div>

      <!-- Don't do -->
      <div class="sv-nodo">
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="rgba(255,255,255,0.3)"
          style="flex-shrink: 0; margin-top: 2px"
        >
          <path
            d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
          />
        </svg>
        <p>
          <strong>Не занимаемся:</strong> заменой розеток, выключателей,
          лампочек, счётчиков и мелким ремонтом
        </p>
      </div>

      <!-- CTA -->
      <div class="sv-cta">
        <div class="sv-cta-glow" aria-hidden="true" />
        <h3 class="sv-cta-h">Готовы обсудить проект?</h3>
        <p class="sv-cta-sub">Бесплатный расчёт за 24 часа</p>
        <button @click="$router.push('/brief')" class="sv-cta-btn">
          Отправить проект
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.59 16.58L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({ title: "Услуги | VOLTAMP" });

const services = [
  {
    icon: "mdi:home-automation",
    title: "Умные дома",
    description:
      "Проектируем и монтируем комплексные системы умного дома любой сложности. Работаем с ведущими платформами автоматизации.",
    items: [
      "Управление освещением, климатом, шторами",
      "Мультирум — аудио и видео по всему дому",
      "Системы безопасности и видеонаблюдения",
      "Голосовое управление и мобильное приложение",
      "Интеграция с любыми умными устройствами",
    ],
    tags: ["KNX", "Loxone", "HDL", "Schneider"],
  },
  {
    icon: "mdi:floor-plan",
    title: "Электромонтаж по дизайн-проектам",
    description:
      "Реализуем электрику строго по вашему дизайн-проекту. Скрытая проводка, нестандартные решения, точное позиционирование всех точек.",
    items: [
      "Работа строго по чертежам дизайнера",
      "Скрытая проводка без видимых кабелей",
      "Точное позиционирование розеток и точек света",
      "Согласование с другими подрядчиками",
      "Документация и схемы по завершению работ",
    ],
  },
  {
    icon: "mdi:office-building",
    title: "Премиум объекты",
    description:
      "Загородные дома, пентхаусы, таунхаусы и коммерческая недвижимость класса люкс. Опыт работы на объектах от 150 м².",
    items: [
      "Загородные дома и коттеджи от 200 м²",
      "Пентхаусы и квартиры бизнес-класса",
      "Таунхаусы в закрытых посёлках",
      "Коммерческие объекты и офисы класса А",
      "Гостиницы и апарт-комплексы",
    ],
  },
  {
    icon: "mdi:lightning-bolt-circle",
    title: "Электромонтаж под ключ",
    description:
      "Полный цикл работ: от разработки схем и подбора материалов до подключения и сдачи объекта с гарантией 3 года.",
    items: [
      "Разработка схем электроснабжения",
      "Подбор и закупка материалов",
      "Монтаж щитов и прокладка кабелей",
      "Установка оборудования и приборов",
      "Пусконаладка и проверка всех систем",
      "Гарантия 3 года на все виды работ",
    ],
  },
];
</script>

<style scoped>
.sv-page {
  min-height: 100svh;
  background: #060606;
  color: #fff;
  padding-bottom: 100px;
}

/* ── HEADER ── */
.sv-header {
  background: linear-gradient(160deg, #111 0%, #060606 60%, #0d0d0d 100%);
  padding: 20px 20px 40px;
}
.sv-back {
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.55);
  font-family: "DM Sans", sans-serif;
  font-size: 14px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-bottom: 32px;
  width: fit-content;
  transition: color 0.15s;
}
.sv-back:active {
  color: #fff;
}
.sv-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #f8b014;
  margin-bottom: 10px;
  font-family: "DM Sans", sans-serif;
}
.sv-label::before {
  content: "";
  display: block;
  width: 16px;
  height: 1px;
  background: #f8b014;
}
.sv-title {
  font-family: "Oswald", sans-serif;
  font-size: 38px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 0.95;
  color: #fff;
  margin-bottom: 12px;
}
.sv-sub {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  font-family: "DM Sans", sans-serif;
  line-height: 1.5;
}

/* ── CONTENT ── */
.sv-content {
  padding: 20px 16px 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: -20px;
}

/* ── SERVICE CARD ── */
.sv-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.sv-card-head {
  display: flex;
  align-items: center;
  gap: 14px;
}
.sv-card-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(248, 176, 20, 0.1);
  border: 1px solid rgba(248, 176, 20, 0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.sv-icon {
  color: #f8b014;
}
.sv-card-title {
  font-family: "DM Sans", sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #fff;
  line-height: 1.3;
}
.sv-card-desc {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.6;
  font-family: "DM Sans", sans-serif;
}
.sv-checklist {
  display: flex;
  flex-direction: column;
  gap: 9px;
  padding-top: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}
.sv-check {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}
.sv-check-dot {
  display: block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #f8b014;
  flex-shrink: 0;
  margin-top: 6px;
}
.sv-check-text {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.65);
  font-family: "DM Sans", sans-serif;
  line-height: 1.5;
}
.sv-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding-top: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}
.sv-tag {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.09);
  padding: 4px 11px;
  border-radius: 100px;
  font-family: "DM Sans", sans-serif;
  font-weight: 500;
}

/* ── NO-DO ── */
.sv-nodo {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 14px 16px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  font-size: 12.5px;
  color: rgba(255, 255, 255, 0.35);
  font-family: "DM Sans", sans-serif;
  line-height: 1.5;
}
.sv-nodo strong {
  color: rgba(255, 255, 255, 0.5);
  font-weight: 600;
}

/* ── CTA ── */
.sv-cta {
  position: relative;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 20px;
  padding: 28px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.sv-cta-glow {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 220px;
  height: 120px;
  background: radial-gradient(
    ellipse at top,
    rgba(248, 176, 20, 0.14) 0%,
    transparent 70%
  );
  pointer-events: none;
}
.sv-cta-h {
  font-family: "Oswald", sans-serif;
  font-size: 22px;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
  position: relative;
}
.sv-cta-sub {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.45);
  font-family: "DM Sans", sans-serif;
  margin-bottom: 6px;
  position: relative;
}
.sv-cta-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background: #f8b014;
  color: #000;
  font-family: "DM Sans", sans-serif;
  font-weight: 700;
  font-size: 15px;
  padding: 14px 28px;
  border-radius: 14px;
  border: none;
  cursor: pointer;
  width: 100%;
  box-shadow: 0 0 28px rgba(248, 176, 20, 0.25);
  transition: transform 0.15s;
  position: relative;
}
.sv-cta-btn:active {
  transform: scale(0.97);
}
</style>
