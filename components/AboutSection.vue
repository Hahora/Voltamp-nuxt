<template>
  <section class="ab-section">
    <div class="ab-head">
      <div class="ab-label">О компании</div>
      <h2 class="ab-title">О нас</h2>
      <p class="ab-sub">Команда профессионалов с многолетним опытом</p>
    </div>

    <!-- Stats row -->
    <div class="ab-stats">
      <div class="ab-stat">
        <span class="ab-stat-n">5+</span>
        <span class="ab-stat-l">лет опыта</span>
      </div>
      <div class="ab-stat-div" />
      <div class="ab-stat">
        <span class="ab-stat-n">150+</span>
        <span class="ab-stat-l">реализованных<br />проектов</span>
      </div>
      <div class="ab-stat-div" />
      <div class="ab-stat">
        <span class="ab-stat-n">100%</span>
        <span class="ab-stat-l">довольных<br />клиентов</span>
      </div>
    </div>

    <!-- Benefits -->
    <div class="ab-benefits">
      <div
        v-for="(b, i) in benefits"
        :key="i"
        class="ab-benefit"
        v-motion
        :initial="{ opacity: 0, x: -16 }"
        :visible="{ opacity: 1, x: 0, transition: { duration: 350, delay: i * 70 } }"
      >
        <div class="ab-benefit-icon">
          <Icon :name="b.icon" size="18" class="ab-b-icon" />
        </div>
        <div>
          <div class="ab-benefit-title">{{ b.title }}</div>
          <div class="ab-benefit-desc">{{ b.description }}</div>
        </div>
      </div>
    </div>

    <!-- Certifications -->
    <div class="ab-certs">
      <div class="ab-certs-title">Сертификаты и допуски</div>
      <div class="ab-certs-list">
        <span v-for="c in certs" :key="c" class="ab-cert">{{ c }}</span>
      </div>
    </div>

    <!-- Review -->
    <div class="ab-review">
      <div class="ab-review-stars">
        <svg v-for="i in 5" :key="i" width="14" height="14" viewBox="0 0 24 24" fill="#f8b014"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
      </div>
      <p class="ab-review-text">{{ reviews[currentReview].text }}</p>
      <div class="ab-review-footer">
        <div>
          <div class="ab-review-author">{{ reviews[currentReview].author }}</div>
          <div class="ab-review-project">{{ reviews[currentReview].project }}</div>
        </div>
        <div class="ab-review-dots">
          <button
            v-for="(_, i) in reviews"
            :key="i"
            class="ab-dot"
            :class="{ 'ab-dot-active': i === currentReview }"
            @click="currentReview = i"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const currentReview = ref(0)

const benefits = [
  {
    icon: 'mdi:certificate',
    title: 'Сертифицированные специалисты',
    description: 'Все допуски и сертификаты для работы с электричеством и умными домами',
  },
  {
    icon: 'mdi:shield-check',
    title: 'Гарантия 3 года',
    description: 'Официальная гарантия на все виды работ',
  },
  {
    icon: 'mdi:clock-fast',
    title: 'Соблюдение сроков',
    description: 'Чёткий график, всегда укладываемся в срок',
  },
  {
    icon: 'mdi:hand-heart',
    title: 'Индивидуальный подход',
    description: 'Работаем с каждым проектом индивидуально',
  },
]

const certs = ['СРО', 'Электробезопасность', 'KNX Partner', 'Loxone Partner']

const reviews = [
  {
    text: 'Отличная работа! Всё сделано качественно и в срок. Настройка умного дома — безупречно.',
    author: 'Михаил К.',
    project: 'Загородный дом, 450 м²',
  },
  {
    text: 'Работали строго по нашему дизайн-проекту. Скрытая проводка, умное освещение — всё на высшем уровне.',
    author: 'Анна В.',
    project: 'Пентхаус, 280 м²',
  },
  {
    text: 'Единственные, кто взялся за наш сложный проект. Результат превзошёл все ожидания.',
    author: 'Сергей П.',
    project: 'Таунхаус, 320 м²',
  },
]
</script>

<style scoped>
.ab-section { padding: 40px 20px 40px; }

.ab-head { margin-bottom: 24px; }
.ab-label {
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
.ab-label::before {
  content: '';
  display: block;
  width: 16px;
  height: 1px;
  background: #f8b014;
}
.ab-title {
  font-family: 'Oswald', sans-serif;
  font-size: 34px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 0.95;
  color: #fff;
  margin-bottom: 10px;
}
.ab-sub {
  font-size: 14px;
  color: rgba(255,255,255,0.45);
  font-family: 'DM Sans', sans-serif;
}

/* STATS */
.ab-stats {
  display: flex;
  align-items: center;
  padding: 20px 0;
  margin-bottom: 24px;
  border-top: 1px solid rgba(255,255,255,0.06);
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.ab-stat {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}
.ab-stat-n {
  font-family: 'Oswald', sans-serif;
  font-size: 30px;
  font-weight: 700;
  color: #f8b014;
  line-height: 1;
}
.ab-stat-l {
  font-size: 11px;
  color: rgba(255,255,255,0.38);
  text-align: center;
  line-height: 1.4;
  font-family: 'DM Sans', sans-serif;
}
.ab-stat-div {
  width: 1px;
  height: 32px;
  background: rgba(255,255,255,0.1);
  flex-shrink: 0;
}

/* BENEFITS */
.ab-benefits {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 24px;
}
.ab-benefit {
  display: flex;
  align-items: flex-start;
  gap: 14px;
}
.ab-benefit-icon {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: rgba(248,176,20,0.1);
  border: 1px solid rgba(248,176,20,0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.ab-b-icon { color: #f8b014; }
.ab-benefit-title {
  font-family: 'DM Sans', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #fff;
  margin-bottom: 3px;
}
.ab-benefit-desc {
  font-size: 13px;
  color: rgba(255,255,255,0.42);
  font-family: 'DM Sans', sans-serif;
  line-height: 1.45;
}

/* CERTS */
.ab-certs {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 20px;
}
.ab-certs-title {
  font-family: 'DM Sans', sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: rgba(255,255,255,0.5);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 12px;
}
.ab-certs-list { display: flex; flex-wrap: wrap; gap: 8px; }
.ab-cert {
  font-size: 12px;
  font-family: 'DM Sans', sans-serif;
  color: rgba(255,255,255,0.65);
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  padding: 5px 12px;
  border-radius: 8px;
  font-weight: 500;
}

/* REVIEW */
.ab-review {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 18px;
  padding: 20px;
}
.ab-review-stars {
  display: flex;
  gap: 2px;
  margin-bottom: 12px;
}
.ab-review-text {
  font-size: 13.5px;
  color: rgba(255,255,255,0.78);
  line-height: 1.6;
  font-family: 'DM Sans', sans-serif;
  margin-bottom: 16px;
}
.ab-review-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.ab-review-author {
  font-family: 'DM Sans', sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: #fff;
  margin-bottom: 2px;
}
.ab-review-project {
  font-size: 11px;
  color: rgba(255,255,255,0.38);
  font-family: 'DM Sans', sans-serif;
}
.ab-review-dots { display: flex; gap: 5px; align-items: center; }
.ab-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255,255,255,0.2);
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  padding: 0;
}
.ab-dot-active {
  background: #f8b014;
  width: 16px;
  border-radius: 3px;
}
</style>
