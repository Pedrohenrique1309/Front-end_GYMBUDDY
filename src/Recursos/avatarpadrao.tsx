import React, { useEffect, useState } from 'react'

interface AvatarPadraoProp {
  size?: number
  className?: string
}

const AvatarPadrao: React.FC<AvatarPadraoProp> = ({ size = 40, className }) => {
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    // Verificar tema inicial
    const updateTheme = () => {
      const theme = document.documentElement.getAttribute('data-theme')
      setIsDarkMode(theme !== 'light')
    }

    // Configurar observador de mudanças no tema
    updateTheme()
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
          updateTheme()
        }
      })
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    })

    return () => observer.disconnect()
  }, [])

  // Cores para modo escuro
  const darkModeColors = {
    background: '#1A1A1A',
    stroke: 'rgba(255, 255, 255, 0.2)',
    person: 'rgba(255, 255, 255, 0.6)'
  }

  // Cores para modo claro
  const lightModeColors = {
    background: '#F8F9FA',
    stroke: 'rgba(148, 163, 184, 0.4)', // Borda cinza sutil
    person: 'rgba(100, 116, 139, 0.8)'  // Bonequinho em cinza
  }

  const colors = isDarkMode ? darkModeColors : lightModeColors

  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ transition: 'all 0.3s ease' }}
    >
      <circle 
        cx="20" 
        cy="20" 
        r="20" 
        fill={colors.background}
        stroke={colors.stroke}
        strokeWidth="1"
      />
      <circle 
        cx="20" 
        cy="15" 
        r="6" 
        fill={colors.person}
      />
      <path 
        d="M8 32C8 26.4772 12.4772 22 18 22H22C27.5228 22 32 26.4772 32 32V34C32 35.1046 31.1046 36 30 36H10C8.89543 36 8 35.1046 8 34V32Z" 
        fill={colors.person}
      />
    </svg>
  )
}

export default AvatarPadrao
