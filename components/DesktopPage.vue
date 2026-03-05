<template>
  <div class="desktop-root">
    <!-- ░░ PHOTO BACKGROUND ░░ -->
    <div class="photo-grid" aria-hidden="true">
      <!-- Верхний ряд → едет влево -->
      <div class="grid-row row-left">
        <div v-for="(photo, i) in [...photos, ...photos]" :key="'a'+i" class="cell">
          <div class="cell-photo" :style="{ backgroundImage: `url(${photo})` }" />
        </div>
      </div>
      <!-- Средний ряд → едет вправо (только mobile) -->
      <div class="grid-row row-left row-mid">
        <div v-for="(photo, i) in [...photos, ...photos]" :key="'c'+i" class="cell">
          <div class="cell-photo" :style="{ backgroundImage: `url(${photo})` }" />
        </div>
      </div>
      <!-- Нижний ряд → едет вправо -->
      <div class="grid-row row-right">
        <div v-for="(photo, i) in [...photos, ...photos]" :key="'b'+i" class="cell">
          <div class="cell-photo" :style="{ backgroundImage: `url(${photo})` }" />
        </div>
      </div>
    </div>

    <!-- ░░ OVERLAYS ░░ -->
    <div class="overlay-dark" />
    <div class="overlay-noise" />
    <div class="overlay-vignette" />
    <div class="stripe" aria-hidden="true" />


    <!-- ░░ CONTENT ░░ -->
    <div class="content-wrap">
      <!-- TOP BAR -->
      <header class="top-bar">
        <img src="/images/logo.svg" alt="VOLTAMP" class="logo-img" />
        <div class="badge">ТЕЛЕГРАМ МИНИ-АПП</div>
      </header>

      <!-- HERO -->
      <main class="hero">
        <div class="hero-inner">
          <div class="label-row">
            <span class="yellow-dot" />
            <span class="label-text">Доступно только в Телеграм</span>
          </div>

          <h1 class="headline">Откройте<br />в&nbsp;<em>Телеграм</em></h1>

          <p class="sub">
            Это приложение работает внутри Телеграм.<br class="br-desk" />
            Нажмите кнопку ниже, чтобы открыть его прямо сейчас.
          </p>

          <div class="cta-group">
            <a :href="botLink" target="_blank" class="btn-primary-tg">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.247l-2.02 9.52c-.149.658-.538.818-1.09.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L6.27 14.46l-2.95-.924c-.64-.203-.654-.64.136-.948l11.527-4.445c.537-.194 1.006.131.579.104z"
                />
              </svg>
              Открыть приложение
            </a>
            <a :href="channelLink" target="_blank" class="btn-secondary-tg">
              Наш Телеграм-канал
            </a>
          </div>
        </div>
      </main>

      <!-- BOTTOM CONTACTS -->
      <footer class="contacts-bar">
        <a :href="`tel:${phone}`" class="contact-item">
          <span class="contact-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
              />
            </svg>
          </span>
          <span>{{ phone }}</span>
        </a>
        <span class="contact-divider" />
        <a :href="`mailto:${email}`" class="contact-item">
          <span class="contact-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
              />
            </svg>
          </span>
          <span>{{ email }}</span>
        </a>
        <span class="contact-divider" />
        <a :href="channelLink" target="_blank" class="contact-item">
          <span class="contact-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.247l-2.02 9.52c-.149.658-.538.818-1.09.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L6.27 14.46l-2.95-.924c-.64-.203-.654-.64.136-.948l11.527-4.445c.537-.194 1.006.131.579.104z"
              />
            </svg>
          </span>
          <span>@voltamp_official</span>
        </a>
        <span class="contact-divider hide-mobile" />
        <span class="copyright hide-mobile"
          >© {{ new Date().getFullYear() }} VOLTAMP</span
        >
      </footer>
    </div>
  </div>
</template>

<script setup>
const { tgBot: botLink, tgChannel: channelLink, phoneDisplay: phone, email } = useContacts()


