<template>
  <section class="tg-wrap">
    <div
      class="tg-card"
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible="{ opacity: 1, y: 0, transition: { duration: 500 } }"
    >
      <div class="tg-accent-line" />
      <div class="tg-body">
        <div class="tg-icon">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="#29aae1">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.247l-2.02 9.52c-.149.658-.538.818-1.09.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L6.27 14.46l-2.95-.924c-.64-.203-.654-.64.136-.948l11.527-4.445c.537-.194 1.006.131.579.104z"/>
          </svg>
        </div>
        <div class="tg-text">
          <div class="tg-title">Телеграм-канал</div>
          <div class="tg-sub">Бесплатный расчёт за 24 ч + скидка 10%</div>
        </div>
        <button class="tg-btn" @click="handleSubscribe">
          Подписаться
        </button>
      </div>
      <div class="tg-count">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
        Нас уже 1 500+ подписчиков
      </div>
    </div>
  </section>
</template>

<script setup>
const { openTelegramLink, hapticFeedback } = useTelegram()
const contacts = useContacts()

const handleSubscribe = () => {
  hapticFeedback('success')
  openTelegramLink(contacts.tgChannel)
}
</script>

<style scoped>
.tg-wrap {
  padding: 16px 16px 4px;
}

.tg-card {
  position: relative;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 20px;
  overflow: hidden;
  padding: 18px 18px 14px;
}

.tg-accent-line {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #29aae1 30%, #29aae1 70%, transparent);
  opacity: 0.7;
}

.tg-body {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.tg-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(41, 170, 225, 0.12);
  border: 1px solid rgba(41, 170, 225, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.tg-text {
  flex: 1;
  min-width: 0;
}

.tg-title {
  font-family: 'DM Sans', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #fff;
  margin-bottom: 2px;
}

.tg-sub {
  font-family: 'DM Sans', sans-serif;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.45);
  line-height: 1.4;
}

.tg-btn {
  background: #f8b014;
  color: #000;
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 13px;
  padding: 9px 16px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  transition: transform 0.15s;
}
.tg-btn:active { transform: scale(0.95); }

.tg-count {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.28);
  font-family: 'DM Sans', sans-serif;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}
</style>
