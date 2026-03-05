<template>
  <Transition name="al-out">
    <div v-if="visible" class="al-root" aria-hidden="true">
      <div class="al-noise" />
      <div class="al-body">
        <img src="/images/logo.svg" alt="VOLTAMP" class="al-logo" />
        <div class="al-track">
          <div class="al-fill" />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const visible = ref(true)

onMounted(() => {
  setTimeout(() => { visible.value = false }, 1000)
})
</script>

<style scoped>
.al-root {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: #060606;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.al-noise {
  position: absolute;
  inset: 0;
  opacity: 0.025;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size: 200px;
  pointer-events: none;
}

.al-body {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
  animation: al-rise 0.45s cubic-bezier(0.2, 0, 0, 1) both;
}

@keyframes al-rise {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}

.al-logo {
  height: 28px;
}

.al-track {
  width: 64px;
  height: 1.5px;
  background: rgba(255, 255, 255, 0.07);
  border-radius: 2px;
  overflow: hidden;
}

.al-fill {
  height: 100%;
  width: 0;
  background: #f8b014;
  border-radius: 2px;
  animation: al-sweep 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards;
}

@keyframes al-sweep {
  to { width: 100%; }
}

/* Exit */
.al-out-leave-active {
  transition: opacity 0.35s ease;
}
.al-out-leave-to {
  opacity: 0;
}
</style>
