import React from 'react'

const useNoBodyScroll = () => {
  const oldOverflow = React.useRef();
  React.useLayoutEffect(() => {
    oldOverflow.current = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = oldOverflow.current;
    }
  }, []);
}

export default useNoBodyScroll;
