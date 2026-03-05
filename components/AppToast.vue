<template>
  <Teleport to="body">
    <Transition name="app-toast">
      <div v-if="msg" class="app-toast">{{ msg }}</div>
    </Transition>
  </Teleport>
</template>

<script setup>
const { msg } = useToast()
</script>

<style scoped>
.app-toast {
  position: fixed;
  bottom: 90px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(22, 163, 74, 0.97);
  color: #fff;
  font-family: 'DM Sans', sans-serif;
  font-size: 13.5px;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 24px;
  white-space: nowrap;
  z-index: 9999;
  pointer-events: none;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);
}

.app-toast-enter-active,
.app-toast-leave-active {
  transition: opacity 0.2s ease, transform 0.22s ease;
}
.app-toast-enter-from,
.app-toast-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(8px);
}
</style>
