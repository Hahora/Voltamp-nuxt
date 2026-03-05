<template>
  <div class="pf-page">
    <!-- Header -->
    <div class="pf-header">
      <button @click="$router.back()" class="pf-back">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
        </svg>
        <span>Назад</span>
      </button>
      <div class="pf-label">Реализованные объекты</div>
      <h1 class="pf-title">Наши проекты</h1>
      <p class="pf-sub">Реализованные проекты премиум-класса с видео и подробным описанием</p>
    </div>

    <!-- Categories -->
    <div class="pf-cats-wrap">
      <div class="pf-cats">
        <button
          v-for="cat in categories"
          :key="cat.value"
          @click="activeCategory = cat.value"
          :class="['pf-cat', { 'pf-cat--active': activeCategory === cat.value }]"
        >
          {{ cat.label }}
        </button>
      </div>
    </div>

    <!-- Projects grid -->
    <div class="pf-grid">
      <div
        v-for="(project, i) in filteredProjects"
        :key="i"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 400, delay: i * 60 } }"
        class="pf-card"
        @click="openProject(project)"
      >
        <div class="pf-img-wrap">
          <img :src="project.image" :alt="project.title" class="pf-img" />
          <div class="pf-img-overlay">
            <div class="pf-play-row">
              <div class="pf-play-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <span class="pf-play-label">Видео проекта</span>
            </div>
            <div class="pf-img-tags">
              <span v-for="tag in project.tags.slice(0, 2)" :key="tag" class="pf-img-tag">{{ tag }}</span>
            </div>
          </div>
        </div>

        <div class="pf-card-body">
          <h3 class="pf-card-title">{{ project.title }}</h3>
          <p class="pf-card-desc">{{ project.description }}</p>

          <div class="pf-meta">
            <div class="pf-meta-item">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
              <span>{{ project.area }} м²</span>
            </div>
            <div class="pf-meta-item">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/></svg>
              <span>{{ project.year }}</span>
            </div>
            <div class="pf-meta-item">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              <span>{{ project.location }}</span>
            </div>
          </div>

          <div class="pf-card-tags">
            <span v-for="tag in project.tags" :key="tag" class="pf-tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Load more -->
    <div v-if="filteredProjects.length >= 6" class="pf-more">
      <button class="pf-more-btn">Загрузить ещё</button>
    </div>

    <!-- Telegram CTA -->
    <div class="pf-tg">
      <div class="pf-tg-accent" aria-hidden="true" />
      <div class="pf-tg-icon">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#29aae1">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.247l-2.02 9.52c-.149.658-.538.818-1.09.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L6.27 14.46l-2.95-.924c-.64-.203-.654-.64.136-.948l11.527-4.445c.537-.194 1.006.131.579.104z"/>
        </svg>
      </div>
      <h3 class="pf-tg-title">Больше проектов в Телеграм!</h3>
      <p class="pf-tg-sub">Подпишитесь на наш канал, чтобы видеть новые проекты, процесс работы и получать эксклюзивные материалы</p>
      <button @click="handleTelegramClick" class="pf-tg-btn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.247l-2.02 9.52c-.149.658-.538.818-1.09.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L6.27 14.46l-2.95-.924c-.64-.203-.654-.64.136-.948l11.527-4.445c.537-.194 1.006.131.579.104z"/>
        </svg>
        Подписаться на канал
      </button>
    </div>
  </div>
</template>

<script setup>
const { openTelegramLink, showPopup, hapticFeedback } = useTelegram()

const activeCategory = ref('all')

const categories = [
  { value: 'all', label: 'Все проекты' },
  { value: 'smart', label: 'Умные дома' },
  { value: 'design', label: 'Дизайн-проекты' },
  { value: 'premium', label: 'Премиум' },
]

