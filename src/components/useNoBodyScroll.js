import React from 'react'

const useNoBodyScroll = () => {
  const oldOverflow = React.useRef();
  React.useLayoutEffect(() => {
    oldOverflow.current = document.body.overflow;
    document.body.overflow = 'none';
    return () => {
      document.body.overflow = oldOverflow.current;
    }
  }, []);
}

export default useNoBodyScroll;
