<template>
  <div>
    <!-- Burger button (fixed top-right) -->
    <button
      @click="isMenuOpen = true"
      class="burger-btn"
      :class="{ 'burger-btn--visible': scrolled }"
      aria-label="Меню"
    >
      <span class="burger-icon">
        <span class="burger-line burger-line--top" />
        <span class="burger-line burger-line--mid" />
        <span class="burger-line burger-line--bot" />
      </span>
    </button>

    <!-- Overlay + Drawer -->
    <Teleport to="body">
      <Transition name="fade">
        <div
          v-if="isMenuOpen"
          class="menu-overlay"
          @click="isMenuOpen = false"
        />
      </Transition>

      <Transition name="slide">
        <div v-if="isMenuOpen" class="menu-drawer">
          <!-- Gold top accent -->
          <div class="menu-accent-line" />

          <!-- Header -->
          <div class="menu-header">
            <img src="/images/logo.svg" alt="VOLTAMP" class="menu-logo" />
            <button @click="isMenuOpen = false" class="menu-close" aria-label="Закрыть">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
          </div>

          <!-- Nav -->
          <nav class="menu-nav">
            <button
              v-for="item in navItems"
              :key="item.label"
              @click="handleNav(item)"
              class="menu-item"
              :class="{ 'menu-item--active': isActive(item) }"
            >
              <span class="menu-item-icon-wrap" :class="{ 'menu-item-icon-wrap--active': isActive(item) }">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path :d="item.iconPath" />
                </svg>
              </span>
              <span class="menu-item-label">{{ item.label }}</span>
              <svg class="menu-item-arrow" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.59 16.58L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
              </svg>
            </button>
          </nav>

          <div class="menu-sep" />

          <!-- Contacts -->
          <div class="menu-contacts">
            <a :href="'tel:' + contacts.phone" class="menu-contact">
              <span class="menu-contact-icon menu-contact-icon--gold">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="#f8b014">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </span>
              {{ contacts.phoneDisplay }}
            </a>
            <a :href="contacts.tgChannel" target="_blank" class="menu-contact">
              <span class="menu-contact-icon menu-contact-icon--blue">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="#29aae1">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.247l-2.02 9.52c-.149.658-.538.818-1.09.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L6.27 14.46l-2.95-.924c-.64-.203-.654-.64.136-.948l11.527-4.445c.537-.194 1.006.131.579.104z"/>
                </svg>
              </span>
              {{ contacts.tgHandle }}
            </a>
          </div>

          <!-- CTA -->
          <div class="menu-cta-wrap">
            <button @click="handleBrief" class="menu-cta">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
              Отправить проект
            </button>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
const { isMenuOpen } = useMenuState()
const router = useRouter()
const route = useRoute()

const contacts = useContacts()
const scrolled = ref(false)
const activeSection = ref('')

const navItems = [
  {
    label: 'Главная',
    iconPath: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z',
    type: 'route',
    to: '/',
  },
  {
    label: 'Услуги',
    iconPath: 'M7 2v11h3v9l7-12h-4l4-8z',
    type: 'anchor',
    anchor: 'services',
  },
  {
    label: 'Портфолио',
    iconPath: 'M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z',
    type: 'anchor',
    anchor: 'portfolio',
  },
  {
    label: 'Цены',
    iconPath: 'M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z',
    type: 'anchor',
    anchor: 'pricing',
  },
  {
    label: 'О нас',
    iconPath: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z',
    type: 'anchor',
    anchor: 'about',
  },
]

const isActive = (item) => {
  if (route.path !== '/') return false
  if (item.type === 'route') return !activeSection.value
  return activeSection.value === item.anchor
}

// Show burger after scrolling past initial viewport
const handleScroll = () => {
  scrolled.value = window.scrollY > 80
}

let observer = null
const anchorIds = ['services', 'portfolio', 'pricing', 'about']

const setupObserver = () => {
  if (observer) observer.disconnect()
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) activeSection.value = entry.target.id
      })
    },
    { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
  )
  anchorIds.forEach((id) => {
    const el = document.getElementById(id)
    if (el) observer.observe(el)
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  if (route.path === '/') setupObserver()
})

watch(() => route.path, (path) => {
  isMenuOpen.value = false
  activeSection.value = ''
  if (path === '/') nextTick(setupObserver)
  else if (observer) observer.disconnect()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (observer) observer.disconnect()
})

const scrollToAnchor = (anchor) => {
  nextTick(() => {
    const el = document.getElementById(anchor)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 20
      window.scrollTo({ top, behavior: 'smooth' })
    }
  })
}

const handleNav = async (item) => {
  isMenuOpen.value = false
  if (item.type === 'anchor') {
    if (route.path === '/') {
      scrollToAnchor(item.anchor)
    } else {
      await router.push('/')
      setTimeout(() => scrollToAnchor(item.anchor), 350)
    }
  } else {
    // type === 'route' (Главная)
    if (route.path === item.to) {
      // Already on this page — scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' })
      activeSection.value = ''
    } else {
      router.push(item.to)
    }
  }
}

