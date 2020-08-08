import React from 'react'

const useNoBodyScroll = (isOpen) => {
  React.useLayoutEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);
}

export default useNoBodyScroll;
