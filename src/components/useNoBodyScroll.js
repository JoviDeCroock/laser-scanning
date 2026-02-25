import { useLayoutEffect, useEffect } from 'preact/hooks'

const useIsomorphicEffect =
  typeof window === 'undefined' ? useEffect : useLayoutEffect

const useNoBodyScroll = isOpen => {
  useIsomorphicEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])
}

export default useNoBodyScroll
