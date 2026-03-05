<template>
  <div class="pv-root">
    <div class="pv-inner">

      <!-- Back -->
      <button class="pv-back" @click="$router.back()">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
        </svg>
      </button>

      <!-- Header -->
      <div class="pv-label">Политика конфиденциальности</div>
      <h1 class="pv-title">Обработка<br /><em>персональных данных</em></h1>
      <p class="pv-updated">Редакция от {{ date }}</p>

      <!-- Sections -->
      <div class="pv-sections">

        <!-- 1 -->
        <div class="pv-card">
          <div class="pv-card-num">01</div>
          <h2 class="pv-card-title">Общие положения</h2>
          <div class="pv-card-body">
            <p>Настоящая Политика конфиденциальности определяет порядок обработки персональных данных пользователей в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных».</p>
            <p>Обработку данных осуществляет <strong>Иванов Иван Иванович</strong> (далее — «VOLTAMP»). Связаться с нами: <strong>{{ contacts.email }}</strong></p>
          </div>
        </div>

        <!-- 2 -->
        <div class="pv-card">
          <div class="pv-card-num">02</div>
          <h2 class="pv-card-title">Какие данные мы собираем</h2>
          <div class="pv-card-body">
            <p>При использовании мини-приложения и заполнении формы заявки мы можем собирать следующие персональные данные:</p>
            <ul class="pv-list">
              <li>Имя и фамилия</li>
              <li>Номер телефона</li>
              <li>Адрес электронной почты</li>
              <li>Адрес объекта (для расчёта)</li>
              <li>Технические параметры проекта, переданные в свободной форме</li>
              <li>Telegram ID (автоматически при использовании мини-приложения)</li>
            </ul>
          </div>
        </div>

        <!-- 3 -->
        <div class="pv-card">
          <div class="pv-card-num">03</div>
          <h2 class="pv-card-title">Цели обработки</h2>
          <div class="pv-card-body">
            <p>Персональные данные обрабатываются исключительно в следующих целях:</p>
            <ul class="pv-list">
              <li>Подготовка коммерческого предложения и расчёт стоимости работ</li>
              <li>Связь с пользователем по вопросам заявки</li>
              <li>Исполнение договора на оказание услуг</li>
              <li>Направление информационных сообщений о статусе заявки (только с согласия)</li>
            </ul>
            <p class="pv-note">Мы не используем данные в маркетинговых целях без отдельного согласия и не передаём их третьим лицам для рекламы.</p>
          </div>
        </div>

        <!-- 4 -->
        <div class="pv-card">
          <div class="pv-card-num">04</div>
          <h2 class="pv-card-title">Правовые основания</h2>
          <div class="pv-card-body">
            <p>Обработка персональных данных осуществляется на следующих основаниях (ст. 6 ФЗ-152):</p>
            <ul class="pv-list">
              <li>Согласие субъекта персональных данных — при заполнении и отправке формы</li>
              <li>Исполнение договора, стороной которого является субъект</li>
              <li>Законный интерес оператора в части обработки обращений</li>
            </ul>
          </div>
        </div>

        <!-- 5 -->
        <div class="pv-card">
          <div class="pv-card-num">05</div>
          <h2 class="pv-card-title">Способы и сроки обработки</h2>
          <div class="pv-card-body">
            <p>Обработка данных осуществляется с использованием средств автоматизации. Данные хранятся на защищённых серверах.</p>
            <p><strong>Срок хранения:</strong> данные хранятся до исполнения заявки / договора, а затем ещё 3 года в соответствии с требованиями законодательства РФ. По истечении срока — уничтожаются.</p>
            <p>Передача данных третьим лицам возможна только в случаях, предусмотренных законом (государственные органы по запросу).</p>
          </div>
        </div>

        <!-- 6 -->
        <div class="pv-card">
          <div class="pv-card-num">06</div>
          <h2 class="pv-card-title">Ваши права</h2>
          <div class="pv-card-body">
            <p>В соответствии со ст. 14–17 ФЗ-152 вы вправе:</p>
            <ul class="pv-list">
              <li>Получить информацию об обработке ваших данных</li>
              <li>Потребовать уточнения, блокировки или уничтожения данных</li>
              <li>Отозвать согласие на обработку в любой момент</li>
              <li>Обжаловать действия оператора в Роскомнадзоре</li>
            </ul>
            <p>Для реализации прав направьте запрос на <strong>{{ contacts.email }}</strong> с указанием темы «Персональные данные». Срок ответа — не более 10 рабочих дней.</p>
          </div>
        </div>

        <!-- 7 -->
        <div class="pv-card">
          <div class="pv-card-num">07</div>
          <h2 class="pv-card-title">Cookies и аналитика</h2>
          <div class="pv-card-body">
            <p>Приложение функционирует внутри платформы Telegram и не использует cookies самостоятельно. Telegram может собирать технические данные в соответствии со своей политикой конфиденциальности.</p>
            <p>Мы не используем сторонние системы аналитики, передающие данные за пределы РФ.</p>
          </div>
        </div>

        <!-- 8 -->
        <div class="pv-card">
          <div class="pv-card-num">08</div>
          <h2 class="pv-card-title">Изменения политики</h2>
          <div class="pv-card-body">
            <p>Компания вправе в одностороннем порядке вносить изменения в настоящую Политику. Актуальная редакция всегда доступна в мини-приложении. При существенных изменениях пользователи будут уведомлены через Telegram.</p>
          </div>
        </div>

      </div>

      <!-- Contact block -->
      <div class="pv-contact-card">
        <div class="pv-contact-label">Вопросы по обработке данных</div>
        <a :href="'mailto:' + contacts.email" class="pv-contact-link">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#f8b014">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          {{ contacts.email }}
        </a>
      </div>

    </div>
  </div>