const photos = [
  "https://i.ytimg.com/vi/50O-4nIqy0U/maxresdefault.jpg",
  "https://avatars.mds.yandex.net/i?id=734d0ad6e81f5cac38c2599fdf2dca9b_l-5273766-images-thumbs&n=13",
  "https://xn--80az8a.xn--d1aqf.xn--p1ai/resizer/v2/image?dpr=1&enlarge=true&extend=true&height=0&imageUrl=AA%2F68%2F0B%2F46%2FE8%2F6B%2F4A%2F1C%2F87%2FCB%2FBB%2F53%2F00%2F10%2F96%2F34%2FAA680B46E86B4A1C87CBBB5300109634&quality=80&resizeType=fill&systemClientId=igs-client&width=1032",
  "https://i.pinimg.com/originals/b9/15/b8/b915b83a0d912ec29b05c1096075bc52.jpg?nii=t",
  "https://avatars.mds.yandex.net/get-altay/1923723/2a0000016c6fa39780c2e0f19eb2413532cb/XXL_height",
  "https://avatars.mds.yandex.net/i?id=175490f7c126352cbcd90186920aacbb_l-3598911-images-thumbs&n=13",
  "https://honka.ru/wp-content/uploads/2018/07/Copy-of-Main-photo-Safiiri-130-1A-e1594208067919.jpg",
  "https://avatars.mds.yandex.net/i?id=964027f3c958fb5dea207016340ea0ec_l-5204637-images-thumbs&n=13",
];
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&family=DM+Sans:wght@300;400;500&display=swap");

/* ── ROOT ─────────────────────────────── */
.desktop-root {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: #060606;
  overflow: hidden;
  font-family: "DM Sans", sans-serif;
  color: #fff;
}

/* ── PHOTO BACKGROUND ──────────────────── */
.photo-grid {
  position: absolute;
  inset: -15%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  transform: rotate(-6deg);
  pointer-events: none;
  overflow: hidden;
}

.grid-row {
  display: flex;
  gap: 10px;
  width: max-content;
  flex-shrink: 0;
}

.cell {
  width: 1100px;
  height: 560px;
  border-radius: 24px;
  overflow: hidden;
  flex-shrink: 0;
}

.cell-photo {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0.28;
}

.row-left  { animation: scroll-left  140s linear infinite; }
.row-right { animation: scroll-right 120s linear infinite; }
.row-mid   { display: none; animation-delay: -30s; }

@keyframes scroll-left {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
@keyframes scroll-right {
  from { transform: translateX(-50%); }
  to   { transform: translateX(0); }
}

/* ── OVERLAYS ──────────────────────────── */
.overlay-dark {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    160deg,
    rgba(6, 6, 6, 0.84) 0%,
    rgba(6, 6, 6, 0.68) 50%,
    rgba(6, 6, 6, 0.9) 100%
  );
}

.overlay-vignette {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at center,
    transparent 25%,
    rgba(0, 0, 0, 0.72) 100%
  );
}

.overlay-noise {
  position: absolute;
  inset: 0;
  opacity: 0.04;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 200px;
}

.stripe {
  position: absolute;
  left: -5%;
  right: -5%;
  top: 50%;
  height: 1px;
  background: linear-gradient(90deg, transparent, #f8b014 20%, #f8b014 80%, transparent);
  opacity: 0.2;
  transform: rotate(-6deg);
  pointer-events: none;
}


/* ── CONTENT WRAPPER ───────────────────── */
.content-wrap {
  position: relative;
  z-index: 10;
  height: 100%;
  display: flex;
  flex-direction: column;
}

/* ── TOP BAR ────────────────────────────── */
.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28px 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  animation: slideDown 0.7s ease both;
}

.logo-img {
  height: 36px;
}

.badge {
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #f8b014;
  border: 1px solid rgba(248, 176, 20, 0.4);
  padding: 5px 12px;
  border-radius: 100px;
}

