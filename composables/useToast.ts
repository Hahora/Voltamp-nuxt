let toastTimer: ReturnType<typeof setTimeout> | null = null

export const useToast = () => {
  const msg = useState('toast-msg', () => '')

  const show = (text: string, duration = 2200) => {
    msg.value = text
    if (toastTimer) clearTimeout(toastTimer)
    toastTimer = setTimeout(() => { msg.value = '' }, duration)
  }

  return { msg, show }
}