const projects = [
  {
    title: 'Дом в Лениноване',
    description: 'Комплексный электромонтаж загородного дома с полной автоматизацией KNX',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80',
    area: 450, year: '2024', location: 'Московская область',
    category: 'smart', tags: ['Умный дом', 'KNX', '450 м²'], videoUrl: '#',
  },
  {
    title: 'Пентхаус на Патриарших',
    description: 'Премиум электромонтаж с интеграцией мультирум систем и домашнего кинотеатра',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&q=80',
    area: 280, year: '2024', location: 'Москва, ЦАО',
    category: 'premium', tags: ['Мультирум', 'Loxone', '280 м²'], videoUrl: '#',
  },
  {
    title: 'Загородный дом в Рублёвке',
    description: 'Полный электромонтаж с системой безопасности и многозонным управлением',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop&q=80',
    area: 520, year: '2023', location: 'Рублево-Успенское ш.',
    category: 'smart', tags: ['Умный дом', 'HDL', '520 м²'], videoUrl: '#',
  },
  {
    title: 'Квартира в ЖК "Лайнер"',
    description: 'Дизайнерская электрика с точечным освещением и автоматическими шторами',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop&q=80',
    area: 180, year: '2024', location: 'Москва, СЗАО',
    category: 'design', tags: ['Дизайн', 'Автоматика', '180 м²'], videoUrl: '#',
  },
  {
    title: 'Таунхаус в Barviha Village',
    description: 'Электромонтаж премиум-класса с полной интеграцией умного дома',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&q=80',
    area: 320, year: '2023', location: 'Новая Рига',
    category: 'premium', tags: ['Умный дом', 'KNX', '320 м²'], videoUrl: '#',
  },
  {
    title: 'Апартаменты в Capital Towers',
    description: 'Современный электромонтаж с акцентным освещением',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop&q=80',
    area: 150, year: '2024', location: 'Москва, Пресня',
    category: 'design', tags: ['Освещение', 'Дизайн', '150 м²'], videoUrl: '#',
  },
  {
    title: 'Загородная резиденция',
    description: 'Комплексная автоматизация с системой безопасности и климат-контроля',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=600&fit=crop&q=80',
    area: 680, year: '2023', location: 'Истринский район',
    category: 'smart', tags: ['Умный дом', 'KNX', '680 м²'], videoUrl: '#',
  },
  {
    title: 'Двухуровневая квартира',
    description: 'Премиальная электрика с мультизонным освещением',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop&q=80',
    area: 240, year: '2024', location: 'Москва, Хамовники',
    category: 'premium', tags: ['Премиум', 'Освещение', '240 м²'], videoUrl: '#',
  },
  {
    title: 'Коттедж в Подмосковье',
    description: 'Электромонтаж с интеграцией систем видеонаблюдения и контроля доступа',
    image: 'https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=800&h=600&fit=crop&q=80',
    area: 380, year: '2023', location: 'Одинцовский район',
    category: 'smart', tags: ['Умный дом', 'HDL', '380 м²'], videoUrl: '#',
  },
]

const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') return projects
  return projects.filter(p => p.category === activeCategory.value)
})

const openProject = (project) => {
  hapticFeedback('medium')
  showPopup(
    `${project.title}\n\n${project.description}\n\nВидео и полная информация доступны в нашем Telegram канале!`,
    'О проекте'
  )
}

const contacts = useContacts()

const handleTelegramClick = () => {
  hapticFeedback('success')
  openTelegramLink(contacts.tgChannel)
}
</script>

<style scoped>
.pf-page {
  min-height: 100svh;
  background: #060606;
  color: #fff;
  padding-bottom: 100px;
}

