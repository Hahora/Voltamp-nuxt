<template>
  <footer class="footer">
    <div class="footer-noise" aria-hidden="true" />

    <div class="footer-inner">

      <!-- Brand -->
      <div class="footer-brand">
        <img src="/images/logo.svg" alt="VOLTAMP" class="footer-logo" />
        <p class="footer-tagline">Электромонтаж и умные дома премиум-класса</p>
      </div>

      <!-- Divider -->
      <div class="footer-divider" />

      <!-- Contacts label -->
      <div class="footer-section-label">Контакты</div>

      <!-- Contact rows -->
      <div class="footer-contacts">
        <a href="#" class="footer-contact" @click.prevent="copyAndToast(contacts.phone, 'Номер скопирован ✓')">
          <div class="footer-ci footer-ci--gold">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#f8b014">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
          </div>
          <div class="footer-contact-body">
            <span class="footer-contact-hint">Телефон</span>
            <span class="footer-contact-val">{{ contacts.phoneDisplay }}</span>
          </div>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(255,255,255,0.2)" class="footer-contact-arr">
            <path d="M8.59 16.58L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
          </svg>
        </a>

        <a href="#" class="footer-contact" @click.prevent="copyAndToast(contacts.email, 'Почта скопирована ✓')">
          <div class="footer-ci footer-ci--gold">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#f8b014">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </div>
          <div class="footer-contact-body">
            <span class="footer-contact-hint">Почта</span>
            <span class="footer-contact-val">{{ contacts.email }}</span>
          </div>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(255,255,255,0.2)" class="footer-contact-arr">
            <path d="M8.59 16.58L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
          </svg>
        </a>

        <a href="#" class="footer-contact" @click.prevent="openTelegramLink(contacts.tgChannel)">
          <div class="footer-ci footer-ci--blue">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#29aae1">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.247l-2.02 9.52c-.149.658-.538.818-1.09.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L6.27 14.46l-2.95-.924c-.64-.203-.654-.64.136-.948l11.527-4.445c.537-.194 1.006.131.579.104z"/>
            </svg>
          </div>
          <div class="footer-contact-body">
            <span class="footer-contact-hint">Телеграм</span>
            <span class="footer-contact-val">{{ contacts.tgHandle }}</span>
          </div>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(255,255,255,0.2)" class="footer-contact-arr">
            <path d="M8.59 16.58L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
          </svg>
        </a>
      </div>

      <!-- TG promo -->
      <div class="footer-tg-card">
        <div class="footer-tg-accent" aria-hidden="true" />
        <div class="footer-tg-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#29aae1">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.247l-2.02 9.52c-.149.658-.538.818-1.09.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L6.27 14.46l-2.95-.924c-.64-.203-.654-.64.136-.948l11.527-4.445c.537-.194 1.006.131.579.104z"/>
          </svg>
        </div>
        <div class="footer-tg-text">
          <span class="footer-tg-title">Подписаться на канал</span>
          <span class="footer-tg-sub">Новые проекты, советы и скидка 10%</span>
        </div>
        <a href="#" class="footer-tg-btn" aria-label="Подписаться" @click.prevent="openTelegramLink(contacts.tgChannel)">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.59 16.58L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
          </svg>
        </a>
      </div>

      <!-- Bottom -->
      <div class="footer-bottom">
        <span class="footer-copy">© {{ new Date().getFullYear() }} VOLTAMP</span>
        <NuxtLink to="/privacy" class="footer-pdp">Политика конфиденциальности</NuxtLink>
      </div>

    </div>
  </footer>
</template>

<script setup>
const contacts = useContacts()
const { openTelegramLink, hapticFeedback } = useTelegram()
const { show: showToast } = useToast()

const copyAndToast = async (text, msg) => {
  try {
    await navigator.clipboard.writeText(text)
    hapticFeedback('success')
    showToast(msg)
  } catch {
    hapticFeedback('error')
  }
}
</script>

