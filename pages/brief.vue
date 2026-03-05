<template>
  <div class="bf-page">
    <!-- Header -->
    <div class="bf-header">
      <button @click="$router.back()" class="bf-back">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
          />
        </svg>
        <span>Назад</span>
      </button>
      <div class="bf-label">Бесплатный расчёт за 24 ч</div>
      <h1 class="bf-title">Отправить проект</h1>
      <p class="bf-sub">
        Заполните форму — мы свяжемся и сделаем бесплатный расчёт за 24 часа
      </p>
    </div>

    <!-- Form -->
    <div class="bf-content">
      <form @submit.prevent="handleSubmit" class="bf-form">
        <!-- Project type -->
        <div class="bf-field">
          <label class="bf-field-label"
            >Тип объекта <span class="bf-req">*</span></label
          >
          <div class="bf-options-list">
            <button
              v-for="type in projectTypes"
              :key="type.value"
              type="button"
              @click="form.projectType = type.value"
              :class="[
                'bf-option',
                { 'bf-option--active': form.projectType === type.value },
              ]"
            >
              <div class="bf-option-icon">
                <Icon :name="type.icon" size="20" class="bf-opt-icon" />
              </div>
              <span class="bf-option-label">{{ type.label }}</span>
              <div
                v-if="form.projectType === type.value"
                class="bf-option-check"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#f8b014">
                  <path
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>

        <!-- Area -->
        <div class="bf-field">
          <label class="bf-field-label"
            >Площадь объекта (м²) <span class="bf-req">*</span></label
          >
          <input
            v-model="form.area"
            type="number"
            required
            placeholder="Например: 120"
            class="bf-input"
          />
        </div>

        <!-- Has design project -->
        <div class="bf-field">
          <label class="bf-field-label">Есть ли дизайн-проект?</label>
          <div class="bf-toggle-grid">
            <button
              type="button"
              @click="form.hasDesignProject = 'yes'"
              :class="['bf-toggle', { 'bf-toggle--active': form.hasDesignProject === 'yes' }]"
            >Да, есть</button>
            <button
              type="button"
              @click="form.hasDesignProject = 'in_progress'"
              :class="['bf-toggle', { 'bf-toggle--active': form.hasDesignProject === 'in_progress' }]"
            >В процессе</button>
            <button
              type="button"
              @click="form.hasDesignProject = 'no'"
              :class="['bf-toggle', { 'bf-toggle--active': form.hasDesignProject === 'no' }]"
            >Нет</button>
          </div>
        </div>

        <!-- PDF upload -->
        <div v-if="form.hasDesignProject === 'yes'" class="bf-field">
          <label class="bf-field-label">
            Загрузить дизайн-проект
            <span class="bf-field-hint">PDF, не обязательно</span>
          </label>
          <div
            @click="$refs.fileInput.click()"
            @dragover.prevent
            @drop.prevent="handleFileDrop"
            :class="['bf-upload', { 'bf-upload--filled': uploadedFile }]"
          >
            <div v-if="!uploadedFile" class="bf-upload-empty">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="rgba(255,255,255,0.25)"
              >
                <path
                  d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"
                />
              </svg>
              <span class="bf-upload-text">Нажмите или перетащите файл</span>
              <span class="bf-upload-hint">PDF до 50 МБ</span>
            </div>
            <div v-else class="bf-upload-filled">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="#f8b014">
                <path
                  d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z"
                />
              </svg>
              <span class="bf-upload-filename">{{ uploadedFile.name }}</span>
              <span class="bf-upload-hint"
                >{{ (uploadedFile.size / 1024 / 1024).toFixed(2) }} МБ</span
              >
              <button
                type="button"
                @click.stop="uploadedFile = null"
                class="bf-upload-remove"
              >
                Удалить
              </button>
            </div>
          </div>
          <input
            ref="fileInput"
            type="file"
            accept=".pdf"
            @change="handleFileSelect"
            class="bf-hidden-input"
          />
        </div>

        <!-- Smart home -->
        <div class="bf-field">
          <label class="bf-field-label">Планируется ли умный дом?</label>
          <div class="bf-smart-grid">
            <button
              v-for="opt in smartHomeOptions"
              :key="opt.value"
              type="button"
              @click="form.smartHome = opt.value"
              :class="[
                'bf-smart-btn',
                { 'bf-smart-btn--active': form.smartHome === opt.value },
              ]"
            >
              {{ opt.label }}
            </button>
          </div>
        </div>

        <!-- Address -->
        <div class="bf-field">
          <label class="bf-field-label">Адрес объекта</label>
          <input
            v-model="form.address"
            type="text"
            placeholder="Город, улица, дом"
            class="bf-input"
          />
        </div>

        <!-- Timeline -->
        <div class="bf-field">
          <label class="bf-field-label">Желаемые сроки начала работ</label>
          <input
            v-model="form.timeline"
            type="date"
            class="bf-input bf-input-date"
          />
        </div>

        <!-- Name + Phone -->
        <div class="bf-row">
          <div class="bf-field">
            <label class="bf-field-label"
              >Ваше имя <span class="bf-req">*</span></label
            >
            <input
              v-model="form.name"
              type="text"
              required
              placeholder="Иван"
              class="bf-input"
            />
          </div>
          <div class="bf-field">
            <label class="bf-field-label"
              >Телефон <span class="bf-req">*</span></label
            >
            <input
              v-model="form.phone"
              type="tel"
              required
              placeholder="+7 900 000-00-00"
              class="bf-input"
            />
          </div>
        </div>

        <!-- Почта -->
        <div class="bf-field">
          <label class="bf-field-label">Почта</label>
          <input
            v-model="form.email"
            type="email"
            placeholder="ivan@example.com"
            class="bf-input"
          />
        </div>

        <!-- Comment -->
        <div class="bf-field">
          <label class="bf-field-label">Комментарий или пожелания</label>
          <textarea
            v-model="form.comment"
            rows="3"
            placeholder="Расскажите подробнее о вашем проекте..."
            class="bf-input bf-textarea"
          ></textarea>
        </div>

        <!-- Submit -->
        <button
          type="submit"
          :disabled="!canSubmit || isSubmitting"
          class="bf-submit"
          :class="{ 'bf-submit--disabled': !canSubmit || isSubmitting }"
        >
          <template v-if="isSubmitting">
            <svg class="bf-spinner" width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2.5" stroke-dasharray="40" stroke-dashoffset="30" stroke-linecap="round"/>
            </svg>
            Отправляем...
          </template>
          <template v-else>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
            Отправить проект на расчёт
          </template>
        </button>

        <p class="bf-privacy">
          Нажимая кнопку, вы соглашаетесь с
          <NuxtLink to="/privacy" class="bf-privacy-link">обработкой персональных данных</NuxtLink>
        </p>
      </form>
    </div>

    <!-- Subscription modal -->
    <SubscriptionModal
      :visible="showSubModal"
      :checking="isRecheckingSubscription"
      :check-failed="subCheckFailed"
      @close="showSubModal = false"
      @check="handleSubCheck"
    />
  </div>
