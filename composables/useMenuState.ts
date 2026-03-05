export const useMenuState = () => {
  const isMenuOpen = useState('burgerMenuOpen', () => false)
  return { isMenuOpen }
}
