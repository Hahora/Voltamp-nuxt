<template>
  <section class="pr-section">
    <div class="pr-head">
      <div class="pr-label">Стоимость работ</div>
      <h2 class="pr-title">Примерные цены</h2>
      <p class="pr-sub">Точный расчёт — бесплатно за 24 часа</p>
    </div>

    <div class="pr-grid">
      <div
        v-for="(item, i) in pricing"
        :key="i"
        class="pr-card"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 400, delay: i * 80 } }"
      >
        <div class="pr-card-head">
          <div class="pr-card-icon">
            <Icon :name="item.icon" size="20" class="pr-icon" />
          </div>
          <div>
            <div class="pr-card-title">{{ item.title }}</div>
            <div class="pr-card-desc">{{ item.description }}</div>
          </div>
        </div>
        <div class="pr-card-price">
          <span class="pr-price-val">{{ item.price }}</span>
          <span class="pr-price-unit">{{ item.unit }}</span>
        </div>
      </div>
    </div>

    <div class="pr-notes">
      <div class="pr-note">
        <span class="pr-note-dot" />Точная стоимость — индивидуально по дизайн-проекту
      </div>
      <div class="pr-note">
        <span class="pr-note-dot" />Бесплатный расчёт работ и материалов за 24 часа
      </div>
      <div class="pr-note">
        <span class="pr-note-dot" />Подбор материалов под ваш бюджет
      </div>
    </div>

    <button class="pr-cta" @click="$router.push('/brief')">
      Получить бесплатный расчёт
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z"/></svg>
    </button>
  </section>
</template>

<script setup>
const pricing = [
  {
    title: 'Квартиры',
    description: 'Электромонтаж под ключ',
    price: 'от 3 500 ₽',
    unit: 'за м²',
    icon: 'mdi:home-city',
  },
  {
    title: 'Загородные дома',
    description: 'Комплексный электромонтаж',
    price: 'от 4 500 ₽',
    unit: 'за м²',
    icon: 'mdi:home',
  },
  {
    title: 'Умный дом (базовый)',
    description: 'Система начального уровня',
    price: 'от 250 000 ₽',
    unit: 'под ключ',
    icon: 'mdi:home-automation',
  },
  {
    title: 'Умный дом (премиум)',
    description: 'Полная автоматизация',
    price: 'от 800 000 ₽',
    unit: 'под ключ',
    icon: 'mdi:professional-hexagon',
  },
]
</script>

<style scoped>
.pr-section { padding: 40px 20px 32px; }

.pr-head { margin-bottom: 24px; }
.pr-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #f8b014;
  margin-bottom: 10px;
  font-family: 'DM Sans', sans-serif;
}
.pr-label::before {
  content: '';
  display: block;
  width: 16px;
  height: 1px;
  background: #f8b014;
}
.pr-title {
  font-family: 'Oswald', sans-serif;
  font-size: 34px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 0.95;
  color: #fff;
  margin-bottom: 10px;
}
.pr-sub {
  font-size: 14px;
  color: rgba(255,255,255,0.45);
  font-family: 'DM Sans', sans-serif;
}

.pr-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 20px;
}

.pr-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 18px;
  padding: 18px 14px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.pr-card-head {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  min-width: 0;
}
.pr-card-icon {
  width: 36px;
  height: 36px;
  border-radius: 9px;
  background: rgba(248,176,20,0.1);
  border: 1px solid rgba(248,176,20,0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.pr-icon { color: #f8b014; }

.pr-card-title {
  font-family: 'DM Sans', sans-serif;
  font-weight: 600;
  font-size: 12px;
  color: #fff;
  line-height: 1.3;
  margin-bottom: 3px;
  word-break: break-word;
  min-width: 0;
}
.pr-card-desc {
  font-size: 11px;
  color: rgba(255,255,255,0.38);
  font-family: 'DM Sans', sans-serif;
  line-height: 1.4;
}

.pr-card-price {
  display: flex;
  align-items: baseline;
  gap: 5px;
  padding-top: 10px;
  border-top: 1px solid rgba(255,255,255,0.06);
}
.pr-price-val {
  font-family: 'Oswald', sans-serif;
  font-size: 19px;
  font-weight: 700;
  color: #f8b014;
  line-height: 1;
  white-space: nowrap;
}
.pr-price-unit {
  font-size: 11px;
  color: rgba(255,255,255,0.4);
  font-family: 'DM Sans', sans-serif;
}

.pr-notes {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
  padding: 16px;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 14px;
}
.pr-note {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 12.5px;
  color: rgba(255,255,255,0.45);
  font-family: 'DM Sans', sans-serif;
  line-height: 1.4;
}
.pr-note-dot {
  display: block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #f8b014;
  flex-shrink: 0;
  margin-top: 5px;
}

.pr-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #f8b014;
  color: #000;
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 15px;
  padding: 15px 24px;
  border-radius: 14px;
  border: none;
  cursor: pointer;
  width: 100%;
  box-shadow: 0 0 28px rgba(248,176,20,0.3);
  transition: transform 0.15s;
}
.pr-cta:active { transform: scale(0.97); }
</style>
