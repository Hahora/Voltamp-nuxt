<template>
  <div v-if="!isMenuOpen" class="cw-root">

    <!-- Backdrop -->
    <Teleport to="body">
      <Transition name="cw-fade">
        <div
          v-if="isOpen"
          class="cw-backdrop"
          @click="close"
        />
      </Transition>
    </Teleport>

    <!-- Contact panel + trigger -->
    <div class="cw-wrap">

      <!-- Contact card (slides up) -->
      <Transition name="cw-panel">
        <div v-if="isOpen" class="cw-panel">
          <!-- Accent line -->
          <div class="cw-panel-accent" />

          <!-- Label -->
          <div class="cw-panel-label">Связаться с нами</div>

          <!-- Contacts list -->
          <div class="cw-list">

            <!-- Phone -->
            <a href="#" class="cw-row" @click.prevent="handlePhone">
              <span class="cw-row-icon cw-row-icon--gold">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#f8b014">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </span>
              <span class="cw-row-body">
                <span class="cw-row-hint">Позвонить</span>
                <span class="cw-row-val">{{ contacts.phoneDisplay }}</span>
              </span>
              <svg class="cw-row-arr" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.59 16.58L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
              </svg>
            </a>

            <!-- Telegram -->
            <button class="cw-row" @click="handleTelegram">
              <span class="cw-row-icon cw-row-icon--blue">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#29aae1">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.247l-2.02 9.52c-.149.658-.538.818-1.09.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L6.27 14.46l-2.95-.924c-.64-.203-.654-.64.136-.948l11.527-4.445c.537-.194 1.006.131.579.104z"/>
                </svg>
              </span>
              <span class="cw-row-body">
                <span class="cw-row-hint">Написать в Telegram</span>
                <span class="cw-row-val">{{ contacts.tgHandle }}</span>
              </span>
              <svg class="cw-row-arr" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.59 16.58L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
              </svg>
            </button>

            <!-- Email -->
            <a href="#" class="cw-row cw-row--last" @click.prevent="handleEmail">
              <span class="cw-row-icon cw-row-icon--dim">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="rgba(255,255,255,0.45)">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </span>
              <span class="cw-row-body">
                <span class="cw-row-hint">Написать на почту</span>
                <span class="cw-row-val">{{ contacts.email }}</span>
              </span>
              <svg class="cw-row-arr" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.59 16.58L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
              </svg>
            </a>
          </div>

          <!-- Footer hint -->
          <div class="cw-panel-foot">Ответим в течение 24 часов</div>
        </div>
      </Transition>

      <!-- Trigger button -->
      <button
        class="cw-trigger"
        :class="{ 'cw-trigger--open': isOpen }"
        @click="toggle"
        :aria-label="isOpen ? 'Закрыть' : 'Связаться'"
      >
        <Transition name="cw-icon" mode="out-in">
          <!-- Close icon -->
          <svg v-if="isOpen" key="close" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
          <!-- Phone icon -->
          <svg v-else key="phone" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
        </Transition>
      </button>
    </div>
  </div>
</template>

<script setup>
const { openTelegramLink, hapticFeedback } = useTelegram()
const { isMenuOpen } = useMenuState()
const { show: showToast } = useToast()

const isOpen = ref(false)

const toggle = () => {
  isOpen.value = !isOpen.value
  hapticFeedback('light')
}

const close = () => {
  isOpen.value = false
}

const contacts = useContacts()

const copyAndToast = async (text, msg) => {
  try {
    await navigator.clipboard.writeText(text)
    hapticFeedback('success')
    showToast(msg)
  } catch {
    hapticFeedback('error')
  }
}

const handlePhone = () => {
  copyAndToast(contacts.phone, 'Номер скопирован ✓')
}

const handleEmail = () => {
  copyAndToast(contacts.email, 'Почта скопирована ✓')
}

const handleTelegram = () => {
  hapticFeedback('medium')
  openTelegramLink(contacts.tgChannel)
  isOpen.value = false
}
</script>

