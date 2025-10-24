import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface PageTransitionProps {
  children: React.ReactNode
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if (!containerRef.current) return
    
    const ctx = gsap.context(() => {
      // Animação de entrada da página
      gsap.fromTo(containerRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.98
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.2
        }
      )
      
      // Animar elementos filhos com stagger
      const elements = containerRef.current?.querySelectorAll('h1, h2, p, .card, .btn, .animated-element')
      if (elements && elements.length > 0) {
        gsap.fromTo(elements,
          {
            opacity: 0,
            y: 30,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.05,
            ease: "power2.out",
            delay: 0.3
          }
        )
      }
      
    }, containerRef)
    
    return () => ctx.revert()
  }, [])
  
  return (
    <div ref={containerRef}>
      {children}
    </div>
  )
}

export default PageTransition
