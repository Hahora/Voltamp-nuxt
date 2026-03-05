<template>
  <section class="pp-section">
    <div class="pp-head">
      <div class="pp-label">Реализованные объекты</div>
      <h2 class="pp-title">Примеры работ</h2>
      <p class="pp-sub">Премиум проекты нашей команды</p>
    </div>

    <div class="pp-swiper-wrap">
      <Swiper
        :modules="[SwiperAutoplay]"
        :slides-per-view="1.15"
        :space-between="10"
        :slides-offset-before="20"
        :slides-offset-after="20"
        :autoplay="{ delay: 4000, disableOnInteraction: false }"
        :grab-cursor="true"
        :breakpoints="{
          480: { slidesPerView: 1.6 },
          640: { slidesPerView: 2.2 },
        }"
      >
        <SwiperSlide v-for="(p, i) in projects" :key="i">
          <div class="pp-slide" @click="openProject(p)">
            <div class="pp-img-wrap">
              <img :src="p.image" :alt="p.title" class="pp-img" />
            </div>
            <div class="pp-overlay">
              <div class="pp-overlay-title">{{ p.title }}</div>
              <div class="pp-tags">
                <span
                  v-for="tag in p.tags.slice(0, 2)"
                  :key="tag"
                  class="pp-tag"
                  >{{ tag }}</span
                >
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

    <div class="pp-footer">
      <button class="pp-btn" @click="$router.push('/portfolio')">
        Смотреть все проекты
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8.59 16.58L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
        </svg>
      </button>
    </div>
  </section>
</template>

<script setup>
const { showPopup } = useTelegram();

const projects = [
  {
    title: "Дом в Лениногорске",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80",
    tags: ["Умный дом", "KNX", "450 м²"],
  },
  {
    title: "Пентхаус в Москве",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&q=80",
    tags: ["Мультирум", "Loxone", "280 м²"],
  },
  {
    title: "Загородный дом, Рублёвка",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop&q=80",
    tags: ["Умный дом", "HDL", "520 м²"],
  },
  {
    title: "Квартира премиум-класса",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop&q=80",
    tags: ["Дизайн", "Автоматика", "180 м²"],
  },
  {
    title: "Таунхаус Barviha Village",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&q=80",
    tags: ["Премиум", "KNX", "320 м²"],
  },
  {
    title: "Апартаменты Capital Towers",
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop&q=80",
    tags: ["Дизайн", "Автоматика", "150 м²"],
  },
];

const openProject = (p) => {
  showPopup(
    `Проект: ${p.title}\n\nВидео и полная информация доступны в Telegram канале!`,
    "Подробности проекта"
  );
};
</script>

<style scoped>
.pp-section {
  padding: 40px 0 32px;
}

.pp-head {
  padding: 0 20px;
  margin-bottom: 20px;
}
.pp-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #f8b014;
  margin-bottom: 10px;
  font-family: "DM Sans", sans-serif;
}
.pp-label::before {
  content: "";
  display: block;
  width: 16px;
  height: 1px;
  background: #f8b014;
}
.pp-title {
  font-family: "Oswald", sans-serif;
  font-size: 34px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 0.95;
  color: #fff;
  margin-bottom: 10px;
}
.pp-sub {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.45);
  font-family: "DM Sans", sans-serif;
}

.pp-swiper-wrap {
  margin-bottom: 20px;
}

.pp-slide {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 4/3;
}
.pp-img-wrap {
  width: 100%;
  height: 100%;
}
.pp-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  display: block;
}
.pp-slide:active .pp-img {
  transform: scale(1.03);
}

.pp-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(6, 6, 6, 0.85) 0%,
    rgba(6, 6, 6, 0.2) 60%,
    transparent 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 16px;
}
.pp-overlay-title {
  font-family: "DM Sans", sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #fff;
  margin-bottom: 6px;
  line-height: 1.3;
}
.pp-tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}
.pp-tag {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 3px 8px;
  border-radius: 100px;
  font-family: "DM Sans", sans-serif;
}

.pp-footer {
  padding: 0 20px;
}
.pp-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.7);
  font-family: "DM Sans", sans-serif;
  font-weight: 600;
  font-size: 14px;
  padding: 13px 24px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.09);
  cursor: pointer;
  width: 100%;
  transition: background 0.15s, transform 0.15s;
}
.pp-btn:active {
  transform: scale(0.98);
}
</style>