/* ── HERO ────────────────────────────────── */
.hero {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.hero-inner {
  max-width: 580px;
  text-align: center;
  animation: fadeUp 0.9s 0.2s ease both;
}

.label-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 28px;
}

.yellow-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #f8b014;
  flex-shrink: 0;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.4;
    transform: scale(1.5);
  }
}

.label-text {
  font-size: 12px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
}

.headline {
  font-family: "Oswald", sans-serif;
  font-size: clamp(52px, 9vw, 96px);
  font-weight: 700;
  line-height: 0.95;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  margin-bottom: 28px;
}

.headline em {
  font-style: normal;
  color: #f8b014;
}

.sub {
  font-size: 15px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 44px;
}

.br-desk {
  display: none;
}
@media (min-width: 600px) {
  .br-desk {
    display: block;
  }
}

/* ── BUTTONS ─────────────────────────────── */
.cta-group {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary-tg {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #f8b014;
  color: #000;
  font-weight: 600;
  font-size: 15px;
  padding: 15px 30px;
  border-radius: 14px;
  text-decoration: none;
  transition: transform 0.15s, box-shadow 0.15s;
  box-shadow: 0 0 32px rgba(248, 176, 20, 0.3);
}

.btn-primary-tg:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 40px rgba(248, 176, 20, 0.5);
}

.btn-secondary-tg {
  display: inline-flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.07);
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  font-size: 15px;
  padding: 15px 26px;
  border-radius: 14px;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  transition: background 0.15s, border-color 0.15s;
}

.btn-secondary-tg:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.22);
}

/* ── CONTACTS BAR ────────────────────────── */
.contacts-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 20px 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  flex-wrap: wrap;
  animation: slideUp 0.7s 0.4s ease both;
}

.contact-item {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.4);
  text-decoration: none;
  padding: 6px 10px;
  border-radius: 8px;
  transition: color 0.15s, background 0.15s;
  white-space: nowrap;
}

.contact-item:hover {
  color: rgba(255, 255, 255, 0.85);
  background: rgba(255, 255, 255, 0.06);
}

.contact-icon {
  color: #f8b014;
  display: flex;
  align-items: center;
}

.contact-divider {
  width: 1px;
  height: 14px;
  background: rgba(255, 255, 255, 0.12);
  flex-shrink: 0;
}

.copyright {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.2);
  letter-spacing: 0.05em;
}

.hide-mobile {
  display: none;
}

/* ── PAGE ANIMATIONS ─────────────────────── */
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ── RESPONSIVE ──────────────────────────── */
@media (min-width: 640px) {
  .hide-mobile {
    display: flex;
  }
  .top-bar {
    padding: 28px 56px;
  }
  .contacts-bar {
    padding: 20px 56px;
  }
}

@media (max-width: 480px) {
  .photo-grid {
    justify-content: center;
    gap: 0;
  }
  .row-mid { display: flex; }
  .stripe { display: none; }
  .grid-row { gap: 0; }
  .cell {
    width: 320px;
    height: 240px;
    border-radius: 0;
  }
  .overlay-dark {
    background: linear-gradient(
      160deg,
      rgba(6, 6, 6, 0.65) 0%,
      rgba(6, 6, 6, 0.50) 50%,
      rgba(6, 6, 6, 0.70) 100%
    );
  }
  .top-bar {
    padding: 20px 24px;
  }
  .badge {
    font-size: 8px;
    letter-spacing: 0.1em;
    padding: 4px 10px;
  }
  .hero {
    padding: 24px;
  }
  .contacts-bar {
    padding: 14px 16px;
    gap: 3px;
  }
  .contact-item {
    font-size: 11px;
    padding: 5px 7px;
  }
  .cta-group {
    flex-direction: column;
  }
  .btn-primary-tg,
  .btn-secondary-tg {
    width: 100%;
    justify-content: center;
    font-size: 14px;
    padding: 14px 20px;
  }
}
</style>