<style scoped>
/* ── ROOT ── */
.cw-root {
  position: fixed;
  bottom: 24px;
  right: 16px;
  z-index: 50;
}

/* ── BACKDROP ── */
.cw-backdrop {
  position: fixed;
  inset: 0;
  z-index: 45;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}

/* ── WRAPPER — stacks panel above button ── */
.cw-wrap {
  position: relative;
  z-index: 50;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
}

/* ── CONTACT PANEL ── */
.cw-panel {
  width: 260px;
  background: #0d0d0d;
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 20px;
  overflow: hidden;
  box-shadow:
    0 24px 60px rgba(0, 0, 0, 0.7),
    0 0 0 1px rgba(255, 255, 255, 0.04);
}

.cw-panel-accent {
  height: 2px;
  background: linear-gradient(90deg, transparent, #f8b014 30%, #f8b014 70%, transparent);
  opacity: 0.65;
}

.cw-panel-label {
  padding: 14px 16px 10px;
  font-family: 'DM Sans', sans-serif;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.3);
}

/* ── CONTACT LIST ── */
.cw-list {
  display: flex;
  flex-direction: column;
  padding: 0 8px 8px;
  gap: 1px;
}

.cw-row {
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 11px 10px;
  border-radius: 13px;
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  width: 100%;
  text-align: left;
  transition: background 0.15s;
}
.cw-row:active { background: rgba(255, 255, 255, 0.05); }

.cw-row-icon {
  width: 34px;
  height: 34px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.cw-row-icon--gold {
  background: rgba(248, 176, 20, 0.1);
  border: 1px solid rgba(248, 176, 20, 0.2);
}
.cw-row-icon--blue {
  background: rgba(41, 170, 225, 0.1);
  border: 1px solid rgba(41, 170, 225, 0.2);
}
.cw-row-icon--dim {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.cw-row-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: 0;
}
.cw-row-hint {
  font-family: 'DM Sans', sans-serif;
  font-size: 10px;
  color: rgba(255, 255, 255, 0.28);
  line-height: 1.3;
}
.cw-row-val {
  font-family: 'DM Sans', sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.cw-row-arr {
  color: rgba(255, 255, 255, 0.15);
  flex-shrink: 0;
}

/* ── PANEL FOOTER ── */
.cw-panel-foot {
  padding: 8px 16px 14px;
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.2);
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  margin-top: 4px;
}

/* ── TRIGGER BUTTON ── */
.cw-trigger {
  width: 52px;
  height: 52px;
  border-radius: 16px;
  background: #f8b014;
  color: #000;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    0 8px 28px rgba(248, 176, 20, 0.45),
    0 2px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.15s, box-shadow 0.2s, background 0.2s;
  flex-shrink: 0;
}
.cw-trigger:active {
  transform: scale(0.92);
  box-shadow: 0 4px 16px rgba(248, 176, 20, 0.3);
}
.cw-trigger--open {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* ── TRANSITIONS ── */
.cw-fade-enter-active,
.cw-fade-leave-active { transition: opacity 0.22s ease; }
.cw-fade-enter-from,
.cw-fade-leave-to { opacity: 0; }

.cw-panel-enter-active {
  transition: opacity 0.25s ease, transform 0.28s cubic-bezier(0.34, 1.2, 0.64, 1);
}
.cw-panel-leave-active {
  transition: opacity 0.18s ease, transform 0.2s ease;
}
.cw-panel-enter-from,
.cw-panel-leave-to {
  opacity: 0;
  transform: translateY(12px) scale(0.97);
}

.cw-icon-enter-active,
.cw-icon-leave-active { transition: opacity 0.15s ease, transform 0.15s ease; }
.cw-icon-enter-from { opacity: 0; transform: scale(0.5) rotate(90deg); }
.cw-icon-leave-to   { opacity: 0; transform: scale(0.5) rotate(-90deg); }
</style>