</template>

<script setup>
const { showPopup, hapticFeedback } = useTelegram();
const { submitApplication } = useApi();
const router = useRouter();

const projectTypes = [
  { value: "apartment", label: "Квартира / Апартаменты", icon: "mdi:home-city" },
  { value: "house",     label: "Загородный дом / Коттедж", icon: "mdi:home" },
  { value: "penthouse", label: "Пентхаус / Таунхаус", icon: "mdi:domain" },
  { value: "commercial",label: "Коммерческий объект / Офис", icon: "mdi:office-building" },
];

const smartHomeOptions = [
  { value: "yes",   label: "Да" },
  { value: "no",    label: "Нет" },
  { value: "maybe", label: "Не знаю" },
];

const form = reactive({
  projectType:      "",
  area:             "",
  hasDesignProject: null,   // 'yes' | 'in_progress' | 'no' | null
  smartHome:        "",
  address:          "",
  timeline:         "",
  name:             "",
  phone:            "",
  email:            "",
  comment:          "",
});

const uploadedFile = ref(null);
const fileInput    = ref(null);

// ── Submission state ───────────────────────────────────────────
const isSubmitting            = ref(false);
const showSubModal            = ref(false);
const isRecheckingSubscription = ref(false);
const subCheckFailed          = ref(false);
// ──────────────────────────────────────────────────────────────

