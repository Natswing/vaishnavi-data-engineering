
import { useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme
    }

    return 'dark'
  })

  useEffect(() => {
    document.documentElement.classList.toggle(
      'dark',
      theme === 'dark'
    )

    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(current =>
      current === 'dark' ? 'light' : 'dark'
    )
  }

  return { theme, toggleTheme }
}