<style scoped>
.footer {
  position: relative;
  background: #050505;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  overflow: hidden;
}

.footer-noise {
  position: absolute;
  inset: 0;
  opacity: 0.025;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size: 200px;
  pointer-events: none;
}

.footer-inner {
  position: relative;
  padding: 28px 20px 90px; /* 90px clears the ContactWidget floating button */
  display: flex;
  flex-direction: column;
  gap: 0;
}

/* ── BRAND ── */
.footer-brand {
  margin-bottom: 20px;
}
.footer-brand-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
.footer-logo {
  height: 24px;
}
.footer-tg-round {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #0088cc;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 4px 16px rgba(0, 136, 204, 0.28);
  transition: transform 0.15s;
}
.footer-tg-round:active { transform: scale(0.9); }
.footer-tagline {
  font-family: 'DM Sans', sans-serif;
  font-size: 12.5px;
  color: rgba(255, 255, 255, 0.3);
  line-height: 1.4;
  margin: 0;
}

/* ── DIVIDER ── */
.footer-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.06);
  margin-bottom: 20px;
}

/* ── SECTION LABEL ── */
.footer-section-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #f8b014;
  margin-bottom: 14px;
  font-family: 'DM Sans', sans-serif;
}
.footer-section-label::before {
  content: '';
  display: block;
  width: 14px;
  height: 1px;
  background: #f8b014;
}

/* ── CONTACTS ── */
.footer-contacts {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-bottom: 16px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 18px;
  overflow: hidden;
}
.footer-contact {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  padding: 13px 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: background 0.15s;
}
.footer-contact:last-child { border-bottom: none; }
.footer-contact:active { background: rgba(255, 255, 255, 0.04); }

.footer-ci {
  width: 34px;
  height: 34px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.footer-ci--gold {
  background: rgba(248, 176, 20, 0.1);
  border: 1px solid rgba(248, 176, 20, 0.2);
}
.footer-ci--blue {
  background: rgba(41, 170, 225, 0.1);
  border: 1px solid rgba(41, 170, 225, 0.2);
}

.footer-contact-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: 0;
}
.footer-contact-hint {
  font-size: 10.5px;
  color: rgba(255, 255, 255, 0.3);
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
}
.footer-contact-val {
  font-size: 13.5px;
  color: rgba(255, 255, 255, 0.7);
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.footer-contact-arr { flex-shrink: 0; }

/* ── TG PROMO ── */
.footer-tg-card {
  position: relative;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(41, 170, 225, 0.18);
  border-radius: 16px;
  padding: 14px 14px 14px 14px;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}
.footer-tg-accent {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #29aae1 30%, #29aae1 70%, transparent);
  opacity: 0.6;
}
.footer-tg-icon {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: rgba(41, 170, 225, 0.1);
  border: 1px solid rgba(41, 170, 225, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.footer-tg-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}
.footer-tg-title {
  font-family: 'DM Sans', sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: #fff;
  line-height: 1.3;
}
.footer-tg-sub {
  font-family: 'DM Sans', sans-serif;
  font-size: 11.5px;
  color: rgba(255, 255, 255, 0.38);
  line-height: 1.4;
}
.footer-tg-btn {
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: #f8b014;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: #000;
  transition: transform 0.15s;
}
.footer-tg-btn:active { transform: scale(0.9); }

/* ── BOTTOM ── */
.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}
.footer-copy {
  font-size: 11.5px;
  color: rgba(255, 255, 255, 0.28);
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  letter-spacing: 0.04em;
}
.footer-pdp {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.22);
  font-family: 'DM Sans', sans-serif;
  text-decoration: underline;
  text-decoration-color: rgba(255,255,255,0.1);
  text-underline-offset: 2px;
  transition: color 0.15s;
}
.footer-pdp:active { color: rgba(248, 176, 20, 0.7); }
</style>
