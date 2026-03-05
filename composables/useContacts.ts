/**
 * Централизованные контакты — меняй здесь, обновится везде.
 */
export const useContacts = () => ({
  // Телефон
  phone:        '+79001234567',        // для href="tel:..."
  phoneDisplay: '+7 900 123-45-67',    // для отображения

  // Email
  email: 'info@voltamp.ru',

  // Telegram
  tgChannel: 'https://t.me/your_channel',  // ссылка на канал
  tgHandle:  '@your_channel',               // отображаемый handle
  tgBot:     'https://t.me/your_bot',       // ссылка на бота (для DesktopPage)
})
