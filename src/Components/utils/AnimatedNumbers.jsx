import { useRef } from "react";
import { useInView } from "framer-motion";
import { useCountUp } from "../hooks/useCountup";


export const AnimatedNumber = ({ end, duration }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useCountUp(end, duration, isInView);

  return <span ref={ref}>{count}</span>;
};