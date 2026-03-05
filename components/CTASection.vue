<template>
  <section class="cta-section">
    <!-- Background atmosphere -->
    <div class="cta-bg" aria-hidden="true" />
    <div class="cta-noise" aria-hidden="true" />

    <div
      class="cta-inner"
      v-motion
      :initial="{ opacity: 0, scale: 0.97 }"
      :visible="{ opacity: 1, scale: 1, transition: { duration: 500 } }"
    >
      <div class="cta-badge">Специальное предложение</div>

      <h2 class="cta-title">
        Подпишитесь на канал<br />
        <em>и получите бонусы</em>
      </h2>

      <div class="cta-cards">
        <div class="cta-card" v-for="(b, i) in bonuses" :key="i">
          <div class="cta-card-icon">
            <Icon :name="b.icon" size="18" class="cta-c-icon" />
          </div>
          <div class="cta-card-body">
            <div class="cta-card-title">{{ b.title }}</div>
            <div class="cta-card-desc">{{ b.desc }}</div>
          </div>
        </div>
      </div>

      <div class="cta-actions">
        <button class="cta-btn-primary" @click="handleTelegramClick">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.247l-2.02 9.52c-.149.658-.538.818-1.09.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L6.27 14.46l-2.95-.924c-.64-.203-.654-.64.136-.948l11.527-4.445c.537-.194 1.006.131.579.104z"/>
          </svg>
          Подписаться на канал
        </button>
        <button class="cta-btn-secondary" @click="$router.push('/brief')">
          Отправить проект
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const { openTelegramLink, hapticFeedback } = useTelegram()

const bonuses = [
  {
    icon: 'mdi:percent',
    title: 'Скидка 10%',
    desc: 'На первый заказ для подписчиков',
  },
  {
    icon: 'mdi:calculator-variant',
    title: 'Бесплатный расчёт',
    desc: 'Смета за 24 ч вместо 3 дней',
  },
  {
    icon: 'mdi:school',
    title: 'Полезный контент',
    desc: 'Советы и новинки умных домов',
  },
]

const contacts = useContacts()

const handleTelegramClick = () => {
  hapticFeedback('success')
  openTelegramLink(contacts.tgChannel)
}
</script>

<style scoped>
.cta-section {
  position: relative;
  padding: 48px 20px;
  overflow: hidden;
}
.cta-bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 0%, rgba(248,176,20,0.08) 0%, transparent 70%);
  pointer-events: none;
}
.cta-noise {
  position: absolute;
  inset: 0;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size: 200px;
  pointer-events: none;
}

.cta-inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;
  border-top: 1px solid rgba(255,255,255,0.06);
  border-bottom: 1px solid rgba(255,255,255,0.06);
  padding: 40px 0;
}

.cta-badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #f8b014;
  border: 1px solid rgba(248,176,20,0.3);
  padding: 5px 14px;
  border-radius: 100px;
  font-family: 'DM Sans', sans-serif;
}

.cta-title {
  font-family: 'Oswald', sans-serif;
  font-size: clamp(28px, 8vw, 40px);
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1;
  color: #fff;
}
.cta-title em {
  font-style: normal;
  color: #f8b014;
}

.cta-cards {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}
.cta-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 14px;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  gap: 14px;
  text-align: left;
}
.cta-card-icon {
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
.cta-c-icon { color: #f8b014; }
.cta-card-body { display: flex; flex-direction: column; gap: 2px; }
.cta-card-title {
  font-family: 'DM Sans', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #fff;
  line-height: 1.3;
}
.cta-card-desc {
  font-size: 12px;
  color: rgba(255,255,255,0.42);
  font-family: 'DM Sans', sans-serif;
  line-height: 1.4;
}

.cta-actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}
.cta-btn-primary {
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
  box-shadow: 0 0 28px rgba(248,176,20,0.3);
  transition: transform 0.15s;
}
.cta-btn-primary:active { transform: scale(0.97); }

.cta-btn-secondary {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255,0.06);
  color: rgba(255,255,255,0.7);
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 15px;
  padding: 15px 24px;
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,0.09);
  cursor: pointer;
  transition: background 0.15s, transform 0.15s;
}
.cta-btn-secondary:active { transform: scale(0.97); }
</style>