const handleBrief = () => {
  isMenuOpen.value = false
  router.push('/brief')
}
</script>

<style scoped>
/* ── BURGER BUTTON ── */
.burger-btn {
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 60;
  width: 42px;
  height: 42px;
  border-radius: 13px;
  background: rgba(10, 10, 10, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
}
.burger-btn:active {
  transform: scale(0.9);
  background: rgba(248, 176, 20, 0.12);
  border-color: rgba(248, 176, 20, 0.3);
}

.burger-icon {
  display: flex;
  flex-direction: column;
  gap: 4.5px;
  width: 18px;
}
.burger-line {
  display: block;
  height: 1.5px;
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.85);
  transition: width 0.2s ease;
}
.burger-line--top { width: 18px; }
.burger-line--mid { width: 12px; }
.burger-line--bot { width: 18px; }
.burger-btn:hover .burger-line--mid { width: 18px; }

/* ── OVERLAY ── */
.menu-overlay {
  position: fixed;
  inset: 0;
  z-index: 70;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}

/* ── DRAWER ── */
.menu-drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 80;
  width: 272px;
  background: #090909;
  border-left: 1px solid rgba(255, 255, 255, 0.07);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.menu-accent-line {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #f8b014 30%, #f8b014 70%, transparent);
  opacity: 0.7;
  pointer-events: none;
}

/* ── DRAWER HEADER ── */
.menu-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 18px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  flex-shrink: 0;
}
.menu-logo {
  height: 22px;
}
.menu-close {
  width: 32px;
  height: 32px;
  border-radius: 9px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.5);
  transition: background 0.15s, color 0.15s;
  flex-shrink: 0;
}
.menu-close:active { background: rgba(255, 255, 255, 0.12); color: #fff; }

/* ── NAV ── */
.menu-nav {
  flex: 1;
  padding: 10px 10px 6px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow-y: auto;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 12px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  background: transparent;
  text-align: left;
  transition: background 0.15s, color 0.15s;
  width: 100%;
}
.menu-item:active { background: rgba(255, 255, 255, 0.05); }
.menu-item--active {
  background: rgba(248, 176, 20, 0.1);
  border: 1px solid rgba(248, 176, 20, 0.2);
  color: #f8b014;
}

.menu-item-icon-wrap {
  width: 32px;
  height: 32px;
  border-radius: 9px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.07);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: rgba(255, 255, 255, 0.3);
  transition: background 0.15s, border-color 0.15s, color 0.15s;
}
.menu-item-icon-wrap--active {
  background: rgba(248, 176, 20, 0.12);
  border-color: rgba(248, 176, 20, 0.25);
  color: #f8b014;
}
.menu-item--active .menu-item-icon-wrap {
  background: rgba(248, 176, 20, 0.12);
  border-color: rgba(248, 176, 20, 0.25);
  color: #f8b014;
}

.menu-item-label { flex: 1; }

.menu-item-arrow {
  margin-left: auto;
  color: rgba(255, 255, 255, 0.15);
  flex-shrink: 0;
}
.menu-item--active .menu-item-arrow { color: rgba(248, 176, 20, 0.4); }

/* ── SEPARATOR ── */
.menu-sep {
  height: 1px;
  background: rgba(255, 255, 255, 0.06);
  margin: 0 12px;
  flex-shrink: 0;
}

/* ── CONTACTS ── */
.menu-contacts {
  padding: 10px 10px 6px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex-shrink: 0;
}
.menu-contact {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 10px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.4);
  font-size: 13px;
  font-family: 'DM Sans', sans-serif;
  transition: background 0.15s, color 0.15s;
}
.menu-contact:active { background: rgba(255, 255, 255, 0.05); color: rgba(255, 255, 255, 0.8); }

.menu-contact-icon {
  width: 28px;
  height: 28px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.menu-contact-icon--gold {
  background: rgba(248, 176, 20, 0.1);
  border: 1px solid rgba(248, 176, 20, 0.18);
}
.menu-contact-icon--blue {
  background: rgba(41, 170, 225, 0.1);
  border: 1px solid rgba(41, 170, 225, 0.18);
}

/* ── CTA ── */
.menu-cta-wrap {
  padding: 10px 10px 32px;
  flex-shrink: 0;
}
.menu-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  background: #f8b014;
  color: #000;
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 14px;
  padding: 14px 20px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: transform 0.15s;
  box-shadow: 0 0 24px rgba(248, 176, 20, 0.3);
}
.menu-cta:active { transform: scale(0.97); }

/* ── TRANSITIONS ── */
.fade-enter-active,
.fade-leave-active { transition: opacity 0.25s ease; }
.fade-enter-from,
.fade-leave-to { opacity: 0; }

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-enter-from,
.slide-leave-to { transform: translateX(100%); }
</style>
