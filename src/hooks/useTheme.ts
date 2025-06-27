import React, { useEffect, useState } from "react"

export const useTheme = (): [boolean, React.Dispatch<React.SetStateAction<boolean>>] => {
  const [isdark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return false

    return !(
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && 
        window.matchMedia('(prefers-color-scheme: dark)').matches
      )
    )
  })

  useEffect(() => {
    if (!isdark) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }
  }, [isdark])


  return [isdark, setIsDark]
}