const canSubmit = computed(() =>
  form.projectType && form.area && form.name && form.phone
);

// ── Draft persistence ──────────────────────────────────────────
const DRAFT_KEY = "voltamp_brief_draft";
const DB_NAME   = "voltamp_brief";
const DB_STORE  = "files";

const openDB = () =>
  new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = () => req.result.createObjectStore(DB_STORE);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });

const saveFileToDB = async (file) => {
  try {
    const db = await openDB();
    db.transaction(DB_STORE, "readwrite").objectStore(DB_STORE).put(file, "designFile");
  } catch { /* ignore */ }
};

const getFileFromDB = async () => {
  try {
    const db = await openDB();
    return await new Promise((res) => {
      const req = db.transaction(DB_STORE).objectStore(DB_STORE).get("designFile");
      req.onsuccess = () => res(req.result ?? null);
      req.onerror  = () => res(null);
    });
  } catch { return null; }
};

const clearFileFromDB = async () => {
  try {
    const db = await openDB();
    db.transaction(DB_STORE, "readwrite").objectStore(DB_STORE).delete("designFile");
  } catch { /* ignore */ }
};

watch(form, (val) => {
  try { localStorage.setItem(DRAFT_KEY, JSON.stringify(val)); } catch { /* ignore */ }
}, { deep: true });

watch(uploadedFile, (file) => {
  if (file) saveFileToDB(file);
  else clearFileFromDB();
});

onMounted(async () => {
  try {
    const saved = localStorage.getItem(DRAFT_KEY);
    if (saved) {
      const data = JSON.parse(saved);
      // Migrate old boolean values from previous version
      if (data.hasDesignProject === true)  data.hasDesignProject = "yes";
      if (data.hasDesignProject === false) data.hasDesignProject = "in_progress";
      Object.assign(form, data);
    }
  } catch { /* ignore */ }
  const savedFile = await getFileFromDB();
  if (savedFile) uploadedFile.value = savedFile;
});
// ──────────────────────────────────────────────────────────────

// ── Form data builder ─────────────────────────────────────────
const buildFormData = () => {
  const fd = new FormData();
  fd.append("object_type", form.projectType);
  fd.append("area_m2", String(form.area));
  fd.append("has_design_project", form.hasDesignProject || "no");
  fd.append("wants_smart_home",   form.smartHome        || "maybe");
  if (form.address)  fd.append("address",            form.address);
  if (form.timeline) fd.append("desired_start_date", form.timeline);
  fd.append("client_name",  form.name);
  fd.append("client_phone", form.phone);
  if (form.email)   fd.append("client_email", form.email);
  if (form.comment) fd.append("comment",      form.comment);
  if (uploadedFile.value && form.hasDesignProject === "yes") {
    fd.append("design_pdf", uploadedFile.value);
  }
  return fd;
};
// ──────────────────────────────────────────────────────────────

const onSuccess = () => {
  try { localStorage.removeItem(DRAFT_KEY); } catch { /* ignore */ }
  clearFileFromDB();
  showSubModal.value = false;
  hapticFeedback("success");
  showPopup(
    "Спасибо! Ваша заявка получена.\n\nМы свяжемся с вами в течение 24 часов.",
    "Заявка отправлена!"
  );
  setTimeout(() => router.push("/"), 1500);
};

const handleSubmit = async () => {
  if (!canSubmit.value || isSubmitting.value) return;
  isSubmitting.value = true;
  subCheckFailed.value = false;
  try {
    const result = await submitApplication(buildFormData());
    if (!result.subscribed_to_tg) {
      hapticFeedback("warning");
      showSubModal.value = true;
    } else {
      onSuccess();
    }
  } catch (err) {
    const isSubError =
      err.data?.detail?.includes('подписаться на Telegram-канал') ||
      err.status === 402;
    if (isSubError) {
      hapticFeedback("warning");
      showSubModal.value = true;
      isSubmitting.value = false;
      return;
    }
    let msg = "Произошла ошибка. Попробуйте ещё раз.";
    if      (err.status === 401) msg = "Ошибка авторизации. Перезапустите приложение.";
    else if (err.status === 413) msg = "Файл слишком большой (макс. 50 МБ).";
    else if (err.status === 422) msg = "Проверьте правильность заполнения формы.";
    hapticFeedback("error");
    showPopup(msg, "Ошибка");
  } finally {
    isSubmitting.value = false;
  }
};

