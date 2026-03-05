<template>
  <nav class="snav">
    <div class="snav-inner">
      <a
        v-for="item in navItems"
        :key="item.id"
        :href="`#${item.id}`"
        class="snav-item"
        :class="{ 'snav-item--active': active === item.id }"
        @click.prevent="scrollTo(item.id)"
      >
        <Icon :name="item.icon" size="14" />
        {{ item.label }}
      </a>
    </div>
  </nav>
</template>

<script setup>
const active = ref('')

const navItems = [
  { id: 'services',  label: 'Услуги',    icon: 'mdi:lightning-bolt' },
  { id: 'portfolio', label: 'Портфолио', icon: 'mdi:image-multiple' },
  { id: 'pricing',   label: 'Цены',      icon: 'mdi:tag' },
  { id: 'about',     label: 'О нас',     icon: 'mdi:account-group' },
]

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 56
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) active.value = entry.target.id
      })
    },
    { rootMargin: '-50% 0px -40% 0px', threshold: 0 }
  )
  navItems.forEach(({ id }) => {
    const el = document.getElementById(id)
    if (el) observer.observe(el)
  })
  onUnmounted(() => observer.disconnect())
})
</script>

<style scoped>
.snav {
  position: sticky;
  top: 0;
  z-index: 30;
  background: rgba(6, 6, 6, 0.92);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(12px);
}

.snav-inner {
  display: flex;
  overflow-x: auto;
  padding: 0 12px;
  gap: 2px;
  scrollbar-width: none;
}
.snav-inner::-webkit-scrollbar { display: none; }

.snav-item {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px 12px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 500;
  font-family: 'DM Sans', sans-serif;
  color: rgba(255, 255, 255, 0.42);
  white-space: nowrap;
  flex-shrink: 0;
  text-decoration: none;
  transition: color 0.15s, background 0.15s;
  margin: 6px 0;
}
.snav-item:active {
  color: rgba(255, 255, 255, 0.85);
}

.snav-item--active {
  background: rgba(248, 176, 20, 0.12);
  color: #f8b014;
  border: 1px solid rgba(248, 176, 20, 0.2);
}
</style>
