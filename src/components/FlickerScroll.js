import React, { useEffect, useRef, useState } from 'react';
import srraf from 'srraf';

const FlickerScroll = ({
  activeStyles,
  children,
  onFlickerOn,
  onFlickerOff,
  stayActive,
  ...props
}) => {
  const ref = useRef();
  const [active, setActive] = useState(false);

  const defaultActive = { color: 'blue' };
  const isActive = active || stayActive;
  const styles = activeStyles || defaultActive;

  useEffect(() => {
    if (!ref.current) {
      return null;
    }

    const scroller = srraf(({ py, y }) => {
      if (y === py) return;

      const rect = ref.current.getBoundingClientRect();
      const top = (rect.top - window.innerHeight) * -1;
      const heightOffset = ref.current.clientHeight / 2;

      if (
        top > window.innerHeight / 2 - heightOffset &&
        top < window.innerHeight / 2 + heightOffset
      ) {
        setActive(true);
        onFlickerOn && onFlickerOn();
      } else {
        setActive(false);
        onFlickerOff && onFlickerOff();
      }
    });

    scroller.update();
    return () => scroller.destroy();
  }, [ref, active, onFlickerOn, onFlickerOff]);

  return (
    <div ref={ref} style={isActive ? styles : null} {...props}>
      {children}
    </div>
  );
};

export default FlickerScroll;
