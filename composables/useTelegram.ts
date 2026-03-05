import { markRaw } from 'vue'

export const useTelegram = () => {
  const tg = ref<any>(null)
  const user = ref<any>(null)
  
  onMounted(() => {
    if (typeof window !== 'undefined' && (window as any).Telegram?.WebApp) {
      tg.value = markRaw((window as any).Telegram.WebApp)
      user.value = tg.value.initDataUnsafe?.user
      
      // Expand to full height
      tg.value.expand()
      
      // Enable closing confirmation
      tg.value.enableClosingConfirmation()
      
      // Set header color to match app dark theme
      tg.value.setHeaderColor('#060606')
      tg.value.setBackgroundColor('#060606')
    }
  })
  
  const openTelegramLink = (url: string) => {
    if (tg.value) {
      tg.value.openTelegramLink(url)
    } else {
      window.open(url, '_blank')
    }
  }
  
  const openLink = (url: string) => {
    if (tg.value) {
      // In Telegram WebApp all external links (including tel:/mailto:) go through JS API
      tg.value.openLink(url)
    } else if (url.startsWith('tel:') || url.startsWith('mailto:')) {
      window.location.href = url
    } else {
      window.open(url, '_blank')
    }
  }
  
  const showPopup = (message: string, title = 'Уведомление') => {
    if (tg.value) {
      tg.value.showPopup({
        title,
        message,
        buttons: [{ type: 'ok' }]
      })
    } else {
      alert(message)
    }
  }
  
  const showAlert = (message: string) => {
    if (tg.value) {
      tg.value.showAlert(message)
    } else {
      alert(message)
    }
  }
  
  const hapticFeedback = (type: 'light' | 'medium' | 'heavy' | 'error' | 'success' | 'warning' = 'medium') => {
    if (tg.value?.HapticFeedback) {
      if (type === 'light' || type === 'medium' || type === 'heavy') {
        tg.value.HapticFeedback.impactOccurred(type)
      } else {
        tg.value.HapticFeedback.notificationOccurred(type)
      }
    }
  }
  
  const setMainButton = (text: string, onClick: () => void, options = {}) => {
    if (tg.value) {
      tg.value.MainButton.setText(text)
      tg.value.MainButton.onClick(onClick)
      tg.value.MainButton.show()
      Object.assign(tg.value.MainButton, options)
    }
  }
  
  const hideMainButton = () => {
    if (tg.value) {
      tg.value.MainButton.hide()
    }
  }
  
  return {
    tg,
    user,
    openTelegramLink,
    openLink,
    showPopup,
    showAlert,
    hapticFeedback,
    setMainButton,
    hideMainButton
  }
}
