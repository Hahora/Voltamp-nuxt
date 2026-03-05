<template>
  <section class="hero">
    <!-- ░░ PHOTO STRIPS BACKGROUND ░░ -->
    <div class="hero-bg" aria-hidden="true">
      <div class="bg-row row-left">
        <div
          v-for="(p, i) in [...photos, ...photos]"
          :key="'a' + i"
          class="bg-cell"
          :style="{ backgroundImage: `url(${p})` }"
        />
      </div>
      <div class="bg-row row-mid">
        <div
          v-for="(p, i) in [...photos, ...photos]"
          :key="'c' + i"
          class="bg-cell"
          :style="{ backgroundImage: `url(${p})` }"
        />
      </div>
      <div class="bg-row row-right">
        <div
          v-for="(p, i) in [...photos, ...photos]"
          :key="'b' + i"
          class="bg-cell"
          :style="{ backgroundImage: `url(${p})` }"
        />
      </div>
    </div>

    <!-- ░░ OVERLAYS ░░ -->
    <div class="ov-dark" />
    <div class="ov-noise" />
    <div class="ov-vignette" />
    <div class="ov-stripe" />

    <!-- ░░ CONTENT ░░ -->
    <div class="hero-inner">
      <!-- Top bar -->
      <header class="hero-topbar">
        <img src="/images/logo.svg" alt="VOLTAMP" class="h-logo" />
      </header>

      <!-- Main -->
      <main
        class="hero-main"
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 700 } }"
      >
        <div class="h-label">
          <span class="h-dot" />
          Только премиум проекты
        </div>

        <h1 class="h-headline">
          Электро&shy;монтаж<br /><em>Премиум</em>
        </h1>

        <p class="h-sub">
          Дизайн-проекты и системы умного дома.<br />Полный цикл под ключ.
        </p>

        <div class="h-actions">
          <button class="h-btn-primary" @click="$router.push('/brief')">
            Отправить проект
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.58L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
            </svg>
          </button>
          <button class="h-btn-secondary" @click="$router.push('/portfolio')">
            Примеры работ
          </button>
        </div>
      </main>

      <!-- Stats -->
      <footer
        class="hero-stats"
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 500, delay: 350 } }"
      >
        <div class="stat">
          <span class="stat-n">150+</span>
          <span class="stat-l">Реализованных<br />проектов</span>
        </div>
        <div class="stat-div" />
        <div class="stat">
          <span class="stat-n">100%</span>
          <span class="stat-l">Довольных<br />клиентов</span>
        </div>
        <div class="stat-div" />
        <div class="stat">
          <span class="stat-n">5+</span>
          <span class="stat-l">Лет<br />опыта</span>
        </div>
      </footer>
    </div>
  </section>
</template>

<script setup>
const photos = [
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&q=70',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop&q=70',
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop&q=70',
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop&q=70',
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop&q=70',
  'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=600&h=400&fit=crop&q=70',
  'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&h=400&fit=crop&q=70',
  'https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=600&h=400&fit=crop&q=70',
]
</script>

<style scoped>
/* ── HERO ROOT ─────────────────────────── */
.hero {
  position: relative;
  min-height: 100svh;
  background: #060606;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* ── PHOTO STRIPS ─────────────────────── */
.hero-bg {
  position: absolute;
  inset: -25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  transform: rotate(-6deg);
  pointer-events: none;
  overflow: hidden;
}

.bg-row {
  display: flex;
  flex-shrink: 0;
  gap: 0;
  width: max-content;
}

.bg-cell {
  width: 300px;
  height: 200px;
  flex-shrink: 0;
  background-size: cover;
  background-position: center;
  opacity: 0.32;
}

.row-left  { animation: s-left  100s linear infinite; }
.row-mid   { animation: s-right 130s linear infinite; animation-delay: -45s; }
.row-right { animation: s-left  85s  linear infinite; animation-delay: -20s; }

@keyframes s-left  { from { transform: translateX(0); }    to { transform: translateX(-50%); } }
@keyframes s-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }

/* ── OVERLAYS ─────────────────────────── */
.ov-dark {
  position: absolute;
  inset: 0;
  background: linear-gradient(170deg, rgba(6,6,6,0.82) 0%, rgba(6,6,6,0.62) 50%, rgba(6,6,6,0.87) 100%);
}
.ov-noise {
  position: absolute;
  inset: 0;
  opacity: 0.04;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size: 200px;
}
.ov-vignette {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.72) 100%);
}
.ov-stripe {
  position: absolute;
  left: -5%;
  right: -5%;
  top: 58%;
  height: 1px;
  background: linear-gradient(90deg, transparent, #f8b014 25%, #f8b014 75%, transparent);
  opacity: 0.15;
  transform: rotate(-6deg);
  pointer-events: none;
}

/* ── CONTENT ──────────────────────────── */
.hero-inner {
  position: relative;
  z-index: 10;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 24px;
}

/* TOP BAR */
.hero-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 16px;
  margin-bottom: 28px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.h-logo {
  height: 28px;
}

/* MAIN */
.hero-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px 0 20px;
}
.h-label {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.38);
  margin-bottom: 18px;
  font-family: 'DM Sans', sans-serif;
}
.h-dot {
  display: block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #f8b014;
  flex-shrink: 0;
  animation: pdot 2.2s infinite;
}
@keyframes pdot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.35; transform: scale(1.7); }
}
.h-headline {
  font-family: 'Oswald', sans-serif;
  font-size: clamp(36px, 10.5vw, 68px);
  font-weight: 700;
  text-transform: uppercase;
  line-height: 0.95;
  letter-spacing: -0.01em;
  color: #fff;
  margin-bottom: 20px;
  overflow-wrap: break-word;
}
.h-headline em {
  font-style: normal;
  color: #f8b014;
}
.h-sub {
  font-size: 15px;
  line-height: 1.65;
  color: rgba(255,255,255,0.48);
  margin-bottom: 30px;
  font-family: 'DM Sans', sans-serif;
  max-width: 320px;
}

/* BUTTONS */
.h-actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.h-btn-primary {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #f8b014;
  color: #000;
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 15px;
  padding: 15px 28px;
  border-radius: 14px;
  border: none;
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s;
  box-shadow: 0 0 32px rgba(248,176,20,0.35);
}
.h-btn-primary:active { transform: scale(0.97); }

.h-btn-secondary {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255,0.07);
  color: rgba(255,255,255,0.75);
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 15px;
  padding: 15px 28px;
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,0.1);
  cursor: pointer;
  transition: background 0.15s;
}
.h-btn-secondary:active { transform: scale(0.97); }

/* STATS */
.hero-stats {
  display: flex;
  align-items: center;
  padding: 20px 0 28px;
  border-top: 1px solid rgba(255,255,255,0.06);
}
.stat {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}
.stat-n {
  font-family: 'Oswald', sans-serif;
  font-size: 28px;
  font-weight: 700;
  color: #fff;
  line-height: 1;
}
.stat-l {
  font-size: 11px;
  color: rgba(255,255,255,0.38);
  text-align: center;
  line-height: 1.4;
  font-family: 'DM Sans', sans-serif;
}
.stat-div {
  width: 1px;
  height: 34px;
  background: rgba(255,255,255,0.1);
  flex-shrink: 0;
}
</style>
