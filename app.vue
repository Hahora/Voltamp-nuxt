<template>
  <div id="app" style="background:#060606; min-height:100svh;">

    <!-- Splash loader -->
    <AppLoader />

    <!-- Toast notifications -->
    <AppToast />

    <!-- Desktop / non-Telegram blocker -->
    <DesktopPage v-if="showDesktopPage" />

    <!-- Normal mini app -->
    <template v-else>
      <NuxtPage />
      <BurgerMenu />
      <ContactWidget />
      <AppFooter />
    </template>

  </div>
</template>

<script setup>
const showDesktopPage = ref(false)

onMounted(() => {
  const tg = window.Telegram?.WebApp
  // initData is non-empty string only when launched from Telegram
  if (!tg?.initData) {
    showDesktopPage.value = true
  }
})
</script>