// Re-check subscription from modal
const handleSubCheck = async () => {
  isRecheckingSubscription.value = true;
  subCheckFailed.value = false;
  try {
    const result = await submitApplication(buildFormData());
    if (!result.subscribed_to_tg) {
      subCheckFailed.value = true;
      hapticFeedback("error");
    } else {
      onSuccess();
    }
  } catch {
    subCheckFailed.value = true;
    hapticFeedback("error");
  } finally {
    isRecheckingSubscription.value = false;
  }
};

// ── File handlers ─────────────────────────────────────────────
const handleFileSelect = (e) => {
  const file = e.target.files[0];
  if (!file) return;
  if (file.type !== "application/pdf") {
    showPopup("Пожалуйста, выберите PDF файл", "Ошибка");
    return;
  }
  if (file.size > 50 * 1024 * 1024) {
    showPopup("Файл слишком большой. Максимум 50 МБ", "Ошибка");
    return;
  }
  uploadedFile.value = file;
  hapticFeedback("light");
};

const handleFileDrop = (e) => {
  const file = e.dataTransfer.files[0];
  if (file && file.type === "application/pdf") {
    uploadedFile.value = file;
    hapticFeedback("light");
  }
};
</script>

<style scoped>
.bf-page {
  min-height: 100svh;
  background: #060606;
  color: #fff;
  padding-bottom: 100px;
}

/* ── HEADER ── */
.bf-header {
  background: linear-gradient(160deg, #111 0%, #060606 60%, #0d0d0d 100%);
  padding: 20px 20px 40px;
}
.bf-back {
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.55);
  font-family: "DM Sans", sans-serif;
  font-size: 14px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-bottom: 32px;
  width: fit-content;
  transition: color 0.15s;
}
.bf-back:active {
  color: #fff;
}
.bf-label {
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
.bf-label::before {
  content: "";
  display: block;
  width: 16px;
  height: 1px;
  background: #f8b014;
}
.bf-title {
  font-family: "Oswald", sans-serif;
  font-size: 38px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 0.95;
  color: #fff;
  margin-bottom: 12px;
}
.bf-sub {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  font-family: "DM Sans", sans-serif;
  line-height: 1.5;
}

/* ── CONTENT ── */
.bf-content {
  padding: 20px 16px 0;
  margin-top: -20px;
}
.bf-form {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* ── FIELD ── */
.bf-field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.bf-field-label {
  font-family: "DM Sans", sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.85);
  display: flex;
  align-items: center;
  gap: 6px;
}
.bf-req {
  color: #f8b014;
}
.bf-field-hint {
  font-weight: 400;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.3);
}
.bf-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

/* ── INPUT ── */
.bf-input {
  width: 100%;
  padding: 13px 16px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1.5px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  font-family: "DM Sans", sans-serif;
  font-size: 14px;
  transition: border-color 0.2s;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  box-sizing: border-box;
}
.bf-input:focus {
  border-color: rgba(248, 176, 20, 0.55);
}
.bf-input::placeholder {
  color: rgba(255, 255, 255, 0.25);
}
.bf-textarea {
  resize: none;
  min-height: 88px;
}
.bf-input-date::-webkit-calendar-picker-indicator {
  filter: invert(1) opacity(0.45);
  cursor: pointer;
}

