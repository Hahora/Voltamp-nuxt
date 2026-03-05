/**
 * API-клиент для бэкенда VOLTAMP.
 * Базовый URL берётся из переменной окружения NUXT_PUBLIC_API_BASE (.env).
 */
export const useApi = () => {
  const config = useRuntimeConfig()
  const baseUrl = (config.public.apiBase as string).replace(/\/$/, '')

  const getInitData = () =>
    (typeof window !== 'undefined' && window.Telegram?.WebApp?.initData) || ''

  /**
   * POST /applications/
   * Отправить заявку. Возвращает объект с полем subscribed_to_tg.
   */
  const submitApplication = async (formData: FormData) => {
    const res = await fetch(`${baseUrl}/applications/`, {
      method: 'POST',
      headers: { 'X-Telegram-Init-Data': getInitData() },
      body: formData,
    })

    if (!res.ok) {
      let data: any = {}
      try { data = await res.json() } catch { /* ignore */ }
      const err: any = new Error(res.statusText)
      err.status = res.status
      err.data = data
      throw err
    }

    return res.json()
  }

  return { submitApplication }
}
