import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Registrar plugins
gsap.registerPlugin(ScrollTrigger)

export const useGSAP = (callback: (gsapInstance: any) => void, deps: any[] = []) => {
  const ctx = useRef<gsap.Context>()
  
  useEffect(() => {
    ctx.current = gsap.context(() => {
      callback(gsap)
    })
    
    return () => {
      ctx.current?.revert()
    }
  }, deps)
  
  return ctx
}

export const useScrollTrigger = (
  element: React.RefObject<HTMLElement>,
  animation: gsap.TweenVars,
  scrollTriggerConfig?: ScrollTrigger.Vars
) => {
  useEffect(() => {
    if (!element.current) return
    
    const tween = gsap.to(element.current, {
      ...animation,
      scrollTrigger: {
        trigger: element.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play pause resume reverse',
        ...scrollTriggerConfig
      }
    })
    
    return () => {
      tween.kill()
      ScrollTrigger.getAll().forEach(st => st.kill())
    }
  }, [element, animation, scrollTriggerConfig])
}

export const useParallax = (
  element: React.RefObject<HTMLElement>,
  speed: number = 0.5,
  config?: ScrollTrigger.Vars
) => {
  useEffect(() => {
    if (!element.current) return
    
    const tween = gsap.to(element.current, {
      yPercent: -100 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: element.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        ...config
      }
    })
    
    return () => {
      tween.kill()
      ScrollTrigger.getAll().forEach(st => st.kill())
    }
  }, [element, speed, config])
}

export default useGSAP
