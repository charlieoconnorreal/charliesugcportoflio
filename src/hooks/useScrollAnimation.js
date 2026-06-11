import { useEffect, useRef, useState } from 'react'

export function useScrollAnimation(threshold = 0) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const showIfInView = () => {
      const rect = element.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setIsVisible(true)
        return true
      }
      return false
    }

    if (showIfInView()) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      { threshold, rootMargin: '0px 0px 10% 0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}