/* ── HEADER ── */
.pf-header {
  background: linear-gradient(160deg, #111 0%, #060606 60%, #0d0d0d 100%);
  padding: 20px 20px 40px;
}
.pf-back {
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255,255,255,0.55);
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-bottom: 32px;
  width: fit-content;
  transition: color 0.15s;
}
.pf-back:active { color: #fff; }
.pf-label {
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
.pf-label::before {
  content: '';
  display: block;
  width: 16px;
  height: 1px;
  background: #f8b014;
}
.pf-title {
  font-family: 'Oswald', sans-serif;
  font-size: 38px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 0.95;
  color: #fff;
  margin-bottom: 12px;
}
.pf-sub {
  font-size: 14px;
  color: rgba(255,255,255,0.5);
  font-family: 'DM Sans', sans-serif;
  line-height: 1.5;
}

/* ── CATEGORIES ── */
.pf-cats-wrap {
  padding: 20px 16px 0;
  margin-top: -20px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}
.pf-cats-wrap::-webkit-scrollbar { display: none; }
.pf-cats {
  display: flex;
  gap: 8px;
  padding-bottom: 4px;
  width: max-content;
}
.pf-cat {
  padding: 9px 16px;
  border-radius: 10px;
  font-family: 'DM Sans', sans-serif;
  font-size: 13px;
  font-weight: 500;
  white-space: nowrap;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.09);
  color: rgba(255,255,255,0.55);
  cursor: pointer;
  transition: all 0.15s;
}
.pf-cat--active {
  background: rgba(248,176,20,0.12);
  border-color: rgba(248,176,20,0.4);
  color: #f8b014;
  font-weight: 600;
}

/* ── GRID ── */
.pf-grid {
  padding: 16px 16px 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}

/* ── PROJECT CARD ── */
.pf-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.2s;
}
.pf-card:active { border-color: rgba(248,176,20,0.25); }
.pf-img-wrap {
  position: relative;
  aspect-ratio: 16/9;
  overflow: hidden;
}
.pf-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}
.pf-card:active .pf-img { transform: scale(1.04); }
.pf-img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(6,6,6,0.88) 0%, rgba(6,6,6,0.25) 55%, transparent 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 14px 16px;
}
.pf-play-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}
.pf-play-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255,255,255,0.15);
  border: 1px solid rgba(255,255,255,0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.pf-play-label {
  font-family: 'DM Sans', sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: rgba(255,255,255,0.8);
}
.pf-img-tags { display: flex; gap: 6px; flex-wrap: wrap; }
.pf-img-tag {
  font-size: 11px;
  color: rgba(255,255,255,0.75);
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.15);
  padding: 3px 9px;
  border-radius: 100px;
  font-family: 'DM Sans', sans-serif;
}

.pf-card-body {
  padding: 16px 16px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.pf-card-title {
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #fff;
  line-height: 1.3;
}
.pf-card-desc {
  font-size: 12.5px;
  color: rgba(255,255,255,0.45);
  font-family: 'DM Sans', sans-serif;
  line-height: 1.5;
}
.pf-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.pf-meta-item {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  color: rgba(255,255,255,0.38);
  font-family: 'DM Sans', sans-serif;
}
.pf-card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding-top: 8px;
  border-top: 1px solid rgba(255,255,255,0.06);
}
.pf-tag {
  font-size: 11px;
  color: rgba(255,255,255,0.5);
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.09);
  padding: 3px 10px;
  border-radius: 100px;
  font-family: 'DM Sans', sans-serif;
}

/* ── LOAD MORE ── */
.pf-more {
  padding: 20px 16px 0;
}
.pf-more-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 13px;
  border-radius: 14px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.09);
  color: rgba(255,255,255,0.6);
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s, transform 0.15s;
}
.pf-more-btn:active { transform: scale(0.98); }

/* ── TELEGRAM CTA ── */
.pf-tg {
  position: relative;
  overflow: hidden;
  margin: 24px 16px 0;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(41,170,225,0.2);
  border-radius: 20px;
  padding: 28px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.pf-tg-accent {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #29aae1 30%, #29aae1 70%, transparent);
  opacity: 0.7;
}
.pf-tg-icon {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: rgba(41,170,225,0.1);
  border: 1px solid rgba(41,170,225,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}
.pf-tg-title {
  font-family: 'Oswald', sans-serif;
  font-size: 22px;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
  line-height: 1.1;
}
.pf-tg-sub {
  font-size: 13px;
  color: rgba(255,255,255,0.45);
  font-family: 'DM Sans', sans-serif;
  line-height: 1.5;
  max-width: 280px;
}
.pf-tg-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 4px;
  background: #f8b014;
  color: #000;
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 15px;
  padding: 14px 28px;
  border-radius: 14px;
  border: none;
  cursor: pointer;
  width: 100%;
  box-shadow: 0 0 28px rgba(248,176,20,0.25);
  transition: transform 0.15s;
}
.pf-tg-btn:active { transform: scale(0.97); }
</style>