</template>

<script setup>
useHead({ title: 'Политика конфиденциальности | VOLTAMP' })

const contacts = useContacts()
const date = new Date().toLocaleDateString('ru-RU', {
  day: 'numeric', month: 'long', year: 'numeric'
})
</script>

<style scoped>
.pv-root {
  min-height: 100svh;
  background: #060606;
  color: #fff;
  font-family: 'DM Sans', sans-serif;
}

.pv-inner {
  padding: 24px 20px 80px;
}

/* ── BACK ── */
.pv-back {
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 11px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.09);
  color: rgba(255,255,255,0.7);
  cursor: pointer;
  margin-bottom: 28px;
  transition: background 0.15s;
}
.pv-back:active { background: rgba(255,255,255,0.1); }

/* ── HEADER ── */
.pv-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #f8b014;
  margin-bottom: 12px;
}
.pv-label::before {
  content: '';
  display: block;
  width: 16px;
  height: 1px;
  background: #f8b014;
}

.pv-title {
  font-family: 'Oswald', sans-serif;
  font-size: clamp(28px, 8vw, 44px);
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1.0;
  letter-spacing: -0.01em;
  margin-bottom: 10px;
}
.pv-title em {
  font-style: normal;
  color: #f8b014;
}

.pv-updated {
  font-size: 11.5px;
  color: rgba(255,255,255,0.25);
  margin-bottom: 28px;
}

/* ── SECTIONS ── */
.pv-sections {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

.pv-card {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 18px;
  padding: 18px 16px;
}

.pv-card-num {
  font-family: 'Oswald', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: #f8b014;
  opacity: 0.65;
  margin-bottom: 6px;
}

.pv-card-title {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 12px;
  line-height: 1.3;
}

.pv-card-body {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.pv-card-body p {
  font-size: 13px;
  line-height: 1.65;
  color: rgba(255,255,255,0.5);
  margin: 0;
}

.pv-card-body strong {
  color: rgba(255,255,255,0.72);
  font-weight: 500;
}

.pv-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.pv-list li {
  font-size: 13px;
  line-height: 1.55;
  color: rgba(255,255,255,0.5);
  padding-left: 14px;
  position: relative;
}

.pv-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #f8b014;
  opacity: 0.6;
}

.pv-note {
  background: rgba(248,176,20,0.06);
  border: 1px solid rgba(248,176,20,0.14);
  border-radius: 10px;
  padding: 10px 12px;
  font-size: 12.5px !important;
  color: rgba(255,255,255,0.45) !important;
  line-height: 1.55 !important;
}

/* ── CONTACT CARD ── */
.pv-contact-card {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 16px;
  padding: 16px;
}

.pv-contact-label {
  font-size: 10.5px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.28);
  margin-bottom: 10px;
  font-weight: 500;
}

.pv-contact-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  color: rgba(255,255,255,0.7);
  text-decoration: none;
  transition: color 0.15s;
}
.pv-contact-link:active { color: #f8b014; }
</style>
