<template>
  <section class="sv-section">
    <div class="sv-head">
      <div class="sv-label">Что мы делаем</div>
      <h2 class="sv-title">Наши услуги</h2>
      <p class="sv-sub">Комплексный электромонтаж премиум-класса</p>
    </div>

    <div class="sv-grid">
      <div
        v-for="(s, i) in services"
        :key="i"
        class="sv-card"
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 400, delay: i * 80 } }"
        @click="$router.push('/services')"
      >
        <div class="sv-card-icon">
          <Icon :name="s.icon" size="22" class="sv-icon" />
        </div>
        <div>
          <h3 class="sv-card-title">{{ s.title }}</h3>
          <p class="sv-card-desc">{{ s.description }}</p>
          <span class="sv-card-link">
            Подробнее
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M8.59 16.58L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>
          </span>
        </div>
      </div>
    </div>

    <div class="sv-footer">
      <button class="sv-btn-all" @click="$router.push('/services')">
        Все услуги
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8.59 16.58L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>
      </button>
      <div class="sv-disclaimer">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" class="sv-disc-icon"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
        <span><strong>Не занимаемся:</strong> заменой розеток, выключателей, лампочек и мелким ремонтом</span>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    icon: 'mdi:home-automation',
    title: 'Умные дома',
    description: 'Освещение, климат, безопасность, мультирум — полная автоматизация',
  },
  {
    icon: 'mdi:floor-plan',
    title: 'По дизайн-проекту',
    description: 'Реализация электрики точно по проекту с расчётом',
  },
  {
    icon: 'mdi:office-building',
    title: 'Премиум объекты',
    description: 'Пентхаусы, загородные дома, коммерческая люкс',
  },
  {
    icon: 'mdi:lightning-bolt-circle',
    title: 'Под ключ',
    description: 'Полный цикл от проекта до сдачи, гарантия 3 года',
  },
]
</script>

<style scoped>
.sv-section { padding: 40px 20px 32px; }

.sv-head { margin-bottom: 24px; }

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
  font-family: 'DM Sans', sans-serif;
}
.sv-label::before {
  content: '';
  display: block;
  width: 16px;
  height: 1px;
  background: #f8b014;
}
.sv-title {
  font-family: 'Oswald', sans-serif;
  font-size: 34px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 0.95;
  color: #fff;
  margin-bottom: 10px;
}
.sv-sub {
  font-size: 14px;
  color: rgba(255,255,255,0.45);
  font-family: 'DM Sans', sans-serif;
}

.sv-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 20px;
}
.sv-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 18px;
  padding: 18px 14px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: background 0.2s, border-color 0.2s, transform 0.15s;
}
.sv-card:active {
  background: rgba(255,255,255,0.07);
  border-color: rgba(248,176,20,0.25);
  transform: scale(0.97);
}
.sv-card-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(248,176,20,0.1);
  border: 1px solid rgba(248,176,20,0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.sv-icon { color: #f8b014; }
.sv-card-title {
  font-family: 'DM Sans', sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: #fff;
  line-height: 1.3;
  margin-bottom: 4px;
}
.sv-card-desc {
  font-size: 11.5px;
  color: rgba(255,255,255,0.4);
  line-height: 1.5;
  font-family: 'DM Sans', sans-serif;
  margin-bottom: 6px;
}
.sv-card-link {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  font-size: 12px;
  font-weight: 600;
  color: #f8b014;
  font-family: 'DM Sans', sans-serif;
}

.sv-footer { display: flex; flex-direction: column; gap: 14px; }

.sv-btn-all {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background: rgba(255,255,255,0.06);
  color: rgba(255,255,255,0.7);
  font-family: 'DM Sans', sans-serif;
  font-weight: 600;
  font-size: 14px;
  padding: 13px 24px;
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,0.09);
  cursor: pointer;
  width: 100%;
  transition: background 0.15s, transform 0.15s;
}
.sv-btn-all:active { transform: scale(0.98); }

.sv-disclaimer {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 12px;
  color: rgba(255,255,255,0.3);
  font-family: 'DM Sans', sans-serif;
  line-height: 1.5;
  padding-top: 4px;
  border-top: 1px solid rgba(255,255,255,0.06);
}
.sv-disc-icon { flex-shrink: 0; margin-top: 1px; color: rgba(255,255,255,0.22); }
.sv-disclaimer strong { color: rgba(255,255,255,0.5); font-weight: 600; }
</style>
