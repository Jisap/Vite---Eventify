import { useCountUp } from "../hooks/useCountup";


export const AnimatedNumber = ({ end, duration }) => {
  const count = useCountUp(end, duration);
  return <>{count}</>;
};