<template>
  <Teleport to="body">
    <!-- Backdrop -->
    <Transition name="sm-back">
      <div v-if="visible" class="sm-backdrop" @click="$emit('close')" />
    </Transition>

    <!-- Card -->
    <Transition name="sm-rise">
      <div v-if="visible" class="sm-card" role="dialog" aria-modal="true">
        <!-- Gold accent line -->
        <div class="sm-accent" />

        <!-- Close -->
        <button class="sm-close" @click="$emit('close')" aria-label="Закрыть">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>

        <!-- Icon -->
        <div class="sm-icon-wrap">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="#f8b014">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.247l-2.02 9.52c-.149.658-.538.818-1.09.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L6.27 14.46l-2.95-.924c-.64-.203-.654-.64.136-.948l11.527-4.445c.537-.194 1.006.131.579.104z"/>
          </svg>
        </div>

        <!-- Text -->
        <h2 class="sm-title">Подпишитесь на канал</h2>
        <p class="sm-text">
          Заявки принимаются только от подписчиков нашего Telegram-канала.
          Подпишитесь — и получите скидку <strong>10%</strong> на первый заказ.
        </p>

        <!-- Error hint -->
        <Transition name="sm-err">
          <p v-if="checkFailed" class="sm-error">
            Подписка не обнаружена. Подпишитесь на канал и попробуйте снова.
          </p>
        </Transition>

        <!-- Buttons -->
        <div class="sm-actions">
          <button class="sm-btn-primary" @click="handleSubscribe">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.247l-2.02 9.52c-.149.658-.538.818-1.09.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L6.27 14.46l-2.95-.924c-.64-.203-.654-.64.136-.948l11.527-4.445c.537-.194 1.006.131.579.104z"/>
            </svg>
            Перейти в канал
          </button>

          <button
            class="sm-btn-check"
            :class="{ 'sm-btn-check--loading': checking }"
            :disabled="checking"
            @click="$emit('check')"
          >
            <svg v-if="checking" class="sm-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2.5" stroke-dasharray="40" stroke-dashoffset="30" stroke-linecap="round"/>
            </svg>
            {{ checking ? 'Проверяем...' : 'Я подписался — проверить' }}
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  visible:     { type: Boolean, default: false },
  checking:    { type: Boolean, default: false },
  checkFailed: { type: Boolean, default: false },
})

defineEmits(['close', 'check'])

const { openTelegramLink, hapticFeedback } = useTelegram()
const contacts = useContacts()

const handleSubscribe = () => {
  hapticFeedback('light')
  openTelegramLink(contacts.tgChannel)
}
</script>

<style scoped>
/* ── BACKDROP ── */
.sm-backdrop {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(0, 0, 0, 0.72);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}

/* ── CARD ── */
.sm-card {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 201;
  background: #0f0f0f;
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-bottom: none;
  border-radius: 24px 24px 0 0;
  padding: 0 20px 40px;
  box-shadow:
    0 -24px 60px rgba(0, 0, 0, 0.8),
    0 0 0 1px rgba(255, 255, 255, 0.04);
  overflow: hidden;
}

/* ── ACCENT LINE ── */
.sm-accent {
  height: 2px;
  background: linear-gradient(90deg, transparent, #f8b014 30%, #f8b014 70%, transparent);
  opacity: 0.7;
  margin: 0 -20px 0;
}

/* ── CLOSE ── */
.sm-close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.15s;
}
.sm-close:active { background: rgba(255, 255, 255, 0.1); }

/* ── ICON ── */
.sm-icon-wrap {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: rgba(248, 176, 20, 0.1);
  border: 1px solid rgba(248, 176, 20, 0.22);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 24px auto 18px;
}

/* ── TEXT ── */
.sm-title {
  font-family: 'Oswald', sans-serif;
  font-size: 22px;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
  text-align: center;
  margin-bottom: 10px;
  line-height: 1.1;
}

.sm-text {
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  margin-bottom: 20px;
}

.sm-text strong {
  color: #f8b014;
  font-weight: 600;
}

/* ── ERROR ── */
.sm-error {
  background: rgba(255, 80, 80, 0.08);
  border: 1px solid rgba(255, 80, 80, 0.2);
  border-radius: 10px;
  padding: 10px 14px;
  font-family: 'DM Sans', sans-serif;
  font-size: 12.5px;
  color: rgba(255, 120, 120, 0.85);
  text-align: center;
  line-height: 1.45;
  margin-bottom: 16px;
}

/* ── ACTIONS ── */
.sm-actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.sm-btn-primary {
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
  box-shadow: 0 0 24px rgba(248, 176, 20, 0.3);
  transition: transform 0.15s;
}
.sm-btn-primary:active { transform: scale(0.97); }

.sm-btn-check {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.6);
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 14px;
  padding: 14px 24px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.09);
  cursor: pointer;
  transition: background 0.15s;
}
.sm-btn-check--loading { opacity: 0.6; cursor: not-allowed; }
.sm-btn-check:not(:disabled):active { background: rgba(255, 255, 255, 0.08); }

/* ── SPINNER ── */
.sm-spin {
  animation: sm-rotate 0.85s linear infinite;
  flex-shrink: 0;
}
@keyframes sm-rotate { to { transform: rotate(360deg); } }

/* ── TRANSITIONS ── */
.sm-back-enter-active,
.sm-back-leave-active { transition: opacity 0.25s ease; }
.sm-back-enter-from,
.sm-back-leave-to { opacity: 0; }

.sm-rise-enter-active {
  transition: opacity 0.28s ease, transform 0.32s cubic-bezier(0.34, 1.1, 0.64, 1);
}
.sm-rise-leave-active {
  transition: opacity 0.2s ease, transform 0.22s ease;
}
.sm-rise-enter-from,
.sm-rise-leave-to {
  opacity: 0;
  transform: translateY(100%);
}

.sm-err-enter-active,
.sm-err-leave-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.sm-err-enter-from { opacity: 0; transform: translateY(-4px); }
.sm-err-leave-to   { opacity: 0; }
</style>
