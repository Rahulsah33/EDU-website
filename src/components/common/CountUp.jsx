import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function CountUp({
  end = 100,
  duration = 2.2,
  suffix = "",
  prefix = "",
  decimals = 0,
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, end, {
      duration,
      ease: [0.16, 1, 0.3, 1], // Smooth cubic-bezier easeOutExpo
      onUpdate: (latest) => {
        setDisplayValue(decimals > 0 ? latest.toFixed(decimals) : Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, end, duration, decimals]);

  return (
    <span ref={ref} className="count-up-number">
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
