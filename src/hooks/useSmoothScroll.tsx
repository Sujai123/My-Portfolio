import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

const lenis = new Lenis()

const useSmoothScroll = () => {
  useEffect(() => {
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
  }, [])
}

export default useSmoothScroll;