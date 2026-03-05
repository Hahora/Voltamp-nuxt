<template>
  <div class="pb-24">
    <!-- Hero Section -->
    <HeroSection />

    <!-- Telegram Banner -->
    <TelegramBanner />

    <!-- Services Preview -->
    <div id="services">
      <ServicesPreview />
    </div>

    <!-- Portfolio Preview -->
    <div id="portfolio">
      <PortfolioPreview />
    </div>

    <!-- Pricing Section -->
    <div id="pricing">
      <PricingSection />
    </div>

    <!-- CTA Section -->
    <CTASection />

    <!-- About Section -->
    <div id="about">
      <AboutSection />
    </div>
  </div>
</template>

<script setup>
const { tg } = useTelegram()

useHead({
  title: 'Электромонтаж Premium | Умные Дома под ключ',
  meta: [
    { name: 'description', content: 'Профессиональный электромонтаж и системы умного дома. Работаем только с дизайн-проектами.' }
  ]
})
</script>
