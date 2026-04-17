import { useEffect, useRef, useState } from "react";

export const useCountUp = (end, duration = 2, start = true) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (!start) return;

    const startTime = performance.now();
    const step = (currentTime) => {
      const elapsed = (currentTime - startTime) / (duration * 1000);
      if (elapsed < 1) {
        setCount(Math.floor(elapsed * end));
        ref.current = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    ref.current = requestAnimationFrame(step);
    return () => {
      if (ref.current) cancelAnimationFrame(ref.current);
    };
  }, [end, duration, start]);

  return count;
};