/* ── OPTION BUTTONS (project type) ── */
.bf-options-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.bf-option {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 13px 14px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1.5px solid rgba(255, 255, 255, 0.08);
  cursor: pointer;
  text-align: left;
  width: 100%;
  transition: all 0.15s;
}
.bf-option--active {
  border-color: #f8b014;
  background: rgba(248, 176, 20, 0.07);
}
.bf-option-icon {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.09);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.15s;
}
.bf-option--active .bf-option-icon {
  background: rgba(248, 176, 20, 0.12);
  border-color: rgba(248, 176, 20, 0.3);
}
.bf-opt-icon {
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.15s;
}
.bf-option--active .bf-opt-icon {
  color: #f8b014;
}
.bf-option-label {
  flex: 1;
  font-family: "DM Sans", sans-serif;
  font-size: 13.5px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.6);
  transition: color 0.15s;
}
.bf-option--active .bf-option-label {
  color: #fff;
}
.bf-option-check {
  margin-left: auto;
  flex-shrink: 0;
}

/* ── TOGGLE (has design project) ── */
.bf-toggle-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
}
.bf-toggle {
  padding: 12px 6px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1.5px solid rgba(255, 255, 255, 0.08);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "DM Sans", sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.55);
  white-space: nowrap;
  transition: all 0.15s;
}
.bf-toggle--active {
  border-color: #f8b014;
  background: rgba(248, 176, 20, 0.07);
  color: #f8b014;
}

/* ── SMART HOME BUTTONS ── */
.bf-smart-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
}
.bf-smart-btn {
  padding: 12px 8px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1.5px solid rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.5);
  font-family: "DM Sans", sans-serif;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
}
.bf-smart-btn--active {
  border-color: #f8b014;
  background: rgba(248, 176, 20, 0.07);
  color: #f8b014;
  font-weight: 600;
}

/* ── FILE UPLOAD ── */
.bf-upload {
  border: 1.5px dashed rgba(255, 255, 255, 0.15);
  border-radius: 14px;
  padding: 20px 16px;
  text-align: center;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.03);
  transition: border-color 0.2s, background 0.2s;
}
.bf-upload--filled {
  border-color: rgba(248, 176, 20, 0.3);
  border-style: solid;
  background: rgba(248, 176, 20, 0.04);
}
.bf-upload:active {
  border-color: rgba(248, 176, 20, 0.5);
}
.bf-upload-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}
.bf-upload-filled {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}
.bf-upload-text {
  font-family: "DM Sans", sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.55);
}
.bf-upload-filename {
  font-family: "DM Sans", sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: #f8b014;
  word-break: break-all;
}
.bf-upload-hint {
  font-size: 11.5px;
  color: rgba(255, 255, 255, 0.3);
  font-family: "DM Sans", sans-serif;
}
.bf-upload-remove {
  margin-top: 6px;
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.35);
  font-family: "DM Sans", sans-serif;
  font-size: 12px;
  cursor: pointer;
  text-decoration: underline;
}
.bf-hidden-input {
  display: none;
}

/* ── SUBMIT ── */
.bf-submit {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #f8b014;
  color: #000;
  font-family: "DM Sans", sans-serif;
  font-weight: 700;
  font-size: 15px;
  padding: 15px 24px;
  border-radius: 14px;
  border: none;
  cursor: pointer;
  width: 100%;
  box-shadow: 0 0 28px rgba(248, 176, 20, 0.3);
  transition: transform 0.15s, opacity 0.15s;
}
.bf-submit:active {
  transform: scale(0.97);
}
.bf-submit--disabled {
  opacity: 0.35;
  cursor: not-allowed;
  box-shadow: none;
}
.bf-privacy {
  font-size: 11.5px;
  color: rgba(255, 255, 255, 0.25);
  text-align: center;
  font-family: "DM Sans", sans-serif;
  line-height: 1.4;
}
.bf-privacy-link {
  color: rgba(248, 176, 20, 0.6);
  text-decoration: underline;
  text-decoration-color: rgba(248, 176, 20, 0.25);
  text-underline-offset: 2px;
  transition: color 0.15s;
}
.bf-privacy-link:active { color: #f8b014; }

/* ── SPINNER ── */
.bf-spinner {
  animation: bf-spin 0.85s linear infinite;
  flex-shrink: 0;
}
@keyframes bf-spin { to { transform: rotate(360deg); } }
</style>
