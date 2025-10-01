import React from 'react'

interface DefaultAvatarProps {
  size?: number
  className?: string
}

const DefaultAvatar: React.FC<DefaultAvatarProps> = ({ size = 40, className }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="20" cy="20" r="20" fill="#1A1A1A" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1"/>
      <circle cx="20" cy="15" r="6" fill="rgba(255, 255, 255, 0.6)"/>
      <path 
        d="M8 32C8 26.4772 12.4772 22 18 22H22C27.5228 22 32 26.4772 32 32V34C32 35.1046 31.1046 36 30 36H10C8.89543 36 8 35.1046 8 34V32Z" 
        fill="rgba(255, 255, 255, 0.6)"
      />
    </svg>
  )
}

export default DefaultAvatar
